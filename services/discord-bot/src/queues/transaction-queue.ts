import { Queue, Worker, QueueEvents } from 'bullmq';
import { createQueueConnection } from './connection.js';
import type { SleeperTransaction } from '@fantasy/types';

export interface TransactionJobData {
  leagueId: string;
  transactions: SleeperTransaction[];
}

const connection = createQueueConnection();

export const transactionQueue = new Queue<TransactionJobData>('transactions', {
  connection,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 1000,
    },
    removeOnComplete: { count: 1000 },
    removeOnFail: { count: 5000 },
  },
});

export function createTransactionWorker(
  processTransaction: (data: TransactionJobData) => Promise<void>
) {
  return new Worker<TransactionJobData>(
    'transactions',
    async job => {
      console.log(
        `Processing ${job.data.transactions.length} transactions for ${job.data.leagueId}`
      );
      await processTransaction(job.data);
    },
    {
      connection: createQueueConnection(),
      concurrency: 5,
    }
  );
}

export const transactionQueueEvents = new QueueEvents('transactions', {
  connection: createQueueConnection(),
});

transactionQueueEvents.on('completed', ({ jobId }) => {
  console.log(`Job ${jobId} completed`);
});

transactionQueueEvents.on('failed', ({ jobId, failedReason }) => {
  console.error(`Job ${jobId} failed: ${failedReason}`);
});
