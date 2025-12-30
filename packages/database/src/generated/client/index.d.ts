/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model PlatformAccount
 *
 */
export type PlatformAccount = $Result.DefaultSelection<Prisma.$PlatformAccountPayload>;
/**
 * Model League
 *
 */
export type League = $Result.DefaultSelection<Prisma.$LeaguePayload>;
/**
 * Model LeagueMember
 *
 */
export type LeagueMember = $Result.DefaultSelection<Prisma.$LeagueMemberPayload>;
/**
 * Model Player
 *
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>;
/**
 * Model Roster
 *
 */
export type Roster = $Result.DefaultSelection<Prisma.$RosterPayload>;
/**
 * Model RosterPlayer
 *
 */
export type RosterPlayer = $Result.DefaultSelection<Prisma.$RosterPlayerPayload>;
/**
 * Model Matchup
 *
 */
export type Matchup = $Result.DefaultSelection<Prisma.$MatchupPayload>;
/**
 * Model Transaction
 *
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>;
/**
 * Model TransactionAdd
 *
 */
export type TransactionAdd = $Result.DefaultSelection<Prisma.$TransactionAddPayload>;
/**
 * Model TransactionDrop
 *
 */
export type TransactionDrop = $Result.DefaultSelection<Prisma.$TransactionDropPayload>;
/**
 * Model GuildConfig
 *
 */
export type GuildConfig = $Result.DefaultSelection<Prisma.$GuildConfigPayload>;
/**
 * Model UserNotificationPreference
 *
 */
export type UserNotificationPreference =
  $Result.DefaultSelection<Prisma.$UserNotificationPreferencePayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Platform: {
    SLEEPER: 'SLEEPER';
    YAHOO: 'YAHOO';
    ESPN: 'ESPN';
  };

  export type Platform = (typeof Platform)[keyof typeof Platform];

  export const LeagueType: {
    REDRAFT: 'REDRAFT';
    KEEPER: 'KEEPER';
    DYNASTY: 'DYNASTY';
  };

  export type LeagueType = (typeof LeagueType)[keyof typeof LeagueType];

  export const ScoringFormat: {
    STANDARD: 'STANDARD';
    HALF_PPR: 'HALF_PPR';
    PPR: 'PPR';
    CUSTOM: 'CUSTOM';
  };

  export type ScoringFormat = (typeof ScoringFormat)[keyof typeof ScoringFormat];

  export const Position: {
    QB: 'QB';
    RB: 'RB';
    WR: 'WR';
    TE: 'TE';
    K: 'K';
    DEF: 'DEF';
    DL: 'DL';
    LB: 'LB';
    DB: 'DB';
    IDP: 'IDP';
  };

  export type Position = (typeof Position)[keyof typeof Position];

  export const PlayerStatus: {
    ACTIVE: 'ACTIVE';
    INACTIVE: 'INACTIVE';
    INJURED_RESERVE: 'INJURED_RESERVE';
    PRACTICE_SQUAD: 'PRACTICE_SQUAD';
    FREE_AGENT: 'FREE_AGENT';
    RETIRED: 'RETIRED';
  };

  export type PlayerStatus = (typeof PlayerStatus)[keyof typeof PlayerStatus];

  export const RosterSlot: {
    QB: 'QB';
    RB: 'RB';
    WR: 'WR';
    TE: 'TE';
    FLEX: 'FLEX';
    SUPER_FLEX: 'SUPER_FLEX';
    K: 'K';
    DEF: 'DEF';
    DL: 'DL';
    LB: 'LB';
    DB: 'DB';
    IDP: 'IDP';
    BN: 'BN';
    IR: 'IR';
    TAXI: 'TAXI';
  };

  export type RosterSlot = (typeof RosterSlot)[keyof typeof RosterSlot];

  export const MatchupType: {
    REGULAR: 'REGULAR';
    PLAYOFF: 'PLAYOFF';
    CONSOLATION: 'CONSOLATION';
    CHAMPIONSHIP: 'CHAMPIONSHIP';
    TOILET_BOWL: 'TOILET_BOWL';
  };

  export type MatchupType = (typeof MatchupType)[keyof typeof MatchupType];

  export const TransactionType: {
    TRADE: 'TRADE';
    WAIVER: 'WAIVER';
    FREE_AGENT: 'FREE_AGENT';
    COMMISSIONER: 'COMMISSIONER';
  };

  export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType];

  export const TransactionStatus: {
    PENDING: 'PENDING';
    COMPLETE: 'COMPLETE';
    FAILED: 'FAILED';
    VETOED: 'VETOED';
  };

  export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus];
}

export type Platform = $Enums.Platform;

export const Platform: typeof $Enums.Platform;

export type LeagueType = $Enums.LeagueType;

export const LeagueType: typeof $Enums.LeagueType;

export type ScoringFormat = $Enums.ScoringFormat;

export const ScoringFormat: typeof $Enums.ScoringFormat;

export type Position = $Enums.Position;

export const Position: typeof $Enums.Position;

export type PlayerStatus = $Enums.PlayerStatus;

export const PlayerStatus: typeof $Enums.PlayerStatus;

export type RosterSlot = $Enums.RosterSlot;

export const RosterSlot: typeof $Enums.RosterSlot;

export type MatchupType = $Enums.MatchupType;

export const MatchupType: typeof $Enums.MatchupType;

export type TransactionType = $Enums.TransactionType;

export const TransactionType: typeof $Enums.TransactionType;

export type TransactionStatus = $Enums.TransactionStatus;

export const TransactionStatus: typeof $Enums.TransactionStatus;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.platformAccount`: Exposes CRUD operations for the **PlatformAccount** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more PlatformAccounts
   * const platformAccounts = await prisma.platformAccount.findMany()
   * ```
   */
  get platformAccount(): Prisma.PlatformAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.league`: Exposes CRUD operations for the **League** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Leagues
   * const leagues = await prisma.league.findMany()
   * ```
   */
  get league(): Prisma.LeagueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leagueMember`: Exposes CRUD operations for the **LeagueMember** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more LeagueMembers
   * const leagueMembers = await prisma.leagueMember.findMany()
   * ```
   */
  get leagueMember(): Prisma.LeagueMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Players
   * const players = await prisma.player.findMany()
   * ```
   */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roster`: Exposes CRUD operations for the **Roster** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Rosters
   * const rosters = await prisma.roster.findMany()
   * ```
   */
  get roster(): Prisma.RosterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rosterPlayer`: Exposes CRUD operations for the **RosterPlayer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more RosterPlayers
   * const rosterPlayers = await prisma.rosterPlayer.findMany()
   * ```
   */
  get rosterPlayer(): Prisma.RosterPlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchup`: Exposes CRUD operations for the **Matchup** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Matchups
   * const matchups = await prisma.matchup.findMany()
   * ```
   */
  get matchup(): Prisma.MatchupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Transactions
   * const transactions = await prisma.transaction.findMany()
   * ```
   */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionAdd`: Exposes CRUD operations for the **TransactionAdd** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more TransactionAdds
   * const transactionAdds = await prisma.transactionAdd.findMany()
   * ```
   */
  get transactionAdd(): Prisma.TransactionAddDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionDrop`: Exposes CRUD operations for the **TransactionDrop** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more TransactionDrops
   * const transactionDrops = await prisma.transactionDrop.findMany()
   * ```
   */
  get transactionDrop(): Prisma.TransactionDropDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guildConfig`: Exposes CRUD operations for the **GuildConfig** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more GuildConfigs
   * const guildConfigs = await prisma.guildConfig.findMany()
   * ```
   */
  get guildConfig(): Prisma.GuildConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userNotificationPreference`: Exposes CRUD operations for the **UserNotificationPreference** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more UserNotificationPreferences
   * const userNotificationPreferences = await prisma.userNotificationPreference.findMany()
   * ```
   */
  get userNotificationPreference(): Prisma.UserNotificationPreferenceDelegate<
    ExtArgs,
    ClientOptions
  >;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
    ReturnType<T>
  >;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (
    k: infer I
  ) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> =
    IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
    T,
    MaybeTupleToUnion<K>
  >;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    PlatformAccount: 'PlatformAccount';
    League: 'League';
    LeagueMember: 'LeagueMember';
    Player: 'Player';
    Roster: 'Roster';
    RosterPlayer: 'RosterPlayer';
    Matchup: 'Matchup';
    Transaction: 'Transaction';
    TransactionAdd: 'TransactionAdd';
    TransactionDrop: 'TransactionDrop';
    GuildConfig: 'GuildConfig';
    UserNotificationPreference: 'UserNotificationPreference';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'user'
        | 'platformAccount'
        | 'league'
        | 'leagueMember'
        | 'player'
        | 'roster'
        | 'rosterPlayer'
        | 'matchup'
        | 'transaction'
        | 'transactionAdd'
        | 'transactionDrop'
        | 'guildConfig'
        | 'userNotificationPreference';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      PlatformAccount: {
        payload: Prisma.$PlatformAccountPayload<ExtArgs>;
        fields: Prisma.PlatformAccountFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PlatformAccountFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PlatformAccountFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload>;
          };
          findFirst: {
            args: Prisma.PlatformAccountFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PlatformAccountFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload>;
          };
          findMany: {
            args: Prisma.PlatformAccountFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload>[];
          };
          create: {
            args: Prisma.PlatformAccountCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload>;
          };
          createMany: {
            args: Prisma.PlatformAccountCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PlatformAccountCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload>[];
          };
          delete: {
            args: Prisma.PlatformAccountDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload>;
          };
          update: {
            args: Prisma.PlatformAccountUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload>;
          };
          deleteMany: {
            args: Prisma.PlatformAccountDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PlatformAccountUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PlatformAccountUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload>[];
          };
          upsert: {
            args: Prisma.PlatformAccountUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformAccountPayload>;
          };
          aggregate: {
            args: Prisma.PlatformAccountAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePlatformAccount>;
          };
          groupBy: {
            args: Prisma.PlatformAccountGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PlatformAccountGroupByOutputType>[];
          };
          count: {
            args: Prisma.PlatformAccountCountArgs<ExtArgs>;
            result: $Utils.Optional<PlatformAccountCountAggregateOutputType> | number;
          };
        };
      };
      League: {
        payload: Prisma.$LeaguePayload<ExtArgs>;
        fields: Prisma.LeagueFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.LeagueFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.LeagueFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>;
          };
          findFirst: {
            args: Prisma.LeagueFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.LeagueFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>;
          };
          findMany: {
            args: Prisma.LeagueFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>[];
          };
          create: {
            args: Prisma.LeagueCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>;
          };
          createMany: {
            args: Prisma.LeagueCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.LeagueCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>[];
          };
          delete: {
            args: Prisma.LeagueDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>;
          };
          update: {
            args: Prisma.LeagueUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>;
          };
          deleteMany: {
            args: Prisma.LeagueDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.LeagueUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.LeagueUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>[];
          };
          upsert: {
            args: Prisma.LeagueUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>;
          };
          aggregate: {
            args: Prisma.LeagueAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLeague>;
          };
          groupBy: {
            args: Prisma.LeagueGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LeagueGroupByOutputType>[];
          };
          count: {
            args: Prisma.LeagueCountArgs<ExtArgs>;
            result: $Utils.Optional<LeagueCountAggregateOutputType> | number;
          };
        };
      };
      LeagueMember: {
        payload: Prisma.$LeagueMemberPayload<ExtArgs>;
        fields: Prisma.LeagueMemberFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.LeagueMemberFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.LeagueMemberFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload>;
          };
          findFirst: {
            args: Prisma.LeagueMemberFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.LeagueMemberFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload>;
          };
          findMany: {
            args: Prisma.LeagueMemberFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload>[];
          };
          create: {
            args: Prisma.LeagueMemberCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload>;
          };
          createMany: {
            args: Prisma.LeagueMemberCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.LeagueMemberCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload>[];
          };
          delete: {
            args: Prisma.LeagueMemberDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload>;
          };
          update: {
            args: Prisma.LeagueMemberUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload>;
          };
          deleteMany: {
            args: Prisma.LeagueMemberDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.LeagueMemberUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.LeagueMemberUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload>[];
          };
          upsert: {
            args: Prisma.LeagueMemberUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload>;
          };
          aggregate: {
            args: Prisma.LeagueMemberAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLeagueMember>;
          };
          groupBy: {
            args: Prisma.LeagueMemberGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LeagueMemberGroupByOutputType>[];
          };
          count: {
            args: Prisma.LeagueMemberCountArgs<ExtArgs>;
            result: $Utils.Optional<LeagueMemberCountAggregateOutputType> | number;
          };
        };
      };
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>;
        fields: Prisma.PlayerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>;
          };
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>;
          };
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[];
          };
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>;
          };
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[];
          };
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>;
          };
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>;
          };
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PlayerUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[];
          };
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>;
          };
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePlayer>;
          };
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PlayerGroupByOutputType>[];
          };
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>;
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number;
          };
        };
      };
      Roster: {
        payload: Prisma.$RosterPayload<ExtArgs>;
        fields: Prisma.RosterFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.RosterFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.RosterFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPayload>;
          };
          findFirst: {
            args: Prisma.RosterFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.RosterFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPayload>;
          };
          findMany: {
            args: Prisma.RosterFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPayload>[];
          };
          create: {
            args: Prisma.RosterCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPayload>;
          };
          createMany: {
            args: Prisma.RosterCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.RosterCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPayload>[];
          };
          delete: {
            args: Prisma.RosterDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPayload>;
          };
          update: {
            args: Prisma.RosterUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPayload>;
          };
          deleteMany: {
            args: Prisma.RosterDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.RosterUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.RosterUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPayload>[];
          };
          upsert: {
            args: Prisma.RosterUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPayload>;
          };
          aggregate: {
            args: Prisma.RosterAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRoster>;
          };
          groupBy: {
            args: Prisma.RosterGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RosterGroupByOutputType>[];
          };
          count: {
            args: Prisma.RosterCountArgs<ExtArgs>;
            result: $Utils.Optional<RosterCountAggregateOutputType> | number;
          };
        };
      };
      RosterPlayer: {
        payload: Prisma.$RosterPlayerPayload<ExtArgs>;
        fields: Prisma.RosterPlayerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.RosterPlayerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.RosterPlayerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload>;
          };
          findFirst: {
            args: Prisma.RosterPlayerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.RosterPlayerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload>;
          };
          findMany: {
            args: Prisma.RosterPlayerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload>[];
          };
          create: {
            args: Prisma.RosterPlayerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload>;
          };
          createMany: {
            args: Prisma.RosterPlayerCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.RosterPlayerCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload>[];
          };
          delete: {
            args: Prisma.RosterPlayerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload>;
          };
          update: {
            args: Prisma.RosterPlayerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload>;
          };
          deleteMany: {
            args: Prisma.RosterPlayerDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.RosterPlayerUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.RosterPlayerUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload>[];
          };
          upsert: {
            args: Prisma.RosterPlayerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RosterPlayerPayload>;
          };
          aggregate: {
            args: Prisma.RosterPlayerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRosterPlayer>;
          };
          groupBy: {
            args: Prisma.RosterPlayerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RosterPlayerGroupByOutputType>[];
          };
          count: {
            args: Prisma.RosterPlayerCountArgs<ExtArgs>;
            result: $Utils.Optional<RosterPlayerCountAggregateOutputType> | number;
          };
        };
      };
      Matchup: {
        payload: Prisma.$MatchupPayload<ExtArgs>;
        fields: Prisma.MatchupFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MatchupFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MatchupFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload>;
          };
          findFirst: {
            args: Prisma.MatchupFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MatchupFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload>;
          };
          findMany: {
            args: Prisma.MatchupFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload>[];
          };
          create: {
            args: Prisma.MatchupCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload>;
          };
          createMany: {
            args: Prisma.MatchupCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MatchupCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload>[];
          };
          delete: {
            args: Prisma.MatchupDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload>;
          };
          update: {
            args: Prisma.MatchupUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload>;
          };
          deleteMany: {
            args: Prisma.MatchupDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MatchupUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.MatchupUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload>[];
          };
          upsert: {
            args: Prisma.MatchupUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MatchupPayload>;
          };
          aggregate: {
            args: Prisma.MatchupAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMatchup>;
          };
          groupBy: {
            args: Prisma.MatchupGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MatchupGroupByOutputType>[];
          };
          count: {
            args: Prisma.MatchupCountArgs<ExtArgs>;
            result: $Utils.Optional<MatchupCountAggregateOutputType> | number;
          };
        };
      };
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>;
        fields: Prisma.TransactionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[];
          };
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[];
          };
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[];
          };
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>;
          };
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTransaction>;
          };
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TransactionGroupByOutputType>[];
          };
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>;
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number;
          };
        };
      };
      TransactionAdd: {
        payload: Prisma.$TransactionAddPayload<ExtArgs>;
        fields: Prisma.TransactionAddFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TransactionAddFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionAddPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TransactionAddFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionAddPayload>;
          };
          findFirst: {
            args: Prisma.TransactionAddFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionAddPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TransactionAddFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionAddPayload>;
          };
          findMany: {
            args: Prisma.TransactionAddFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionAddPayload>[];
          };
          create: {
            args: Prisma.TransactionAddCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionAddPayload>;
          };
          createMany: {
            args: Prisma.TransactionAddCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TransactionAddCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionAddPayload>[];
          };
          delete: {
            args: Prisma.TransactionAddDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionAddPayload>;
          };
          update: {
            args: Prisma.TransactionAddUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionAddPayload>;
          };
          deleteMany: {
            args: Prisma.TransactionAddDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TransactionAddUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TransactionAddUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionAddPayload>[];
          };
          upsert: {
            args: Prisma.TransactionAddUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionAddPayload>;
          };
          aggregate: {
            args: Prisma.TransactionAddAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTransactionAdd>;
          };
          groupBy: {
            args: Prisma.TransactionAddGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TransactionAddGroupByOutputType>[];
          };
          count: {
            args: Prisma.TransactionAddCountArgs<ExtArgs>;
            result: $Utils.Optional<TransactionAddCountAggregateOutputType> | number;
          };
        };
      };
      TransactionDrop: {
        payload: Prisma.$TransactionDropPayload<ExtArgs>;
        fields: Prisma.TransactionDropFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TransactionDropFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionDropPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TransactionDropFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionDropPayload>;
          };
          findFirst: {
            args: Prisma.TransactionDropFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionDropPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TransactionDropFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionDropPayload>;
          };
          findMany: {
            args: Prisma.TransactionDropFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionDropPayload>[];
          };
          create: {
            args: Prisma.TransactionDropCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionDropPayload>;
          };
          createMany: {
            args: Prisma.TransactionDropCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TransactionDropCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionDropPayload>[];
          };
          delete: {
            args: Prisma.TransactionDropDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionDropPayload>;
          };
          update: {
            args: Prisma.TransactionDropUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionDropPayload>;
          };
          deleteMany: {
            args: Prisma.TransactionDropDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TransactionDropUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TransactionDropUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionDropPayload>[];
          };
          upsert: {
            args: Prisma.TransactionDropUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TransactionDropPayload>;
          };
          aggregate: {
            args: Prisma.TransactionDropAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTransactionDrop>;
          };
          groupBy: {
            args: Prisma.TransactionDropGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TransactionDropGroupByOutputType>[];
          };
          count: {
            args: Prisma.TransactionDropCountArgs<ExtArgs>;
            result: $Utils.Optional<TransactionDropCountAggregateOutputType> | number;
          };
        };
      };
      GuildConfig: {
        payload: Prisma.$GuildConfigPayload<ExtArgs>;
        fields: Prisma.GuildConfigFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.GuildConfigFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.GuildConfigFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>;
          };
          findFirst: {
            args: Prisma.GuildConfigFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.GuildConfigFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>;
          };
          findMany: {
            args: Prisma.GuildConfigFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>[];
          };
          create: {
            args: Prisma.GuildConfigCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>;
          };
          createMany: {
            args: Prisma.GuildConfigCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.GuildConfigCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>[];
          };
          delete: {
            args: Prisma.GuildConfigDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>;
          };
          update: {
            args: Prisma.GuildConfigUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>;
          };
          deleteMany: {
            args: Prisma.GuildConfigDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.GuildConfigUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.GuildConfigUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>[];
          };
          upsert: {
            args: Prisma.GuildConfigUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>;
          };
          aggregate: {
            args: Prisma.GuildConfigAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGuildConfig>;
          };
          groupBy: {
            args: Prisma.GuildConfigGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GuildConfigGroupByOutputType>[];
          };
          count: {
            args: Prisma.GuildConfigCountArgs<ExtArgs>;
            result: $Utils.Optional<GuildConfigCountAggregateOutputType> | number;
          };
        };
      };
      UserNotificationPreference: {
        payload: Prisma.$UserNotificationPreferencePayload<ExtArgs>;
        fields: Prisma.UserNotificationPreferenceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserNotificationPreferenceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPreferencePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserNotificationPreferenceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPreferencePayload>;
          };
          findFirst: {
            args: Prisma.UserNotificationPreferenceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPreferencePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserNotificationPreferenceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPreferencePayload>;
          };
          findMany: {
            args: Prisma.UserNotificationPreferenceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPreferencePayload>[];
          };
          create: {
            args: Prisma.UserNotificationPreferenceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPreferencePayload>;
          };
          createMany: {
            args: Prisma.UserNotificationPreferenceCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserNotificationPreferenceCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPreferencePayload>[];
          };
          delete: {
            args: Prisma.UserNotificationPreferenceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPreferencePayload>;
          };
          update: {
            args: Prisma.UserNotificationPreferenceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPreferencePayload>;
          };
          deleteMany: {
            args: Prisma.UserNotificationPreferenceDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserNotificationPreferenceUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserNotificationPreferenceUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPreferencePayload>[];
          };
          upsert: {
            args: Prisma.UserNotificationPreferenceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserNotificationPreferencePayload>;
          };
          aggregate: {
            args: Prisma.UserNotificationPreferenceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUserNotificationPreference>;
          };
          groupBy: {
            args: Prisma.UserNotificationPreferenceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserNotificationPreferenceGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserNotificationPreferenceCountArgs<ExtArgs>;
            result: $Utils.Optional<UserNotificationPreferenceCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    platformAccount?: PlatformAccountOmit;
    league?: LeagueOmit;
    leagueMember?: LeagueMemberOmit;
    player?: PlayerOmit;
    roster?: RosterOmit;
    rosterPlayer?: RosterPlayerOmit;
    matchup?: MatchupOmit;
    transaction?: TransactionOmit;
    transactionAdd?: TransactionAddOmit;
    transactionDrop?: TransactionDropOmit;
    guildConfig?: GuildConfigOmit;
    userNotificationPreference?: UserNotificationPreferenceOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    platformAccounts: number;
    leagueMemberships: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    platformAccounts?: boolean | UserCountOutputTypeCountPlatformAccountsArgs;
    leagueMemberships?: boolean | UserCountOutputTypeCountLeagueMembershipsArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlatformAccountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PlatformAccountWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeagueMembershipsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LeagueMemberWhereInput;
  };

  /**
   * Count Type LeagueCountOutputType
   */

  export type LeagueCountOutputType = {
    members: number;
    rosters: number;
    matchups: number;
    transactions: number;
  };

  export type LeagueCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    members?: boolean | LeagueCountOutputTypeCountMembersArgs;
    rosters?: boolean | LeagueCountOutputTypeCountRostersArgs;
    matchups?: boolean | LeagueCountOutputTypeCountMatchupsArgs;
    transactions?: boolean | LeagueCountOutputTypeCountTransactionsArgs;
  };

  // Custom InputTypes
  /**
   * LeagueCountOutputType without action
   */
  export type LeagueCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeagueCountOutputType
     */
    select?: LeagueCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * LeagueCountOutputType without action
   */
  export type LeagueCountOutputTypeCountMembersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LeagueMemberWhereInput;
  };

  /**
   * LeagueCountOutputType without action
   */
  export type LeagueCountOutputTypeCountRostersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RosterWhereInput;
  };

  /**
   * LeagueCountOutputType without action
   */
  export type LeagueCountOutputTypeCountMatchupsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MatchupWhereInput;
  };

  /**
   * LeagueCountOutputType without action
   */
  export type LeagueCountOutputTypeCountTransactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TransactionWhereInput;
  };

  /**
   * Count Type LeagueMemberCountOutputType
   */

  export type LeagueMemberCountOutputType = {
    rosters: number;
  };

  export type LeagueMemberCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    rosters?: boolean | LeagueMemberCountOutputTypeCountRostersArgs;
  };

  // Custom InputTypes
  /**
   * LeagueMemberCountOutputType without action
   */
  export type LeagueMemberCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeagueMemberCountOutputType
     */
    select?: LeagueMemberCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * LeagueMemberCountOutputType without action
   */
  export type LeagueMemberCountOutputTypeCountRostersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RosterWhereInput;
  };

  /**
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    rosterPlayers: number;
  };

  export type PlayerCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    rosterPlayers?: boolean | PlayerCountOutputTypeCountRosterPlayersArgs;
  };

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountRosterPlayersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RosterPlayerWhereInput;
  };

  /**
   * Count Type RosterCountOutputType
   */

  export type RosterCountOutputType = {
    players: number;
  };

  export type RosterCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    players?: boolean | RosterCountOutputTypeCountPlayersArgs;
  };

  // Custom InputTypes
  /**
   * RosterCountOutputType without action
   */
  export type RosterCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RosterCountOutputType
     */
    select?: RosterCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * RosterCountOutputType without action
   */
  export type RosterCountOutputTypeCountPlayersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RosterPlayerWhereInput;
  };

  /**
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    adds: number;
    drops: number;
  };

  export type TransactionCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    adds?: boolean | TransactionCountOutputTypeCountAddsArgs;
    drops?: boolean | TransactionCountOutputTypeCountDropsArgs;
  };

  // Custom InputTypes
  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountAddsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TransactionAddWhereInput;
  };

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountDropsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TransactionDropWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    displayName: string | null;
    email: string | null;
    avatarUrl: string | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    displayName: string | null;
    email: string | null;
    avatarUrl: string | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    createdAt: number;
    updatedAt: number;
    displayName: number;
    email: number;
    avatarUrl: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    displayName?: true;
    email?: true;
    avatarUrl?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    displayName?: true;
    email?: true;
    avatarUrl?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    displayName?: true;
    email?: true;
    avatarUrl?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: UserWhereInput;
      orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[];
      by: UserScalarFieldEnum[] | UserScalarFieldEnum;
      having?: UserScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: UserCountAggregateInputType | true;
      _min?: UserMinAggregateInputType;
      _max?: UserMaxAggregateInputType;
    };

  export type UserGroupByOutputType = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    displayName: string | null;
    email: string | null;
    avatarUrl: string | null;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        displayName?: boolean;
        email?: boolean;
        avatarUrl?: boolean;
        platformAccounts?: boolean | User$platformAccountsArgs<ExtArgs>;
        leagueMemberships?: boolean | User$leagueMembershipsArgs<ExtArgs>;
        _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['user']
    >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      displayName?: boolean;
      email?: boolean;
      avatarUrl?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      displayName?: boolean;
      email?: boolean;
      avatarUrl?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    displayName?: boolean;
    email?: boolean;
    avatarUrl?: boolean;
  };

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'createdAt' | 'updatedAt' | 'displayName' | 'email' | 'avatarUrl',
      ExtArgs['result']['user']
    >;
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    platformAccounts?: boolean | User$platformAccountsArgs<ExtArgs>;
    leagueMemberships?: boolean | User$leagueMembershipsArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'User';
    objects: {
      platformAccounts: Prisma.$PlatformAccountPayload<ExtArgs>[];
      leagueMemberships: Prisma.$LeagueMemberPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        displayName: string | null;
        email: string | null;
        avatarUrl: string | null;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<
    Prisma.$UserPayload,
    S
  >;

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    UserFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User']; meta: { name: 'User' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    platformAccounts<T extends User$platformAccountsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$platformAccountsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$PlatformAccountPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
      | Null
    >;
    leagueMemberships<T extends User$leagueMembershipsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$leagueMembershipsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$LeagueMemberPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
    readonly displayName: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly avatarUrl: FieldRef<'User', 'String'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the User
       */
      select?: UserSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the User
       */
      omit?: UserOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: UserInclude<ExtArgs> | null;
      /**
       * Filter, which Users to fetch.
       */
      where?: UserWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Users to fetch.
       */
      orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Users.
       */
      cursor?: UserWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Users from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Users.
       */
      skip?: number;
      distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
    };

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.platformAccounts
   */
  export type User$platformAccountsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null;
    where?: PlatformAccountWhereInput;
    orderBy?: PlatformAccountOrderByWithRelationInput | PlatformAccountOrderByWithRelationInput[];
    cursor?: PlatformAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PlatformAccountScalarFieldEnum | PlatformAccountScalarFieldEnum[];
  };

  /**
   * User.leagueMemberships
   */
  export type User$leagueMembershipsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null;
    where?: LeagueMemberWhereInput;
    orderBy?: LeagueMemberOrderByWithRelationInput | LeagueMemberOrderByWithRelationInput[];
    cursor?: LeagueMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LeagueMemberScalarFieldEnum | LeagueMemberScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the User
       */
      select?: UserSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the User
       */
      omit?: UserOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: UserInclude<ExtArgs> | null;
    };

  /**
   * Model PlatformAccount
   */

  export type AggregatePlatformAccount = {
    _count: PlatformAccountCountAggregateOutputType | null;
    _min: PlatformAccountMinAggregateOutputType | null;
    _max: PlatformAccountMaxAggregateOutputType | null;
  };

  export type PlatformAccountMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    platform: $Enums.Platform | null;
    platformId: string | null;
    username: string | null;
    avatarUrl: string | null;
    accessToken: string | null;
    refreshToken: string | null;
    expiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PlatformAccountMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    platform: $Enums.Platform | null;
    platformId: string | null;
    username: string | null;
    avatarUrl: string | null;
    accessToken: string | null;
    refreshToken: string | null;
    expiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PlatformAccountCountAggregateOutputType = {
    id: number;
    userId: number;
    platform: number;
    platformId: number;
    username: number;
    avatarUrl: number;
    accessToken: number;
    refreshToken: number;
    expiresAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type PlatformAccountMinAggregateInputType = {
    id?: true;
    userId?: true;
    platform?: true;
    platformId?: true;
    username?: true;
    avatarUrl?: true;
    accessToken?: true;
    refreshToken?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PlatformAccountMaxAggregateInputType = {
    id?: true;
    userId?: true;
    platform?: true;
    platformId?: true;
    username?: true;
    avatarUrl?: true;
    accessToken?: true;
    refreshToken?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PlatformAccountCountAggregateInputType = {
    id?: true;
    userId?: true;
    platform?: true;
    platformId?: true;
    username?: true;
    avatarUrl?: true;
    accessToken?: true;
    refreshToken?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type PlatformAccountAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PlatformAccount to aggregate.
     */
    where?: PlatformAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlatformAccounts to fetch.
     */
    orderBy?: PlatformAccountOrderByWithRelationInput | PlatformAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PlatformAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlatformAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlatformAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PlatformAccounts
     **/
    _count?: true | PlatformAccountCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PlatformAccountMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PlatformAccountMaxAggregateInputType;
  };

  export type GetPlatformAccountAggregateType<T extends PlatformAccountAggregateArgs> = {
    [P in keyof T & keyof AggregatePlatformAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatformAccount[P]>
      : GetScalarType<T[P], AggregatePlatformAccount[P]>;
  };

  export type PlatformAccountGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PlatformAccountWhereInput;
    orderBy?:
      | PlatformAccountOrderByWithAggregationInput
      | PlatformAccountOrderByWithAggregationInput[];
    by: PlatformAccountScalarFieldEnum[] | PlatformAccountScalarFieldEnum;
    having?: PlatformAccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlatformAccountCountAggregateInputType | true;
    _min?: PlatformAccountMinAggregateInputType;
    _max?: PlatformAccountMaxAggregateInputType;
  };

  export type PlatformAccountGroupByOutputType = {
    id: string;
    userId: string;
    platform: $Enums.Platform;
    platformId: string;
    username: string | null;
    avatarUrl: string | null;
    accessToken: string | null;
    refreshToken: string | null;
    expiresAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PlatformAccountCountAggregateOutputType | null;
    _min: PlatformAccountMinAggregateOutputType | null;
    _max: PlatformAccountMaxAggregateOutputType | null;
  };

  type GetPlatformAccountGroupByPayload<T extends PlatformAccountGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PlatformAccountGroupByOutputType, T['by']> & {
          [P in keyof T & keyof PlatformAccountGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformAccountGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformAccountGroupByOutputType[P]>;
        }
      >
    >;

  export type PlatformAccountSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      platform?: boolean;
      platformId?: boolean;
      username?: boolean;
      avatarUrl?: boolean;
      accessToken?: boolean;
      refreshToken?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['platformAccount']
  >;

  export type PlatformAccountSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      platform?: boolean;
      platformId?: boolean;
      username?: boolean;
      avatarUrl?: boolean;
      accessToken?: boolean;
      refreshToken?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['platformAccount']
  >;

  export type PlatformAccountSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      platform?: boolean;
      platformId?: boolean;
      username?: boolean;
      avatarUrl?: boolean;
      accessToken?: boolean;
      refreshToken?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['platformAccount']
  >;

  export type PlatformAccountSelectScalar = {
    id?: boolean;
    userId?: boolean;
    platform?: boolean;
    platformId?: boolean;
    username?: boolean;
    avatarUrl?: boolean;
    accessToken?: boolean;
    refreshToken?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type PlatformAccountOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'userId'
    | 'platform'
    | 'platformId'
    | 'username'
    | 'avatarUrl'
    | 'accessToken'
    | 'refreshToken'
    | 'expiresAt'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['platformAccount']
  >;
  export type PlatformAccountInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PlatformAccountIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PlatformAccountIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $PlatformAccountPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'PlatformAccount';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        platform: $Enums.Platform;
        platformId: string;
        username: string | null;
        avatarUrl: string | null;
        accessToken: string | null;
        refreshToken: string | null;
        expiresAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['platformAccount']
    >;
    composites: {};
  };

  type PlatformAccountGetPayload<
    S extends boolean | null | undefined | PlatformAccountDefaultArgs,
  > = $Result.GetResult<Prisma.$PlatformAccountPayload, S>;

  type PlatformAccountCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<PlatformAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlatformAccountCountAggregateInputType | true;
  };

  export interface PlatformAccountDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['PlatformAccount'];
      meta: { name: 'PlatformAccount' };
    };
    /**
     * Find zero or one PlatformAccount that matches the filter.
     * @param {PlatformAccountFindUniqueArgs} args - Arguments to find a PlatformAccount
     * @example
     * // Get one PlatformAccount
     * const platformAccount = await prisma.platformAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformAccountFindUniqueArgs>(
      args: SelectSubset<T, PlatformAccountFindUniqueArgs<ExtArgs>>
    ): Prisma__PlatformAccountClient<
      $Result.GetResult<
        Prisma.$PlatformAccountPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one PlatformAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatformAccountFindUniqueOrThrowArgs} args - Arguments to find a PlatformAccount
     * @example
     * // Get one PlatformAccount
     * const platformAccount = await prisma.platformAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformAccountFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PlatformAccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlatformAccountClient<
      $Result.GetResult<
        Prisma.$PlatformAccountPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PlatformAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAccountFindFirstArgs} args - Arguments to find a PlatformAccount
     * @example
     * // Get one PlatformAccount
     * const platformAccount = await prisma.platformAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformAccountFindFirstArgs>(
      args?: SelectSubset<T, PlatformAccountFindFirstArgs<ExtArgs>>
    ): Prisma__PlatformAccountClient<
      $Result.GetResult<
        Prisma.$PlatformAccountPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PlatformAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAccountFindFirstOrThrowArgs} args - Arguments to find a PlatformAccount
     * @example
     * // Get one PlatformAccount
     * const platformAccount = await prisma.platformAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformAccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PlatformAccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlatformAccountClient<
      $Result.GetResult<
        Prisma.$PlatformAccountPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more PlatformAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlatformAccounts
     * const platformAccounts = await prisma.platformAccount.findMany()
     *
     * // Get first 10 PlatformAccounts
     * const platformAccounts = await prisma.platformAccount.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const platformAccountWithIdOnly = await prisma.platformAccount.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PlatformAccountFindManyArgs>(
      args?: SelectSubset<T, PlatformAccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PlatformAccountPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a PlatformAccount.
     * @param {PlatformAccountCreateArgs} args - Arguments to create a PlatformAccount.
     * @example
     * // Create one PlatformAccount
     * const PlatformAccount = await prisma.platformAccount.create({
     *   data: {
     *     // ... data to create a PlatformAccount
     *   }
     * })
     *
     */
    create<T extends PlatformAccountCreateArgs>(
      args: SelectSubset<T, PlatformAccountCreateArgs<ExtArgs>>
    ): Prisma__PlatformAccountClient<
      $Result.GetResult<Prisma.$PlatformAccountPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many PlatformAccounts.
     * @param {PlatformAccountCreateManyArgs} args - Arguments to create many PlatformAccounts.
     * @example
     * // Create many PlatformAccounts
     * const platformAccount = await prisma.platformAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PlatformAccountCreateManyArgs>(
      args?: SelectSubset<T, PlatformAccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many PlatformAccounts and returns the data saved in the database.
     * @param {PlatformAccountCreateManyAndReturnArgs} args - Arguments to create many PlatformAccounts.
     * @example
     * // Create many PlatformAccounts
     * const platformAccount = await prisma.platformAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PlatformAccounts and only return the `id`
     * const platformAccountWithIdOnly = await prisma.platformAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PlatformAccountCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PlatformAccountCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PlatformAccountPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a PlatformAccount.
     * @param {PlatformAccountDeleteArgs} args - Arguments to delete one PlatformAccount.
     * @example
     * // Delete one PlatformAccount
     * const PlatformAccount = await prisma.platformAccount.delete({
     *   where: {
     *     // ... filter to delete one PlatformAccount
     *   }
     * })
     *
     */
    delete<T extends PlatformAccountDeleteArgs>(
      args: SelectSubset<T, PlatformAccountDeleteArgs<ExtArgs>>
    ): Prisma__PlatformAccountClient<
      $Result.GetResult<Prisma.$PlatformAccountPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one PlatformAccount.
     * @param {PlatformAccountUpdateArgs} args - Arguments to update one PlatformAccount.
     * @example
     * // Update one PlatformAccount
     * const platformAccount = await prisma.platformAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PlatformAccountUpdateArgs>(
      args: SelectSubset<T, PlatformAccountUpdateArgs<ExtArgs>>
    ): Prisma__PlatformAccountClient<
      $Result.GetResult<Prisma.$PlatformAccountPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more PlatformAccounts.
     * @param {PlatformAccountDeleteManyArgs} args - Arguments to filter PlatformAccounts to delete.
     * @example
     * // Delete a few PlatformAccounts
     * const { count } = await prisma.platformAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PlatformAccountDeleteManyArgs>(
      args?: SelectSubset<T, PlatformAccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PlatformAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlatformAccounts
     * const platformAccount = await prisma.platformAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PlatformAccountUpdateManyArgs>(
      args: SelectSubset<T, PlatformAccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PlatformAccounts and returns the data updated in the database.
     * @param {PlatformAccountUpdateManyAndReturnArgs} args - Arguments to update many PlatformAccounts.
     * @example
     * // Update many PlatformAccounts
     * const platformAccount = await prisma.platformAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PlatformAccounts and only return the `id`
     * const platformAccountWithIdOnly = await prisma.platformAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PlatformAccountUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PlatformAccountUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PlatformAccountPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one PlatformAccount.
     * @param {PlatformAccountUpsertArgs} args - Arguments to update or create a PlatformAccount.
     * @example
     * // Update or create a PlatformAccount
     * const platformAccount = await prisma.platformAccount.upsert({
     *   create: {
     *     // ... data to create a PlatformAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlatformAccount we want to update
     *   }
     * })
     */
    upsert<T extends PlatformAccountUpsertArgs>(
      args: SelectSubset<T, PlatformAccountUpsertArgs<ExtArgs>>
    ): Prisma__PlatformAccountClient<
      $Result.GetResult<Prisma.$PlatformAccountPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of PlatformAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAccountCountArgs} args - Arguments to filter PlatformAccounts to count.
     * @example
     * // Count the number of PlatformAccounts
     * const count = await prisma.platformAccount.count({
     *   where: {
     *     // ... the filter for the PlatformAccounts we want to count
     *   }
     * })
     **/
    count<T extends PlatformAccountCountArgs>(
      args?: Subset<T, PlatformAccountCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformAccountCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a PlatformAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PlatformAccountAggregateArgs>(
      args: Subset<T, PlatformAccountAggregateArgs>
    ): Prisma.PrismaPromise<GetPlatformAccountAggregateType<T>>;

    /**
     * Group by PlatformAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PlatformAccountGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformAccountGroupByArgs['orderBy'] }
        : { orderBy?: PlatformAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PlatformAccountGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetPlatformAccountGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PlatformAccount model
     */
    readonly fields: PlatformAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlatformAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformAccountClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the PlatformAccount model
   */
  interface PlatformAccountFieldRefs {
    readonly id: FieldRef<'PlatformAccount', 'String'>;
    readonly userId: FieldRef<'PlatformAccount', 'String'>;
    readonly platform: FieldRef<'PlatformAccount', 'Platform'>;
    readonly platformId: FieldRef<'PlatformAccount', 'String'>;
    readonly username: FieldRef<'PlatformAccount', 'String'>;
    readonly avatarUrl: FieldRef<'PlatformAccount', 'String'>;
    readonly accessToken: FieldRef<'PlatformAccount', 'String'>;
    readonly refreshToken: FieldRef<'PlatformAccount', 'String'>;
    readonly expiresAt: FieldRef<'PlatformAccount', 'DateTime'>;
    readonly createdAt: FieldRef<'PlatformAccount', 'DateTime'>;
    readonly updatedAt: FieldRef<'PlatformAccount', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * PlatformAccount findUnique
   */
  export type PlatformAccountFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null;
    /**
     * Filter, which PlatformAccount to fetch.
     */
    where: PlatformAccountWhereUniqueInput;
  };

  /**
   * PlatformAccount findUniqueOrThrow
   */
  export type PlatformAccountFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null;
    /**
     * Filter, which PlatformAccount to fetch.
     */
    where: PlatformAccountWhereUniqueInput;
  };

  /**
   * PlatformAccount findFirst
   */
  export type PlatformAccountFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null;
    /**
     * Filter, which PlatformAccount to fetch.
     */
    where?: PlatformAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlatformAccounts to fetch.
     */
    orderBy?: PlatformAccountOrderByWithRelationInput | PlatformAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PlatformAccounts.
     */
    cursor?: PlatformAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlatformAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlatformAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PlatformAccounts.
     */
    distinct?: PlatformAccountScalarFieldEnum | PlatformAccountScalarFieldEnum[];
  };

  /**
   * PlatformAccount findFirstOrThrow
   */
  export type PlatformAccountFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null;
    /**
     * Filter, which PlatformAccount to fetch.
     */
    where?: PlatformAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlatformAccounts to fetch.
     */
    orderBy?: PlatformAccountOrderByWithRelationInput | PlatformAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PlatformAccounts.
     */
    cursor?: PlatformAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlatformAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlatformAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PlatformAccounts.
     */
    distinct?: PlatformAccountScalarFieldEnum | PlatformAccountScalarFieldEnum[];
  };

  /**
   * PlatformAccount findMany
   */
  export type PlatformAccountFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null;
    /**
     * Filter, which PlatformAccounts to fetch.
     */
    where?: PlatformAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlatformAccounts to fetch.
     */
    orderBy?: PlatformAccountOrderByWithRelationInput | PlatformAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PlatformAccounts.
     */
    cursor?: PlatformAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlatformAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlatformAccounts.
     */
    skip?: number;
    distinct?: PlatformAccountScalarFieldEnum | PlatformAccountScalarFieldEnum[];
  };

  /**
   * PlatformAccount create
   */
  export type PlatformAccountCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null;
    /**
     * The data needed to create a PlatformAccount.
     */
    data: XOR<PlatformAccountCreateInput, PlatformAccountUncheckedCreateInput>;
  };

  /**
   * PlatformAccount createMany
   */
  export type PlatformAccountCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many PlatformAccounts.
     */
    data: PlatformAccountCreateManyInput | PlatformAccountCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * PlatformAccount createManyAndReturn
   */
  export type PlatformAccountCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null;
    /**
     * The data used to create many PlatformAccounts.
     */
    data: PlatformAccountCreateManyInput | PlatformAccountCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PlatformAccount update
   */
  export type PlatformAccountUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null;
    /**
     * The data needed to update a PlatformAccount.
     */
    data: XOR<PlatformAccountUpdateInput, PlatformAccountUncheckedUpdateInput>;
    /**
     * Choose, which PlatformAccount to update.
     */
    where: PlatformAccountWhereUniqueInput;
  };

  /**
   * PlatformAccount updateMany
   */
  export type PlatformAccountUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update PlatformAccounts.
     */
    data: XOR<PlatformAccountUpdateManyMutationInput, PlatformAccountUncheckedUpdateManyInput>;
    /**
     * Filter which PlatformAccounts to update
     */
    where?: PlatformAccountWhereInput;
    /**
     * Limit how many PlatformAccounts to update.
     */
    limit?: number;
  };

  /**
   * PlatformAccount updateManyAndReturn
   */
  export type PlatformAccountUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null;
    /**
     * The data used to update PlatformAccounts.
     */
    data: XOR<PlatformAccountUpdateManyMutationInput, PlatformAccountUncheckedUpdateManyInput>;
    /**
     * Filter which PlatformAccounts to update
     */
    where?: PlatformAccountWhereInput;
    /**
     * Limit how many PlatformAccounts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PlatformAccount upsert
   */
  export type PlatformAccountUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null;
    /**
     * The filter to search for the PlatformAccount to update in case it exists.
     */
    where: PlatformAccountWhereUniqueInput;
    /**
     * In case the PlatformAccount found by the `where` argument doesn't exist, create a new PlatformAccount with this data.
     */
    create: XOR<PlatformAccountCreateInput, PlatformAccountUncheckedCreateInput>;
    /**
     * In case the PlatformAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatformAccountUpdateInput, PlatformAccountUncheckedUpdateInput>;
  };

  /**
   * PlatformAccount delete
   */
  export type PlatformAccountDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null;
    /**
     * Filter which PlatformAccount to delete.
     */
    where: PlatformAccountWhereUniqueInput;
  };

  /**
   * PlatformAccount deleteMany
   */
  export type PlatformAccountDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PlatformAccounts to delete
     */
    where?: PlatformAccountWhereInput;
    /**
     * Limit how many PlatformAccounts to delete.
     */
    limit?: number;
  };

  /**
   * PlatformAccount without action
   */
  export type PlatformAccountDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformAccount
     */
    select?: PlatformAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformAccount
     */
    omit?: PlatformAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformAccountInclude<ExtArgs> | null;
  };

  /**
   * Model League
   */

  export type AggregateLeague = {
    _count: LeagueCountAggregateOutputType | null;
    _avg: LeagueAvgAggregateOutputType | null;
    _sum: LeagueSumAggregateOutputType | null;
    _min: LeagueMinAggregateOutputType | null;
    _max: LeagueMaxAggregateOutputType | null;
  };

  export type LeagueAvgAggregateOutputType = {
    season: number | null;
    rosterSize: number | null;
    teamCount: number | null;
  };

  export type LeagueSumAggregateOutputType = {
    season: number | null;
    rosterSize: number | null;
    teamCount: number | null;
  };

  export type LeagueMinAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    platform: $Enums.Platform | null;
    platformLeagueId: string | null;
    name: string | null;
    season: number | null;
    leagueType: $Enums.LeagueType | null;
    scoringFormat: $Enums.ScoringFormat | null;
    rosterSize: number | null;
    teamCount: number | null;
  };

  export type LeagueMaxAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    platform: $Enums.Platform | null;
    platformLeagueId: string | null;
    name: string | null;
    season: number | null;
    leagueType: $Enums.LeagueType | null;
    scoringFormat: $Enums.ScoringFormat | null;
    rosterSize: number | null;
    teamCount: number | null;
  };

  export type LeagueCountAggregateOutputType = {
    id: number;
    createdAt: number;
    updatedAt: number;
    platform: number;
    platformLeagueId: number;
    name: number;
    season: number;
    leagueType: number;
    scoringFormat: number;
    rosterSize: number;
    teamCount: number;
    _all: number;
  };

  export type LeagueAvgAggregateInputType = {
    season?: true;
    rosterSize?: true;
    teamCount?: true;
  };

  export type LeagueSumAggregateInputType = {
    season?: true;
    rosterSize?: true;
    teamCount?: true;
  };

  export type LeagueMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    platform?: true;
    platformLeagueId?: true;
    name?: true;
    season?: true;
    leagueType?: true;
    scoringFormat?: true;
    rosterSize?: true;
    teamCount?: true;
  };

  export type LeagueMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    platform?: true;
    platformLeagueId?: true;
    name?: true;
    season?: true;
    leagueType?: true;
    scoringFormat?: true;
    rosterSize?: true;
    teamCount?: true;
  };

  export type LeagueCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    platform?: true;
    platformLeagueId?: true;
    name?: true;
    season?: true;
    leagueType?: true;
    scoringFormat?: true;
    rosterSize?: true;
    teamCount?: true;
    _all?: true;
  };

  export type LeagueAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which League to aggregate.
     */
    where?: LeagueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Leagues to fetch.
     */
    orderBy?: LeagueOrderByWithRelationInput | LeagueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: LeagueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Leagues from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Leagues.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Leagues
     **/
    _count?: true | LeagueCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: LeagueAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: LeagueSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LeagueMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LeagueMaxAggregateInputType;
  };

  export type GetLeagueAggregateType<T extends LeagueAggregateArgs> = {
    [P in keyof T & keyof AggregateLeague]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeague[P]>
      : GetScalarType<T[P], AggregateLeague[P]>;
  };

  export type LeagueGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LeagueWhereInput;
    orderBy?: LeagueOrderByWithAggregationInput | LeagueOrderByWithAggregationInput[];
    by: LeagueScalarFieldEnum[] | LeagueScalarFieldEnum;
    having?: LeagueScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeagueCountAggregateInputType | true;
    _avg?: LeagueAvgAggregateInputType;
    _sum?: LeagueSumAggregateInputType;
    _min?: LeagueMinAggregateInputType;
    _max?: LeagueMaxAggregateInputType;
  };

  export type LeagueGroupByOutputType = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    platform: $Enums.Platform;
    platformLeagueId: string;
    name: string;
    season: number;
    leagueType: $Enums.LeagueType;
    scoringFormat: $Enums.ScoringFormat;
    rosterSize: number;
    teamCount: number;
    _count: LeagueCountAggregateOutputType | null;
    _avg: LeagueAvgAggregateOutputType | null;
    _sum: LeagueSumAggregateOutputType | null;
    _min: LeagueMinAggregateOutputType | null;
    _max: LeagueMaxAggregateOutputType | null;
  };

  type GetLeagueGroupByPayload<T extends LeagueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeagueGroupByOutputType, T['by']> & {
        [P in keyof T & keyof LeagueGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], LeagueGroupByOutputType[P]>
          : GetScalarType<T[P], LeagueGroupByOutputType[P]>;
      }
    >
  >;

  export type LeagueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        platform?: boolean;
        platformLeagueId?: boolean;
        name?: boolean;
        season?: boolean;
        leagueType?: boolean;
        scoringFormat?: boolean;
        rosterSize?: boolean;
        teamCount?: boolean;
        members?: boolean | League$membersArgs<ExtArgs>;
        rosters?: boolean | League$rostersArgs<ExtArgs>;
        matchups?: boolean | League$matchupsArgs<ExtArgs>;
        transactions?: boolean | League$transactionsArgs<ExtArgs>;
        _count?: boolean | LeagueCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['league']
    >;

  export type LeagueSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      platform?: boolean;
      platformLeagueId?: boolean;
      name?: boolean;
      season?: boolean;
      leagueType?: boolean;
      scoringFormat?: boolean;
      rosterSize?: boolean;
      teamCount?: boolean;
    },
    ExtArgs['result']['league']
  >;

  export type LeagueSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      platform?: boolean;
      platformLeagueId?: boolean;
      name?: boolean;
      season?: boolean;
      leagueType?: boolean;
      scoringFormat?: boolean;
      rosterSize?: boolean;
      teamCount?: boolean;
    },
    ExtArgs['result']['league']
  >;

  export type LeagueSelectScalar = {
    id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    platform?: boolean;
    platformLeagueId?: boolean;
    name?: boolean;
    season?: boolean;
    leagueType?: boolean;
    scoringFormat?: boolean;
    rosterSize?: boolean;
    teamCount?: boolean;
  };

  export type LeagueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'createdAt'
      | 'updatedAt'
      | 'platform'
      | 'platformLeagueId'
      | 'name'
      | 'season'
      | 'leagueType'
      | 'scoringFormat'
      | 'rosterSize'
      | 'teamCount',
      ExtArgs['result']['league']
    >;
  export type LeagueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | League$membersArgs<ExtArgs>;
    rosters?: boolean | League$rostersArgs<ExtArgs>;
    matchups?: boolean | League$matchupsArgs<ExtArgs>;
    transactions?: boolean | League$transactionsArgs<ExtArgs>;
    _count?: boolean | LeagueCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type LeagueIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type LeagueIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $LeaguePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'League';
    objects: {
      members: Prisma.$LeagueMemberPayload<ExtArgs>[];
      rosters: Prisma.$RosterPayload<ExtArgs>[];
      matchups: Prisma.$MatchupPayload<ExtArgs>[];
      transactions: Prisma.$TransactionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        platform: $Enums.Platform;
        platformLeagueId: string;
        name: string;
        season: number;
        leagueType: $Enums.LeagueType;
        scoringFormat: $Enums.ScoringFormat;
        rosterSize: number;
        teamCount: number;
      },
      ExtArgs['result']['league']
    >;
    composites: {};
  };

  type LeagueGetPayload<S extends boolean | null | undefined | LeagueDefaultArgs> =
    $Result.GetResult<Prisma.$LeaguePayload, S>;

  type LeagueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    LeagueFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: LeagueCountAggregateInputType | true;
  };

  export interface LeagueDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['League']; meta: { name: 'League' } };
    /**
     * Find zero or one League that matches the filter.
     * @param {LeagueFindUniqueArgs} args - Arguments to find a League
     * @example
     * // Get one League
     * const league = await prisma.league.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeagueFindUniqueArgs>(
      args: SelectSubset<T, LeagueFindUniqueArgs<ExtArgs>>
    ): Prisma__LeagueClient<
      $Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one League that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeagueFindUniqueOrThrowArgs} args - Arguments to find a League
     * @example
     * // Get one League
     * const league = await prisma.league.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeagueFindUniqueOrThrowArgs>(
      args: SelectSubset<T, LeagueFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LeagueClient<
      $Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first League that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueFindFirstArgs} args - Arguments to find a League
     * @example
     * // Get one League
     * const league = await prisma.league.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeagueFindFirstArgs>(
      args?: SelectSubset<T, LeagueFindFirstArgs<ExtArgs>>
    ): Prisma__LeagueClient<
      $Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first League that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueFindFirstOrThrowArgs} args - Arguments to find a League
     * @example
     * // Get one League
     * const league = await prisma.league.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeagueFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LeagueFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LeagueClient<
      $Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Leagues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leagues
     * const leagues = await prisma.league.findMany()
     *
     * // Get first 10 Leagues
     * const leagues = await prisma.league.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const leagueWithIdOnly = await prisma.league.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LeagueFindManyArgs>(
      args?: SelectSubset<T, LeagueFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a League.
     * @param {LeagueCreateArgs} args - Arguments to create a League.
     * @example
     * // Create one League
     * const League = await prisma.league.create({
     *   data: {
     *     // ... data to create a League
     *   }
     * })
     *
     */
    create<T extends LeagueCreateArgs>(
      args: SelectSubset<T, LeagueCreateArgs<ExtArgs>>
    ): Prisma__LeagueClient<
      $Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Leagues.
     * @param {LeagueCreateManyArgs} args - Arguments to create many Leagues.
     * @example
     * // Create many Leagues
     * const league = await prisma.league.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LeagueCreateManyArgs>(
      args?: SelectSubset<T, LeagueCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Leagues and returns the data saved in the database.
     * @param {LeagueCreateManyAndReturnArgs} args - Arguments to create many Leagues.
     * @example
     * // Create many Leagues
     * const league = await prisma.league.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Leagues and only return the `id`
     * const leagueWithIdOnly = await prisma.league.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LeagueCreateManyAndReturnArgs>(
      args?: SelectSubset<T, LeagueCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a League.
     * @param {LeagueDeleteArgs} args - Arguments to delete one League.
     * @example
     * // Delete one League
     * const League = await prisma.league.delete({
     *   where: {
     *     // ... filter to delete one League
     *   }
     * })
     *
     */
    delete<T extends LeagueDeleteArgs>(
      args: SelectSubset<T, LeagueDeleteArgs<ExtArgs>>
    ): Prisma__LeagueClient<
      $Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one League.
     * @param {LeagueUpdateArgs} args - Arguments to update one League.
     * @example
     * // Update one League
     * const league = await prisma.league.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LeagueUpdateArgs>(
      args: SelectSubset<T, LeagueUpdateArgs<ExtArgs>>
    ): Prisma__LeagueClient<
      $Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Leagues.
     * @param {LeagueDeleteManyArgs} args - Arguments to filter Leagues to delete.
     * @example
     * // Delete a few Leagues
     * const { count } = await prisma.league.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LeagueDeleteManyArgs>(
      args?: SelectSubset<T, LeagueDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Leagues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leagues
     * const league = await prisma.league.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LeagueUpdateManyArgs>(
      args: SelectSubset<T, LeagueUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Leagues and returns the data updated in the database.
     * @param {LeagueUpdateManyAndReturnArgs} args - Arguments to update many Leagues.
     * @example
     * // Update many Leagues
     * const league = await prisma.league.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Leagues and only return the `id`
     * const leagueWithIdOnly = await prisma.league.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends LeagueUpdateManyAndReturnArgs>(
      args: SelectSubset<T, LeagueUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one League.
     * @param {LeagueUpsertArgs} args - Arguments to update or create a League.
     * @example
     * // Update or create a League
     * const league = await prisma.league.upsert({
     *   create: {
     *     // ... data to create a League
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the League we want to update
     *   }
     * })
     */
    upsert<T extends LeagueUpsertArgs>(
      args: SelectSubset<T, LeagueUpsertArgs<ExtArgs>>
    ): Prisma__LeagueClient<
      $Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Leagues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueCountArgs} args - Arguments to filter Leagues to count.
     * @example
     * // Count the number of Leagues
     * const count = await prisma.league.count({
     *   where: {
     *     // ... the filter for the Leagues we want to count
     *   }
     * })
     **/
    count<T extends LeagueCountArgs>(
      args?: Subset<T, LeagueCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeagueCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a League.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends LeagueAggregateArgs>(
      args: Subset<T, LeagueAggregateArgs>
    ): Prisma.PrismaPromise<GetLeagueAggregateType<T>>;

    /**
     * Group by League.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends LeagueGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeagueGroupByArgs['orderBy'] }
        : { orderBy?: LeagueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, LeagueGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetLeagueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the League model
     */
    readonly fields: LeagueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for League.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeagueClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    members<T extends League$membersArgs<ExtArgs> = {}>(
      args?: Subset<T, League$membersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$LeagueMemberPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
      | Null
    >;
    rosters<T extends League$rostersArgs<ExtArgs> = {}>(
      args?: Subset<T, League$rostersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$RosterPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    matchups<T extends League$matchupsArgs<ExtArgs> = {}>(
      args?: Subset<T, League$matchupsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    transactions<T extends League$transactionsArgs<ExtArgs> = {}>(
      args?: Subset<T, League$transactionsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the League model
   */
  interface LeagueFieldRefs {
    readonly id: FieldRef<'League', 'String'>;
    readonly createdAt: FieldRef<'League', 'DateTime'>;
    readonly updatedAt: FieldRef<'League', 'DateTime'>;
    readonly platform: FieldRef<'League', 'Platform'>;
    readonly platformLeagueId: FieldRef<'League', 'String'>;
    readonly name: FieldRef<'League', 'String'>;
    readonly season: FieldRef<'League', 'Int'>;
    readonly leagueType: FieldRef<'League', 'LeagueType'>;
    readonly scoringFormat: FieldRef<'League', 'ScoringFormat'>;
    readonly rosterSize: FieldRef<'League', 'Int'>;
    readonly teamCount: FieldRef<'League', 'Int'>;
  }

  // Custom InputTypes
  /**
   * League findUnique
   */
  export type LeagueFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null;
    /**
     * Filter, which League to fetch.
     */
    where: LeagueWhereUniqueInput;
  };

  /**
   * League findUniqueOrThrow
   */
  export type LeagueFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null;
    /**
     * Filter, which League to fetch.
     */
    where: LeagueWhereUniqueInput;
  };

  /**
   * League findFirst
   */
  export type LeagueFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null;
    /**
     * Filter, which League to fetch.
     */
    where?: LeagueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Leagues to fetch.
     */
    orderBy?: LeagueOrderByWithRelationInput | LeagueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Leagues.
     */
    cursor?: LeagueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Leagues from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Leagues.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Leagues.
     */
    distinct?: LeagueScalarFieldEnum | LeagueScalarFieldEnum[];
  };

  /**
   * League findFirstOrThrow
   */
  export type LeagueFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null;
    /**
     * Filter, which League to fetch.
     */
    where?: LeagueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Leagues to fetch.
     */
    orderBy?: LeagueOrderByWithRelationInput | LeagueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Leagues.
     */
    cursor?: LeagueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Leagues from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Leagues.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Leagues.
     */
    distinct?: LeagueScalarFieldEnum | LeagueScalarFieldEnum[];
  };

  /**
   * League findMany
   */
  export type LeagueFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null;
    /**
     * Filter, which Leagues to fetch.
     */
    where?: LeagueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Leagues to fetch.
     */
    orderBy?: LeagueOrderByWithRelationInput | LeagueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Leagues.
     */
    cursor?: LeagueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Leagues from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Leagues.
     */
    skip?: number;
    distinct?: LeagueScalarFieldEnum | LeagueScalarFieldEnum[];
  };

  /**
   * League create
   */
  export type LeagueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the League
       */
      select?: LeagueSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the League
       */
      omit?: LeagueOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: LeagueInclude<ExtArgs> | null;
      /**
       * The data needed to create a League.
       */
      data: XOR<LeagueCreateInput, LeagueUncheckedCreateInput>;
    };

  /**
   * League createMany
   */
  export type LeagueCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Leagues.
     */
    data: LeagueCreateManyInput | LeagueCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * League createManyAndReturn
   */
  export type LeagueCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null;
    /**
     * The data used to create many Leagues.
     */
    data: LeagueCreateManyInput | LeagueCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * League update
   */
  export type LeagueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the League
       */
      select?: LeagueSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the League
       */
      omit?: LeagueOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: LeagueInclude<ExtArgs> | null;
      /**
       * The data needed to update a League.
       */
      data: XOR<LeagueUpdateInput, LeagueUncheckedUpdateInput>;
      /**
       * Choose, which League to update.
       */
      where: LeagueWhereUniqueInput;
    };

  /**
   * League updateMany
   */
  export type LeagueUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Leagues.
     */
    data: XOR<LeagueUpdateManyMutationInput, LeagueUncheckedUpdateManyInput>;
    /**
     * Filter which Leagues to update
     */
    where?: LeagueWhereInput;
    /**
     * Limit how many Leagues to update.
     */
    limit?: number;
  };

  /**
   * League updateManyAndReturn
   */
  export type LeagueUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null;
    /**
     * The data used to update Leagues.
     */
    data: XOR<LeagueUpdateManyMutationInput, LeagueUncheckedUpdateManyInput>;
    /**
     * Filter which Leagues to update
     */
    where?: LeagueWhereInput;
    /**
     * Limit how many Leagues to update.
     */
    limit?: number;
  };

  /**
   * League upsert
   */
  export type LeagueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the League
       */
      select?: LeagueSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the League
       */
      omit?: LeagueOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: LeagueInclude<ExtArgs> | null;
      /**
       * The filter to search for the League to update in case it exists.
       */
      where: LeagueWhereUniqueInput;
      /**
       * In case the League found by the `where` argument doesn't exist, create a new League with this data.
       */
      create: XOR<LeagueCreateInput, LeagueUncheckedCreateInput>;
      /**
       * In case the League was found with the provided `where` argument, update it with this data.
       */
      update: XOR<LeagueUpdateInput, LeagueUncheckedUpdateInput>;
    };

  /**
   * League delete
   */
  export type LeagueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the League
       */
      select?: LeagueSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the League
       */
      omit?: LeagueOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: LeagueInclude<ExtArgs> | null;
      /**
       * Filter which League to delete.
       */
      where: LeagueWhereUniqueInput;
    };

  /**
   * League deleteMany
   */
  export type LeagueDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Leagues to delete
     */
    where?: LeagueWhereInput;
    /**
     * Limit how many Leagues to delete.
     */
    limit?: number;
  };

  /**
   * League.members
   */
  export type League$membersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null;
    where?: LeagueMemberWhereInput;
    orderBy?: LeagueMemberOrderByWithRelationInput | LeagueMemberOrderByWithRelationInput[];
    cursor?: LeagueMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LeagueMemberScalarFieldEnum | LeagueMemberScalarFieldEnum[];
  };

  /**
   * League.rosters
   */
  export type League$rostersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Roster
     */
    select?: RosterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Roster
     */
    omit?: RosterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterInclude<ExtArgs> | null;
    where?: RosterWhereInput;
    orderBy?: RosterOrderByWithRelationInput | RosterOrderByWithRelationInput[];
    cursor?: RosterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RosterScalarFieldEnum | RosterScalarFieldEnum[];
  };

  /**
   * League.matchups
   */
  export type League$matchupsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null;
    where?: MatchupWhereInput;
    orderBy?: MatchupOrderByWithRelationInput | MatchupOrderByWithRelationInput[];
    cursor?: MatchupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MatchupScalarFieldEnum | MatchupScalarFieldEnum[];
  };

  /**
   * League.transactions
   */
  export type League$transactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    where?: TransactionWhereInput;
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[];
    cursor?: TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * League without action
   */
  export type LeagueDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null;
  };

  /**
   * Model LeagueMember
   */

  export type AggregateLeagueMember = {
    _count: LeagueMemberCountAggregateOutputType | null;
    _avg: LeagueMemberAvgAggregateOutputType | null;
    _sum: LeagueMemberSumAggregateOutputType | null;
    _min: LeagueMemberMinAggregateOutputType | null;
    _max: LeagueMemberMaxAggregateOutputType | null;
  };

  export type LeagueMemberAvgAggregateOutputType = {
    rosterSlot: number | null;
    wins: number | null;
    losses: number | null;
    ties: number | null;
    pointsFor: Decimal | null;
    pointsAgainst: Decimal | null;
  };

  export type LeagueMemberSumAggregateOutputType = {
    rosterSlot: number | null;
    wins: number | null;
    losses: number | null;
    ties: number | null;
    pointsFor: Decimal | null;
    pointsAgainst: Decimal | null;
  };

  export type LeagueMemberMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    leagueId: string | null;
    teamName: string | null;
    teamAvatar: string | null;
    rosterSlot: number | null;
    wins: number | null;
    losses: number | null;
    ties: number | null;
    pointsFor: Decimal | null;
    pointsAgainst: Decimal | null;
  };

  export type LeagueMemberMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    leagueId: string | null;
    teamName: string | null;
    teamAvatar: string | null;
    rosterSlot: number | null;
    wins: number | null;
    losses: number | null;
    ties: number | null;
    pointsFor: Decimal | null;
    pointsAgainst: Decimal | null;
  };

  export type LeagueMemberCountAggregateOutputType = {
    id: number;
    userId: number;
    leagueId: number;
    teamName: number;
    teamAvatar: number;
    rosterSlot: number;
    wins: number;
    losses: number;
    ties: number;
    pointsFor: number;
    pointsAgainst: number;
    _all: number;
  };

  export type LeagueMemberAvgAggregateInputType = {
    rosterSlot?: true;
    wins?: true;
    losses?: true;
    ties?: true;
    pointsFor?: true;
    pointsAgainst?: true;
  };

  export type LeagueMemberSumAggregateInputType = {
    rosterSlot?: true;
    wins?: true;
    losses?: true;
    ties?: true;
    pointsFor?: true;
    pointsAgainst?: true;
  };

  export type LeagueMemberMinAggregateInputType = {
    id?: true;
    userId?: true;
    leagueId?: true;
    teamName?: true;
    teamAvatar?: true;
    rosterSlot?: true;
    wins?: true;
    losses?: true;
    ties?: true;
    pointsFor?: true;
    pointsAgainst?: true;
  };

  export type LeagueMemberMaxAggregateInputType = {
    id?: true;
    userId?: true;
    leagueId?: true;
    teamName?: true;
    teamAvatar?: true;
    rosterSlot?: true;
    wins?: true;
    losses?: true;
    ties?: true;
    pointsFor?: true;
    pointsAgainst?: true;
  };

  export type LeagueMemberCountAggregateInputType = {
    id?: true;
    userId?: true;
    leagueId?: true;
    teamName?: true;
    teamAvatar?: true;
    rosterSlot?: true;
    wins?: true;
    losses?: true;
    ties?: true;
    pointsFor?: true;
    pointsAgainst?: true;
    _all?: true;
  };

  export type LeagueMemberAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which LeagueMember to aggregate.
     */
    where?: LeagueMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeagueMembers to fetch.
     */
    orderBy?: LeagueMemberOrderByWithRelationInput | LeagueMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: LeagueMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeagueMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeagueMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LeagueMembers
     **/
    _count?: true | LeagueMemberCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: LeagueMemberAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: LeagueMemberSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LeagueMemberMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LeagueMemberMaxAggregateInputType;
  };

  export type GetLeagueMemberAggregateType<T extends LeagueMemberAggregateArgs> = {
    [P in keyof T & keyof AggregateLeagueMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeagueMember[P]>
      : GetScalarType<T[P], AggregateLeagueMember[P]>;
  };

  export type LeagueMemberGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LeagueMemberWhereInput;
    orderBy?: LeagueMemberOrderByWithAggregationInput | LeagueMemberOrderByWithAggregationInput[];
    by: LeagueMemberScalarFieldEnum[] | LeagueMemberScalarFieldEnum;
    having?: LeagueMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeagueMemberCountAggregateInputType | true;
    _avg?: LeagueMemberAvgAggregateInputType;
    _sum?: LeagueMemberSumAggregateInputType;
    _min?: LeagueMemberMinAggregateInputType;
    _max?: LeagueMemberMaxAggregateInputType;
  };

  export type LeagueMemberGroupByOutputType = {
    id: string;
    userId: string;
    leagueId: string;
    teamName: string | null;
    teamAvatar: string | null;
    rosterSlot: number;
    wins: number;
    losses: number;
    ties: number;
    pointsFor: Decimal;
    pointsAgainst: Decimal;
    _count: LeagueMemberCountAggregateOutputType | null;
    _avg: LeagueMemberAvgAggregateOutputType | null;
    _sum: LeagueMemberSumAggregateOutputType | null;
    _min: LeagueMemberMinAggregateOutputType | null;
    _max: LeagueMemberMaxAggregateOutputType | null;
  };

  type GetLeagueMemberGroupByPayload<T extends LeagueMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeagueMemberGroupByOutputType, T['by']> & {
        [P in keyof T & keyof LeagueMemberGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], LeagueMemberGroupByOutputType[P]>
          : GetScalarType<T[P], LeagueMemberGroupByOutputType[P]>;
      }
    >
  >;

  export type LeagueMemberSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      leagueId?: boolean;
      teamName?: boolean;
      teamAvatar?: boolean;
      rosterSlot?: boolean;
      wins?: boolean;
      losses?: boolean;
      ties?: boolean;
      pointsFor?: boolean;
      pointsAgainst?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      league?: boolean | LeagueDefaultArgs<ExtArgs>;
      rosters?: boolean | LeagueMember$rostersArgs<ExtArgs>;
      _count?: boolean | LeagueMemberCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['leagueMember']
  >;

  export type LeagueMemberSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      leagueId?: boolean;
      teamName?: boolean;
      teamAvatar?: boolean;
      rosterSlot?: boolean;
      wins?: boolean;
      losses?: boolean;
      ties?: boolean;
      pointsFor?: boolean;
      pointsAgainst?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      league?: boolean | LeagueDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['leagueMember']
  >;

  export type LeagueMemberSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      leagueId?: boolean;
      teamName?: boolean;
      teamAvatar?: boolean;
      rosterSlot?: boolean;
      wins?: boolean;
      losses?: boolean;
      ties?: boolean;
      pointsFor?: boolean;
      pointsAgainst?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      league?: boolean | LeagueDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['leagueMember']
  >;

  export type LeagueMemberSelectScalar = {
    id?: boolean;
    userId?: boolean;
    leagueId?: boolean;
    teamName?: boolean;
    teamAvatar?: boolean;
    rosterSlot?: boolean;
    wins?: boolean;
    losses?: boolean;
    ties?: boolean;
    pointsFor?: boolean;
    pointsAgainst?: boolean;
  };

  export type LeagueMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'userId'
      | 'leagueId'
      | 'teamName'
      | 'teamAvatar'
      | 'rosterSlot'
      | 'wins'
      | 'losses'
      | 'ties'
      | 'pointsFor'
      | 'pointsAgainst',
      ExtArgs['result']['leagueMember']
    >;
  export type LeagueMemberInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    league?: boolean | LeagueDefaultArgs<ExtArgs>;
    rosters?: boolean | LeagueMember$rostersArgs<ExtArgs>;
    _count?: boolean | LeagueMemberCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type LeagueMemberIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    league?: boolean | LeagueDefaultArgs<ExtArgs>;
  };
  export type LeagueMemberIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    league?: boolean | LeagueDefaultArgs<ExtArgs>;
  };

  export type $LeagueMemberPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'LeagueMember';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      league: Prisma.$LeaguePayload<ExtArgs>;
      rosters: Prisma.$RosterPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        leagueId: string;
        teamName: string | null;
        teamAvatar: string | null;
        rosterSlot: number;
        wins: number;
        losses: number;
        ties: number;
        pointsFor: Prisma.Decimal;
        pointsAgainst: Prisma.Decimal;
      },
      ExtArgs['result']['leagueMember']
    >;
    composites: {};
  };

  type LeagueMemberGetPayload<S extends boolean | null | undefined | LeagueMemberDefaultArgs> =
    $Result.GetResult<Prisma.$LeagueMemberPayload, S>;

  type LeagueMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeagueMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeagueMemberCountAggregateInputType | true;
    };

  export interface LeagueMemberDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['LeagueMember'];
      meta: { name: 'LeagueMember' };
    };
    /**
     * Find zero or one LeagueMember that matches the filter.
     * @param {LeagueMemberFindUniqueArgs} args - Arguments to find a LeagueMember
     * @example
     * // Get one LeagueMember
     * const leagueMember = await prisma.leagueMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeagueMemberFindUniqueArgs>(
      args: SelectSubset<T, LeagueMemberFindUniqueArgs<ExtArgs>>
    ): Prisma__LeagueMemberClient<
      $Result.GetResult<
        Prisma.$LeagueMemberPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one LeagueMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeagueMemberFindUniqueOrThrowArgs} args - Arguments to find a LeagueMember
     * @example
     * // Get one LeagueMember
     * const leagueMember = await prisma.leagueMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeagueMemberFindUniqueOrThrowArgs>(
      args: SelectSubset<T, LeagueMemberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LeagueMemberClient<
      $Result.GetResult<
        Prisma.$LeagueMemberPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first LeagueMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueMemberFindFirstArgs} args - Arguments to find a LeagueMember
     * @example
     * // Get one LeagueMember
     * const leagueMember = await prisma.leagueMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeagueMemberFindFirstArgs>(
      args?: SelectSubset<T, LeagueMemberFindFirstArgs<ExtArgs>>
    ): Prisma__LeagueMemberClient<
      $Result.GetResult<
        Prisma.$LeagueMemberPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first LeagueMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueMemberFindFirstOrThrowArgs} args - Arguments to find a LeagueMember
     * @example
     * // Get one LeagueMember
     * const leagueMember = await prisma.leagueMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeagueMemberFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LeagueMemberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LeagueMemberClient<
      $Result.GetResult<
        Prisma.$LeagueMemberPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more LeagueMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeagueMembers
     * const leagueMembers = await prisma.leagueMember.findMany()
     *
     * // Get first 10 LeagueMembers
     * const leagueMembers = await prisma.leagueMember.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const leagueMemberWithIdOnly = await prisma.leagueMember.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LeagueMemberFindManyArgs>(
      args?: SelectSubset<T, LeagueMemberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$LeagueMemberPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a LeagueMember.
     * @param {LeagueMemberCreateArgs} args - Arguments to create a LeagueMember.
     * @example
     * // Create one LeagueMember
     * const LeagueMember = await prisma.leagueMember.create({
     *   data: {
     *     // ... data to create a LeagueMember
     *   }
     * })
     *
     */
    create<T extends LeagueMemberCreateArgs>(
      args: SelectSubset<T, LeagueMemberCreateArgs<ExtArgs>>
    ): Prisma__LeagueMemberClient<
      $Result.GetResult<Prisma.$LeagueMemberPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many LeagueMembers.
     * @param {LeagueMemberCreateManyArgs} args - Arguments to create many LeagueMembers.
     * @example
     * // Create many LeagueMembers
     * const leagueMember = await prisma.leagueMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LeagueMemberCreateManyArgs>(
      args?: SelectSubset<T, LeagueMemberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many LeagueMembers and returns the data saved in the database.
     * @param {LeagueMemberCreateManyAndReturnArgs} args - Arguments to create many LeagueMembers.
     * @example
     * // Create many LeagueMembers
     * const leagueMember = await prisma.leagueMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LeagueMembers and only return the `id`
     * const leagueMemberWithIdOnly = await prisma.leagueMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LeagueMemberCreateManyAndReturnArgs>(
      args?: SelectSubset<T, LeagueMemberCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LeagueMemberPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a LeagueMember.
     * @param {LeagueMemberDeleteArgs} args - Arguments to delete one LeagueMember.
     * @example
     * // Delete one LeagueMember
     * const LeagueMember = await prisma.leagueMember.delete({
     *   where: {
     *     // ... filter to delete one LeagueMember
     *   }
     * })
     *
     */
    delete<T extends LeagueMemberDeleteArgs>(
      args: SelectSubset<T, LeagueMemberDeleteArgs<ExtArgs>>
    ): Prisma__LeagueMemberClient<
      $Result.GetResult<Prisma.$LeagueMemberPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one LeagueMember.
     * @param {LeagueMemberUpdateArgs} args - Arguments to update one LeagueMember.
     * @example
     * // Update one LeagueMember
     * const leagueMember = await prisma.leagueMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LeagueMemberUpdateArgs>(
      args: SelectSubset<T, LeagueMemberUpdateArgs<ExtArgs>>
    ): Prisma__LeagueMemberClient<
      $Result.GetResult<Prisma.$LeagueMemberPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more LeagueMembers.
     * @param {LeagueMemberDeleteManyArgs} args - Arguments to filter LeagueMembers to delete.
     * @example
     * // Delete a few LeagueMembers
     * const { count } = await prisma.leagueMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LeagueMemberDeleteManyArgs>(
      args?: SelectSubset<T, LeagueMemberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more LeagueMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeagueMembers
     * const leagueMember = await prisma.leagueMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LeagueMemberUpdateManyArgs>(
      args: SelectSubset<T, LeagueMemberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more LeagueMembers and returns the data updated in the database.
     * @param {LeagueMemberUpdateManyAndReturnArgs} args - Arguments to update many LeagueMembers.
     * @example
     * // Update many LeagueMembers
     * const leagueMember = await prisma.leagueMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LeagueMembers and only return the `id`
     * const leagueMemberWithIdOnly = await prisma.leagueMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends LeagueMemberUpdateManyAndReturnArgs>(
      args: SelectSubset<T, LeagueMemberUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LeagueMemberPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one LeagueMember.
     * @param {LeagueMemberUpsertArgs} args - Arguments to update or create a LeagueMember.
     * @example
     * // Update or create a LeagueMember
     * const leagueMember = await prisma.leagueMember.upsert({
     *   create: {
     *     // ... data to create a LeagueMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeagueMember we want to update
     *   }
     * })
     */
    upsert<T extends LeagueMemberUpsertArgs>(
      args: SelectSubset<T, LeagueMemberUpsertArgs<ExtArgs>>
    ): Prisma__LeagueMemberClient<
      $Result.GetResult<Prisma.$LeagueMemberPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of LeagueMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueMemberCountArgs} args - Arguments to filter LeagueMembers to count.
     * @example
     * // Count the number of LeagueMembers
     * const count = await prisma.leagueMember.count({
     *   where: {
     *     // ... the filter for the LeagueMembers we want to count
     *   }
     * })
     **/
    count<T extends LeagueMemberCountArgs>(
      args?: Subset<T, LeagueMemberCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeagueMemberCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a LeagueMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends LeagueMemberAggregateArgs>(
      args: Subset<T, LeagueMemberAggregateArgs>
    ): Prisma.PrismaPromise<GetLeagueMemberAggregateType<T>>;

    /**
     * Group by LeagueMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends LeagueMemberGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeagueMemberGroupByArgs['orderBy'] }
        : { orderBy?: LeagueMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, LeagueMemberGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetLeagueMemberGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LeagueMember model
     */
    readonly fields: LeagueMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeagueMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeagueMemberClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    league<T extends LeagueDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, LeagueDefaultArgs<ExtArgs>>
    ): Prisma__LeagueClient<
      | $Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    rosters<T extends LeagueMember$rostersArgs<ExtArgs> = {}>(
      args?: Subset<T, LeagueMember$rostersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$RosterPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the LeagueMember model
   */
  interface LeagueMemberFieldRefs {
    readonly id: FieldRef<'LeagueMember', 'String'>;
    readonly userId: FieldRef<'LeagueMember', 'String'>;
    readonly leagueId: FieldRef<'LeagueMember', 'String'>;
    readonly teamName: FieldRef<'LeagueMember', 'String'>;
    readonly teamAvatar: FieldRef<'LeagueMember', 'String'>;
    readonly rosterSlot: FieldRef<'LeagueMember', 'Int'>;
    readonly wins: FieldRef<'LeagueMember', 'Int'>;
    readonly losses: FieldRef<'LeagueMember', 'Int'>;
    readonly ties: FieldRef<'LeagueMember', 'Int'>;
    readonly pointsFor: FieldRef<'LeagueMember', 'Decimal'>;
    readonly pointsAgainst: FieldRef<'LeagueMember', 'Decimal'>;
  }

  // Custom InputTypes
  /**
   * LeagueMember findUnique
   */
  export type LeagueMemberFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null;
    /**
     * Filter, which LeagueMember to fetch.
     */
    where: LeagueMemberWhereUniqueInput;
  };

  /**
   * LeagueMember findUniqueOrThrow
   */
  export type LeagueMemberFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null;
    /**
     * Filter, which LeagueMember to fetch.
     */
    where: LeagueMemberWhereUniqueInput;
  };

  /**
   * LeagueMember findFirst
   */
  export type LeagueMemberFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null;
    /**
     * Filter, which LeagueMember to fetch.
     */
    where?: LeagueMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeagueMembers to fetch.
     */
    orderBy?: LeagueMemberOrderByWithRelationInput | LeagueMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LeagueMembers.
     */
    cursor?: LeagueMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeagueMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeagueMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LeagueMembers.
     */
    distinct?: LeagueMemberScalarFieldEnum | LeagueMemberScalarFieldEnum[];
  };

  /**
   * LeagueMember findFirstOrThrow
   */
  export type LeagueMemberFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null;
    /**
     * Filter, which LeagueMember to fetch.
     */
    where?: LeagueMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeagueMembers to fetch.
     */
    orderBy?: LeagueMemberOrderByWithRelationInput | LeagueMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LeagueMembers.
     */
    cursor?: LeagueMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeagueMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeagueMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LeagueMembers.
     */
    distinct?: LeagueMemberScalarFieldEnum | LeagueMemberScalarFieldEnum[];
  };

  /**
   * LeagueMember findMany
   */
  export type LeagueMemberFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null;
    /**
     * Filter, which LeagueMembers to fetch.
     */
    where?: LeagueMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LeagueMembers to fetch.
     */
    orderBy?: LeagueMemberOrderByWithRelationInput | LeagueMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LeagueMembers.
     */
    cursor?: LeagueMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LeagueMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LeagueMembers.
     */
    skip?: number;
    distinct?: LeagueMemberScalarFieldEnum | LeagueMemberScalarFieldEnum[];
  };

  /**
   * LeagueMember create
   */
  export type LeagueMemberCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null;
    /**
     * The data needed to create a LeagueMember.
     */
    data: XOR<LeagueMemberCreateInput, LeagueMemberUncheckedCreateInput>;
  };

  /**
   * LeagueMember createMany
   */
  export type LeagueMemberCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many LeagueMembers.
     */
    data: LeagueMemberCreateManyInput | LeagueMemberCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * LeagueMember createManyAndReturn
   */
  export type LeagueMemberCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null;
    /**
     * The data used to create many LeagueMembers.
     */
    data: LeagueMemberCreateManyInput | LeagueMemberCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * LeagueMember update
   */
  export type LeagueMemberUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null;
    /**
     * The data needed to update a LeagueMember.
     */
    data: XOR<LeagueMemberUpdateInput, LeagueMemberUncheckedUpdateInput>;
    /**
     * Choose, which LeagueMember to update.
     */
    where: LeagueMemberWhereUniqueInput;
  };

  /**
   * LeagueMember updateMany
   */
  export type LeagueMemberUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update LeagueMembers.
     */
    data: XOR<LeagueMemberUpdateManyMutationInput, LeagueMemberUncheckedUpdateManyInput>;
    /**
     * Filter which LeagueMembers to update
     */
    where?: LeagueMemberWhereInput;
    /**
     * Limit how many LeagueMembers to update.
     */
    limit?: number;
  };

  /**
   * LeagueMember updateManyAndReturn
   */
  export type LeagueMemberUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null;
    /**
     * The data used to update LeagueMembers.
     */
    data: XOR<LeagueMemberUpdateManyMutationInput, LeagueMemberUncheckedUpdateManyInput>;
    /**
     * Filter which LeagueMembers to update
     */
    where?: LeagueMemberWhereInput;
    /**
     * Limit how many LeagueMembers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * LeagueMember upsert
   */
  export type LeagueMemberUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null;
    /**
     * The filter to search for the LeagueMember to update in case it exists.
     */
    where: LeagueMemberWhereUniqueInput;
    /**
     * In case the LeagueMember found by the `where` argument doesn't exist, create a new LeagueMember with this data.
     */
    create: XOR<LeagueMemberCreateInput, LeagueMemberUncheckedCreateInput>;
    /**
     * In case the LeagueMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeagueMemberUpdateInput, LeagueMemberUncheckedUpdateInput>;
  };

  /**
   * LeagueMember delete
   */
  export type LeagueMemberDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null;
    /**
     * Filter which LeagueMember to delete.
     */
    where: LeagueMemberWhereUniqueInput;
  };

  /**
   * LeagueMember deleteMany
   */
  export type LeagueMemberDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which LeagueMembers to delete
     */
    where?: LeagueMemberWhereInput;
    /**
     * Limit how many LeagueMembers to delete.
     */
    limit?: number;
  };

  /**
   * LeagueMember.rosters
   */
  export type LeagueMember$rostersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Roster
     */
    select?: RosterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Roster
     */
    omit?: RosterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterInclude<ExtArgs> | null;
    where?: RosterWhereInput;
    orderBy?: RosterOrderByWithRelationInput | RosterOrderByWithRelationInput[];
    cursor?: RosterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RosterScalarFieldEnum | RosterScalarFieldEnum[];
  };

  /**
   * LeagueMember without action
   */
  export type LeagueMemberDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null;
  };

  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null;
    _avg: PlayerAvgAggregateOutputType | null;
    _sum: PlayerSumAggregateOutputType | null;
    _min: PlayerMinAggregateOutputType | null;
    _max: PlayerMaxAggregateOutputType | null;
  };

  export type PlayerAvgAggregateOutputType = {
    jerseyNumber: number | null;
    byeWeek: number | null;
  };

  export type PlayerSumAggregateOutputType = {
    jerseyNumber: number | null;
    byeWeek: number | null;
  };

  export type PlayerMinAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    nflverseId: string | null;
    sleeperId: string | null;
    yahooId: string | null;
    espnId: string | null;
    firstName: string | null;
    lastName: string | null;
    fullName: string | null;
    position: $Enums.Position | null;
    team: string | null;
    jerseyNumber: number | null;
    status: $Enums.PlayerStatus | null;
    injuryStatus: string | null;
    byeWeek: number | null;
  };

  export type PlayerMaxAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    nflverseId: string | null;
    sleeperId: string | null;
    yahooId: string | null;
    espnId: string | null;
    firstName: string | null;
    lastName: string | null;
    fullName: string | null;
    position: $Enums.Position | null;
    team: string | null;
    jerseyNumber: number | null;
    status: $Enums.PlayerStatus | null;
    injuryStatus: string | null;
    byeWeek: number | null;
  };

  export type PlayerCountAggregateOutputType = {
    id: number;
    createdAt: number;
    updatedAt: number;
    nflverseId: number;
    sleeperId: number;
    yahooId: number;
    espnId: number;
    firstName: number;
    lastName: number;
    fullName: number;
    position: number;
    team: number;
    jerseyNumber: number;
    status: number;
    injuryStatus: number;
    byeWeek: number;
    _all: number;
  };

  export type PlayerAvgAggregateInputType = {
    jerseyNumber?: true;
    byeWeek?: true;
  };

  export type PlayerSumAggregateInputType = {
    jerseyNumber?: true;
    byeWeek?: true;
  };

  export type PlayerMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    nflverseId?: true;
    sleeperId?: true;
    yahooId?: true;
    espnId?: true;
    firstName?: true;
    lastName?: true;
    fullName?: true;
    position?: true;
    team?: true;
    jerseyNumber?: true;
    status?: true;
    injuryStatus?: true;
    byeWeek?: true;
  };

  export type PlayerMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    nflverseId?: true;
    sleeperId?: true;
    yahooId?: true;
    espnId?: true;
    firstName?: true;
    lastName?: true;
    fullName?: true;
    position?: true;
    team?: true;
    jerseyNumber?: true;
    status?: true;
    injuryStatus?: true;
    byeWeek?: true;
  };

  export type PlayerCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    nflverseId?: true;
    sleeperId?: true;
    yahooId?: true;
    espnId?: true;
    firstName?: true;
    lastName?: true;
    fullName?: true;
    position?: true;
    team?: true;
    jerseyNumber?: true;
    status?: true;
    injuryStatus?: true;
    byeWeek?: true;
    _all?: true;
  };

  export type PlayerAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Players from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Players.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Players
     **/
    _count?: true | PlayerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PlayerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PlayerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PlayerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PlayerMaxAggregateInputType;
  };

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
    [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>;
  };

  export type PlayerGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PlayerWhereInput;
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[];
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum;
    having?: PlayerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlayerCountAggregateInputType | true;
    _avg?: PlayerAvgAggregateInputType;
    _sum?: PlayerSumAggregateInputType;
    _min?: PlayerMinAggregateInputType;
    _max?: PlayerMaxAggregateInputType;
  };

  export type PlayerGroupByOutputType = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nflverseId: string | null;
    sleeperId: string | null;
    yahooId: string | null;
    espnId: string | null;
    firstName: string;
    lastName: string;
    fullName: string;
    position: $Enums.Position;
    team: string | null;
    jerseyNumber: number | null;
    status: $Enums.PlayerStatus;
    injuryStatus: string | null;
    byeWeek: number | null;
    _count: PlayerCountAggregateOutputType | null;
    _avg: PlayerAvgAggregateOutputType | null;
    _sum: PlayerSumAggregateOutputType | null;
    _min: PlayerMinAggregateOutputType | null;
    _max: PlayerMaxAggregateOutputType | null;
  };

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PlayerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
          : GetScalarType<T[P], PlayerGroupByOutputType[P]>;
      }
    >
  >;

  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        nflverseId?: boolean;
        sleeperId?: boolean;
        yahooId?: boolean;
        espnId?: boolean;
        firstName?: boolean;
        lastName?: boolean;
        fullName?: boolean;
        position?: boolean;
        team?: boolean;
        jerseyNumber?: boolean;
        status?: boolean;
        injuryStatus?: boolean;
        byeWeek?: boolean;
        rosterPlayers?: boolean | Player$rosterPlayersArgs<ExtArgs>;
        _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['player']
    >;

  export type PlayerSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      nflverseId?: boolean;
      sleeperId?: boolean;
      yahooId?: boolean;
      espnId?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      fullName?: boolean;
      position?: boolean;
      team?: boolean;
      jerseyNumber?: boolean;
      status?: boolean;
      injuryStatus?: boolean;
      byeWeek?: boolean;
    },
    ExtArgs['result']['player']
  >;

  export type PlayerSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      nflverseId?: boolean;
      sleeperId?: boolean;
      yahooId?: boolean;
      espnId?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      fullName?: boolean;
      position?: boolean;
      team?: boolean;
      jerseyNumber?: boolean;
      status?: boolean;
      injuryStatus?: boolean;
      byeWeek?: boolean;
    },
    ExtArgs['result']['player']
  >;

  export type PlayerSelectScalar = {
    id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    nflverseId?: boolean;
    sleeperId?: boolean;
    yahooId?: boolean;
    espnId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    fullName?: boolean;
    position?: boolean;
    team?: boolean;
    jerseyNumber?: boolean;
    status?: boolean;
    injuryStatus?: boolean;
    byeWeek?: boolean;
  };

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'createdAt'
      | 'updatedAt'
      | 'nflverseId'
      | 'sleeperId'
      | 'yahooId'
      | 'espnId'
      | 'firstName'
      | 'lastName'
      | 'fullName'
      | 'position'
      | 'team'
      | 'jerseyNumber'
      | 'status'
      | 'injuryStatus'
      | 'byeWeek',
      ExtArgs['result']['player']
    >;
  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rosterPlayers?: boolean | Player$rosterPlayersArgs<ExtArgs>;
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type PlayerIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type PlayerIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Player';
    objects: {
      rosterPlayers: Prisma.$RosterPlayerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        nflverseId: string | null;
        sleeperId: string | null;
        yahooId: string | null;
        espnId: string | null;
        firstName: string;
        lastName: string;
        fullName: string;
        position: $Enums.Position;
        team: string | null;
        jerseyNumber: number | null;
        status: $Enums.PlayerStatus;
        injuryStatus: string | null;
        byeWeek: number | null;
      },
      ExtArgs['result']['player']
    >;
    composites: {};
  };

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> =
    $Result.GetResult<Prisma.$PlayerPayload, S>;

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    PlayerFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: PlayerCountAggregateInputType | true;
  };

  export interface PlayerDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player']; meta: { name: 'Player' } };
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(
      args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>
    ): Prisma__PlayerClient<
      $Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlayerClient<
      $Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(
      args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>
    ): Prisma__PlayerClient<
      $Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlayerClient<
      $Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     *
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PlayerFindManyArgs>(
      args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     *
     */
    create<T extends PlayerCreateArgs>(
      args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>
    ): Prisma__PlayerClient<
      $Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PlayerCreateManyArgs>(
      args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     *
     */
    delete<T extends PlayerDeleteArgs>(
      args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>
    ): Prisma__PlayerClient<
      $Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PlayerUpdateArgs>(
      args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>
    ): Prisma__PlayerClient<
      $Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PlayerDeleteManyArgs>(
      args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PlayerUpdateManyArgs>(
      args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PlayerUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PlayerUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(
      args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>
    ): Prisma__PlayerClient<
      $Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
     **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PlayerAggregateArgs>(
      args: Subset<T, PlayerAggregateArgs>
    ): Prisma.PrismaPromise<GetPlayerAggregateType<T>>;

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Player model
     */
    readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    rosterPlayers<T extends Player$rosterPlayersArgs<ExtArgs> = {}>(
      args?: Subset<T, Player$rosterPlayersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$RosterPlayerPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Player model
   */
  interface PlayerFieldRefs {
    readonly id: FieldRef<'Player', 'String'>;
    readonly createdAt: FieldRef<'Player', 'DateTime'>;
    readonly updatedAt: FieldRef<'Player', 'DateTime'>;
    readonly nflverseId: FieldRef<'Player', 'String'>;
    readonly sleeperId: FieldRef<'Player', 'String'>;
    readonly yahooId: FieldRef<'Player', 'String'>;
    readonly espnId: FieldRef<'Player', 'String'>;
    readonly firstName: FieldRef<'Player', 'String'>;
    readonly lastName: FieldRef<'Player', 'String'>;
    readonly fullName: FieldRef<'Player', 'String'>;
    readonly position: FieldRef<'Player', 'Position'>;
    readonly team: FieldRef<'Player', 'String'>;
    readonly jerseyNumber: FieldRef<'Player', 'Int'>;
    readonly status: FieldRef<'Player', 'PlayerStatus'>;
    readonly injuryStatus: FieldRef<'Player', 'String'>;
    readonly byeWeek: FieldRef<'Player', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null;
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput;
  };

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null;
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput;
  };

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null;
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Players from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Players.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[];
  };

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null;
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Players from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Players.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[];
  };

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null;
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Players from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Players.
     */
    skip?: number;
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[];
  };

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Player
       */
      select?: PlayerSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Player
       */
      omit?: PlayerOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: PlayerInclude<ExtArgs> | null;
      /**
       * The data needed to create a Player.
       */
      data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>;
    };

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null;
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Player
       */
      select?: PlayerSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Player
       */
      omit?: PlayerOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: PlayerInclude<ExtArgs> | null;
      /**
       * The data needed to update a Player.
       */
      data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>;
      /**
       * Choose, which Player to update.
       */
      where: PlayerWhereUniqueInput;
    };

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>;
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput;
    /**
     * Limit how many Players to update.
     */
    limit?: number;
  };

  /**
   * Player updateManyAndReturn
   */
  export type PlayerUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null;
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>;
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput;
    /**
     * Limit how many Players to update.
     */
    limit?: number;
  };

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Player
       */
      select?: PlayerSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Player
       */
      omit?: PlayerOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: PlayerInclude<ExtArgs> | null;
      /**
       * The filter to search for the Player to update in case it exists.
       */
      where: PlayerWhereUniqueInput;
      /**
       * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
       */
      create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>;
      /**
       * In case the Player was found with the provided `where` argument, update it with this data.
       */
      update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>;
    };

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Player
       */
      select?: PlayerSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Player
       */
      omit?: PlayerOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: PlayerInclude<ExtArgs> | null;
      /**
       * Filter which Player to delete.
       */
      where: PlayerWhereUniqueInput;
    };

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput;
    /**
     * Limit how many Players to delete.
     */
    limit?: number;
  };

  /**
   * Player.rosterPlayers
   */
  export type Player$rosterPlayersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null;
    where?: RosterPlayerWhereInput;
    orderBy?: RosterPlayerOrderByWithRelationInput | RosterPlayerOrderByWithRelationInput[];
    cursor?: RosterPlayerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RosterPlayerScalarFieldEnum | RosterPlayerScalarFieldEnum[];
  };

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null;
  };

  /**
   * Model Roster
   */

  export type AggregateRoster = {
    _count: RosterCountAggregateOutputType | null;
    _avg: RosterAvgAggregateOutputType | null;
    _sum: RosterSumAggregateOutputType | null;
    _min: RosterMinAggregateOutputType | null;
    _max: RosterMaxAggregateOutputType | null;
  };

  export type RosterAvgAggregateOutputType = {
    week: number | null;
    season: number | null;
  };

  export type RosterSumAggregateOutputType = {
    week: number | null;
    season: number | null;
  };

  export type RosterMinAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    leagueId: string | null;
    memberId: string | null;
    week: number | null;
    season: number | null;
  };

  export type RosterMaxAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    leagueId: string | null;
    memberId: string | null;
    week: number | null;
    season: number | null;
  };

  export type RosterCountAggregateOutputType = {
    id: number;
    createdAt: number;
    updatedAt: number;
    leagueId: number;
    memberId: number;
    week: number;
    season: number;
    _all: number;
  };

  export type RosterAvgAggregateInputType = {
    week?: true;
    season?: true;
  };

  export type RosterSumAggregateInputType = {
    week?: true;
    season?: true;
  };

  export type RosterMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    leagueId?: true;
    memberId?: true;
    week?: true;
    season?: true;
  };

  export type RosterMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    leagueId?: true;
    memberId?: true;
    week?: true;
    season?: true;
  };

  export type RosterCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    leagueId?: true;
    memberId?: true;
    week?: true;
    season?: true;
    _all?: true;
  };

  export type RosterAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Roster to aggregate.
     */
    where?: RosterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Rosters to fetch.
     */
    orderBy?: RosterOrderByWithRelationInput | RosterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RosterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Rosters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Rosters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Rosters
     **/
    _count?: true | RosterCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RosterAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RosterSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RosterMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RosterMaxAggregateInputType;
  };

  export type GetRosterAggregateType<T extends RosterAggregateArgs> = {
    [P in keyof T & keyof AggregateRoster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoster[P]>
      : GetScalarType<T[P], AggregateRoster[P]>;
  };

  export type RosterGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RosterWhereInput;
    orderBy?: RosterOrderByWithAggregationInput | RosterOrderByWithAggregationInput[];
    by: RosterScalarFieldEnum[] | RosterScalarFieldEnum;
    having?: RosterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RosterCountAggregateInputType | true;
    _avg?: RosterAvgAggregateInputType;
    _sum?: RosterSumAggregateInputType;
    _min?: RosterMinAggregateInputType;
    _max?: RosterMaxAggregateInputType;
  };

  export type RosterGroupByOutputType = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    leagueId: string;
    memberId: string;
    week: number;
    season: number;
    _count: RosterCountAggregateOutputType | null;
    _avg: RosterAvgAggregateOutputType | null;
    _sum: RosterSumAggregateOutputType | null;
    _min: RosterMinAggregateOutputType | null;
    _max: RosterMaxAggregateOutputType | null;
  };

  type GetRosterGroupByPayload<T extends RosterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RosterGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RosterGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RosterGroupByOutputType[P]>
          : GetScalarType<T[P], RosterGroupByOutputType[P]>;
      }
    >
  >;

  export type RosterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        leagueId?: boolean;
        memberId?: boolean;
        week?: boolean;
        season?: boolean;
        league?: boolean | LeagueDefaultArgs<ExtArgs>;
        member?: boolean | LeagueMemberDefaultArgs<ExtArgs>;
        players?: boolean | Roster$playersArgs<ExtArgs>;
        _count?: boolean | RosterCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['roster']
    >;

  export type RosterSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      leagueId?: boolean;
      memberId?: boolean;
      week?: boolean;
      season?: boolean;
      league?: boolean | LeagueDefaultArgs<ExtArgs>;
      member?: boolean | LeagueMemberDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['roster']
  >;

  export type RosterSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      leagueId?: boolean;
      memberId?: boolean;
      week?: boolean;
      season?: boolean;
      league?: boolean | LeagueDefaultArgs<ExtArgs>;
      member?: boolean | LeagueMemberDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['roster']
  >;

  export type RosterSelectScalar = {
    id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    leagueId?: boolean;
    memberId?: boolean;
    week?: boolean;
    season?: boolean;
  };

  export type RosterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'createdAt' | 'updatedAt' | 'leagueId' | 'memberId' | 'week' | 'season',
      ExtArgs['result']['roster']
    >;
  export type RosterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    league?: boolean | LeagueDefaultArgs<ExtArgs>;
    member?: boolean | LeagueMemberDefaultArgs<ExtArgs>;
    players?: boolean | Roster$playersArgs<ExtArgs>;
    _count?: boolean | RosterCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type RosterIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    league?: boolean | LeagueDefaultArgs<ExtArgs>;
    member?: boolean | LeagueMemberDefaultArgs<ExtArgs>;
  };
  export type RosterIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    league?: boolean | LeagueDefaultArgs<ExtArgs>;
    member?: boolean | LeagueMemberDefaultArgs<ExtArgs>;
  };

  export type $RosterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Roster';
    objects: {
      league: Prisma.$LeaguePayload<ExtArgs>;
      member: Prisma.$LeagueMemberPayload<ExtArgs>;
      players: Prisma.$RosterPlayerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        leagueId: string;
        memberId: string;
        week: number;
        season: number;
      },
      ExtArgs['result']['roster']
    >;
    composites: {};
  };

  type RosterGetPayload<S extends boolean | null | undefined | RosterDefaultArgs> =
    $Result.GetResult<Prisma.$RosterPayload, S>;

  type RosterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    RosterFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: RosterCountAggregateInputType | true;
  };

  export interface RosterDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roster']; meta: { name: 'Roster' } };
    /**
     * Find zero or one Roster that matches the filter.
     * @param {RosterFindUniqueArgs} args - Arguments to find a Roster
     * @example
     * // Get one Roster
     * const roster = await prisma.roster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RosterFindUniqueArgs>(
      args: SelectSubset<T, RosterFindUniqueArgs<ExtArgs>>
    ): Prisma__RosterClient<
      $Result.GetResult<Prisma.$RosterPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Roster that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RosterFindUniqueOrThrowArgs} args - Arguments to find a Roster
     * @example
     * // Get one Roster
     * const roster = await prisma.roster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RosterFindUniqueOrThrowArgs>(
      args: SelectSubset<T, RosterFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RosterClient<
      $Result.GetResult<Prisma.$RosterPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Roster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterFindFirstArgs} args - Arguments to find a Roster
     * @example
     * // Get one Roster
     * const roster = await prisma.roster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RosterFindFirstArgs>(
      args?: SelectSubset<T, RosterFindFirstArgs<ExtArgs>>
    ): Prisma__RosterClient<
      $Result.GetResult<Prisma.$RosterPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Roster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterFindFirstOrThrowArgs} args - Arguments to find a Roster
     * @example
     * // Get one Roster
     * const roster = await prisma.roster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RosterFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RosterFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RosterClient<
      $Result.GetResult<Prisma.$RosterPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Rosters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rosters
     * const rosters = await prisma.roster.findMany()
     *
     * // Get first 10 Rosters
     * const rosters = await prisma.roster.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const rosterWithIdOnly = await prisma.roster.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RosterFindManyArgs>(
      args?: SelectSubset<T, RosterFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$RosterPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Roster.
     * @param {RosterCreateArgs} args - Arguments to create a Roster.
     * @example
     * // Create one Roster
     * const Roster = await prisma.roster.create({
     *   data: {
     *     // ... data to create a Roster
     *   }
     * })
     *
     */
    create<T extends RosterCreateArgs>(
      args: SelectSubset<T, RosterCreateArgs<ExtArgs>>
    ): Prisma__RosterClient<
      $Result.GetResult<Prisma.$RosterPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Rosters.
     * @param {RosterCreateManyArgs} args - Arguments to create many Rosters.
     * @example
     * // Create many Rosters
     * const roster = await prisma.roster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RosterCreateManyArgs>(
      args?: SelectSubset<T, RosterCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Rosters and returns the data saved in the database.
     * @param {RosterCreateManyAndReturnArgs} args - Arguments to create many Rosters.
     * @example
     * // Create many Rosters
     * const roster = await prisma.roster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Rosters and only return the `id`
     * const rosterWithIdOnly = await prisma.roster.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RosterCreateManyAndReturnArgs>(
      args?: SelectSubset<T, RosterCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$RosterPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a Roster.
     * @param {RosterDeleteArgs} args - Arguments to delete one Roster.
     * @example
     * // Delete one Roster
     * const Roster = await prisma.roster.delete({
     *   where: {
     *     // ... filter to delete one Roster
     *   }
     * })
     *
     */
    delete<T extends RosterDeleteArgs>(
      args: SelectSubset<T, RosterDeleteArgs<ExtArgs>>
    ): Prisma__RosterClient<
      $Result.GetResult<Prisma.$RosterPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Roster.
     * @param {RosterUpdateArgs} args - Arguments to update one Roster.
     * @example
     * // Update one Roster
     * const roster = await prisma.roster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RosterUpdateArgs>(
      args: SelectSubset<T, RosterUpdateArgs<ExtArgs>>
    ): Prisma__RosterClient<
      $Result.GetResult<Prisma.$RosterPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Rosters.
     * @param {RosterDeleteManyArgs} args - Arguments to filter Rosters to delete.
     * @example
     * // Delete a few Rosters
     * const { count } = await prisma.roster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RosterDeleteManyArgs>(
      args?: SelectSubset<T, RosterDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Rosters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rosters
     * const roster = await prisma.roster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RosterUpdateManyArgs>(
      args: SelectSubset<T, RosterUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Rosters and returns the data updated in the database.
     * @param {RosterUpdateManyAndReturnArgs} args - Arguments to update many Rosters.
     * @example
     * // Update many Rosters
     * const roster = await prisma.roster.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Rosters and only return the `id`
     * const rosterWithIdOnly = await prisma.roster.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends RosterUpdateManyAndReturnArgs>(
      args: SelectSubset<T, RosterUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$RosterPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one Roster.
     * @param {RosterUpsertArgs} args - Arguments to update or create a Roster.
     * @example
     * // Update or create a Roster
     * const roster = await prisma.roster.upsert({
     *   create: {
     *     // ... data to create a Roster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roster we want to update
     *   }
     * })
     */
    upsert<T extends RosterUpsertArgs>(
      args: SelectSubset<T, RosterUpsertArgs<ExtArgs>>
    ): Prisma__RosterClient<
      $Result.GetResult<Prisma.$RosterPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Rosters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterCountArgs} args - Arguments to filter Rosters to count.
     * @example
     * // Count the number of Rosters
     * const count = await prisma.roster.count({
     *   where: {
     *     // ... the filter for the Rosters we want to count
     *   }
     * })
     **/
    count<T extends RosterCountArgs>(
      args?: Subset<T, RosterCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RosterCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Roster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RosterAggregateArgs>(
      args: Subset<T, RosterAggregateArgs>
    ): Prisma.PrismaPromise<GetRosterAggregateType<T>>;

    /**
     * Group by Roster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends RosterGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RosterGroupByArgs['orderBy'] }
        : { orderBy?: RosterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, RosterGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetRosterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Roster model
     */
    readonly fields: RosterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RosterClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    league<T extends LeagueDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, LeagueDefaultArgs<ExtArgs>>
    ): Prisma__LeagueClient<
      | $Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    member<T extends LeagueMemberDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, LeagueMemberDefaultArgs<ExtArgs>>
    ): Prisma__LeagueMemberClient<
      | $Result.GetResult<
          Prisma.$LeagueMemberPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    players<T extends Roster$playersArgs<ExtArgs> = {}>(
      args?: Subset<T, Roster$playersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$RosterPlayerPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Roster model
   */
  interface RosterFieldRefs {
    readonly id: FieldRef<'Roster', 'String'>;
    readonly createdAt: FieldRef<'Roster', 'DateTime'>;
    readonly updatedAt: FieldRef<'Roster', 'DateTime'>;
    readonly leagueId: FieldRef<'Roster', 'String'>;
    readonly memberId: FieldRef<'Roster', 'String'>;
    readonly week: FieldRef<'Roster', 'Int'>;
    readonly season: FieldRef<'Roster', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Roster findUnique
   */
  export type RosterFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Roster
     */
    select?: RosterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Roster
     */
    omit?: RosterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterInclude<ExtArgs> | null;
    /**
     * Filter, which Roster to fetch.
     */
    where: RosterWhereUniqueInput;
  };

  /**
   * Roster findUniqueOrThrow
   */
  export type RosterFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Roster
     */
    select?: RosterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Roster
     */
    omit?: RosterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterInclude<ExtArgs> | null;
    /**
     * Filter, which Roster to fetch.
     */
    where: RosterWhereUniqueInput;
  };

  /**
   * Roster findFirst
   */
  export type RosterFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Roster
     */
    select?: RosterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Roster
     */
    omit?: RosterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterInclude<ExtArgs> | null;
    /**
     * Filter, which Roster to fetch.
     */
    where?: RosterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Rosters to fetch.
     */
    orderBy?: RosterOrderByWithRelationInput | RosterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Rosters.
     */
    cursor?: RosterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Rosters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Rosters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Rosters.
     */
    distinct?: RosterScalarFieldEnum | RosterScalarFieldEnum[];
  };

  /**
   * Roster findFirstOrThrow
   */
  export type RosterFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Roster
     */
    select?: RosterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Roster
     */
    omit?: RosterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterInclude<ExtArgs> | null;
    /**
     * Filter, which Roster to fetch.
     */
    where?: RosterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Rosters to fetch.
     */
    orderBy?: RosterOrderByWithRelationInput | RosterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Rosters.
     */
    cursor?: RosterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Rosters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Rosters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Rosters.
     */
    distinct?: RosterScalarFieldEnum | RosterScalarFieldEnum[];
  };

  /**
   * Roster findMany
   */
  export type RosterFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Roster
     */
    select?: RosterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Roster
     */
    omit?: RosterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterInclude<ExtArgs> | null;
    /**
     * Filter, which Rosters to fetch.
     */
    where?: RosterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Rosters to fetch.
     */
    orderBy?: RosterOrderByWithRelationInput | RosterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Rosters.
     */
    cursor?: RosterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Rosters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Rosters.
     */
    skip?: number;
    distinct?: RosterScalarFieldEnum | RosterScalarFieldEnum[];
  };

  /**
   * Roster create
   */
  export type RosterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Roster
       */
      select?: RosterSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Roster
       */
      omit?: RosterOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: RosterInclude<ExtArgs> | null;
      /**
       * The data needed to create a Roster.
       */
      data: XOR<RosterCreateInput, RosterUncheckedCreateInput>;
    };

  /**
   * Roster createMany
   */
  export type RosterCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Rosters.
     */
    data: RosterCreateManyInput | RosterCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Roster createManyAndReturn
   */
  export type RosterCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Roster
     */
    select?: RosterSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Roster
     */
    omit?: RosterOmit<ExtArgs> | null;
    /**
     * The data used to create many Rosters.
     */
    data: RosterCreateManyInput | RosterCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Roster update
   */
  export type RosterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Roster
       */
      select?: RosterSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Roster
       */
      omit?: RosterOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: RosterInclude<ExtArgs> | null;
      /**
       * The data needed to update a Roster.
       */
      data: XOR<RosterUpdateInput, RosterUncheckedUpdateInput>;
      /**
       * Choose, which Roster to update.
       */
      where: RosterWhereUniqueInput;
    };

  /**
   * Roster updateMany
   */
  export type RosterUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Rosters.
     */
    data: XOR<RosterUpdateManyMutationInput, RosterUncheckedUpdateManyInput>;
    /**
     * Filter which Rosters to update
     */
    where?: RosterWhereInput;
    /**
     * Limit how many Rosters to update.
     */
    limit?: number;
  };

  /**
   * Roster updateManyAndReturn
   */
  export type RosterUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Roster
     */
    select?: RosterSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Roster
     */
    omit?: RosterOmit<ExtArgs> | null;
    /**
     * The data used to update Rosters.
     */
    data: XOR<RosterUpdateManyMutationInput, RosterUncheckedUpdateManyInput>;
    /**
     * Filter which Rosters to update
     */
    where?: RosterWhereInput;
    /**
     * Limit how many Rosters to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Roster upsert
   */
  export type RosterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Roster
       */
      select?: RosterSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Roster
       */
      omit?: RosterOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: RosterInclude<ExtArgs> | null;
      /**
       * The filter to search for the Roster to update in case it exists.
       */
      where: RosterWhereUniqueInput;
      /**
       * In case the Roster found by the `where` argument doesn't exist, create a new Roster with this data.
       */
      create: XOR<RosterCreateInput, RosterUncheckedCreateInput>;
      /**
       * In case the Roster was found with the provided `where` argument, update it with this data.
       */
      update: XOR<RosterUpdateInput, RosterUncheckedUpdateInput>;
    };

  /**
   * Roster delete
   */
  export type RosterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Roster
       */
      select?: RosterSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Roster
       */
      omit?: RosterOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: RosterInclude<ExtArgs> | null;
      /**
       * Filter which Roster to delete.
       */
      where: RosterWhereUniqueInput;
    };

  /**
   * Roster deleteMany
   */
  export type RosterDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Rosters to delete
     */
    where?: RosterWhereInput;
    /**
     * Limit how many Rosters to delete.
     */
    limit?: number;
  };

  /**
   * Roster.players
   */
  export type Roster$playersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null;
    where?: RosterPlayerWhereInput;
    orderBy?: RosterPlayerOrderByWithRelationInput | RosterPlayerOrderByWithRelationInput[];
    cursor?: RosterPlayerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RosterPlayerScalarFieldEnum | RosterPlayerScalarFieldEnum[];
  };

  /**
   * Roster without action
   */
  export type RosterDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Roster
     */
    select?: RosterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Roster
     */
    omit?: RosterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterInclude<ExtArgs> | null;
  };

  /**
   * Model RosterPlayer
   */

  export type AggregateRosterPlayer = {
    _count: RosterPlayerCountAggregateOutputType | null;
    _min: RosterPlayerMinAggregateOutputType | null;
    _max: RosterPlayerMaxAggregateOutputType | null;
  };

  export type RosterPlayerMinAggregateOutputType = {
    id: string | null;
    rosterId: string | null;
    playerId: string | null;
    slot: $Enums.RosterSlot | null;
  };

  export type RosterPlayerMaxAggregateOutputType = {
    id: string | null;
    rosterId: string | null;
    playerId: string | null;
    slot: $Enums.RosterSlot | null;
  };

  export type RosterPlayerCountAggregateOutputType = {
    id: number;
    rosterId: number;
    playerId: number;
    slot: number;
    _all: number;
  };

  export type RosterPlayerMinAggregateInputType = {
    id?: true;
    rosterId?: true;
    playerId?: true;
    slot?: true;
  };

  export type RosterPlayerMaxAggregateInputType = {
    id?: true;
    rosterId?: true;
    playerId?: true;
    slot?: true;
  };

  export type RosterPlayerCountAggregateInputType = {
    id?: true;
    rosterId?: true;
    playerId?: true;
    slot?: true;
    _all?: true;
  };

  export type RosterPlayerAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which RosterPlayer to aggregate.
     */
    where?: RosterPlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RosterPlayers to fetch.
     */
    orderBy?: RosterPlayerOrderByWithRelationInput | RosterPlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RosterPlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RosterPlayers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RosterPlayers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RosterPlayers
     **/
    _count?: true | RosterPlayerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RosterPlayerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RosterPlayerMaxAggregateInputType;
  };

  export type GetRosterPlayerAggregateType<T extends RosterPlayerAggregateArgs> = {
    [P in keyof T & keyof AggregateRosterPlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRosterPlayer[P]>
      : GetScalarType<T[P], AggregateRosterPlayer[P]>;
  };

  export type RosterPlayerGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RosterPlayerWhereInput;
    orderBy?: RosterPlayerOrderByWithAggregationInput | RosterPlayerOrderByWithAggregationInput[];
    by: RosterPlayerScalarFieldEnum[] | RosterPlayerScalarFieldEnum;
    having?: RosterPlayerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RosterPlayerCountAggregateInputType | true;
    _min?: RosterPlayerMinAggregateInputType;
    _max?: RosterPlayerMaxAggregateInputType;
  };

  export type RosterPlayerGroupByOutputType = {
    id: string;
    rosterId: string;
    playerId: string;
    slot: $Enums.RosterSlot;
    _count: RosterPlayerCountAggregateOutputType | null;
    _min: RosterPlayerMinAggregateOutputType | null;
    _max: RosterPlayerMaxAggregateOutputType | null;
  };

  type GetRosterPlayerGroupByPayload<T extends RosterPlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RosterPlayerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RosterPlayerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RosterPlayerGroupByOutputType[P]>
          : GetScalarType<T[P], RosterPlayerGroupByOutputType[P]>;
      }
    >
  >;

  export type RosterPlayerSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      rosterId?: boolean;
      playerId?: boolean;
      slot?: boolean;
      roster?: boolean | RosterDefaultArgs<ExtArgs>;
      player?: boolean | PlayerDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['rosterPlayer']
  >;

  export type RosterPlayerSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      rosterId?: boolean;
      playerId?: boolean;
      slot?: boolean;
      roster?: boolean | RosterDefaultArgs<ExtArgs>;
      player?: boolean | PlayerDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['rosterPlayer']
  >;

  export type RosterPlayerSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      rosterId?: boolean;
      playerId?: boolean;
      slot?: boolean;
      roster?: boolean | RosterDefaultArgs<ExtArgs>;
      player?: boolean | PlayerDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['rosterPlayer']
  >;

  export type RosterPlayerSelectScalar = {
    id?: boolean;
    rosterId?: boolean;
    playerId?: boolean;
    slot?: boolean;
  };

  export type RosterPlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'id' | 'rosterId' | 'playerId' | 'slot', ExtArgs['result']['rosterPlayer']>;
  export type RosterPlayerInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    roster?: boolean | RosterDefaultArgs<ExtArgs>;
    player?: boolean | PlayerDefaultArgs<ExtArgs>;
  };
  export type RosterPlayerIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    roster?: boolean | RosterDefaultArgs<ExtArgs>;
    player?: boolean | PlayerDefaultArgs<ExtArgs>;
  };
  export type RosterPlayerIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    roster?: boolean | RosterDefaultArgs<ExtArgs>;
    player?: boolean | PlayerDefaultArgs<ExtArgs>;
  };

  export type $RosterPlayerPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'RosterPlayer';
    objects: {
      roster: Prisma.$RosterPayload<ExtArgs>;
      player: Prisma.$PlayerPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        rosterId: string;
        playerId: string;
        slot: $Enums.RosterSlot;
      },
      ExtArgs['result']['rosterPlayer']
    >;
    composites: {};
  };

  type RosterPlayerGetPayload<S extends boolean | null | undefined | RosterPlayerDefaultArgs> =
    $Result.GetResult<Prisma.$RosterPlayerPayload, S>;

  type RosterPlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RosterPlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RosterPlayerCountAggregateInputType | true;
    };

  export interface RosterPlayerDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['RosterPlayer'];
      meta: { name: 'RosterPlayer' };
    };
    /**
     * Find zero or one RosterPlayer that matches the filter.
     * @param {RosterPlayerFindUniqueArgs} args - Arguments to find a RosterPlayer
     * @example
     * // Get one RosterPlayer
     * const rosterPlayer = await prisma.rosterPlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RosterPlayerFindUniqueArgs>(
      args: SelectSubset<T, RosterPlayerFindUniqueArgs<ExtArgs>>
    ): Prisma__RosterPlayerClient<
      $Result.GetResult<
        Prisma.$RosterPlayerPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one RosterPlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RosterPlayerFindUniqueOrThrowArgs} args - Arguments to find a RosterPlayer
     * @example
     * // Get one RosterPlayer
     * const rosterPlayer = await prisma.rosterPlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RosterPlayerFindUniqueOrThrowArgs>(
      args: SelectSubset<T, RosterPlayerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RosterPlayerClient<
      $Result.GetResult<
        Prisma.$RosterPlayerPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first RosterPlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterPlayerFindFirstArgs} args - Arguments to find a RosterPlayer
     * @example
     * // Get one RosterPlayer
     * const rosterPlayer = await prisma.rosterPlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RosterPlayerFindFirstArgs>(
      args?: SelectSubset<T, RosterPlayerFindFirstArgs<ExtArgs>>
    ): Prisma__RosterPlayerClient<
      $Result.GetResult<
        Prisma.$RosterPlayerPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first RosterPlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterPlayerFindFirstOrThrowArgs} args - Arguments to find a RosterPlayer
     * @example
     * // Get one RosterPlayer
     * const rosterPlayer = await prisma.rosterPlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RosterPlayerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RosterPlayerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RosterPlayerClient<
      $Result.GetResult<
        Prisma.$RosterPlayerPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more RosterPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterPlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RosterPlayers
     * const rosterPlayers = await prisma.rosterPlayer.findMany()
     *
     * // Get first 10 RosterPlayers
     * const rosterPlayers = await prisma.rosterPlayer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const rosterPlayerWithIdOnly = await prisma.rosterPlayer.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RosterPlayerFindManyArgs>(
      args?: SelectSubset<T, RosterPlayerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$RosterPlayerPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a RosterPlayer.
     * @param {RosterPlayerCreateArgs} args - Arguments to create a RosterPlayer.
     * @example
     * // Create one RosterPlayer
     * const RosterPlayer = await prisma.rosterPlayer.create({
     *   data: {
     *     // ... data to create a RosterPlayer
     *   }
     * })
     *
     */
    create<T extends RosterPlayerCreateArgs>(
      args: SelectSubset<T, RosterPlayerCreateArgs<ExtArgs>>
    ): Prisma__RosterPlayerClient<
      $Result.GetResult<Prisma.$RosterPlayerPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many RosterPlayers.
     * @param {RosterPlayerCreateManyArgs} args - Arguments to create many RosterPlayers.
     * @example
     * // Create many RosterPlayers
     * const rosterPlayer = await prisma.rosterPlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RosterPlayerCreateManyArgs>(
      args?: SelectSubset<T, RosterPlayerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many RosterPlayers and returns the data saved in the database.
     * @param {RosterPlayerCreateManyAndReturnArgs} args - Arguments to create many RosterPlayers.
     * @example
     * // Create many RosterPlayers
     * const rosterPlayer = await prisma.rosterPlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RosterPlayers and only return the `id`
     * const rosterPlayerWithIdOnly = await prisma.rosterPlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RosterPlayerCreateManyAndReturnArgs>(
      args?: SelectSubset<T, RosterPlayerCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RosterPlayerPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a RosterPlayer.
     * @param {RosterPlayerDeleteArgs} args - Arguments to delete one RosterPlayer.
     * @example
     * // Delete one RosterPlayer
     * const RosterPlayer = await prisma.rosterPlayer.delete({
     *   where: {
     *     // ... filter to delete one RosterPlayer
     *   }
     * })
     *
     */
    delete<T extends RosterPlayerDeleteArgs>(
      args: SelectSubset<T, RosterPlayerDeleteArgs<ExtArgs>>
    ): Prisma__RosterPlayerClient<
      $Result.GetResult<Prisma.$RosterPlayerPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one RosterPlayer.
     * @param {RosterPlayerUpdateArgs} args - Arguments to update one RosterPlayer.
     * @example
     * // Update one RosterPlayer
     * const rosterPlayer = await prisma.rosterPlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RosterPlayerUpdateArgs>(
      args: SelectSubset<T, RosterPlayerUpdateArgs<ExtArgs>>
    ): Prisma__RosterPlayerClient<
      $Result.GetResult<Prisma.$RosterPlayerPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more RosterPlayers.
     * @param {RosterPlayerDeleteManyArgs} args - Arguments to filter RosterPlayers to delete.
     * @example
     * // Delete a few RosterPlayers
     * const { count } = await prisma.rosterPlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RosterPlayerDeleteManyArgs>(
      args?: SelectSubset<T, RosterPlayerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RosterPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterPlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RosterPlayers
     * const rosterPlayer = await prisma.rosterPlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RosterPlayerUpdateManyArgs>(
      args: SelectSubset<T, RosterPlayerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RosterPlayers and returns the data updated in the database.
     * @param {RosterPlayerUpdateManyAndReturnArgs} args - Arguments to update many RosterPlayers.
     * @example
     * // Update many RosterPlayers
     * const rosterPlayer = await prisma.rosterPlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RosterPlayers and only return the `id`
     * const rosterPlayerWithIdOnly = await prisma.rosterPlayer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends RosterPlayerUpdateManyAndReturnArgs>(
      args: SelectSubset<T, RosterPlayerUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RosterPlayerPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one RosterPlayer.
     * @param {RosterPlayerUpsertArgs} args - Arguments to update or create a RosterPlayer.
     * @example
     * // Update or create a RosterPlayer
     * const rosterPlayer = await prisma.rosterPlayer.upsert({
     *   create: {
     *     // ... data to create a RosterPlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RosterPlayer we want to update
     *   }
     * })
     */
    upsert<T extends RosterPlayerUpsertArgs>(
      args: SelectSubset<T, RosterPlayerUpsertArgs<ExtArgs>>
    ): Prisma__RosterPlayerClient<
      $Result.GetResult<Prisma.$RosterPlayerPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of RosterPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterPlayerCountArgs} args - Arguments to filter RosterPlayers to count.
     * @example
     * // Count the number of RosterPlayers
     * const count = await prisma.rosterPlayer.count({
     *   where: {
     *     // ... the filter for the RosterPlayers we want to count
     *   }
     * })
     **/
    count<T extends RosterPlayerCountArgs>(
      args?: Subset<T, RosterPlayerCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RosterPlayerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a RosterPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterPlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RosterPlayerAggregateArgs>(
      args: Subset<T, RosterPlayerAggregateArgs>
    ): Prisma.PrismaPromise<GetRosterPlayerAggregateType<T>>;

    /**
     * Group by RosterPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RosterPlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends RosterPlayerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RosterPlayerGroupByArgs['orderBy'] }
        : { orderBy?: RosterPlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, RosterPlayerGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetRosterPlayerGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RosterPlayer model
     */
    readonly fields: RosterPlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RosterPlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RosterPlayerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    roster<T extends RosterDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RosterDefaultArgs<ExtArgs>>
    ): Prisma__RosterClient<
      | $Result.GetResult<Prisma.$RosterPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PlayerDefaultArgs<ExtArgs>>
    ): Prisma__PlayerClient<
      | $Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the RosterPlayer model
   */
  interface RosterPlayerFieldRefs {
    readonly id: FieldRef<'RosterPlayer', 'String'>;
    readonly rosterId: FieldRef<'RosterPlayer', 'String'>;
    readonly playerId: FieldRef<'RosterPlayer', 'String'>;
    readonly slot: FieldRef<'RosterPlayer', 'RosterSlot'>;
  }

  // Custom InputTypes
  /**
   * RosterPlayer findUnique
   */
  export type RosterPlayerFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null;
    /**
     * Filter, which RosterPlayer to fetch.
     */
    where: RosterPlayerWhereUniqueInput;
  };

  /**
   * RosterPlayer findUniqueOrThrow
   */
  export type RosterPlayerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null;
    /**
     * Filter, which RosterPlayer to fetch.
     */
    where: RosterPlayerWhereUniqueInput;
  };

  /**
   * RosterPlayer findFirst
   */
  export type RosterPlayerFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null;
    /**
     * Filter, which RosterPlayer to fetch.
     */
    where?: RosterPlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RosterPlayers to fetch.
     */
    orderBy?: RosterPlayerOrderByWithRelationInput | RosterPlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RosterPlayers.
     */
    cursor?: RosterPlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RosterPlayers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RosterPlayers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RosterPlayers.
     */
    distinct?: RosterPlayerScalarFieldEnum | RosterPlayerScalarFieldEnum[];
  };

  /**
   * RosterPlayer findFirstOrThrow
   */
  export type RosterPlayerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null;
    /**
     * Filter, which RosterPlayer to fetch.
     */
    where?: RosterPlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RosterPlayers to fetch.
     */
    orderBy?: RosterPlayerOrderByWithRelationInput | RosterPlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RosterPlayers.
     */
    cursor?: RosterPlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RosterPlayers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RosterPlayers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RosterPlayers.
     */
    distinct?: RosterPlayerScalarFieldEnum | RosterPlayerScalarFieldEnum[];
  };

  /**
   * RosterPlayer findMany
   */
  export type RosterPlayerFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null;
    /**
     * Filter, which RosterPlayers to fetch.
     */
    where?: RosterPlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RosterPlayers to fetch.
     */
    orderBy?: RosterPlayerOrderByWithRelationInput | RosterPlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RosterPlayers.
     */
    cursor?: RosterPlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RosterPlayers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RosterPlayers.
     */
    skip?: number;
    distinct?: RosterPlayerScalarFieldEnum | RosterPlayerScalarFieldEnum[];
  };

  /**
   * RosterPlayer create
   */
  export type RosterPlayerCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null;
    /**
     * The data needed to create a RosterPlayer.
     */
    data: XOR<RosterPlayerCreateInput, RosterPlayerUncheckedCreateInput>;
  };

  /**
   * RosterPlayer createMany
   */
  export type RosterPlayerCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many RosterPlayers.
     */
    data: RosterPlayerCreateManyInput | RosterPlayerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * RosterPlayer createManyAndReturn
   */
  export type RosterPlayerCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null;
    /**
     * The data used to create many RosterPlayers.
     */
    data: RosterPlayerCreateManyInput | RosterPlayerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * RosterPlayer update
   */
  export type RosterPlayerUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null;
    /**
     * The data needed to update a RosterPlayer.
     */
    data: XOR<RosterPlayerUpdateInput, RosterPlayerUncheckedUpdateInput>;
    /**
     * Choose, which RosterPlayer to update.
     */
    where: RosterPlayerWhereUniqueInput;
  };

  /**
   * RosterPlayer updateMany
   */
  export type RosterPlayerUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update RosterPlayers.
     */
    data: XOR<RosterPlayerUpdateManyMutationInput, RosterPlayerUncheckedUpdateManyInput>;
    /**
     * Filter which RosterPlayers to update
     */
    where?: RosterPlayerWhereInput;
    /**
     * Limit how many RosterPlayers to update.
     */
    limit?: number;
  };

  /**
   * RosterPlayer updateManyAndReturn
   */
  export type RosterPlayerUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null;
    /**
     * The data used to update RosterPlayers.
     */
    data: XOR<RosterPlayerUpdateManyMutationInput, RosterPlayerUncheckedUpdateManyInput>;
    /**
     * Filter which RosterPlayers to update
     */
    where?: RosterPlayerWhereInput;
    /**
     * Limit how many RosterPlayers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * RosterPlayer upsert
   */
  export type RosterPlayerUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null;
    /**
     * The filter to search for the RosterPlayer to update in case it exists.
     */
    where: RosterPlayerWhereUniqueInput;
    /**
     * In case the RosterPlayer found by the `where` argument doesn't exist, create a new RosterPlayer with this data.
     */
    create: XOR<RosterPlayerCreateInput, RosterPlayerUncheckedCreateInput>;
    /**
     * In case the RosterPlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RosterPlayerUpdateInput, RosterPlayerUncheckedUpdateInput>;
  };

  /**
   * RosterPlayer delete
   */
  export type RosterPlayerDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null;
    /**
     * Filter which RosterPlayer to delete.
     */
    where: RosterPlayerWhereUniqueInput;
  };

  /**
   * RosterPlayer deleteMany
   */
  export type RosterPlayerDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which RosterPlayers to delete
     */
    where?: RosterPlayerWhereInput;
    /**
     * Limit how many RosterPlayers to delete.
     */
    limit?: number;
  };

  /**
   * RosterPlayer without action
   */
  export type RosterPlayerDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RosterPlayer
     */
    select?: RosterPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RosterPlayer
     */
    omit?: RosterPlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RosterPlayerInclude<ExtArgs> | null;
  };

  /**
   * Model Matchup
   */

  export type AggregateMatchup = {
    _count: MatchupCountAggregateOutputType | null;
    _avg: MatchupAvgAggregateOutputType | null;
    _sum: MatchupSumAggregateOutputType | null;
    _min: MatchupMinAggregateOutputType | null;
    _max: MatchupMaxAggregateOutputType | null;
  };

  export type MatchupAvgAggregateOutputType = {
    week: number | null;
    season: number | null;
    homeTeamSlot: number | null;
    awayTeamSlot: number | null;
    homeScore: Decimal | null;
    awayScore: Decimal | null;
    homeProjected: Decimal | null;
    awayProjected: Decimal | null;
  };

  export type MatchupSumAggregateOutputType = {
    week: number | null;
    season: number | null;
    homeTeamSlot: number | null;
    awayTeamSlot: number | null;
    homeScore: Decimal | null;
    awayScore: Decimal | null;
    homeProjected: Decimal | null;
    awayProjected: Decimal | null;
  };

  export type MatchupMinAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    leagueId: string | null;
    week: number | null;
    season: number | null;
    homeTeamSlot: number | null;
    awayTeamSlot: number | null;
    homeScore: Decimal | null;
    awayScore: Decimal | null;
    homeProjected: Decimal | null;
    awayProjected: Decimal | null;
    isPlayoffs: boolean | null;
    matchupType: $Enums.MatchupType | null;
  };

  export type MatchupMaxAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    leagueId: string | null;
    week: number | null;
    season: number | null;
    homeTeamSlot: number | null;
    awayTeamSlot: number | null;
    homeScore: Decimal | null;
    awayScore: Decimal | null;
    homeProjected: Decimal | null;
    awayProjected: Decimal | null;
    isPlayoffs: boolean | null;
    matchupType: $Enums.MatchupType | null;
  };

  export type MatchupCountAggregateOutputType = {
    id: number;
    createdAt: number;
    updatedAt: number;
    leagueId: number;
    week: number;
    season: number;
    homeTeamSlot: number;
    awayTeamSlot: number;
    homeScore: number;
    awayScore: number;
    homeProjected: number;
    awayProjected: number;
    isPlayoffs: number;
    matchupType: number;
    _all: number;
  };

  export type MatchupAvgAggregateInputType = {
    week?: true;
    season?: true;
    homeTeamSlot?: true;
    awayTeamSlot?: true;
    homeScore?: true;
    awayScore?: true;
    homeProjected?: true;
    awayProjected?: true;
  };

  export type MatchupSumAggregateInputType = {
    week?: true;
    season?: true;
    homeTeamSlot?: true;
    awayTeamSlot?: true;
    homeScore?: true;
    awayScore?: true;
    homeProjected?: true;
    awayProjected?: true;
  };

  export type MatchupMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    leagueId?: true;
    week?: true;
    season?: true;
    homeTeamSlot?: true;
    awayTeamSlot?: true;
    homeScore?: true;
    awayScore?: true;
    homeProjected?: true;
    awayProjected?: true;
    isPlayoffs?: true;
    matchupType?: true;
  };

  export type MatchupMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    leagueId?: true;
    week?: true;
    season?: true;
    homeTeamSlot?: true;
    awayTeamSlot?: true;
    homeScore?: true;
    awayScore?: true;
    homeProjected?: true;
    awayProjected?: true;
    isPlayoffs?: true;
    matchupType?: true;
  };

  export type MatchupCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    leagueId?: true;
    week?: true;
    season?: true;
    homeTeamSlot?: true;
    awayTeamSlot?: true;
    homeScore?: true;
    awayScore?: true;
    homeProjected?: true;
    awayProjected?: true;
    isPlayoffs?: true;
    matchupType?: true;
    _all?: true;
  };

  export type MatchupAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Matchup to aggregate.
     */
    where?: MatchupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Matchups to fetch.
     */
    orderBy?: MatchupOrderByWithRelationInput | MatchupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MatchupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Matchups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Matchups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Matchups
     **/
    _count?: true | MatchupCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MatchupAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MatchupSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MatchupMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MatchupMaxAggregateInputType;
  };

  export type GetMatchupAggregateType<T extends MatchupAggregateArgs> = {
    [P in keyof T & keyof AggregateMatchup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchup[P]>
      : GetScalarType<T[P], AggregateMatchup[P]>;
  };

  export type MatchupGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MatchupWhereInput;
    orderBy?: MatchupOrderByWithAggregationInput | MatchupOrderByWithAggregationInput[];
    by: MatchupScalarFieldEnum[] | MatchupScalarFieldEnum;
    having?: MatchupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MatchupCountAggregateInputType | true;
    _avg?: MatchupAvgAggregateInputType;
    _sum?: MatchupSumAggregateInputType;
    _min?: MatchupMinAggregateInputType;
    _max?: MatchupMaxAggregateInputType;
  };

  export type MatchupGroupByOutputType = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    leagueId: string;
    week: number;
    season: number;
    homeTeamSlot: number;
    awayTeamSlot: number;
    homeScore: Decimal | null;
    awayScore: Decimal | null;
    homeProjected: Decimal | null;
    awayProjected: Decimal | null;
    isPlayoffs: boolean;
    matchupType: $Enums.MatchupType;
    _count: MatchupCountAggregateOutputType | null;
    _avg: MatchupAvgAggregateOutputType | null;
    _sum: MatchupSumAggregateOutputType | null;
    _min: MatchupMinAggregateOutputType | null;
    _max: MatchupMaxAggregateOutputType | null;
  };

  type GetMatchupGroupByPayload<T extends MatchupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchupGroupByOutputType, T['by']> & {
        [P in keyof T & keyof MatchupGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MatchupGroupByOutputType[P]>
          : GetScalarType<T[P], MatchupGroupByOutputType[P]>;
      }
    >
  >;

  export type MatchupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        createdAt?: boolean;
        updatedAt?: boolean;
        leagueId?: boolean;
        week?: boolean;
        season?: boolean;
        homeTeamSlot?: boolean;
        awayTeamSlot?: boolean;
        homeScore?: boolean;
        awayScore?: boolean;
        homeProjected?: boolean;
        awayProjected?: boolean;
        isPlayoffs?: boolean;
        matchupType?: boolean;
        league?: boolean | LeagueDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['matchup']
    >;

  export type MatchupSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      leagueId?: boolean;
      week?: boolean;
      season?: boolean;
      homeTeamSlot?: boolean;
      awayTeamSlot?: boolean;
      homeScore?: boolean;
      awayScore?: boolean;
      homeProjected?: boolean;
      awayProjected?: boolean;
      isPlayoffs?: boolean;
      matchupType?: boolean;
      league?: boolean | LeagueDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['matchup']
  >;

  export type MatchupSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      leagueId?: boolean;
      week?: boolean;
      season?: boolean;
      homeTeamSlot?: boolean;
      awayTeamSlot?: boolean;
      homeScore?: boolean;
      awayScore?: boolean;
      homeProjected?: boolean;
      awayProjected?: boolean;
      isPlayoffs?: boolean;
      matchupType?: boolean;
      league?: boolean | LeagueDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['matchup']
  >;

  export type MatchupSelectScalar = {
    id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    leagueId?: boolean;
    week?: boolean;
    season?: boolean;
    homeTeamSlot?: boolean;
    awayTeamSlot?: boolean;
    homeScore?: boolean;
    awayScore?: boolean;
    homeProjected?: boolean;
    awayProjected?: boolean;
    isPlayoffs?: boolean;
    matchupType?: boolean;
  };

  export type MatchupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'createdAt'
      | 'updatedAt'
      | 'leagueId'
      | 'week'
      | 'season'
      | 'homeTeamSlot'
      | 'awayTeamSlot'
      | 'homeScore'
      | 'awayScore'
      | 'homeProjected'
      | 'awayProjected'
      | 'isPlayoffs'
      | 'matchupType',
      ExtArgs['result']['matchup']
    >;
  export type MatchupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    league?: boolean | LeagueDefaultArgs<ExtArgs>;
  };
  export type MatchupIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    league?: boolean | LeagueDefaultArgs<ExtArgs>;
  };
  export type MatchupIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    league?: boolean | LeagueDefaultArgs<ExtArgs>;
  };

  export type $MatchupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'Matchup';
      objects: {
        league: Prisma.$LeaguePayload<ExtArgs>;
      };
      scalars: $Extensions.GetPayloadResult<
        {
          id: string;
          createdAt: Date;
          updatedAt: Date;
          leagueId: string;
          week: number;
          season: number;
          homeTeamSlot: number;
          awayTeamSlot: number;
          homeScore: Prisma.Decimal | null;
          awayScore: Prisma.Decimal | null;
          homeProjected: Prisma.Decimal | null;
          awayProjected: Prisma.Decimal | null;
          isPlayoffs: boolean;
          matchupType: $Enums.MatchupType;
        },
        ExtArgs['result']['matchup']
      >;
      composites: {};
    };

  type MatchupGetPayload<S extends boolean | null | undefined | MatchupDefaultArgs> =
    $Result.GetResult<Prisma.$MatchupPayload, S>;

  type MatchupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    MatchupFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: MatchupCountAggregateInputType | true;
  };

  export interface MatchupDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Matchup']; meta: { name: 'Matchup' } };
    /**
     * Find zero or one Matchup that matches the filter.
     * @param {MatchupFindUniqueArgs} args - Arguments to find a Matchup
     * @example
     * // Get one Matchup
     * const matchup = await prisma.matchup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchupFindUniqueArgs>(
      args: SelectSubset<T, MatchupFindUniqueArgs<ExtArgs>>
    ): Prisma__MatchupClient<
      $Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Matchup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchupFindUniqueOrThrowArgs} args - Arguments to find a Matchup
     * @example
     * // Get one Matchup
     * const matchup = await prisma.matchup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchupFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MatchupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MatchupClient<
      $Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Matchup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchupFindFirstArgs} args - Arguments to find a Matchup
     * @example
     * // Get one Matchup
     * const matchup = await prisma.matchup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchupFindFirstArgs>(
      args?: SelectSubset<T, MatchupFindFirstArgs<ExtArgs>>
    ): Prisma__MatchupClient<
      $Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Matchup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchupFindFirstOrThrowArgs} args - Arguments to find a Matchup
     * @example
     * // Get one Matchup
     * const matchup = await prisma.matchup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchupFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MatchupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MatchupClient<
      $Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Matchups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matchups
     * const matchups = await prisma.matchup.findMany()
     *
     * // Get first 10 Matchups
     * const matchups = await prisma.matchup.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const matchupWithIdOnly = await prisma.matchup.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MatchupFindManyArgs>(
      args?: SelectSubset<T, MatchupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Matchup.
     * @param {MatchupCreateArgs} args - Arguments to create a Matchup.
     * @example
     * // Create one Matchup
     * const Matchup = await prisma.matchup.create({
     *   data: {
     *     // ... data to create a Matchup
     *   }
     * })
     *
     */
    create<T extends MatchupCreateArgs>(
      args: SelectSubset<T, MatchupCreateArgs<ExtArgs>>
    ): Prisma__MatchupClient<
      $Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Matchups.
     * @param {MatchupCreateManyArgs} args - Arguments to create many Matchups.
     * @example
     * // Create many Matchups
     * const matchup = await prisma.matchup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MatchupCreateManyArgs>(
      args?: SelectSubset<T, MatchupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Matchups and returns the data saved in the database.
     * @param {MatchupCreateManyAndReturnArgs} args - Arguments to create many Matchups.
     * @example
     * // Create many Matchups
     * const matchup = await prisma.matchup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Matchups and only return the `id`
     * const matchupWithIdOnly = await prisma.matchup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MatchupCreateManyAndReturnArgs>(
      args?: SelectSubset<T, MatchupCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MatchupPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Matchup.
     * @param {MatchupDeleteArgs} args - Arguments to delete one Matchup.
     * @example
     * // Delete one Matchup
     * const Matchup = await prisma.matchup.delete({
     *   where: {
     *     // ... filter to delete one Matchup
     *   }
     * })
     *
     */
    delete<T extends MatchupDeleteArgs>(
      args: SelectSubset<T, MatchupDeleteArgs<ExtArgs>>
    ): Prisma__MatchupClient<
      $Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Matchup.
     * @param {MatchupUpdateArgs} args - Arguments to update one Matchup.
     * @example
     * // Update one Matchup
     * const matchup = await prisma.matchup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MatchupUpdateArgs>(
      args: SelectSubset<T, MatchupUpdateArgs<ExtArgs>>
    ): Prisma__MatchupClient<
      $Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Matchups.
     * @param {MatchupDeleteManyArgs} args - Arguments to filter Matchups to delete.
     * @example
     * // Delete a few Matchups
     * const { count } = await prisma.matchup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MatchupDeleteManyArgs>(
      args?: SelectSubset<T, MatchupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Matchups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matchups
     * const matchup = await prisma.matchup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MatchupUpdateManyArgs>(
      args: SelectSubset<T, MatchupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Matchups and returns the data updated in the database.
     * @param {MatchupUpdateManyAndReturnArgs} args - Arguments to update many Matchups.
     * @example
     * // Update many Matchups
     * const matchup = await prisma.matchup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Matchups and only return the `id`
     * const matchupWithIdOnly = await prisma.matchup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MatchupUpdateManyAndReturnArgs>(
      args: SelectSubset<T, MatchupUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MatchupPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Matchup.
     * @param {MatchupUpsertArgs} args - Arguments to update or create a Matchup.
     * @example
     * // Update or create a Matchup
     * const matchup = await prisma.matchup.upsert({
     *   create: {
     *     // ... data to create a Matchup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matchup we want to update
     *   }
     * })
     */
    upsert<T extends MatchupUpsertArgs>(
      args: SelectSubset<T, MatchupUpsertArgs<ExtArgs>>
    ): Prisma__MatchupClient<
      $Result.GetResult<Prisma.$MatchupPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Matchups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchupCountArgs} args - Arguments to filter Matchups to count.
     * @example
     * // Count the number of Matchups
     * const count = await prisma.matchup.count({
     *   where: {
     *     // ... the filter for the Matchups we want to count
     *   }
     * })
     **/
    count<T extends MatchupCountArgs>(
      args?: Subset<T, MatchupCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchupCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Matchup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MatchupAggregateArgs>(
      args: Subset<T, MatchupAggregateArgs>
    ): Prisma.PrismaPromise<GetMatchupAggregateType<T>>;

    /**
     * Group by Matchup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MatchupGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchupGroupByArgs['orderBy'] }
        : { orderBy?: MatchupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MatchupGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetMatchupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Matchup model
     */
    readonly fields: MatchupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Matchup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchupClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    league<T extends LeagueDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, LeagueDefaultArgs<ExtArgs>>
    ): Prisma__LeagueClient<
      | $Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Matchup model
   */
  interface MatchupFieldRefs {
    readonly id: FieldRef<'Matchup', 'String'>;
    readonly createdAt: FieldRef<'Matchup', 'DateTime'>;
    readonly updatedAt: FieldRef<'Matchup', 'DateTime'>;
    readonly leagueId: FieldRef<'Matchup', 'String'>;
    readonly week: FieldRef<'Matchup', 'Int'>;
    readonly season: FieldRef<'Matchup', 'Int'>;
    readonly homeTeamSlot: FieldRef<'Matchup', 'Int'>;
    readonly awayTeamSlot: FieldRef<'Matchup', 'Int'>;
    readonly homeScore: FieldRef<'Matchup', 'Decimal'>;
    readonly awayScore: FieldRef<'Matchup', 'Decimal'>;
    readonly homeProjected: FieldRef<'Matchup', 'Decimal'>;
    readonly awayProjected: FieldRef<'Matchup', 'Decimal'>;
    readonly isPlayoffs: FieldRef<'Matchup', 'Boolean'>;
    readonly matchupType: FieldRef<'Matchup', 'MatchupType'>;
  }

  // Custom InputTypes
  /**
   * Matchup findUnique
   */
  export type MatchupFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null;
    /**
     * Filter, which Matchup to fetch.
     */
    where: MatchupWhereUniqueInput;
  };

  /**
   * Matchup findUniqueOrThrow
   */
  export type MatchupFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null;
    /**
     * Filter, which Matchup to fetch.
     */
    where: MatchupWhereUniqueInput;
  };

  /**
   * Matchup findFirst
   */
  export type MatchupFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null;
    /**
     * Filter, which Matchup to fetch.
     */
    where?: MatchupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Matchups to fetch.
     */
    orderBy?: MatchupOrderByWithRelationInput | MatchupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Matchups.
     */
    cursor?: MatchupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Matchups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Matchups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Matchups.
     */
    distinct?: MatchupScalarFieldEnum | MatchupScalarFieldEnum[];
  };

  /**
   * Matchup findFirstOrThrow
   */
  export type MatchupFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null;
    /**
     * Filter, which Matchup to fetch.
     */
    where?: MatchupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Matchups to fetch.
     */
    orderBy?: MatchupOrderByWithRelationInput | MatchupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Matchups.
     */
    cursor?: MatchupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Matchups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Matchups.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Matchups.
     */
    distinct?: MatchupScalarFieldEnum | MatchupScalarFieldEnum[];
  };

  /**
   * Matchup findMany
   */
  export type MatchupFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null;
    /**
     * Filter, which Matchups to fetch.
     */
    where?: MatchupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Matchups to fetch.
     */
    orderBy?: MatchupOrderByWithRelationInput | MatchupOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Matchups.
     */
    cursor?: MatchupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Matchups from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Matchups.
     */
    skip?: number;
    distinct?: MatchupScalarFieldEnum | MatchupScalarFieldEnum[];
  };

  /**
   * Matchup create
   */
  export type MatchupCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null;
    /**
     * The data needed to create a Matchup.
     */
    data: XOR<MatchupCreateInput, MatchupUncheckedCreateInput>;
  };

  /**
   * Matchup createMany
   */
  export type MatchupCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Matchups.
     */
    data: MatchupCreateManyInput | MatchupCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Matchup createManyAndReturn
   */
  export type MatchupCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null;
    /**
     * The data used to create many Matchups.
     */
    data: MatchupCreateManyInput | MatchupCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Matchup update
   */
  export type MatchupUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null;
    /**
     * The data needed to update a Matchup.
     */
    data: XOR<MatchupUpdateInput, MatchupUncheckedUpdateInput>;
    /**
     * Choose, which Matchup to update.
     */
    where: MatchupWhereUniqueInput;
  };

  /**
   * Matchup updateMany
   */
  export type MatchupUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Matchups.
     */
    data: XOR<MatchupUpdateManyMutationInput, MatchupUncheckedUpdateManyInput>;
    /**
     * Filter which Matchups to update
     */
    where?: MatchupWhereInput;
    /**
     * Limit how many Matchups to update.
     */
    limit?: number;
  };

  /**
   * Matchup updateManyAndReturn
   */
  export type MatchupUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null;
    /**
     * The data used to update Matchups.
     */
    data: XOR<MatchupUpdateManyMutationInput, MatchupUncheckedUpdateManyInput>;
    /**
     * Filter which Matchups to update
     */
    where?: MatchupWhereInput;
    /**
     * Limit how many Matchups to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Matchup upsert
   */
  export type MatchupUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null;
    /**
     * The filter to search for the Matchup to update in case it exists.
     */
    where: MatchupWhereUniqueInput;
    /**
     * In case the Matchup found by the `where` argument doesn't exist, create a new Matchup with this data.
     */
    create: XOR<MatchupCreateInput, MatchupUncheckedCreateInput>;
    /**
     * In case the Matchup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchupUpdateInput, MatchupUncheckedUpdateInput>;
  };

  /**
   * Matchup delete
   */
  export type MatchupDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null;
    /**
     * Filter which Matchup to delete.
     */
    where: MatchupWhereUniqueInput;
  };

  /**
   * Matchup deleteMany
   */
  export type MatchupDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Matchups to delete
     */
    where?: MatchupWhereInput;
    /**
     * Limit how many Matchups to delete.
     */
    limit?: number;
  };

  /**
   * Matchup without action
   */
  export type MatchupDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Matchup
     */
    select?: MatchupSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Matchup
     */
    omit?: MatchupOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchupInclude<ExtArgs> | null;
  };

  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
  };

  export type TransactionAvgAggregateOutputType = {
    faabBid: number | null;
  };

  export type TransactionSumAggregateOutputType = {
    faabBid: number | null;
  };

  export type TransactionMinAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    leagueId: string | null;
    type: $Enums.TransactionType | null;
    status: $Enums.TransactionStatus | null;
    processedAt: Date | null;
    faabBid: number | null;
  };

  export type TransactionMaxAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    leagueId: string | null;
    type: $Enums.TransactionType | null;
    status: $Enums.TransactionStatus | null;
    processedAt: Date | null;
    faabBid: number | null;
  };

  export type TransactionCountAggregateOutputType = {
    id: number;
    createdAt: number;
    leagueId: number;
    type: number;
    status: number;
    processedAt: number;
    faabBid: number;
    metadata: number;
    _all: number;
  };

  export type TransactionAvgAggregateInputType = {
    faabBid?: true;
  };

  export type TransactionSumAggregateInputType = {
    faabBid?: true;
  };

  export type TransactionMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    leagueId?: true;
    type?: true;
    status?: true;
    processedAt?: true;
    faabBid?: true;
  };

  export type TransactionMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    leagueId?: true;
    type?: true;
    status?: true;
    processedAt?: true;
    faabBid?: true;
  };

  export type TransactionCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    leagueId?: true;
    type?: true;
    status?: true;
    processedAt?: true;
    faabBid?: true;
    metadata?: true;
    _all?: true;
  };

  export type TransactionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Transactions
     **/
    _count?: true | TransactionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TransactionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TransactionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TransactionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TransactionMaxAggregateInputType;
  };

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
    [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>;
  };

  export type TransactionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TransactionWhereInput;
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[];
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum;
    having?: TransactionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionCountAggregateInputType | true;
    _avg?: TransactionAvgAggregateInputType;
    _sum?: TransactionSumAggregateInputType;
    _min?: TransactionMinAggregateInputType;
    _max?: TransactionMaxAggregateInputType;
  };

  export type TransactionGroupByOutputType = {
    id: string;
    createdAt: Date;
    leagueId: string;
    type: $Enums.TransactionType;
    status: $Enums.TransactionStatus;
    processedAt: Date | null;
    faabBid: number | null;
    metadata: JsonValue | null;
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
  };

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TransactionGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
          : GetScalarType<T[P], TransactionGroupByOutputType[P]>;
      }
    >
  >;

  export type TransactionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      leagueId?: boolean;
      type?: boolean;
      status?: boolean;
      processedAt?: boolean;
      faabBid?: boolean;
      metadata?: boolean;
      league?: boolean | LeagueDefaultArgs<ExtArgs>;
      adds?: boolean | Transaction$addsArgs<ExtArgs>;
      drops?: boolean | Transaction$dropsArgs<ExtArgs>;
      _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['transaction']
  >;

  export type TransactionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      leagueId?: boolean;
      type?: boolean;
      status?: boolean;
      processedAt?: boolean;
      faabBid?: boolean;
      metadata?: boolean;
      league?: boolean | LeagueDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['transaction']
  >;

  export type TransactionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      leagueId?: boolean;
      type?: boolean;
      status?: boolean;
      processedAt?: boolean;
      faabBid?: boolean;
      metadata?: boolean;
      league?: boolean | LeagueDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['transaction']
  >;

  export type TransactionSelectScalar = {
    id?: boolean;
    createdAt?: boolean;
    leagueId?: boolean;
    type?: boolean;
    status?: boolean;
    processedAt?: boolean;
    faabBid?: boolean;
    metadata?: boolean;
  };

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'createdAt' | 'leagueId' | 'type' | 'status' | 'processedAt' | 'faabBid' | 'metadata',
      ExtArgs['result']['transaction']
    >;
  export type TransactionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    league?: boolean | LeagueDefaultArgs<ExtArgs>;
    adds?: boolean | Transaction$addsArgs<ExtArgs>;
    drops?: boolean | Transaction$dropsArgs<ExtArgs>;
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type TransactionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    league?: boolean | LeagueDefaultArgs<ExtArgs>;
  };
  export type TransactionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    league?: boolean | LeagueDefaultArgs<ExtArgs>;
  };

  export type $TransactionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Transaction';
    objects: {
      league: Prisma.$LeaguePayload<ExtArgs>;
      adds: Prisma.$TransactionAddPayload<ExtArgs>[];
      drops: Prisma.$TransactionDropPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        createdAt: Date;
        leagueId: string;
        type: $Enums.TransactionType;
        status: $Enums.TransactionStatus;
        processedAt: Date | null;
        faabBid: number | null;
        metadata: Prisma.JsonValue | null;
      },
      ExtArgs['result']['transaction']
    >;
    composites: {};
  };

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> =
    $Result.GetResult<Prisma.$TransactionPayload, S>;

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true;
    };

  export interface TransactionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Transaction'];
      meta: { name: 'Transaction' };
    };
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(
      args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(
      args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionClient<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     *
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TransactionFindManyArgs>(
      args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     *
     */
    create<T extends TransactionCreateArgs>(
      args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>
    ): Prisma__TransactionClient<
      $Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TransactionCreateManyArgs>(
      args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     *
     */
    delete<T extends TransactionDeleteArgs>(
      args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>
    ): Prisma__TransactionClient<
      $Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TransactionUpdateArgs>(
      args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>
    ): Prisma__TransactionClient<
      $Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TransactionDeleteManyArgs>(
      args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TransactionUpdateManyArgs>(
      args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TransactionPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(
      args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>
    ): Prisma__TransactionClient<
      $Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
     **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TransactionAggregateArgs>(
      args: Subset<T, TransactionAggregateArgs>
    ): Prisma.PrismaPromise<GetTransactionAggregateType<T>>;

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Transaction model
     */
    readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    league<T extends LeagueDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, LeagueDefaultArgs<ExtArgs>>
    ): Prisma__LeagueClient<
      | $Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    adds<T extends Transaction$addsArgs<ExtArgs> = {}>(
      args?: Subset<T, Transaction$addsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$TransactionAddPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
      | Null
    >;
    drops<T extends Transaction$dropsArgs<ExtArgs> = {}>(
      args?: Subset<T, Transaction$dropsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$TransactionDropPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<'Transaction', 'String'>;
    readonly createdAt: FieldRef<'Transaction', 'DateTime'>;
    readonly leagueId: FieldRef<'Transaction', 'String'>;
    readonly type: FieldRef<'Transaction', 'TransactionType'>;
    readonly status: FieldRef<'Transaction', 'TransactionStatus'>;
    readonly processedAt: FieldRef<'Transaction', 'DateTime'>;
    readonly faabBid: FieldRef<'Transaction', 'Int'>;
    readonly metadata: FieldRef<'Transaction', 'Json'>;
  }

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput;
  };

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput;
  };

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Transactions.
     */
    skip?: number;
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>;
  };

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>;
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput;
  };

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>;
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput;
    /**
     * Limit how many Transactions to update.
     */
    limit?: number;
  };

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>;
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput;
    /**
     * Limit how many Transactions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput;
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>;
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>;
  };

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput;
  };

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput;
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number;
  };

  /**
   * Transaction.adds
   */
  export type Transaction$addsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionAdd
     */
    select?: TransactionAddSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionAdd
     */
    omit?: TransactionAddOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionAddInclude<ExtArgs> | null;
    where?: TransactionAddWhereInput;
    orderBy?: TransactionAddOrderByWithRelationInput | TransactionAddOrderByWithRelationInput[];
    cursor?: TransactionAddWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionAddScalarFieldEnum | TransactionAddScalarFieldEnum[];
  };

  /**
   * Transaction.drops
   */
  export type Transaction$dropsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionDrop
     */
    select?: TransactionDropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionDrop
     */
    omit?: TransactionDropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDropInclude<ExtArgs> | null;
    where?: TransactionDropWhereInput;
    orderBy?: TransactionDropOrderByWithRelationInput | TransactionDropOrderByWithRelationInput[];
    cursor?: TransactionDropWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionDropScalarFieldEnum | TransactionDropScalarFieldEnum[];
  };

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null;
  };

  /**
   * Model TransactionAdd
   */

  export type AggregateTransactionAdd = {
    _count: TransactionAddCountAggregateOutputType | null;
    _avg: TransactionAddAvgAggregateOutputType | null;
    _sum: TransactionAddSumAggregateOutputType | null;
    _min: TransactionAddMinAggregateOutputType | null;
    _max: TransactionAddMaxAggregateOutputType | null;
  };

  export type TransactionAddAvgAggregateOutputType = {
    teamSlot: number | null;
  };

  export type TransactionAddSumAggregateOutputType = {
    teamSlot: number | null;
  };

  export type TransactionAddMinAggregateOutputType = {
    id: string | null;
    transactionId: string | null;
    teamSlot: number | null;
    playerId: string | null;
  };

  export type TransactionAddMaxAggregateOutputType = {
    id: string | null;
    transactionId: string | null;
    teamSlot: number | null;
    playerId: string | null;
  };

  export type TransactionAddCountAggregateOutputType = {
    id: number;
    transactionId: number;
    teamSlot: number;
    playerId: number;
    pickInfo: number;
    _all: number;
  };

  export type TransactionAddAvgAggregateInputType = {
    teamSlot?: true;
  };

  export type TransactionAddSumAggregateInputType = {
    teamSlot?: true;
  };

  export type TransactionAddMinAggregateInputType = {
    id?: true;
    transactionId?: true;
    teamSlot?: true;
    playerId?: true;
  };

  export type TransactionAddMaxAggregateInputType = {
    id?: true;
    transactionId?: true;
    teamSlot?: true;
    playerId?: true;
  };

  export type TransactionAddCountAggregateInputType = {
    id?: true;
    transactionId?: true;
    teamSlot?: true;
    playerId?: true;
    pickInfo?: true;
    _all?: true;
  };

  export type TransactionAddAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TransactionAdd to aggregate.
     */
    where?: TransactionAddWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionAdds to fetch.
     */
    orderBy?: TransactionAddOrderByWithRelationInput | TransactionAddOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TransactionAddWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionAdds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionAdds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TransactionAdds
     **/
    _count?: true | TransactionAddCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TransactionAddAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TransactionAddSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TransactionAddMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TransactionAddMaxAggregateInputType;
  };

  export type GetTransactionAddAggregateType<T extends TransactionAddAggregateArgs> = {
    [P in keyof T & keyof AggregateTransactionAdd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionAdd[P]>
      : GetScalarType<T[P], AggregateTransactionAdd[P]>;
  };

  export type TransactionAddGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TransactionAddWhereInput;
    orderBy?:
      | TransactionAddOrderByWithAggregationInput
      | TransactionAddOrderByWithAggregationInput[];
    by: TransactionAddScalarFieldEnum[] | TransactionAddScalarFieldEnum;
    having?: TransactionAddScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionAddCountAggregateInputType | true;
    _avg?: TransactionAddAvgAggregateInputType;
    _sum?: TransactionAddSumAggregateInputType;
    _min?: TransactionAddMinAggregateInputType;
    _max?: TransactionAddMaxAggregateInputType;
  };

  export type TransactionAddGroupByOutputType = {
    id: string;
    transactionId: string;
    teamSlot: number;
    playerId: string | null;
    pickInfo: JsonValue | null;
    _count: TransactionAddCountAggregateOutputType | null;
    _avg: TransactionAddAvgAggregateOutputType | null;
    _sum: TransactionAddSumAggregateOutputType | null;
    _min: TransactionAddMinAggregateOutputType | null;
    _max: TransactionAddMaxAggregateOutputType | null;
  };

  type GetTransactionAddGroupByPayload<T extends TransactionAddGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionAddGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TransactionAddGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TransactionAddGroupByOutputType[P]>
          : GetScalarType<T[P], TransactionAddGroupByOutputType[P]>;
      }
    >
  >;

  export type TransactionAddSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      transactionId?: boolean;
      teamSlot?: boolean;
      playerId?: boolean;
      pickInfo?: boolean;
      transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['transactionAdd']
  >;

  export type TransactionAddSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      transactionId?: boolean;
      teamSlot?: boolean;
      playerId?: boolean;
      pickInfo?: boolean;
      transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['transactionAdd']
  >;

  export type TransactionAddSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      transactionId?: boolean;
      teamSlot?: boolean;
      playerId?: boolean;
      pickInfo?: boolean;
      transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['transactionAdd']
  >;

  export type TransactionAddSelectScalar = {
    id?: boolean;
    transactionId?: boolean;
    teamSlot?: boolean;
    playerId?: boolean;
    pickInfo?: boolean;
  };

  export type TransactionAddOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'transactionId' | 'teamSlot' | 'playerId' | 'pickInfo',
    ExtArgs['result']['transactionAdd']
  >;
  export type TransactionAddInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
  };
  export type TransactionAddIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
  };
  export type TransactionAddIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
  };

  export type $TransactionAddPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'TransactionAdd';
    objects: {
      transaction: Prisma.$TransactionPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        transactionId: string;
        teamSlot: number;
        playerId: string | null;
        pickInfo: Prisma.JsonValue | null;
      },
      ExtArgs['result']['transactionAdd']
    >;
    composites: {};
  };

  type TransactionAddGetPayload<S extends boolean | null | undefined | TransactionAddDefaultArgs> =
    $Result.GetResult<Prisma.$TransactionAddPayload, S>;

  type TransactionAddCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionAddFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionAddCountAggregateInputType | true;
    };

  export interface TransactionAddDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['TransactionAdd'];
      meta: { name: 'TransactionAdd' };
    };
    /**
     * Find zero or one TransactionAdd that matches the filter.
     * @param {TransactionAddFindUniqueArgs} args - Arguments to find a TransactionAdd
     * @example
     * // Get one TransactionAdd
     * const transactionAdd = await prisma.transactionAdd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionAddFindUniqueArgs>(
      args: SelectSubset<T, TransactionAddFindUniqueArgs<ExtArgs>>
    ): Prisma__TransactionAddClient<
      $Result.GetResult<
        Prisma.$TransactionAddPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one TransactionAdd that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionAddFindUniqueOrThrowArgs} args - Arguments to find a TransactionAdd
     * @example
     * // Get one TransactionAdd
     * const transactionAdd = await prisma.transactionAdd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionAddFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TransactionAddFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionAddClient<
      $Result.GetResult<
        Prisma.$TransactionAddPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first TransactionAdd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAddFindFirstArgs} args - Arguments to find a TransactionAdd
     * @example
     * // Get one TransactionAdd
     * const transactionAdd = await prisma.transactionAdd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionAddFindFirstArgs>(
      args?: SelectSubset<T, TransactionAddFindFirstArgs<ExtArgs>>
    ): Prisma__TransactionAddClient<
      $Result.GetResult<
        Prisma.$TransactionAddPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first TransactionAdd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAddFindFirstOrThrowArgs} args - Arguments to find a TransactionAdd
     * @example
     * // Get one TransactionAdd
     * const transactionAdd = await prisma.transactionAdd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionAddFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TransactionAddFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionAddClient<
      $Result.GetResult<
        Prisma.$TransactionAddPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more TransactionAdds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAddFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionAdds
     * const transactionAdds = await prisma.transactionAdd.findMany()
     *
     * // Get first 10 TransactionAdds
     * const transactionAdds = await prisma.transactionAdd.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const transactionAddWithIdOnly = await prisma.transactionAdd.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TransactionAddFindManyArgs>(
      args?: SelectSubset<T, TransactionAddFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TransactionAddPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a TransactionAdd.
     * @param {TransactionAddCreateArgs} args - Arguments to create a TransactionAdd.
     * @example
     * // Create one TransactionAdd
     * const TransactionAdd = await prisma.transactionAdd.create({
     *   data: {
     *     // ... data to create a TransactionAdd
     *   }
     * })
     *
     */
    create<T extends TransactionAddCreateArgs>(
      args: SelectSubset<T, TransactionAddCreateArgs<ExtArgs>>
    ): Prisma__TransactionAddClient<
      $Result.GetResult<Prisma.$TransactionAddPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many TransactionAdds.
     * @param {TransactionAddCreateManyArgs} args - Arguments to create many TransactionAdds.
     * @example
     * // Create many TransactionAdds
     * const transactionAdd = await prisma.transactionAdd.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TransactionAddCreateManyArgs>(
      args?: SelectSubset<T, TransactionAddCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many TransactionAdds and returns the data saved in the database.
     * @param {TransactionAddCreateManyAndReturnArgs} args - Arguments to create many TransactionAdds.
     * @example
     * // Create many TransactionAdds
     * const transactionAdd = await prisma.transactionAdd.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TransactionAdds and only return the `id`
     * const transactionAddWithIdOnly = await prisma.transactionAdd.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TransactionAddCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TransactionAddCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TransactionAddPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a TransactionAdd.
     * @param {TransactionAddDeleteArgs} args - Arguments to delete one TransactionAdd.
     * @example
     * // Delete one TransactionAdd
     * const TransactionAdd = await prisma.transactionAdd.delete({
     *   where: {
     *     // ... filter to delete one TransactionAdd
     *   }
     * })
     *
     */
    delete<T extends TransactionAddDeleteArgs>(
      args: SelectSubset<T, TransactionAddDeleteArgs<ExtArgs>>
    ): Prisma__TransactionAddClient<
      $Result.GetResult<Prisma.$TransactionAddPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one TransactionAdd.
     * @param {TransactionAddUpdateArgs} args - Arguments to update one TransactionAdd.
     * @example
     * // Update one TransactionAdd
     * const transactionAdd = await prisma.transactionAdd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TransactionAddUpdateArgs>(
      args: SelectSubset<T, TransactionAddUpdateArgs<ExtArgs>>
    ): Prisma__TransactionAddClient<
      $Result.GetResult<Prisma.$TransactionAddPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more TransactionAdds.
     * @param {TransactionAddDeleteManyArgs} args - Arguments to filter TransactionAdds to delete.
     * @example
     * // Delete a few TransactionAdds
     * const { count } = await prisma.transactionAdd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TransactionAddDeleteManyArgs>(
      args?: SelectSubset<T, TransactionAddDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TransactionAdds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAddUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionAdds
     * const transactionAdd = await prisma.transactionAdd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TransactionAddUpdateManyArgs>(
      args: SelectSubset<T, TransactionAddUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TransactionAdds and returns the data updated in the database.
     * @param {TransactionAddUpdateManyAndReturnArgs} args - Arguments to update many TransactionAdds.
     * @example
     * // Update many TransactionAdds
     * const transactionAdd = await prisma.transactionAdd.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TransactionAdds and only return the `id`
     * const transactionAddWithIdOnly = await prisma.transactionAdd.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TransactionAddUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TransactionAddUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TransactionAddPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one TransactionAdd.
     * @param {TransactionAddUpsertArgs} args - Arguments to update or create a TransactionAdd.
     * @example
     * // Update or create a TransactionAdd
     * const transactionAdd = await prisma.transactionAdd.upsert({
     *   create: {
     *     // ... data to create a TransactionAdd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionAdd we want to update
     *   }
     * })
     */
    upsert<T extends TransactionAddUpsertArgs>(
      args: SelectSubset<T, TransactionAddUpsertArgs<ExtArgs>>
    ): Prisma__TransactionAddClient<
      $Result.GetResult<Prisma.$TransactionAddPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of TransactionAdds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAddCountArgs} args - Arguments to filter TransactionAdds to count.
     * @example
     * // Count the number of TransactionAdds
     * const count = await prisma.transactionAdd.count({
     *   where: {
     *     // ... the filter for the TransactionAdds we want to count
     *   }
     * })
     **/
    count<T extends TransactionAddCountArgs>(
      args?: Subset<T, TransactionAddCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionAddCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a TransactionAdd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAddAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TransactionAddAggregateArgs>(
      args: Subset<T, TransactionAddAggregateArgs>
    ): Prisma.PrismaPromise<GetTransactionAddAggregateType<T>>;

    /**
     * Group by TransactionAdd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAddGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends TransactionAddGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionAddGroupByArgs['orderBy'] }
        : { orderBy?: TransactionAddGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TransactionAddGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetTransactionAddGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TransactionAdd model
     */
    readonly fields: TransactionAddFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionAdd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionAddClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TransactionDefaultArgs<ExtArgs>>
    ): Prisma__TransactionClient<
      | $Result.GetResult<
          Prisma.$TransactionPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the TransactionAdd model
   */
  interface TransactionAddFieldRefs {
    readonly id: FieldRef<'TransactionAdd', 'String'>;
    readonly transactionId: FieldRef<'TransactionAdd', 'String'>;
    readonly teamSlot: FieldRef<'TransactionAdd', 'Int'>;
    readonly playerId: FieldRef<'TransactionAdd', 'String'>;
    readonly pickInfo: FieldRef<'TransactionAdd', 'Json'>;
  }

  // Custom InputTypes
  /**
   * TransactionAdd findUnique
   */
  export type TransactionAddFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionAdd
     */
    select?: TransactionAddSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionAdd
     */
    omit?: TransactionAddOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionAddInclude<ExtArgs> | null;
    /**
     * Filter, which TransactionAdd to fetch.
     */
    where: TransactionAddWhereUniqueInput;
  };

  /**
   * TransactionAdd findUniqueOrThrow
   */
  export type TransactionAddFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionAdd
     */
    select?: TransactionAddSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionAdd
     */
    omit?: TransactionAddOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionAddInclude<ExtArgs> | null;
    /**
     * Filter, which TransactionAdd to fetch.
     */
    where: TransactionAddWhereUniqueInput;
  };

  /**
   * TransactionAdd findFirst
   */
  export type TransactionAddFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionAdd
     */
    select?: TransactionAddSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionAdd
     */
    omit?: TransactionAddOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionAddInclude<ExtArgs> | null;
    /**
     * Filter, which TransactionAdd to fetch.
     */
    where?: TransactionAddWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionAdds to fetch.
     */
    orderBy?: TransactionAddOrderByWithRelationInput | TransactionAddOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TransactionAdds.
     */
    cursor?: TransactionAddWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionAdds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionAdds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TransactionAdds.
     */
    distinct?: TransactionAddScalarFieldEnum | TransactionAddScalarFieldEnum[];
  };

  /**
   * TransactionAdd findFirstOrThrow
   */
  export type TransactionAddFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionAdd
     */
    select?: TransactionAddSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionAdd
     */
    omit?: TransactionAddOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionAddInclude<ExtArgs> | null;
    /**
     * Filter, which TransactionAdd to fetch.
     */
    where?: TransactionAddWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionAdds to fetch.
     */
    orderBy?: TransactionAddOrderByWithRelationInput | TransactionAddOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TransactionAdds.
     */
    cursor?: TransactionAddWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionAdds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionAdds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TransactionAdds.
     */
    distinct?: TransactionAddScalarFieldEnum | TransactionAddScalarFieldEnum[];
  };

  /**
   * TransactionAdd findMany
   */
  export type TransactionAddFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionAdd
     */
    select?: TransactionAddSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionAdd
     */
    omit?: TransactionAddOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionAddInclude<ExtArgs> | null;
    /**
     * Filter, which TransactionAdds to fetch.
     */
    where?: TransactionAddWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionAdds to fetch.
     */
    orderBy?: TransactionAddOrderByWithRelationInput | TransactionAddOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TransactionAdds.
     */
    cursor?: TransactionAddWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionAdds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionAdds.
     */
    skip?: number;
    distinct?: TransactionAddScalarFieldEnum | TransactionAddScalarFieldEnum[];
  };

  /**
   * TransactionAdd create
   */
  export type TransactionAddCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionAdd
     */
    select?: TransactionAddSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionAdd
     */
    omit?: TransactionAddOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionAddInclude<ExtArgs> | null;
    /**
     * The data needed to create a TransactionAdd.
     */
    data: XOR<TransactionAddCreateInput, TransactionAddUncheckedCreateInput>;
  };

  /**
   * TransactionAdd createMany
   */
  export type TransactionAddCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many TransactionAdds.
     */
    data: TransactionAddCreateManyInput | TransactionAddCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * TransactionAdd createManyAndReturn
   */
  export type TransactionAddCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionAdd
     */
    select?: TransactionAddSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionAdd
     */
    omit?: TransactionAddOmit<ExtArgs> | null;
    /**
     * The data used to create many TransactionAdds.
     */
    data: TransactionAddCreateManyInput | TransactionAddCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionAddIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * TransactionAdd update
   */
  export type TransactionAddUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionAdd
     */
    select?: TransactionAddSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionAdd
     */
    omit?: TransactionAddOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionAddInclude<ExtArgs> | null;
    /**
     * The data needed to update a TransactionAdd.
     */
    data: XOR<TransactionAddUpdateInput, TransactionAddUncheckedUpdateInput>;
    /**
     * Choose, which TransactionAdd to update.
     */
    where: TransactionAddWhereUniqueInput;
  };

  /**
   * TransactionAdd updateMany
   */
  export type TransactionAddUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update TransactionAdds.
     */
    data: XOR<TransactionAddUpdateManyMutationInput, TransactionAddUncheckedUpdateManyInput>;
    /**
     * Filter which TransactionAdds to update
     */
    where?: TransactionAddWhereInput;
    /**
     * Limit how many TransactionAdds to update.
     */
    limit?: number;
  };

  /**
   * TransactionAdd updateManyAndReturn
   */
  export type TransactionAddUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionAdd
     */
    select?: TransactionAddSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionAdd
     */
    omit?: TransactionAddOmit<ExtArgs> | null;
    /**
     * The data used to update TransactionAdds.
     */
    data: XOR<TransactionAddUpdateManyMutationInput, TransactionAddUncheckedUpdateManyInput>;
    /**
     * Filter which TransactionAdds to update
     */
    where?: TransactionAddWhereInput;
    /**
     * Limit how many TransactionAdds to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionAddIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * TransactionAdd upsert
   */
  export type TransactionAddUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionAdd
     */
    select?: TransactionAddSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionAdd
     */
    omit?: TransactionAddOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionAddInclude<ExtArgs> | null;
    /**
     * The filter to search for the TransactionAdd to update in case it exists.
     */
    where: TransactionAddWhereUniqueInput;
    /**
     * In case the TransactionAdd found by the `where` argument doesn't exist, create a new TransactionAdd with this data.
     */
    create: XOR<TransactionAddCreateInput, TransactionAddUncheckedCreateInput>;
    /**
     * In case the TransactionAdd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionAddUpdateInput, TransactionAddUncheckedUpdateInput>;
  };

  /**
   * TransactionAdd delete
   */
  export type TransactionAddDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionAdd
     */
    select?: TransactionAddSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionAdd
     */
    omit?: TransactionAddOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionAddInclude<ExtArgs> | null;
    /**
     * Filter which TransactionAdd to delete.
     */
    where: TransactionAddWhereUniqueInput;
  };

  /**
   * TransactionAdd deleteMany
   */
  export type TransactionAddDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TransactionAdds to delete
     */
    where?: TransactionAddWhereInput;
    /**
     * Limit how many TransactionAdds to delete.
     */
    limit?: number;
  };

  /**
   * TransactionAdd without action
   */
  export type TransactionAddDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionAdd
     */
    select?: TransactionAddSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionAdd
     */
    omit?: TransactionAddOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionAddInclude<ExtArgs> | null;
  };

  /**
   * Model TransactionDrop
   */

  export type AggregateTransactionDrop = {
    _count: TransactionDropCountAggregateOutputType | null;
    _avg: TransactionDropAvgAggregateOutputType | null;
    _sum: TransactionDropSumAggregateOutputType | null;
    _min: TransactionDropMinAggregateOutputType | null;
    _max: TransactionDropMaxAggregateOutputType | null;
  };

  export type TransactionDropAvgAggregateOutputType = {
    teamSlot: number | null;
  };

  export type TransactionDropSumAggregateOutputType = {
    teamSlot: number | null;
  };

  export type TransactionDropMinAggregateOutputType = {
    id: string | null;
    transactionId: string | null;
    teamSlot: number | null;
    playerId: string | null;
  };

  export type TransactionDropMaxAggregateOutputType = {
    id: string | null;
    transactionId: string | null;
    teamSlot: number | null;
    playerId: string | null;
  };

  export type TransactionDropCountAggregateOutputType = {
    id: number;
    transactionId: number;
    teamSlot: number;
    playerId: number;
    pickInfo: number;
    _all: number;
  };

  export type TransactionDropAvgAggregateInputType = {
    teamSlot?: true;
  };

  export type TransactionDropSumAggregateInputType = {
    teamSlot?: true;
  };

  export type TransactionDropMinAggregateInputType = {
    id?: true;
    transactionId?: true;
    teamSlot?: true;
    playerId?: true;
  };

  export type TransactionDropMaxAggregateInputType = {
    id?: true;
    transactionId?: true;
    teamSlot?: true;
    playerId?: true;
  };

  export type TransactionDropCountAggregateInputType = {
    id?: true;
    transactionId?: true;
    teamSlot?: true;
    playerId?: true;
    pickInfo?: true;
    _all?: true;
  };

  export type TransactionDropAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TransactionDrop to aggregate.
     */
    where?: TransactionDropWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionDrops to fetch.
     */
    orderBy?: TransactionDropOrderByWithRelationInput | TransactionDropOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TransactionDropWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionDrops from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionDrops.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TransactionDrops
     **/
    _count?: true | TransactionDropCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TransactionDropAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TransactionDropSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TransactionDropMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TransactionDropMaxAggregateInputType;
  };

  export type GetTransactionDropAggregateType<T extends TransactionDropAggregateArgs> = {
    [P in keyof T & keyof AggregateTransactionDrop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionDrop[P]>
      : GetScalarType<T[P], AggregateTransactionDrop[P]>;
  };

  export type TransactionDropGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TransactionDropWhereInput;
    orderBy?:
      | TransactionDropOrderByWithAggregationInput
      | TransactionDropOrderByWithAggregationInput[];
    by: TransactionDropScalarFieldEnum[] | TransactionDropScalarFieldEnum;
    having?: TransactionDropScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionDropCountAggregateInputType | true;
    _avg?: TransactionDropAvgAggregateInputType;
    _sum?: TransactionDropSumAggregateInputType;
    _min?: TransactionDropMinAggregateInputType;
    _max?: TransactionDropMaxAggregateInputType;
  };

  export type TransactionDropGroupByOutputType = {
    id: string;
    transactionId: string;
    teamSlot: number;
    playerId: string | null;
    pickInfo: JsonValue | null;
    _count: TransactionDropCountAggregateOutputType | null;
    _avg: TransactionDropAvgAggregateOutputType | null;
    _sum: TransactionDropSumAggregateOutputType | null;
    _min: TransactionDropMinAggregateOutputType | null;
    _max: TransactionDropMaxAggregateOutputType | null;
  };

  type GetTransactionDropGroupByPayload<T extends TransactionDropGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TransactionDropGroupByOutputType, T['by']> & {
          [P in keyof T & keyof TransactionDropGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionDropGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionDropGroupByOutputType[P]>;
        }
      >
    >;

  export type TransactionDropSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      transactionId?: boolean;
      teamSlot?: boolean;
      playerId?: boolean;
      pickInfo?: boolean;
      transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['transactionDrop']
  >;

  export type TransactionDropSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      transactionId?: boolean;
      teamSlot?: boolean;
      playerId?: boolean;
      pickInfo?: boolean;
      transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['transactionDrop']
  >;

  export type TransactionDropSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      transactionId?: boolean;
      teamSlot?: boolean;
      playerId?: boolean;
      pickInfo?: boolean;
      transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['transactionDrop']
  >;

  export type TransactionDropSelectScalar = {
    id?: boolean;
    transactionId?: boolean;
    teamSlot?: boolean;
    playerId?: boolean;
    pickInfo?: boolean;
  };

  export type TransactionDropOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'transactionId' | 'teamSlot' | 'playerId' | 'pickInfo',
    ExtArgs['result']['transactionDrop']
  >;
  export type TransactionDropInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
  };
  export type TransactionDropIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
  };
  export type TransactionDropIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>;
  };

  export type $TransactionDropPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'TransactionDrop';
    objects: {
      transaction: Prisma.$TransactionPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        transactionId: string;
        teamSlot: number;
        playerId: string | null;
        pickInfo: Prisma.JsonValue | null;
      },
      ExtArgs['result']['transactionDrop']
    >;
    composites: {};
  };

  type TransactionDropGetPayload<
    S extends boolean | null | undefined | TransactionDropDefaultArgs,
  > = $Result.GetResult<Prisma.$TransactionDropPayload, S>;

  type TransactionDropCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<TransactionDropFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TransactionDropCountAggregateInputType | true;
  };

  export interface TransactionDropDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['TransactionDrop'];
      meta: { name: 'TransactionDrop' };
    };
    /**
     * Find zero or one TransactionDrop that matches the filter.
     * @param {TransactionDropFindUniqueArgs} args - Arguments to find a TransactionDrop
     * @example
     * // Get one TransactionDrop
     * const transactionDrop = await prisma.transactionDrop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionDropFindUniqueArgs>(
      args: SelectSubset<T, TransactionDropFindUniqueArgs<ExtArgs>>
    ): Prisma__TransactionDropClient<
      $Result.GetResult<
        Prisma.$TransactionDropPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one TransactionDrop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionDropFindUniqueOrThrowArgs} args - Arguments to find a TransactionDrop
     * @example
     * // Get one TransactionDrop
     * const transactionDrop = await prisma.transactionDrop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionDropFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TransactionDropFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionDropClient<
      $Result.GetResult<
        Prisma.$TransactionDropPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first TransactionDrop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionDropFindFirstArgs} args - Arguments to find a TransactionDrop
     * @example
     * // Get one TransactionDrop
     * const transactionDrop = await prisma.transactionDrop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionDropFindFirstArgs>(
      args?: SelectSubset<T, TransactionDropFindFirstArgs<ExtArgs>>
    ): Prisma__TransactionDropClient<
      $Result.GetResult<
        Prisma.$TransactionDropPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first TransactionDrop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionDropFindFirstOrThrowArgs} args - Arguments to find a TransactionDrop
     * @example
     * // Get one TransactionDrop
     * const transactionDrop = await prisma.transactionDrop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionDropFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TransactionDropFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionDropClient<
      $Result.GetResult<
        Prisma.$TransactionDropPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more TransactionDrops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionDropFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionDrops
     * const transactionDrops = await prisma.transactionDrop.findMany()
     *
     * // Get first 10 TransactionDrops
     * const transactionDrops = await prisma.transactionDrop.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const transactionDropWithIdOnly = await prisma.transactionDrop.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TransactionDropFindManyArgs>(
      args?: SelectSubset<T, TransactionDropFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TransactionDropPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a TransactionDrop.
     * @param {TransactionDropCreateArgs} args - Arguments to create a TransactionDrop.
     * @example
     * // Create one TransactionDrop
     * const TransactionDrop = await prisma.transactionDrop.create({
     *   data: {
     *     // ... data to create a TransactionDrop
     *   }
     * })
     *
     */
    create<T extends TransactionDropCreateArgs>(
      args: SelectSubset<T, TransactionDropCreateArgs<ExtArgs>>
    ): Prisma__TransactionDropClient<
      $Result.GetResult<Prisma.$TransactionDropPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many TransactionDrops.
     * @param {TransactionDropCreateManyArgs} args - Arguments to create many TransactionDrops.
     * @example
     * // Create many TransactionDrops
     * const transactionDrop = await prisma.transactionDrop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TransactionDropCreateManyArgs>(
      args?: SelectSubset<T, TransactionDropCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many TransactionDrops and returns the data saved in the database.
     * @param {TransactionDropCreateManyAndReturnArgs} args - Arguments to create many TransactionDrops.
     * @example
     * // Create many TransactionDrops
     * const transactionDrop = await prisma.transactionDrop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TransactionDrops and only return the `id`
     * const transactionDropWithIdOnly = await prisma.transactionDrop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TransactionDropCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TransactionDropCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TransactionDropPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a TransactionDrop.
     * @param {TransactionDropDeleteArgs} args - Arguments to delete one TransactionDrop.
     * @example
     * // Delete one TransactionDrop
     * const TransactionDrop = await prisma.transactionDrop.delete({
     *   where: {
     *     // ... filter to delete one TransactionDrop
     *   }
     * })
     *
     */
    delete<T extends TransactionDropDeleteArgs>(
      args: SelectSubset<T, TransactionDropDeleteArgs<ExtArgs>>
    ): Prisma__TransactionDropClient<
      $Result.GetResult<Prisma.$TransactionDropPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one TransactionDrop.
     * @param {TransactionDropUpdateArgs} args - Arguments to update one TransactionDrop.
     * @example
     * // Update one TransactionDrop
     * const transactionDrop = await prisma.transactionDrop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TransactionDropUpdateArgs>(
      args: SelectSubset<T, TransactionDropUpdateArgs<ExtArgs>>
    ): Prisma__TransactionDropClient<
      $Result.GetResult<Prisma.$TransactionDropPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more TransactionDrops.
     * @param {TransactionDropDeleteManyArgs} args - Arguments to filter TransactionDrops to delete.
     * @example
     * // Delete a few TransactionDrops
     * const { count } = await prisma.transactionDrop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TransactionDropDeleteManyArgs>(
      args?: SelectSubset<T, TransactionDropDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TransactionDrops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionDropUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionDrops
     * const transactionDrop = await prisma.transactionDrop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TransactionDropUpdateManyArgs>(
      args: SelectSubset<T, TransactionDropUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TransactionDrops and returns the data updated in the database.
     * @param {TransactionDropUpdateManyAndReturnArgs} args - Arguments to update many TransactionDrops.
     * @example
     * // Update many TransactionDrops
     * const transactionDrop = await prisma.transactionDrop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TransactionDrops and only return the `id`
     * const transactionDropWithIdOnly = await prisma.transactionDrop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TransactionDropUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TransactionDropUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TransactionDropPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one TransactionDrop.
     * @param {TransactionDropUpsertArgs} args - Arguments to update or create a TransactionDrop.
     * @example
     * // Update or create a TransactionDrop
     * const transactionDrop = await prisma.transactionDrop.upsert({
     *   create: {
     *     // ... data to create a TransactionDrop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionDrop we want to update
     *   }
     * })
     */
    upsert<T extends TransactionDropUpsertArgs>(
      args: SelectSubset<T, TransactionDropUpsertArgs<ExtArgs>>
    ): Prisma__TransactionDropClient<
      $Result.GetResult<Prisma.$TransactionDropPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of TransactionDrops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionDropCountArgs} args - Arguments to filter TransactionDrops to count.
     * @example
     * // Count the number of TransactionDrops
     * const count = await prisma.transactionDrop.count({
     *   where: {
     *     // ... the filter for the TransactionDrops we want to count
     *   }
     * })
     **/
    count<T extends TransactionDropCountArgs>(
      args?: Subset<T, TransactionDropCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionDropCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a TransactionDrop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionDropAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TransactionDropAggregateArgs>(
      args: Subset<T, TransactionDropAggregateArgs>
    ): Prisma.PrismaPromise<GetTransactionDropAggregateType<T>>;

    /**
     * Group by TransactionDrop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionDropGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends TransactionDropGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionDropGroupByArgs['orderBy'] }
        : { orderBy?: TransactionDropGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TransactionDropGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetTransactionDropGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TransactionDrop model
     */
    readonly fields: TransactionDropFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionDrop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionDropClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TransactionDefaultArgs<ExtArgs>>
    ): Prisma__TransactionClient<
      | $Result.GetResult<
          Prisma.$TransactionPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the TransactionDrop model
   */
  interface TransactionDropFieldRefs {
    readonly id: FieldRef<'TransactionDrop', 'String'>;
    readonly transactionId: FieldRef<'TransactionDrop', 'String'>;
    readonly teamSlot: FieldRef<'TransactionDrop', 'Int'>;
    readonly playerId: FieldRef<'TransactionDrop', 'String'>;
    readonly pickInfo: FieldRef<'TransactionDrop', 'Json'>;
  }

  // Custom InputTypes
  /**
   * TransactionDrop findUnique
   */
  export type TransactionDropFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionDrop
     */
    select?: TransactionDropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionDrop
     */
    omit?: TransactionDropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDropInclude<ExtArgs> | null;
    /**
     * Filter, which TransactionDrop to fetch.
     */
    where: TransactionDropWhereUniqueInput;
  };

  /**
   * TransactionDrop findUniqueOrThrow
   */
  export type TransactionDropFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionDrop
     */
    select?: TransactionDropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionDrop
     */
    omit?: TransactionDropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDropInclude<ExtArgs> | null;
    /**
     * Filter, which TransactionDrop to fetch.
     */
    where: TransactionDropWhereUniqueInput;
  };

  /**
   * TransactionDrop findFirst
   */
  export type TransactionDropFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionDrop
     */
    select?: TransactionDropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionDrop
     */
    omit?: TransactionDropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDropInclude<ExtArgs> | null;
    /**
     * Filter, which TransactionDrop to fetch.
     */
    where?: TransactionDropWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionDrops to fetch.
     */
    orderBy?: TransactionDropOrderByWithRelationInput | TransactionDropOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TransactionDrops.
     */
    cursor?: TransactionDropWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionDrops from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionDrops.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TransactionDrops.
     */
    distinct?: TransactionDropScalarFieldEnum | TransactionDropScalarFieldEnum[];
  };

  /**
   * TransactionDrop findFirstOrThrow
   */
  export type TransactionDropFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionDrop
     */
    select?: TransactionDropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionDrop
     */
    omit?: TransactionDropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDropInclude<ExtArgs> | null;
    /**
     * Filter, which TransactionDrop to fetch.
     */
    where?: TransactionDropWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionDrops to fetch.
     */
    orderBy?: TransactionDropOrderByWithRelationInput | TransactionDropOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TransactionDrops.
     */
    cursor?: TransactionDropWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionDrops from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionDrops.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TransactionDrops.
     */
    distinct?: TransactionDropScalarFieldEnum | TransactionDropScalarFieldEnum[];
  };

  /**
   * TransactionDrop findMany
   */
  export type TransactionDropFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionDrop
     */
    select?: TransactionDropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionDrop
     */
    omit?: TransactionDropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDropInclude<ExtArgs> | null;
    /**
     * Filter, which TransactionDrops to fetch.
     */
    where?: TransactionDropWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TransactionDrops to fetch.
     */
    orderBy?: TransactionDropOrderByWithRelationInput | TransactionDropOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TransactionDrops.
     */
    cursor?: TransactionDropWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TransactionDrops from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TransactionDrops.
     */
    skip?: number;
    distinct?: TransactionDropScalarFieldEnum | TransactionDropScalarFieldEnum[];
  };

  /**
   * TransactionDrop create
   */
  export type TransactionDropCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionDrop
     */
    select?: TransactionDropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionDrop
     */
    omit?: TransactionDropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDropInclude<ExtArgs> | null;
    /**
     * The data needed to create a TransactionDrop.
     */
    data: XOR<TransactionDropCreateInput, TransactionDropUncheckedCreateInput>;
  };

  /**
   * TransactionDrop createMany
   */
  export type TransactionDropCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many TransactionDrops.
     */
    data: TransactionDropCreateManyInput | TransactionDropCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * TransactionDrop createManyAndReturn
   */
  export type TransactionDropCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionDrop
     */
    select?: TransactionDropSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionDrop
     */
    omit?: TransactionDropOmit<ExtArgs> | null;
    /**
     * The data used to create many TransactionDrops.
     */
    data: TransactionDropCreateManyInput | TransactionDropCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDropIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * TransactionDrop update
   */
  export type TransactionDropUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionDrop
     */
    select?: TransactionDropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionDrop
     */
    omit?: TransactionDropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDropInclude<ExtArgs> | null;
    /**
     * The data needed to update a TransactionDrop.
     */
    data: XOR<TransactionDropUpdateInput, TransactionDropUncheckedUpdateInput>;
    /**
     * Choose, which TransactionDrop to update.
     */
    where: TransactionDropWhereUniqueInput;
  };

  /**
   * TransactionDrop updateMany
   */
  export type TransactionDropUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update TransactionDrops.
     */
    data: XOR<TransactionDropUpdateManyMutationInput, TransactionDropUncheckedUpdateManyInput>;
    /**
     * Filter which TransactionDrops to update
     */
    where?: TransactionDropWhereInput;
    /**
     * Limit how many TransactionDrops to update.
     */
    limit?: number;
  };

  /**
   * TransactionDrop updateManyAndReturn
   */
  export type TransactionDropUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionDrop
     */
    select?: TransactionDropSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionDrop
     */
    omit?: TransactionDropOmit<ExtArgs> | null;
    /**
     * The data used to update TransactionDrops.
     */
    data: XOR<TransactionDropUpdateManyMutationInput, TransactionDropUncheckedUpdateManyInput>;
    /**
     * Filter which TransactionDrops to update
     */
    where?: TransactionDropWhereInput;
    /**
     * Limit how many TransactionDrops to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDropIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * TransactionDrop upsert
   */
  export type TransactionDropUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionDrop
     */
    select?: TransactionDropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionDrop
     */
    omit?: TransactionDropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDropInclude<ExtArgs> | null;
    /**
     * The filter to search for the TransactionDrop to update in case it exists.
     */
    where: TransactionDropWhereUniqueInput;
    /**
     * In case the TransactionDrop found by the `where` argument doesn't exist, create a new TransactionDrop with this data.
     */
    create: XOR<TransactionDropCreateInput, TransactionDropUncheckedCreateInput>;
    /**
     * In case the TransactionDrop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionDropUpdateInput, TransactionDropUncheckedUpdateInput>;
  };

  /**
   * TransactionDrop delete
   */
  export type TransactionDropDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionDrop
     */
    select?: TransactionDropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionDrop
     */
    omit?: TransactionDropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDropInclude<ExtArgs> | null;
    /**
     * Filter which TransactionDrop to delete.
     */
    where: TransactionDropWhereUniqueInput;
  };

  /**
   * TransactionDrop deleteMany
   */
  export type TransactionDropDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TransactionDrops to delete
     */
    where?: TransactionDropWhereInput;
    /**
     * Limit how many TransactionDrops to delete.
     */
    limit?: number;
  };

  /**
   * TransactionDrop without action
   */
  export type TransactionDropDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TransactionDrop
     */
    select?: TransactionDropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TransactionDrop
     */
    omit?: TransactionDropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionDropInclude<ExtArgs> | null;
  };

  /**
   * Model GuildConfig
   */

  export type AggregateGuildConfig = {
    _count: GuildConfigCountAggregateOutputType | null;
    _min: GuildConfigMinAggregateOutputType | null;
    _max: GuildConfigMaxAggregateOutputType | null;
  };

  export type GuildConfigMinAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    guildId: string | null;
    guildName: string | null;
    notificationChannelId: string | null;
    sleeperLeagueId: string | null;
    tradeAlerts: boolean | null;
    waiverAlerts: boolean | null;
    injuryAlerts: boolean | null;
    lineupReminders: boolean | null;
    timezone: string | null;
  };

  export type GuildConfigMaxAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    guildId: string | null;
    guildName: string | null;
    notificationChannelId: string | null;
    sleeperLeagueId: string | null;
    tradeAlerts: boolean | null;
    waiverAlerts: boolean | null;
    injuryAlerts: boolean | null;
    lineupReminders: boolean | null;
    timezone: string | null;
  };

  export type GuildConfigCountAggregateOutputType = {
    id: number;
    createdAt: number;
    updatedAt: number;
    guildId: number;
    guildName: number;
    notificationChannelId: number;
    sleeperLeagueId: number;
    tradeAlerts: number;
    waiverAlerts: number;
    injuryAlerts: number;
    lineupReminders: number;
    timezone: number;
    _all: number;
  };

  export type GuildConfigMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    guildId?: true;
    guildName?: true;
    notificationChannelId?: true;
    sleeperLeagueId?: true;
    tradeAlerts?: true;
    waiverAlerts?: true;
    injuryAlerts?: true;
    lineupReminders?: true;
    timezone?: true;
  };

  export type GuildConfigMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    guildId?: true;
    guildName?: true;
    notificationChannelId?: true;
    sleeperLeagueId?: true;
    tradeAlerts?: true;
    waiverAlerts?: true;
    injuryAlerts?: true;
    lineupReminders?: true;
    timezone?: true;
  };

  export type GuildConfigCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    guildId?: true;
    guildName?: true;
    notificationChannelId?: true;
    sleeperLeagueId?: true;
    tradeAlerts?: true;
    waiverAlerts?: true;
    injuryAlerts?: true;
    lineupReminders?: true;
    timezone?: true;
    _all?: true;
  };

  export type GuildConfigAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which GuildConfig to aggregate.
     */
    where?: GuildConfigWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GuildConfigs to fetch.
     */
    orderBy?: GuildConfigOrderByWithRelationInput | GuildConfigOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: GuildConfigWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GuildConfigs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GuildConfigs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned GuildConfigs
     **/
    _count?: true | GuildConfigCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GuildConfigMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GuildConfigMaxAggregateInputType;
  };

  export type GetGuildConfigAggregateType<T extends GuildConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateGuildConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuildConfig[P]>
      : GetScalarType<T[P], AggregateGuildConfig[P]>;
  };

  export type GuildConfigGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: GuildConfigWhereInput;
    orderBy?: GuildConfigOrderByWithAggregationInput | GuildConfigOrderByWithAggregationInput[];
    by: GuildConfigScalarFieldEnum[] | GuildConfigScalarFieldEnum;
    having?: GuildConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GuildConfigCountAggregateInputType | true;
    _min?: GuildConfigMinAggregateInputType;
    _max?: GuildConfigMaxAggregateInputType;
  };

  export type GuildConfigGroupByOutputType = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    guildId: string;
    guildName: string | null;
    notificationChannelId: string;
    sleeperLeagueId: string;
    tradeAlerts: boolean;
    waiverAlerts: boolean;
    injuryAlerts: boolean;
    lineupReminders: boolean;
    timezone: string;
    _count: GuildConfigCountAggregateOutputType | null;
    _min: GuildConfigMinAggregateOutputType | null;
    _max: GuildConfigMaxAggregateOutputType | null;
  };

  type GetGuildConfigGroupByPayload<T extends GuildConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuildConfigGroupByOutputType, T['by']> & {
        [P in keyof T & keyof GuildConfigGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], GuildConfigGroupByOutputType[P]>
          : GetScalarType<T[P], GuildConfigGroupByOutputType[P]>;
      }
    >
  >;

  export type GuildConfigSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      guildId?: boolean;
      guildName?: boolean;
      notificationChannelId?: boolean;
      sleeperLeagueId?: boolean;
      tradeAlerts?: boolean;
      waiverAlerts?: boolean;
      injuryAlerts?: boolean;
      lineupReminders?: boolean;
      timezone?: boolean;
    },
    ExtArgs['result']['guildConfig']
  >;

  export type GuildConfigSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      guildId?: boolean;
      guildName?: boolean;
      notificationChannelId?: boolean;
      sleeperLeagueId?: boolean;
      tradeAlerts?: boolean;
      waiverAlerts?: boolean;
      injuryAlerts?: boolean;
      lineupReminders?: boolean;
      timezone?: boolean;
    },
    ExtArgs['result']['guildConfig']
  >;

  export type GuildConfigSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      guildId?: boolean;
      guildName?: boolean;
      notificationChannelId?: boolean;
      sleeperLeagueId?: boolean;
      tradeAlerts?: boolean;
      waiverAlerts?: boolean;
      injuryAlerts?: boolean;
      lineupReminders?: boolean;
      timezone?: boolean;
    },
    ExtArgs['result']['guildConfig']
  >;

  export type GuildConfigSelectScalar = {
    id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    guildId?: boolean;
    guildName?: boolean;
    notificationChannelId?: boolean;
    sleeperLeagueId?: boolean;
    tradeAlerts?: boolean;
    waiverAlerts?: boolean;
    injuryAlerts?: boolean;
    lineupReminders?: boolean;
    timezone?: boolean;
  };

  export type GuildConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      | 'id'
      | 'createdAt'
      | 'updatedAt'
      | 'guildId'
      | 'guildName'
      | 'notificationChannelId'
      | 'sleeperLeagueId'
      | 'tradeAlerts'
      | 'waiverAlerts'
      | 'injuryAlerts'
      | 'lineupReminders'
      | 'timezone',
      ExtArgs['result']['guildConfig']
    >;

  export type $GuildConfigPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'GuildConfig';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        guildId: string;
        guildName: string | null;
        notificationChannelId: string;
        sleeperLeagueId: string;
        tradeAlerts: boolean;
        waiverAlerts: boolean;
        injuryAlerts: boolean;
        lineupReminders: boolean;
        timezone: string;
      },
      ExtArgs['result']['guildConfig']
    >;
    composites: {};
  };

  type GuildConfigGetPayload<S extends boolean | null | undefined | GuildConfigDefaultArgs> =
    $Result.GetResult<Prisma.$GuildConfigPayload, S>;

  type GuildConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuildConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuildConfigCountAggregateInputType | true;
    };

  export interface GuildConfigDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['GuildConfig'];
      meta: { name: 'GuildConfig' };
    };
    /**
     * Find zero or one GuildConfig that matches the filter.
     * @param {GuildConfigFindUniqueArgs} args - Arguments to find a GuildConfig
     * @example
     * // Get one GuildConfig
     * const guildConfig = await prisma.guildConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuildConfigFindUniqueArgs>(
      args: SelectSubset<T, GuildConfigFindUniqueArgs<ExtArgs>>
    ): Prisma__GuildConfigClient<
      $Result.GetResult<
        Prisma.$GuildConfigPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one GuildConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuildConfigFindUniqueOrThrowArgs} args - Arguments to find a GuildConfig
     * @example
     * // Get one GuildConfig
     * const guildConfig = await prisma.guildConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuildConfigFindUniqueOrThrowArgs>(
      args: SelectSubset<T, GuildConfigFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GuildConfigClient<
      $Result.GetResult<
        Prisma.$GuildConfigPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first GuildConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigFindFirstArgs} args - Arguments to find a GuildConfig
     * @example
     * // Get one GuildConfig
     * const guildConfig = await prisma.guildConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuildConfigFindFirstArgs>(
      args?: SelectSubset<T, GuildConfigFindFirstArgs<ExtArgs>>
    ): Prisma__GuildConfigClient<
      $Result.GetResult<
        Prisma.$GuildConfigPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first GuildConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigFindFirstOrThrowArgs} args - Arguments to find a GuildConfig
     * @example
     * // Get one GuildConfig
     * const guildConfig = await prisma.guildConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuildConfigFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GuildConfigFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GuildConfigClient<
      $Result.GetResult<
        Prisma.$GuildConfigPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more GuildConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuildConfigs
     * const guildConfigs = await prisma.guildConfig.findMany()
     *
     * // Get first 10 GuildConfigs
     * const guildConfigs = await prisma.guildConfig.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const guildConfigWithIdOnly = await prisma.guildConfig.findMany({ select: { id: true } })
     *
     */
    findMany<T extends GuildConfigFindManyArgs>(
      args?: SelectSubset<T, GuildConfigFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a GuildConfig.
     * @param {GuildConfigCreateArgs} args - Arguments to create a GuildConfig.
     * @example
     * // Create one GuildConfig
     * const GuildConfig = await prisma.guildConfig.create({
     *   data: {
     *     // ... data to create a GuildConfig
     *   }
     * })
     *
     */
    create<T extends GuildConfigCreateArgs>(
      args: SelectSubset<T, GuildConfigCreateArgs<ExtArgs>>
    ): Prisma__GuildConfigClient<
      $Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many GuildConfigs.
     * @param {GuildConfigCreateManyArgs} args - Arguments to create many GuildConfigs.
     * @example
     * // Create many GuildConfigs
     * const guildConfig = await prisma.guildConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends GuildConfigCreateManyArgs>(
      args?: SelectSubset<T, GuildConfigCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many GuildConfigs and returns the data saved in the database.
     * @param {GuildConfigCreateManyAndReturnArgs} args - Arguments to create many GuildConfigs.
     * @example
     * // Create many GuildConfigs
     * const guildConfig = await prisma.guildConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many GuildConfigs and only return the `id`
     * const guildConfigWithIdOnly = await prisma.guildConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends GuildConfigCreateManyAndReturnArgs>(
      args?: SelectSubset<T, GuildConfigCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GuildConfigPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a GuildConfig.
     * @param {GuildConfigDeleteArgs} args - Arguments to delete one GuildConfig.
     * @example
     * // Delete one GuildConfig
     * const GuildConfig = await prisma.guildConfig.delete({
     *   where: {
     *     // ... filter to delete one GuildConfig
     *   }
     * })
     *
     */
    delete<T extends GuildConfigDeleteArgs>(
      args: SelectSubset<T, GuildConfigDeleteArgs<ExtArgs>>
    ): Prisma__GuildConfigClient<
      $Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one GuildConfig.
     * @param {GuildConfigUpdateArgs} args - Arguments to update one GuildConfig.
     * @example
     * // Update one GuildConfig
     * const guildConfig = await prisma.guildConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends GuildConfigUpdateArgs>(
      args: SelectSubset<T, GuildConfigUpdateArgs<ExtArgs>>
    ): Prisma__GuildConfigClient<
      $Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more GuildConfigs.
     * @param {GuildConfigDeleteManyArgs} args - Arguments to filter GuildConfigs to delete.
     * @example
     * // Delete a few GuildConfigs
     * const { count } = await prisma.guildConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends GuildConfigDeleteManyArgs>(
      args?: SelectSubset<T, GuildConfigDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more GuildConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuildConfigs
     * const guildConfig = await prisma.guildConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends GuildConfigUpdateManyArgs>(
      args: SelectSubset<T, GuildConfigUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more GuildConfigs and returns the data updated in the database.
     * @param {GuildConfigUpdateManyAndReturnArgs} args - Arguments to update many GuildConfigs.
     * @example
     * // Update many GuildConfigs
     * const guildConfig = await prisma.guildConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more GuildConfigs and only return the `id`
     * const guildConfigWithIdOnly = await prisma.guildConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends GuildConfigUpdateManyAndReturnArgs>(
      args: SelectSubset<T, GuildConfigUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GuildConfigPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one GuildConfig.
     * @param {GuildConfigUpsertArgs} args - Arguments to update or create a GuildConfig.
     * @example
     * // Update or create a GuildConfig
     * const guildConfig = await prisma.guildConfig.upsert({
     *   create: {
     *     // ... data to create a GuildConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuildConfig we want to update
     *   }
     * })
     */
    upsert<T extends GuildConfigUpsertArgs>(
      args: SelectSubset<T, GuildConfigUpsertArgs<ExtArgs>>
    ): Prisma__GuildConfigClient<
      $Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of GuildConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigCountArgs} args - Arguments to filter GuildConfigs to count.
     * @example
     * // Count the number of GuildConfigs
     * const count = await prisma.guildConfig.count({
     *   where: {
     *     // ... the filter for the GuildConfigs we want to count
     *   }
     * })
     **/
    count<T extends GuildConfigCountArgs>(
      args?: Subset<T, GuildConfigCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuildConfigCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a GuildConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends GuildConfigAggregateArgs>(
      args: Subset<T, GuildConfigAggregateArgs>
    ): Prisma.PrismaPromise<GetGuildConfigAggregateType<T>>;

    /**
     * Group by GuildConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends GuildConfigGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuildConfigGroupByArgs['orderBy'] }
        : { orderBy?: GuildConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, GuildConfigGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetGuildConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the GuildConfig model
     */
    readonly fields: GuildConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuildConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuildConfigClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the GuildConfig model
   */
  interface GuildConfigFieldRefs {
    readonly id: FieldRef<'GuildConfig', 'String'>;
    readonly createdAt: FieldRef<'GuildConfig', 'DateTime'>;
    readonly updatedAt: FieldRef<'GuildConfig', 'DateTime'>;
    readonly guildId: FieldRef<'GuildConfig', 'String'>;
    readonly guildName: FieldRef<'GuildConfig', 'String'>;
    readonly notificationChannelId: FieldRef<'GuildConfig', 'String'>;
    readonly sleeperLeagueId: FieldRef<'GuildConfig', 'String'>;
    readonly tradeAlerts: FieldRef<'GuildConfig', 'Boolean'>;
    readonly waiverAlerts: FieldRef<'GuildConfig', 'Boolean'>;
    readonly injuryAlerts: FieldRef<'GuildConfig', 'Boolean'>;
    readonly lineupReminders: FieldRef<'GuildConfig', 'Boolean'>;
    readonly timezone: FieldRef<'GuildConfig', 'String'>;
  }

  // Custom InputTypes
  /**
   * GuildConfig findUnique
   */
  export type GuildConfigFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null;
    /**
     * Filter, which GuildConfig to fetch.
     */
    where: GuildConfigWhereUniqueInput;
  };

  /**
   * GuildConfig findUniqueOrThrow
   */
  export type GuildConfigFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null;
    /**
     * Filter, which GuildConfig to fetch.
     */
    where: GuildConfigWhereUniqueInput;
  };

  /**
   * GuildConfig findFirst
   */
  export type GuildConfigFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null;
    /**
     * Filter, which GuildConfig to fetch.
     */
    where?: GuildConfigWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GuildConfigs to fetch.
     */
    orderBy?: GuildConfigOrderByWithRelationInput | GuildConfigOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for GuildConfigs.
     */
    cursor?: GuildConfigWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GuildConfigs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GuildConfigs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GuildConfigs.
     */
    distinct?: GuildConfigScalarFieldEnum | GuildConfigScalarFieldEnum[];
  };

  /**
   * GuildConfig findFirstOrThrow
   */
  export type GuildConfigFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null;
    /**
     * Filter, which GuildConfig to fetch.
     */
    where?: GuildConfigWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GuildConfigs to fetch.
     */
    orderBy?: GuildConfigOrderByWithRelationInput | GuildConfigOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for GuildConfigs.
     */
    cursor?: GuildConfigWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GuildConfigs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GuildConfigs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GuildConfigs.
     */
    distinct?: GuildConfigScalarFieldEnum | GuildConfigScalarFieldEnum[];
  };

  /**
   * GuildConfig findMany
   */
  export type GuildConfigFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null;
    /**
     * Filter, which GuildConfigs to fetch.
     */
    where?: GuildConfigWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GuildConfigs to fetch.
     */
    orderBy?: GuildConfigOrderByWithRelationInput | GuildConfigOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing GuildConfigs.
     */
    cursor?: GuildConfigWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GuildConfigs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GuildConfigs.
     */
    skip?: number;
    distinct?: GuildConfigScalarFieldEnum | GuildConfigScalarFieldEnum[];
  };

  /**
   * GuildConfig create
   */
  export type GuildConfigCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null;
    /**
     * The data needed to create a GuildConfig.
     */
    data: XOR<GuildConfigCreateInput, GuildConfigUncheckedCreateInput>;
  };

  /**
   * GuildConfig createMany
   */
  export type GuildConfigCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many GuildConfigs.
     */
    data: GuildConfigCreateManyInput | GuildConfigCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * GuildConfig createManyAndReturn
   */
  export type GuildConfigCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null;
    /**
     * The data used to create many GuildConfigs.
     */
    data: GuildConfigCreateManyInput | GuildConfigCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * GuildConfig update
   */
  export type GuildConfigUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null;
    /**
     * The data needed to update a GuildConfig.
     */
    data: XOR<GuildConfigUpdateInput, GuildConfigUncheckedUpdateInput>;
    /**
     * Choose, which GuildConfig to update.
     */
    where: GuildConfigWhereUniqueInput;
  };

  /**
   * GuildConfig updateMany
   */
  export type GuildConfigUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update GuildConfigs.
     */
    data: XOR<GuildConfigUpdateManyMutationInput, GuildConfigUncheckedUpdateManyInput>;
    /**
     * Filter which GuildConfigs to update
     */
    where?: GuildConfigWhereInput;
    /**
     * Limit how many GuildConfigs to update.
     */
    limit?: number;
  };

  /**
   * GuildConfig updateManyAndReturn
   */
  export type GuildConfigUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null;
    /**
     * The data used to update GuildConfigs.
     */
    data: XOR<GuildConfigUpdateManyMutationInput, GuildConfigUncheckedUpdateManyInput>;
    /**
     * Filter which GuildConfigs to update
     */
    where?: GuildConfigWhereInput;
    /**
     * Limit how many GuildConfigs to update.
     */
    limit?: number;
  };

  /**
   * GuildConfig upsert
   */
  export type GuildConfigUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null;
    /**
     * The filter to search for the GuildConfig to update in case it exists.
     */
    where: GuildConfigWhereUniqueInput;
    /**
     * In case the GuildConfig found by the `where` argument doesn't exist, create a new GuildConfig with this data.
     */
    create: XOR<GuildConfigCreateInput, GuildConfigUncheckedCreateInput>;
    /**
     * In case the GuildConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuildConfigUpdateInput, GuildConfigUncheckedUpdateInput>;
  };

  /**
   * GuildConfig delete
   */
  export type GuildConfigDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null;
    /**
     * Filter which GuildConfig to delete.
     */
    where: GuildConfigWhereUniqueInput;
  };

  /**
   * GuildConfig deleteMany
   */
  export type GuildConfigDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which GuildConfigs to delete
     */
    where?: GuildConfigWhereInput;
    /**
     * Limit how many GuildConfigs to delete.
     */
    limit?: number;
  };

  /**
   * GuildConfig without action
   */
  export type GuildConfigDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null;
  };

  /**
   * Model UserNotificationPreference
   */

  export type AggregateUserNotificationPreference = {
    _count: UserNotificationPreferenceCountAggregateOutputType | null;
    _min: UserNotificationPreferenceMinAggregateOutputType | null;
    _max: UserNotificationPreferenceMaxAggregateOutputType | null;
  };

  export type UserNotificationPreferenceMinAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    discordUserId: string | null;
    dmTradeAlerts: boolean | null;
    dmLineupReminders: boolean | null;
    dmInjuryAlerts: boolean | null;
    sleeperUserId: string | null;
  };

  export type UserNotificationPreferenceMaxAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    discordUserId: string | null;
    dmTradeAlerts: boolean | null;
    dmLineupReminders: boolean | null;
    dmInjuryAlerts: boolean | null;
    sleeperUserId: string | null;
  };

  export type UserNotificationPreferenceCountAggregateOutputType = {
    id: number;
    createdAt: number;
    updatedAt: number;
    discordUserId: number;
    dmTradeAlerts: number;
    dmLineupReminders: number;
    dmInjuryAlerts: number;
    sleeperUserId: number;
    _all: number;
  };

  export type UserNotificationPreferenceMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    discordUserId?: true;
    dmTradeAlerts?: true;
    dmLineupReminders?: true;
    dmInjuryAlerts?: true;
    sleeperUserId?: true;
  };

  export type UserNotificationPreferenceMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    discordUserId?: true;
    dmTradeAlerts?: true;
    dmLineupReminders?: true;
    dmInjuryAlerts?: true;
    sleeperUserId?: true;
  };

  export type UserNotificationPreferenceCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
    discordUserId?: true;
    dmTradeAlerts?: true;
    dmLineupReminders?: true;
    dmInjuryAlerts?: true;
    sleeperUserId?: true;
    _all?: true;
  };

  export type UserNotificationPreferenceAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserNotificationPreference to aggregate.
     */
    where?: UserNotificationPreferenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserNotificationPreferences to fetch.
     */
    orderBy?:
      | UserNotificationPreferenceOrderByWithRelationInput
      | UserNotificationPreferenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserNotificationPreferenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserNotificationPreferences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserNotificationPreferences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserNotificationPreferences
     **/
    _count?: true | UserNotificationPreferenceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserNotificationPreferenceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserNotificationPreferenceMaxAggregateInputType;
  };

  export type GetUserNotificationPreferenceAggregateType<
    T extends UserNotificationPreferenceAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateUserNotificationPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserNotificationPreference[P]>
      : GetScalarType<T[P], AggregateUserNotificationPreference[P]>;
  };

  export type UserNotificationPreferenceGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserNotificationPreferenceWhereInput;
    orderBy?:
      | UserNotificationPreferenceOrderByWithAggregationInput
      | UserNotificationPreferenceOrderByWithAggregationInput[];
    by: UserNotificationPreferenceScalarFieldEnum[] | UserNotificationPreferenceScalarFieldEnum;
    having?: UserNotificationPreferenceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserNotificationPreferenceCountAggregateInputType | true;
    _min?: UserNotificationPreferenceMinAggregateInputType;
    _max?: UserNotificationPreferenceMaxAggregateInputType;
  };

  export type UserNotificationPreferenceGroupByOutputType = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    discordUserId: string;
    dmTradeAlerts: boolean;
    dmLineupReminders: boolean;
    dmInjuryAlerts: boolean;
    sleeperUserId: string | null;
    _count: UserNotificationPreferenceCountAggregateOutputType | null;
    _min: UserNotificationPreferenceMinAggregateOutputType | null;
    _max: UserNotificationPreferenceMaxAggregateOutputType | null;
  };

  type GetUserNotificationPreferenceGroupByPayload<
    T extends UserNotificationPreferenceGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserNotificationPreferenceGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserNotificationPreferenceGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserNotificationPreferenceGroupByOutputType[P]>
          : GetScalarType<T[P], UserNotificationPreferenceGroupByOutputType[P]>;
      }
    >
  >;

  export type UserNotificationPreferenceSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      discordUserId?: boolean;
      dmTradeAlerts?: boolean;
      dmLineupReminders?: boolean;
      dmInjuryAlerts?: boolean;
      sleeperUserId?: boolean;
    },
    ExtArgs['result']['userNotificationPreference']
  >;

  export type UserNotificationPreferenceSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      discordUserId?: boolean;
      dmTradeAlerts?: boolean;
      dmLineupReminders?: boolean;
      dmInjuryAlerts?: boolean;
      sleeperUserId?: boolean;
    },
    ExtArgs['result']['userNotificationPreference']
  >;

  export type UserNotificationPreferenceSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      discordUserId?: boolean;
      dmTradeAlerts?: boolean;
      dmLineupReminders?: boolean;
      dmInjuryAlerts?: boolean;
      sleeperUserId?: boolean;
    },
    ExtArgs['result']['userNotificationPreference']
  >;

  export type UserNotificationPreferenceSelectScalar = {
    id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    discordUserId?: boolean;
    dmTradeAlerts?: boolean;
    dmLineupReminders?: boolean;
    dmInjuryAlerts?: boolean;
    sleeperUserId?: boolean;
  };

  export type UserNotificationPreferenceOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'createdAt'
    | 'updatedAt'
    | 'discordUserId'
    | 'dmTradeAlerts'
    | 'dmLineupReminders'
    | 'dmInjuryAlerts'
    | 'sleeperUserId',
    ExtArgs['result']['userNotificationPreference']
  >;

  export type $UserNotificationPreferencePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'UserNotificationPreference';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        discordUserId: string;
        dmTradeAlerts: boolean;
        dmLineupReminders: boolean;
        dmInjuryAlerts: boolean;
        sleeperUserId: string | null;
      },
      ExtArgs['result']['userNotificationPreference']
    >;
    composites: {};
  };

  type UserNotificationPreferenceGetPayload<
    S extends boolean | null | undefined | UserNotificationPreferenceDefaultArgs,
  > = $Result.GetResult<Prisma.$UserNotificationPreferencePayload, S>;

  type UserNotificationPreferenceCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserNotificationPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserNotificationPreferenceCountAggregateInputType | true;
  };

  export interface UserNotificationPreferenceDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['UserNotificationPreference'];
      meta: { name: 'UserNotificationPreference' };
    };
    /**
     * Find zero or one UserNotificationPreference that matches the filter.
     * @param {UserNotificationPreferenceFindUniqueArgs} args - Arguments to find a UserNotificationPreference
     * @example
     * // Get one UserNotificationPreference
     * const userNotificationPreference = await prisma.userNotificationPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserNotificationPreferenceFindUniqueArgs>(
      args: SelectSubset<T, UserNotificationPreferenceFindUniqueArgs<ExtArgs>>
    ): Prisma__UserNotificationPreferenceClient<
      $Result.GetResult<
        Prisma.$UserNotificationPreferencePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one UserNotificationPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserNotificationPreferenceFindUniqueOrThrowArgs} args - Arguments to find a UserNotificationPreference
     * @example
     * // Get one UserNotificationPreference
     * const userNotificationPreference = await prisma.userNotificationPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserNotificationPreferenceFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserNotificationPreferenceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserNotificationPreferenceClient<
      $Result.GetResult<
        Prisma.$UserNotificationPreferencePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserNotificationPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationPreferenceFindFirstArgs} args - Arguments to find a UserNotificationPreference
     * @example
     * // Get one UserNotificationPreference
     * const userNotificationPreference = await prisma.userNotificationPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserNotificationPreferenceFindFirstArgs>(
      args?: SelectSubset<T, UserNotificationPreferenceFindFirstArgs<ExtArgs>>
    ): Prisma__UserNotificationPreferenceClient<
      $Result.GetResult<
        Prisma.$UserNotificationPreferencePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first UserNotificationPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationPreferenceFindFirstOrThrowArgs} args - Arguments to find a UserNotificationPreference
     * @example
     * // Get one UserNotificationPreference
     * const userNotificationPreference = await prisma.userNotificationPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserNotificationPreferenceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserNotificationPreferenceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserNotificationPreferenceClient<
      $Result.GetResult<
        Prisma.$UserNotificationPreferencePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more UserNotificationPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserNotificationPreferences
     * const userNotificationPreferences = await prisma.userNotificationPreference.findMany()
     *
     * // Get first 10 UserNotificationPreferences
     * const userNotificationPreferences = await prisma.userNotificationPreference.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userNotificationPreferenceWithIdOnly = await prisma.userNotificationPreference.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserNotificationPreferenceFindManyArgs>(
      args?: SelectSubset<T, UserNotificationPreferenceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserNotificationPreferencePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a UserNotificationPreference.
     * @param {UserNotificationPreferenceCreateArgs} args - Arguments to create a UserNotificationPreference.
     * @example
     * // Create one UserNotificationPreference
     * const UserNotificationPreference = await prisma.userNotificationPreference.create({
     *   data: {
     *     // ... data to create a UserNotificationPreference
     *   }
     * })
     *
     */
    create<T extends UserNotificationPreferenceCreateArgs>(
      args: SelectSubset<T, UserNotificationPreferenceCreateArgs<ExtArgs>>
    ): Prisma__UserNotificationPreferenceClient<
      $Result.GetResult<
        Prisma.$UserNotificationPreferencePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many UserNotificationPreferences.
     * @param {UserNotificationPreferenceCreateManyArgs} args - Arguments to create many UserNotificationPreferences.
     * @example
     * // Create many UserNotificationPreferences
     * const userNotificationPreference = await prisma.userNotificationPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserNotificationPreferenceCreateManyArgs>(
      args?: SelectSubset<T, UserNotificationPreferenceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many UserNotificationPreferences and returns the data saved in the database.
     * @param {UserNotificationPreferenceCreateManyAndReturnArgs} args - Arguments to create many UserNotificationPreferences.
     * @example
     * // Create many UserNotificationPreferences
     * const userNotificationPreference = await prisma.userNotificationPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserNotificationPreferences and only return the `id`
     * const userNotificationPreferenceWithIdOnly = await prisma.userNotificationPreference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserNotificationPreferenceCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserNotificationPreferenceCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserNotificationPreferencePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a UserNotificationPreference.
     * @param {UserNotificationPreferenceDeleteArgs} args - Arguments to delete one UserNotificationPreference.
     * @example
     * // Delete one UserNotificationPreference
     * const UserNotificationPreference = await prisma.userNotificationPreference.delete({
     *   where: {
     *     // ... filter to delete one UserNotificationPreference
     *   }
     * })
     *
     */
    delete<T extends UserNotificationPreferenceDeleteArgs>(
      args: SelectSubset<T, UserNotificationPreferenceDeleteArgs<ExtArgs>>
    ): Prisma__UserNotificationPreferenceClient<
      $Result.GetResult<
        Prisma.$UserNotificationPreferencePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one UserNotificationPreference.
     * @param {UserNotificationPreferenceUpdateArgs} args - Arguments to update one UserNotificationPreference.
     * @example
     * // Update one UserNotificationPreference
     * const userNotificationPreference = await prisma.userNotificationPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserNotificationPreferenceUpdateArgs>(
      args: SelectSubset<T, UserNotificationPreferenceUpdateArgs<ExtArgs>>
    ): Prisma__UserNotificationPreferenceClient<
      $Result.GetResult<
        Prisma.$UserNotificationPreferencePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more UserNotificationPreferences.
     * @param {UserNotificationPreferenceDeleteManyArgs} args - Arguments to filter UserNotificationPreferences to delete.
     * @example
     * // Delete a few UserNotificationPreferences
     * const { count } = await prisma.userNotificationPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserNotificationPreferenceDeleteManyArgs>(
      args?: SelectSubset<T, UserNotificationPreferenceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserNotificationPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserNotificationPreferences
     * const userNotificationPreference = await prisma.userNotificationPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserNotificationPreferenceUpdateManyArgs>(
      args: SelectSubset<T, UserNotificationPreferenceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more UserNotificationPreferences and returns the data updated in the database.
     * @param {UserNotificationPreferenceUpdateManyAndReturnArgs} args - Arguments to update many UserNotificationPreferences.
     * @example
     * // Update many UserNotificationPreferences
     * const userNotificationPreference = await prisma.userNotificationPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserNotificationPreferences and only return the `id`
     * const userNotificationPreferenceWithIdOnly = await prisma.userNotificationPreference.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserNotificationPreferenceUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserNotificationPreferenceUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserNotificationPreferencePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one UserNotificationPreference.
     * @param {UserNotificationPreferenceUpsertArgs} args - Arguments to update or create a UserNotificationPreference.
     * @example
     * // Update or create a UserNotificationPreference
     * const userNotificationPreference = await prisma.userNotificationPreference.upsert({
     *   create: {
     *     // ... data to create a UserNotificationPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserNotificationPreference we want to update
     *   }
     * })
     */
    upsert<T extends UserNotificationPreferenceUpsertArgs>(
      args: SelectSubset<T, UserNotificationPreferenceUpsertArgs<ExtArgs>>
    ): Prisma__UserNotificationPreferenceClient<
      $Result.GetResult<
        Prisma.$UserNotificationPreferencePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of UserNotificationPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationPreferenceCountArgs} args - Arguments to filter UserNotificationPreferences to count.
     * @example
     * // Count the number of UserNotificationPreferences
     * const count = await prisma.userNotificationPreference.count({
     *   where: {
     *     // ... the filter for the UserNotificationPreferences we want to count
     *   }
     * })
     **/
    count<T extends UserNotificationPreferenceCountArgs>(
      args?: Subset<T, UserNotificationPreferenceCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserNotificationPreferenceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a UserNotificationPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserNotificationPreferenceAggregateArgs>(
      args: Subset<T, UserNotificationPreferenceAggregateArgs>
    ): Prisma.PrismaPromise<GetUserNotificationPreferenceAggregateType<T>>;

    /**
     * Group by UserNotificationPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserNotificationPreferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserNotificationPreferenceGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserNotificationPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: UserNotificationPreferenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserNotificationPreferenceGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserNotificationPreferenceGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the UserNotificationPreference model
     */
    readonly fields: UserNotificationPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserNotificationPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserNotificationPreferenceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the UserNotificationPreference model
   */
  interface UserNotificationPreferenceFieldRefs {
    readonly id: FieldRef<'UserNotificationPreference', 'String'>;
    readonly createdAt: FieldRef<'UserNotificationPreference', 'DateTime'>;
    readonly updatedAt: FieldRef<'UserNotificationPreference', 'DateTime'>;
    readonly discordUserId: FieldRef<'UserNotificationPreference', 'String'>;
    readonly dmTradeAlerts: FieldRef<'UserNotificationPreference', 'Boolean'>;
    readonly dmLineupReminders: FieldRef<'UserNotificationPreference', 'Boolean'>;
    readonly dmInjuryAlerts: FieldRef<'UserNotificationPreference', 'Boolean'>;
    readonly sleeperUserId: FieldRef<'UserNotificationPreference', 'String'>;
  }

  // Custom InputTypes
  /**
   * UserNotificationPreference findUnique
   */
  export type UserNotificationPreferenceFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserNotificationPreference
     */
    select?: UserNotificationPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserNotificationPreference
     */
    omit?: UserNotificationPreferenceOmit<ExtArgs> | null;
    /**
     * Filter, which UserNotificationPreference to fetch.
     */
    where: UserNotificationPreferenceWhereUniqueInput;
  };

  /**
   * UserNotificationPreference findUniqueOrThrow
   */
  export type UserNotificationPreferenceFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserNotificationPreference
     */
    select?: UserNotificationPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserNotificationPreference
     */
    omit?: UserNotificationPreferenceOmit<ExtArgs> | null;
    /**
     * Filter, which UserNotificationPreference to fetch.
     */
    where: UserNotificationPreferenceWhereUniqueInput;
  };

  /**
   * UserNotificationPreference findFirst
   */
  export type UserNotificationPreferenceFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserNotificationPreference
     */
    select?: UserNotificationPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserNotificationPreference
     */
    omit?: UserNotificationPreferenceOmit<ExtArgs> | null;
    /**
     * Filter, which UserNotificationPreference to fetch.
     */
    where?: UserNotificationPreferenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserNotificationPreferences to fetch.
     */
    orderBy?:
      | UserNotificationPreferenceOrderByWithRelationInput
      | UserNotificationPreferenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserNotificationPreferences.
     */
    cursor?: UserNotificationPreferenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserNotificationPreferences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserNotificationPreferences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserNotificationPreferences.
     */
    distinct?:
      | UserNotificationPreferenceScalarFieldEnum
      | UserNotificationPreferenceScalarFieldEnum[];
  };

  /**
   * UserNotificationPreference findFirstOrThrow
   */
  export type UserNotificationPreferenceFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserNotificationPreference
     */
    select?: UserNotificationPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserNotificationPreference
     */
    omit?: UserNotificationPreferenceOmit<ExtArgs> | null;
    /**
     * Filter, which UserNotificationPreference to fetch.
     */
    where?: UserNotificationPreferenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserNotificationPreferences to fetch.
     */
    orderBy?:
      | UserNotificationPreferenceOrderByWithRelationInput
      | UserNotificationPreferenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserNotificationPreferences.
     */
    cursor?: UserNotificationPreferenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserNotificationPreferences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserNotificationPreferences.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserNotificationPreferences.
     */
    distinct?:
      | UserNotificationPreferenceScalarFieldEnum
      | UserNotificationPreferenceScalarFieldEnum[];
  };

  /**
   * UserNotificationPreference findMany
   */
  export type UserNotificationPreferenceFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserNotificationPreference
     */
    select?: UserNotificationPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserNotificationPreference
     */
    omit?: UserNotificationPreferenceOmit<ExtArgs> | null;
    /**
     * Filter, which UserNotificationPreferences to fetch.
     */
    where?: UserNotificationPreferenceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserNotificationPreferences to fetch.
     */
    orderBy?:
      | UserNotificationPreferenceOrderByWithRelationInput
      | UserNotificationPreferenceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserNotificationPreferences.
     */
    cursor?: UserNotificationPreferenceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserNotificationPreferences from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserNotificationPreferences.
     */
    skip?: number;
    distinct?:
      | UserNotificationPreferenceScalarFieldEnum
      | UserNotificationPreferenceScalarFieldEnum[];
  };

  /**
   * UserNotificationPreference create
   */
  export type UserNotificationPreferenceCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserNotificationPreference
     */
    select?: UserNotificationPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserNotificationPreference
     */
    omit?: UserNotificationPreferenceOmit<ExtArgs> | null;
    /**
     * The data needed to create a UserNotificationPreference.
     */
    data: XOR<
      UserNotificationPreferenceCreateInput,
      UserNotificationPreferenceUncheckedCreateInput
    >;
  };

  /**
   * UserNotificationPreference createMany
   */
  export type UserNotificationPreferenceCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many UserNotificationPreferences.
     */
    data: UserNotificationPreferenceCreateManyInput | UserNotificationPreferenceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * UserNotificationPreference createManyAndReturn
   */
  export type UserNotificationPreferenceCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserNotificationPreference
     */
    select?: UserNotificationPreferenceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserNotificationPreference
     */
    omit?: UserNotificationPreferenceOmit<ExtArgs> | null;
    /**
     * The data used to create many UserNotificationPreferences.
     */
    data: UserNotificationPreferenceCreateManyInput | UserNotificationPreferenceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * UserNotificationPreference update
   */
  export type UserNotificationPreferenceUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserNotificationPreference
     */
    select?: UserNotificationPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserNotificationPreference
     */
    omit?: UserNotificationPreferenceOmit<ExtArgs> | null;
    /**
     * The data needed to update a UserNotificationPreference.
     */
    data: XOR<
      UserNotificationPreferenceUpdateInput,
      UserNotificationPreferenceUncheckedUpdateInput
    >;
    /**
     * Choose, which UserNotificationPreference to update.
     */
    where: UserNotificationPreferenceWhereUniqueInput;
  };

  /**
   * UserNotificationPreference updateMany
   */
  export type UserNotificationPreferenceUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update UserNotificationPreferences.
     */
    data: XOR<
      UserNotificationPreferenceUpdateManyMutationInput,
      UserNotificationPreferenceUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserNotificationPreferences to update
     */
    where?: UserNotificationPreferenceWhereInput;
    /**
     * Limit how many UserNotificationPreferences to update.
     */
    limit?: number;
  };

  /**
   * UserNotificationPreference updateManyAndReturn
   */
  export type UserNotificationPreferenceUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserNotificationPreference
     */
    select?: UserNotificationPreferenceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the UserNotificationPreference
     */
    omit?: UserNotificationPreferenceOmit<ExtArgs> | null;
    /**
     * The data used to update UserNotificationPreferences.
     */
    data: XOR<
      UserNotificationPreferenceUpdateManyMutationInput,
      UserNotificationPreferenceUncheckedUpdateManyInput
    >;
    /**
     * Filter which UserNotificationPreferences to update
     */
    where?: UserNotificationPreferenceWhereInput;
    /**
     * Limit how many UserNotificationPreferences to update.
     */
    limit?: number;
  };

  /**
   * UserNotificationPreference upsert
   */
  export type UserNotificationPreferenceUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserNotificationPreference
     */
    select?: UserNotificationPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserNotificationPreference
     */
    omit?: UserNotificationPreferenceOmit<ExtArgs> | null;
    /**
     * The filter to search for the UserNotificationPreference to update in case it exists.
     */
    where: UserNotificationPreferenceWhereUniqueInput;
    /**
     * In case the UserNotificationPreference found by the `where` argument doesn't exist, create a new UserNotificationPreference with this data.
     */
    create: XOR<
      UserNotificationPreferenceCreateInput,
      UserNotificationPreferenceUncheckedCreateInput
    >;
    /**
     * In case the UserNotificationPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      UserNotificationPreferenceUpdateInput,
      UserNotificationPreferenceUncheckedUpdateInput
    >;
  };

  /**
   * UserNotificationPreference delete
   */
  export type UserNotificationPreferenceDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserNotificationPreference
     */
    select?: UserNotificationPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserNotificationPreference
     */
    omit?: UserNotificationPreferenceOmit<ExtArgs> | null;
    /**
     * Filter which UserNotificationPreference to delete.
     */
    where: UserNotificationPreferenceWhereUniqueInput;
  };

  /**
   * UserNotificationPreference deleteMany
   */
  export type UserNotificationPreferenceDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which UserNotificationPreferences to delete
     */
    where?: UserNotificationPreferenceWhereInput;
    /**
     * Limit how many UserNotificationPreferences to delete.
     */
    limit?: number;
  };

  /**
   * UserNotificationPreference without action
   */
  export type UserNotificationPreferenceDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserNotificationPreference
     */
    select?: UserNotificationPreferenceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserNotificationPreference
     */
    omit?: UserNotificationPreferenceOmit<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    displayName: 'displayName';
    email: 'email';
    avatarUrl: 'avatarUrl';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const PlatformAccountScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    platform: 'platform';
    platformId: 'platformId';
    username: 'username';
    avatarUrl: 'avatarUrl';
    accessToken: 'accessToken';
    refreshToken: 'refreshToken';
    expiresAt: 'expiresAt';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type PlatformAccountScalarFieldEnum =
    (typeof PlatformAccountScalarFieldEnum)[keyof typeof PlatformAccountScalarFieldEnum];

  export const LeagueScalarFieldEnum: {
    id: 'id';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    platform: 'platform';
    platformLeagueId: 'platformLeagueId';
    name: 'name';
    season: 'season';
    leagueType: 'leagueType';
    scoringFormat: 'scoringFormat';
    rosterSize: 'rosterSize';
    teamCount: 'teamCount';
  };

  export type LeagueScalarFieldEnum =
    (typeof LeagueScalarFieldEnum)[keyof typeof LeagueScalarFieldEnum];

  export const LeagueMemberScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    leagueId: 'leagueId';
    teamName: 'teamName';
    teamAvatar: 'teamAvatar';
    rosterSlot: 'rosterSlot';
    wins: 'wins';
    losses: 'losses';
    ties: 'ties';
    pointsFor: 'pointsFor';
    pointsAgainst: 'pointsAgainst';
  };

  export type LeagueMemberScalarFieldEnum =
    (typeof LeagueMemberScalarFieldEnum)[keyof typeof LeagueMemberScalarFieldEnum];

  export const PlayerScalarFieldEnum: {
    id: 'id';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    nflverseId: 'nflverseId';
    sleeperId: 'sleeperId';
    yahooId: 'yahooId';
    espnId: 'espnId';
    firstName: 'firstName';
    lastName: 'lastName';
    fullName: 'fullName';
    position: 'position';
    team: 'team';
    jerseyNumber: 'jerseyNumber';
    status: 'status';
    injuryStatus: 'injuryStatus';
    byeWeek: 'byeWeek';
  };

  export type PlayerScalarFieldEnum =
    (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum];

  export const RosterScalarFieldEnum: {
    id: 'id';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    leagueId: 'leagueId';
    memberId: 'memberId';
    week: 'week';
    season: 'season';
  };

  export type RosterScalarFieldEnum =
    (typeof RosterScalarFieldEnum)[keyof typeof RosterScalarFieldEnum];

  export const RosterPlayerScalarFieldEnum: {
    id: 'id';
    rosterId: 'rosterId';
    playerId: 'playerId';
    slot: 'slot';
  };

  export type RosterPlayerScalarFieldEnum =
    (typeof RosterPlayerScalarFieldEnum)[keyof typeof RosterPlayerScalarFieldEnum];

  export const MatchupScalarFieldEnum: {
    id: 'id';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    leagueId: 'leagueId';
    week: 'week';
    season: 'season';
    homeTeamSlot: 'homeTeamSlot';
    awayTeamSlot: 'awayTeamSlot';
    homeScore: 'homeScore';
    awayScore: 'awayScore';
    homeProjected: 'homeProjected';
    awayProjected: 'awayProjected';
    isPlayoffs: 'isPlayoffs';
    matchupType: 'matchupType';
  };

  export type MatchupScalarFieldEnum =
    (typeof MatchupScalarFieldEnum)[keyof typeof MatchupScalarFieldEnum];

  export const TransactionScalarFieldEnum: {
    id: 'id';
    createdAt: 'createdAt';
    leagueId: 'leagueId';
    type: 'type';
    status: 'status';
    processedAt: 'processedAt';
    faabBid: 'faabBid';
    metadata: 'metadata';
  };

  export type TransactionScalarFieldEnum =
    (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum];

  export const TransactionAddScalarFieldEnum: {
    id: 'id';
    transactionId: 'transactionId';
    teamSlot: 'teamSlot';
    playerId: 'playerId';
    pickInfo: 'pickInfo';
  };

  export type TransactionAddScalarFieldEnum =
    (typeof TransactionAddScalarFieldEnum)[keyof typeof TransactionAddScalarFieldEnum];

  export const TransactionDropScalarFieldEnum: {
    id: 'id';
    transactionId: 'transactionId';
    teamSlot: 'teamSlot';
    playerId: 'playerId';
    pickInfo: 'pickInfo';
  };

  export type TransactionDropScalarFieldEnum =
    (typeof TransactionDropScalarFieldEnum)[keyof typeof TransactionDropScalarFieldEnum];

  export const GuildConfigScalarFieldEnum: {
    id: 'id';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    guildId: 'guildId';
    guildName: 'guildName';
    notificationChannelId: 'notificationChannelId';
    sleeperLeagueId: 'sleeperLeagueId';
    tradeAlerts: 'tradeAlerts';
    waiverAlerts: 'waiverAlerts';
    injuryAlerts: 'injuryAlerts';
    lineupReminders: 'lineupReminders';
    timezone: 'timezone';
  };

  export type GuildConfigScalarFieldEnum =
    (typeof GuildConfigScalarFieldEnum)[keyof typeof GuildConfigScalarFieldEnum];

  export const UserNotificationPreferenceScalarFieldEnum: {
    id: 'id';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    discordUserId: 'discordUserId';
    dmTradeAlerts: 'dmTradeAlerts';
    dmLineupReminders: 'dmLineupReminders';
    dmInjuryAlerts: 'dmInjuryAlerts';
    sleeperUserId: 'sleeperUserId';
  };

  export type UserNotificationPreferenceScalarFieldEnum =
    (typeof UserNotificationPreferenceScalarFieldEnum)[keyof typeof UserNotificationPreferenceScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
  };

  export type NullableJsonNullValueInput =
    (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Platform'
   */
  export type EnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform'>;

  /**
   * Reference to a field of type 'Platform[]'
   */
  export type ListEnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Platform[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'LeagueType'
   */
  export type EnumLeagueTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'LeagueType'
  >;

  /**
   * Reference to a field of type 'LeagueType[]'
   */
  export type ListEnumLeagueTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'LeagueType[]'
  >;

  /**
   * Reference to a field of type 'ScoringFormat'
   */
  export type EnumScoringFormatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'ScoringFormat'
  >;

  /**
   * Reference to a field of type 'ScoringFormat[]'
   */
  export type ListEnumScoringFormatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'ScoringFormat[]'
  >;

  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;

  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;

  /**
   * Reference to a field of type 'Position'
   */
  export type EnumPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Position'>;

  /**
   * Reference to a field of type 'Position[]'
   */
  export type ListEnumPositionFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Position[]'
  >;

  /**
   * Reference to a field of type 'PlayerStatus'
   */
  export type EnumPlayerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'PlayerStatus'
  >;

  /**
   * Reference to a field of type 'PlayerStatus[]'
   */
  export type ListEnumPlayerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'PlayerStatus[]'
  >;

  /**
   * Reference to a field of type 'RosterSlot'
   */
  export type EnumRosterSlotFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'RosterSlot'
  >;

  /**
   * Reference to a field of type 'RosterSlot[]'
   */
  export type ListEnumRosterSlotFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'RosterSlot[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;

  /**
   * Reference to a field of type 'MatchupType'
   */
  export type EnumMatchupTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'MatchupType'
  >;

  /**
   * Reference to a field of type 'MatchupType[]'
   */
  export type ListEnumMatchupTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'MatchupType[]'
  >;

  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'TransactionType'
  >;

  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'TransactionType[]'
  >;

  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'TransactionStatus'
  >;

  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'TransactionStatus[]'
  >;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'QueryMode'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    displayName?: StringNullableFilter<'User'> | string | null;
    email?: StringNullableFilter<'User'> | string | null;
    avatarUrl?: StringNullableFilter<'User'> | string | null;
    platformAccounts?: PlatformAccountListRelationFilter;
    leagueMemberships?: LeagueMemberListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    displayName?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    avatarUrl?: SortOrderInput | SortOrder;
    platformAccounts?: PlatformAccountOrderByRelationAggregateInput;
    leagueMemberships?: LeagueMemberOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      displayName?: StringNullableFilter<'User'> | string | null;
      avatarUrl?: StringNullableFilter<'User'> | string | null;
      platformAccounts?: PlatformAccountListRelationFilter;
      leagueMemberships?: LeagueMemberListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    displayName?: SortOrderInput | SortOrder;
    email?: SortOrderInput | SortOrder;
    avatarUrl?: SortOrderInput | SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    displayName?: StringNullableWithAggregatesFilter<'User'> | string | null;
    email?: StringNullableWithAggregatesFilter<'User'> | string | null;
    avatarUrl?: StringNullableWithAggregatesFilter<'User'> | string | null;
  };

  export type PlatformAccountWhereInput = {
    AND?: PlatformAccountWhereInput | PlatformAccountWhereInput[];
    OR?: PlatformAccountWhereInput[];
    NOT?: PlatformAccountWhereInput | PlatformAccountWhereInput[];
    id?: StringFilter<'PlatformAccount'> | string;
    userId?: StringFilter<'PlatformAccount'> | string;
    platform?: EnumPlatformFilter<'PlatformAccount'> | $Enums.Platform;
    platformId?: StringFilter<'PlatformAccount'> | string;
    username?: StringNullableFilter<'PlatformAccount'> | string | null;
    avatarUrl?: StringNullableFilter<'PlatformAccount'> | string | null;
    accessToken?: StringNullableFilter<'PlatformAccount'> | string | null;
    refreshToken?: StringNullableFilter<'PlatformAccount'> | string | null;
    expiresAt?: DateTimeNullableFilter<'PlatformAccount'> | Date | string | null;
    createdAt?: DateTimeFilter<'PlatformAccount'> | Date | string;
    updatedAt?: DateTimeFilter<'PlatformAccount'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type PlatformAccountOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    platform?: SortOrder;
    platformId?: SortOrder;
    username?: SortOrderInput | SortOrder;
    avatarUrl?: SortOrderInput | SortOrder;
    accessToken?: SortOrderInput | SortOrder;
    refreshToken?: SortOrderInput | SortOrder;
    expiresAt?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type PlatformAccountWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      platform_platformId?: PlatformAccountPlatformPlatformIdCompoundUniqueInput;
      AND?: PlatformAccountWhereInput | PlatformAccountWhereInput[];
      OR?: PlatformAccountWhereInput[];
      NOT?: PlatformAccountWhereInput | PlatformAccountWhereInput[];
      userId?: StringFilter<'PlatformAccount'> | string;
      platform?: EnumPlatformFilter<'PlatformAccount'> | $Enums.Platform;
      platformId?: StringFilter<'PlatformAccount'> | string;
      username?: StringNullableFilter<'PlatformAccount'> | string | null;
      avatarUrl?: StringNullableFilter<'PlatformAccount'> | string | null;
      accessToken?: StringNullableFilter<'PlatformAccount'> | string | null;
      refreshToken?: StringNullableFilter<'PlatformAccount'> | string | null;
      expiresAt?: DateTimeNullableFilter<'PlatformAccount'> | Date | string | null;
      createdAt?: DateTimeFilter<'PlatformAccount'> | Date | string;
      updatedAt?: DateTimeFilter<'PlatformAccount'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id' | 'platform_platformId'
  >;

  export type PlatformAccountOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    platform?: SortOrder;
    platformId?: SortOrder;
    username?: SortOrderInput | SortOrder;
    avatarUrl?: SortOrderInput | SortOrder;
    accessToken?: SortOrderInput | SortOrder;
    refreshToken?: SortOrderInput | SortOrder;
    expiresAt?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: PlatformAccountCountOrderByAggregateInput;
    _max?: PlatformAccountMaxOrderByAggregateInput;
    _min?: PlatformAccountMinOrderByAggregateInput;
  };

  export type PlatformAccountScalarWhereWithAggregatesInput = {
    AND?:
      | PlatformAccountScalarWhereWithAggregatesInput
      | PlatformAccountScalarWhereWithAggregatesInput[];
    OR?: PlatformAccountScalarWhereWithAggregatesInput[];
    NOT?:
      | PlatformAccountScalarWhereWithAggregatesInput
      | PlatformAccountScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'PlatformAccount'> | string;
    userId?: StringWithAggregatesFilter<'PlatformAccount'> | string;
    platform?: EnumPlatformWithAggregatesFilter<'PlatformAccount'> | $Enums.Platform;
    platformId?: StringWithAggregatesFilter<'PlatformAccount'> | string;
    username?: StringNullableWithAggregatesFilter<'PlatformAccount'> | string | null;
    avatarUrl?: StringNullableWithAggregatesFilter<'PlatformAccount'> | string | null;
    accessToken?: StringNullableWithAggregatesFilter<'PlatformAccount'> | string | null;
    refreshToken?: StringNullableWithAggregatesFilter<'PlatformAccount'> | string | null;
    expiresAt?: DateTimeNullableWithAggregatesFilter<'PlatformAccount'> | Date | string | null;
    createdAt?: DateTimeWithAggregatesFilter<'PlatformAccount'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'PlatformAccount'> | Date | string;
  };

  export type LeagueWhereInput = {
    AND?: LeagueWhereInput | LeagueWhereInput[];
    OR?: LeagueWhereInput[];
    NOT?: LeagueWhereInput | LeagueWhereInput[];
    id?: StringFilter<'League'> | string;
    createdAt?: DateTimeFilter<'League'> | Date | string;
    updatedAt?: DateTimeFilter<'League'> | Date | string;
    platform?: EnumPlatformFilter<'League'> | $Enums.Platform;
    platformLeagueId?: StringFilter<'League'> | string;
    name?: StringFilter<'League'> | string;
    season?: IntFilter<'League'> | number;
    leagueType?: EnumLeagueTypeFilter<'League'> | $Enums.LeagueType;
    scoringFormat?: EnumScoringFormatFilter<'League'> | $Enums.ScoringFormat;
    rosterSize?: IntFilter<'League'> | number;
    teamCount?: IntFilter<'League'> | number;
    members?: LeagueMemberListRelationFilter;
    rosters?: RosterListRelationFilter;
    matchups?: MatchupListRelationFilter;
    transactions?: TransactionListRelationFilter;
  };

  export type LeagueOrderByWithRelationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    platform?: SortOrder;
    platformLeagueId?: SortOrder;
    name?: SortOrder;
    season?: SortOrder;
    leagueType?: SortOrder;
    scoringFormat?: SortOrder;
    rosterSize?: SortOrder;
    teamCount?: SortOrder;
    members?: LeagueMemberOrderByRelationAggregateInput;
    rosters?: RosterOrderByRelationAggregateInput;
    matchups?: MatchupOrderByRelationAggregateInput;
    transactions?: TransactionOrderByRelationAggregateInput;
  };

  export type LeagueWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      platform_platformLeagueId_season?: LeaguePlatformPlatformLeagueIdSeasonCompoundUniqueInput;
      AND?: LeagueWhereInput | LeagueWhereInput[];
      OR?: LeagueWhereInput[];
      NOT?: LeagueWhereInput | LeagueWhereInput[];
      createdAt?: DateTimeFilter<'League'> | Date | string;
      updatedAt?: DateTimeFilter<'League'> | Date | string;
      platform?: EnumPlatformFilter<'League'> | $Enums.Platform;
      platformLeagueId?: StringFilter<'League'> | string;
      name?: StringFilter<'League'> | string;
      season?: IntFilter<'League'> | number;
      leagueType?: EnumLeagueTypeFilter<'League'> | $Enums.LeagueType;
      scoringFormat?: EnumScoringFormatFilter<'League'> | $Enums.ScoringFormat;
      rosterSize?: IntFilter<'League'> | number;
      teamCount?: IntFilter<'League'> | number;
      members?: LeagueMemberListRelationFilter;
      rosters?: RosterListRelationFilter;
      matchups?: MatchupListRelationFilter;
      transactions?: TransactionListRelationFilter;
    },
    'id' | 'platform_platformLeagueId_season'
  >;

  export type LeagueOrderByWithAggregationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    platform?: SortOrder;
    platformLeagueId?: SortOrder;
    name?: SortOrder;
    season?: SortOrder;
    leagueType?: SortOrder;
    scoringFormat?: SortOrder;
    rosterSize?: SortOrder;
    teamCount?: SortOrder;
    _count?: LeagueCountOrderByAggregateInput;
    _avg?: LeagueAvgOrderByAggregateInput;
    _max?: LeagueMaxOrderByAggregateInput;
    _min?: LeagueMinOrderByAggregateInput;
    _sum?: LeagueSumOrderByAggregateInput;
  };

  export type LeagueScalarWhereWithAggregatesInput = {
    AND?: LeagueScalarWhereWithAggregatesInput | LeagueScalarWhereWithAggregatesInput[];
    OR?: LeagueScalarWhereWithAggregatesInput[];
    NOT?: LeagueScalarWhereWithAggregatesInput | LeagueScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'League'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'League'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'League'> | Date | string;
    platform?: EnumPlatformWithAggregatesFilter<'League'> | $Enums.Platform;
    platformLeagueId?: StringWithAggregatesFilter<'League'> | string;
    name?: StringWithAggregatesFilter<'League'> | string;
    season?: IntWithAggregatesFilter<'League'> | number;
    leagueType?: EnumLeagueTypeWithAggregatesFilter<'League'> | $Enums.LeagueType;
    scoringFormat?: EnumScoringFormatWithAggregatesFilter<'League'> | $Enums.ScoringFormat;
    rosterSize?: IntWithAggregatesFilter<'League'> | number;
    teamCount?: IntWithAggregatesFilter<'League'> | number;
  };

  export type LeagueMemberWhereInput = {
    AND?: LeagueMemberWhereInput | LeagueMemberWhereInput[];
    OR?: LeagueMemberWhereInput[];
    NOT?: LeagueMemberWhereInput | LeagueMemberWhereInput[];
    id?: StringFilter<'LeagueMember'> | string;
    userId?: StringFilter<'LeagueMember'> | string;
    leagueId?: StringFilter<'LeagueMember'> | string;
    teamName?: StringNullableFilter<'LeagueMember'> | string | null;
    teamAvatar?: StringNullableFilter<'LeagueMember'> | string | null;
    rosterSlot?: IntFilter<'LeagueMember'> | number;
    wins?: IntFilter<'LeagueMember'> | number;
    losses?: IntFilter<'LeagueMember'> | number;
    ties?: IntFilter<'LeagueMember'> | number;
    pointsFor?: DecimalFilter<'LeagueMember'> | Decimal | DecimalJsLike | number | string;
    pointsAgainst?: DecimalFilter<'LeagueMember'> | Decimal | DecimalJsLike | number | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    league?: XOR<LeagueScalarRelationFilter, LeagueWhereInput>;
    rosters?: RosterListRelationFilter;
  };

  export type LeagueMemberOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    leagueId?: SortOrder;
    teamName?: SortOrderInput | SortOrder;
    teamAvatar?: SortOrderInput | SortOrder;
    rosterSlot?: SortOrder;
    wins?: SortOrder;
    losses?: SortOrder;
    ties?: SortOrder;
    pointsFor?: SortOrder;
    pointsAgainst?: SortOrder;
    user?: UserOrderByWithRelationInput;
    league?: LeagueOrderByWithRelationInput;
    rosters?: RosterOrderByRelationAggregateInput;
  };

  export type LeagueMemberWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      leagueId_rosterSlot?: LeagueMemberLeagueIdRosterSlotCompoundUniqueInput;
      leagueId_userId?: LeagueMemberLeagueIdUserIdCompoundUniqueInput;
      AND?: LeagueMemberWhereInput | LeagueMemberWhereInput[];
      OR?: LeagueMemberWhereInput[];
      NOT?: LeagueMemberWhereInput | LeagueMemberWhereInput[];
      userId?: StringFilter<'LeagueMember'> | string;
      leagueId?: StringFilter<'LeagueMember'> | string;
      teamName?: StringNullableFilter<'LeagueMember'> | string | null;
      teamAvatar?: StringNullableFilter<'LeagueMember'> | string | null;
      rosterSlot?: IntFilter<'LeagueMember'> | number;
      wins?: IntFilter<'LeagueMember'> | number;
      losses?: IntFilter<'LeagueMember'> | number;
      ties?: IntFilter<'LeagueMember'> | number;
      pointsFor?: DecimalFilter<'LeagueMember'> | Decimal | DecimalJsLike | number | string;
      pointsAgainst?: DecimalFilter<'LeagueMember'> | Decimal | DecimalJsLike | number | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      league?: XOR<LeagueScalarRelationFilter, LeagueWhereInput>;
      rosters?: RosterListRelationFilter;
    },
    'id' | 'leagueId_rosterSlot' | 'leagueId_userId'
  >;

  export type LeagueMemberOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    leagueId?: SortOrder;
    teamName?: SortOrderInput | SortOrder;
    teamAvatar?: SortOrderInput | SortOrder;
    rosterSlot?: SortOrder;
    wins?: SortOrder;
    losses?: SortOrder;
    ties?: SortOrder;
    pointsFor?: SortOrder;
    pointsAgainst?: SortOrder;
    _count?: LeagueMemberCountOrderByAggregateInput;
    _avg?: LeagueMemberAvgOrderByAggregateInput;
    _max?: LeagueMemberMaxOrderByAggregateInput;
    _min?: LeagueMemberMinOrderByAggregateInput;
    _sum?: LeagueMemberSumOrderByAggregateInput;
  };

  export type LeagueMemberScalarWhereWithAggregatesInput = {
    AND?: LeagueMemberScalarWhereWithAggregatesInput | LeagueMemberScalarWhereWithAggregatesInput[];
    OR?: LeagueMemberScalarWhereWithAggregatesInput[];
    NOT?: LeagueMemberScalarWhereWithAggregatesInput | LeagueMemberScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'LeagueMember'> | string;
    userId?: StringWithAggregatesFilter<'LeagueMember'> | string;
    leagueId?: StringWithAggregatesFilter<'LeagueMember'> | string;
    teamName?: StringNullableWithAggregatesFilter<'LeagueMember'> | string | null;
    teamAvatar?: StringNullableWithAggregatesFilter<'LeagueMember'> | string | null;
    rosterSlot?: IntWithAggregatesFilter<'LeagueMember'> | number;
    wins?: IntWithAggregatesFilter<'LeagueMember'> | number;
    losses?: IntWithAggregatesFilter<'LeagueMember'> | number;
    ties?: IntWithAggregatesFilter<'LeagueMember'> | number;
    pointsFor?:
      | DecimalWithAggregatesFilter<'LeagueMember'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    pointsAgainst?:
      | DecimalWithAggregatesFilter<'LeagueMember'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[];
    OR?: PlayerWhereInput[];
    NOT?: PlayerWhereInput | PlayerWhereInput[];
    id?: StringFilter<'Player'> | string;
    createdAt?: DateTimeFilter<'Player'> | Date | string;
    updatedAt?: DateTimeFilter<'Player'> | Date | string;
    nflverseId?: StringNullableFilter<'Player'> | string | null;
    sleeperId?: StringNullableFilter<'Player'> | string | null;
    yahooId?: StringNullableFilter<'Player'> | string | null;
    espnId?: StringNullableFilter<'Player'> | string | null;
    firstName?: StringFilter<'Player'> | string;
    lastName?: StringFilter<'Player'> | string;
    fullName?: StringFilter<'Player'> | string;
    position?: EnumPositionFilter<'Player'> | $Enums.Position;
    team?: StringNullableFilter<'Player'> | string | null;
    jerseyNumber?: IntNullableFilter<'Player'> | number | null;
    status?: EnumPlayerStatusFilter<'Player'> | $Enums.PlayerStatus;
    injuryStatus?: StringNullableFilter<'Player'> | string | null;
    byeWeek?: IntNullableFilter<'Player'> | number | null;
    rosterPlayers?: RosterPlayerListRelationFilter;
  };

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    nflverseId?: SortOrderInput | SortOrder;
    sleeperId?: SortOrderInput | SortOrder;
    yahooId?: SortOrderInput | SortOrder;
    espnId?: SortOrderInput | SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    fullName?: SortOrder;
    position?: SortOrder;
    team?: SortOrderInput | SortOrder;
    jerseyNumber?: SortOrderInput | SortOrder;
    status?: SortOrder;
    injuryStatus?: SortOrderInput | SortOrder;
    byeWeek?: SortOrderInput | SortOrder;
    rosterPlayers?: RosterPlayerOrderByRelationAggregateInput;
  };

  export type PlayerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      nflverseId?: string;
      sleeperId?: string;
      yahooId?: string;
      espnId?: string;
      AND?: PlayerWhereInput | PlayerWhereInput[];
      OR?: PlayerWhereInput[];
      NOT?: PlayerWhereInput | PlayerWhereInput[];
      createdAt?: DateTimeFilter<'Player'> | Date | string;
      updatedAt?: DateTimeFilter<'Player'> | Date | string;
      firstName?: StringFilter<'Player'> | string;
      lastName?: StringFilter<'Player'> | string;
      fullName?: StringFilter<'Player'> | string;
      position?: EnumPositionFilter<'Player'> | $Enums.Position;
      team?: StringNullableFilter<'Player'> | string | null;
      jerseyNumber?: IntNullableFilter<'Player'> | number | null;
      status?: EnumPlayerStatusFilter<'Player'> | $Enums.PlayerStatus;
      injuryStatus?: StringNullableFilter<'Player'> | string | null;
      byeWeek?: IntNullableFilter<'Player'> | number | null;
      rosterPlayers?: RosterPlayerListRelationFilter;
    },
    'id' | 'nflverseId' | 'sleeperId' | 'yahooId' | 'espnId'
  >;

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    nflverseId?: SortOrderInput | SortOrder;
    sleeperId?: SortOrderInput | SortOrder;
    yahooId?: SortOrderInput | SortOrder;
    espnId?: SortOrderInput | SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    fullName?: SortOrder;
    position?: SortOrder;
    team?: SortOrderInput | SortOrder;
    jerseyNumber?: SortOrderInput | SortOrder;
    status?: SortOrder;
    injuryStatus?: SortOrderInput | SortOrder;
    byeWeek?: SortOrderInput | SortOrder;
    _count?: PlayerCountOrderByAggregateInput;
    _avg?: PlayerAvgOrderByAggregateInput;
    _max?: PlayerMaxOrderByAggregateInput;
    _min?: PlayerMinOrderByAggregateInput;
    _sum?: PlayerSumOrderByAggregateInput;
  };

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[];
    OR?: PlayerScalarWhereWithAggregatesInput[];
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Player'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Player'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Player'> | Date | string;
    nflverseId?: StringNullableWithAggregatesFilter<'Player'> | string | null;
    sleeperId?: StringNullableWithAggregatesFilter<'Player'> | string | null;
    yahooId?: StringNullableWithAggregatesFilter<'Player'> | string | null;
    espnId?: StringNullableWithAggregatesFilter<'Player'> | string | null;
    firstName?: StringWithAggregatesFilter<'Player'> | string;
    lastName?: StringWithAggregatesFilter<'Player'> | string;
    fullName?: StringWithAggregatesFilter<'Player'> | string;
    position?: EnumPositionWithAggregatesFilter<'Player'> | $Enums.Position;
    team?: StringNullableWithAggregatesFilter<'Player'> | string | null;
    jerseyNumber?: IntNullableWithAggregatesFilter<'Player'> | number | null;
    status?: EnumPlayerStatusWithAggregatesFilter<'Player'> | $Enums.PlayerStatus;
    injuryStatus?: StringNullableWithAggregatesFilter<'Player'> | string | null;
    byeWeek?: IntNullableWithAggregatesFilter<'Player'> | number | null;
  };

  export type RosterWhereInput = {
    AND?: RosterWhereInput | RosterWhereInput[];
    OR?: RosterWhereInput[];
    NOT?: RosterWhereInput | RosterWhereInput[];
    id?: StringFilter<'Roster'> | string;
    createdAt?: DateTimeFilter<'Roster'> | Date | string;
    updatedAt?: DateTimeFilter<'Roster'> | Date | string;
    leagueId?: StringFilter<'Roster'> | string;
    memberId?: StringFilter<'Roster'> | string;
    week?: IntFilter<'Roster'> | number;
    season?: IntFilter<'Roster'> | number;
    league?: XOR<LeagueScalarRelationFilter, LeagueWhereInput>;
    member?: XOR<LeagueMemberScalarRelationFilter, LeagueMemberWhereInput>;
    players?: RosterPlayerListRelationFilter;
  };

  export type RosterOrderByWithRelationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    leagueId?: SortOrder;
    memberId?: SortOrder;
    week?: SortOrder;
    season?: SortOrder;
    league?: LeagueOrderByWithRelationInput;
    member?: LeagueMemberOrderByWithRelationInput;
    players?: RosterPlayerOrderByRelationAggregateInput;
  };

  export type RosterWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      memberId_week_season?: RosterMemberIdWeekSeasonCompoundUniqueInput;
      AND?: RosterWhereInput | RosterWhereInput[];
      OR?: RosterWhereInput[];
      NOT?: RosterWhereInput | RosterWhereInput[];
      createdAt?: DateTimeFilter<'Roster'> | Date | string;
      updatedAt?: DateTimeFilter<'Roster'> | Date | string;
      leagueId?: StringFilter<'Roster'> | string;
      memberId?: StringFilter<'Roster'> | string;
      week?: IntFilter<'Roster'> | number;
      season?: IntFilter<'Roster'> | number;
      league?: XOR<LeagueScalarRelationFilter, LeagueWhereInput>;
      member?: XOR<LeagueMemberScalarRelationFilter, LeagueMemberWhereInput>;
      players?: RosterPlayerListRelationFilter;
    },
    'id' | 'memberId_week_season'
  >;

  export type RosterOrderByWithAggregationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    leagueId?: SortOrder;
    memberId?: SortOrder;
    week?: SortOrder;
    season?: SortOrder;
    _count?: RosterCountOrderByAggregateInput;
    _avg?: RosterAvgOrderByAggregateInput;
    _max?: RosterMaxOrderByAggregateInput;
    _min?: RosterMinOrderByAggregateInput;
    _sum?: RosterSumOrderByAggregateInput;
  };

  export type RosterScalarWhereWithAggregatesInput = {
    AND?: RosterScalarWhereWithAggregatesInput | RosterScalarWhereWithAggregatesInput[];
    OR?: RosterScalarWhereWithAggregatesInput[];
    NOT?: RosterScalarWhereWithAggregatesInput | RosterScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Roster'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Roster'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Roster'> | Date | string;
    leagueId?: StringWithAggregatesFilter<'Roster'> | string;
    memberId?: StringWithAggregatesFilter<'Roster'> | string;
    week?: IntWithAggregatesFilter<'Roster'> | number;
    season?: IntWithAggregatesFilter<'Roster'> | number;
  };

  export type RosterPlayerWhereInput = {
    AND?: RosterPlayerWhereInput | RosterPlayerWhereInput[];
    OR?: RosterPlayerWhereInput[];
    NOT?: RosterPlayerWhereInput | RosterPlayerWhereInput[];
    id?: StringFilter<'RosterPlayer'> | string;
    rosterId?: StringFilter<'RosterPlayer'> | string;
    playerId?: StringFilter<'RosterPlayer'> | string;
    slot?: EnumRosterSlotFilter<'RosterPlayer'> | $Enums.RosterSlot;
    roster?: XOR<RosterScalarRelationFilter, RosterWhereInput>;
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>;
  };

  export type RosterPlayerOrderByWithRelationInput = {
    id?: SortOrder;
    rosterId?: SortOrder;
    playerId?: SortOrder;
    slot?: SortOrder;
    roster?: RosterOrderByWithRelationInput;
    player?: PlayerOrderByWithRelationInput;
  };

  export type RosterPlayerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      rosterId_playerId?: RosterPlayerRosterIdPlayerIdCompoundUniqueInput;
      AND?: RosterPlayerWhereInput | RosterPlayerWhereInput[];
      OR?: RosterPlayerWhereInput[];
      NOT?: RosterPlayerWhereInput | RosterPlayerWhereInput[];
      rosterId?: StringFilter<'RosterPlayer'> | string;
      playerId?: StringFilter<'RosterPlayer'> | string;
      slot?: EnumRosterSlotFilter<'RosterPlayer'> | $Enums.RosterSlot;
      roster?: XOR<RosterScalarRelationFilter, RosterWhereInput>;
      player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>;
    },
    'id' | 'rosterId_playerId'
  >;

  export type RosterPlayerOrderByWithAggregationInput = {
    id?: SortOrder;
    rosterId?: SortOrder;
    playerId?: SortOrder;
    slot?: SortOrder;
    _count?: RosterPlayerCountOrderByAggregateInput;
    _max?: RosterPlayerMaxOrderByAggregateInput;
    _min?: RosterPlayerMinOrderByAggregateInput;
  };

  export type RosterPlayerScalarWhereWithAggregatesInput = {
    AND?: RosterPlayerScalarWhereWithAggregatesInput | RosterPlayerScalarWhereWithAggregatesInput[];
    OR?: RosterPlayerScalarWhereWithAggregatesInput[];
    NOT?: RosterPlayerScalarWhereWithAggregatesInput | RosterPlayerScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'RosterPlayer'> | string;
    rosterId?: StringWithAggregatesFilter<'RosterPlayer'> | string;
    playerId?: StringWithAggregatesFilter<'RosterPlayer'> | string;
    slot?: EnumRosterSlotWithAggregatesFilter<'RosterPlayer'> | $Enums.RosterSlot;
  };

  export type MatchupWhereInput = {
    AND?: MatchupWhereInput | MatchupWhereInput[];
    OR?: MatchupWhereInput[];
    NOT?: MatchupWhereInput | MatchupWhereInput[];
    id?: StringFilter<'Matchup'> | string;
    createdAt?: DateTimeFilter<'Matchup'> | Date | string;
    updatedAt?: DateTimeFilter<'Matchup'> | Date | string;
    leagueId?: StringFilter<'Matchup'> | string;
    week?: IntFilter<'Matchup'> | number;
    season?: IntFilter<'Matchup'> | number;
    homeTeamSlot?: IntFilter<'Matchup'> | number;
    awayTeamSlot?: IntFilter<'Matchup'> | number;
    homeScore?: DecimalNullableFilter<'Matchup'> | Decimal | DecimalJsLike | number | string | null;
    awayScore?: DecimalNullableFilter<'Matchup'> | Decimal | DecimalJsLike | number | string | null;
    homeProjected?:
      | DecimalNullableFilter<'Matchup'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    awayProjected?:
      | DecimalNullableFilter<'Matchup'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    isPlayoffs?: BoolFilter<'Matchup'> | boolean;
    matchupType?: EnumMatchupTypeFilter<'Matchup'> | $Enums.MatchupType;
    league?: XOR<LeagueScalarRelationFilter, LeagueWhereInput>;
  };

  export type MatchupOrderByWithRelationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    leagueId?: SortOrder;
    week?: SortOrder;
    season?: SortOrder;
    homeTeamSlot?: SortOrder;
    awayTeamSlot?: SortOrder;
    homeScore?: SortOrderInput | SortOrder;
    awayScore?: SortOrderInput | SortOrder;
    homeProjected?: SortOrderInput | SortOrder;
    awayProjected?: SortOrderInput | SortOrder;
    isPlayoffs?: SortOrder;
    matchupType?: SortOrder;
    league?: LeagueOrderByWithRelationInput;
  };

  export type MatchupWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      leagueId_week_season_homeTeamSlot_awayTeamSlot?: MatchupLeagueIdWeekSeasonHomeTeamSlotAwayTeamSlotCompoundUniqueInput;
      AND?: MatchupWhereInput | MatchupWhereInput[];
      OR?: MatchupWhereInput[];
      NOT?: MatchupWhereInput | MatchupWhereInput[];
      createdAt?: DateTimeFilter<'Matchup'> | Date | string;
      updatedAt?: DateTimeFilter<'Matchup'> | Date | string;
      leagueId?: StringFilter<'Matchup'> | string;
      week?: IntFilter<'Matchup'> | number;
      season?: IntFilter<'Matchup'> | number;
      homeTeamSlot?: IntFilter<'Matchup'> | number;
      awayTeamSlot?: IntFilter<'Matchup'> | number;
      homeScore?:
        | DecimalNullableFilter<'Matchup'>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      awayScore?:
        | DecimalNullableFilter<'Matchup'>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      homeProjected?:
        | DecimalNullableFilter<'Matchup'>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      awayProjected?:
        | DecimalNullableFilter<'Matchup'>
        | Decimal
        | DecimalJsLike
        | number
        | string
        | null;
      isPlayoffs?: BoolFilter<'Matchup'> | boolean;
      matchupType?: EnumMatchupTypeFilter<'Matchup'> | $Enums.MatchupType;
      league?: XOR<LeagueScalarRelationFilter, LeagueWhereInput>;
    },
    'id' | 'leagueId_week_season_homeTeamSlot_awayTeamSlot'
  >;

  export type MatchupOrderByWithAggregationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    leagueId?: SortOrder;
    week?: SortOrder;
    season?: SortOrder;
    homeTeamSlot?: SortOrder;
    awayTeamSlot?: SortOrder;
    homeScore?: SortOrderInput | SortOrder;
    awayScore?: SortOrderInput | SortOrder;
    homeProjected?: SortOrderInput | SortOrder;
    awayProjected?: SortOrderInput | SortOrder;
    isPlayoffs?: SortOrder;
    matchupType?: SortOrder;
    _count?: MatchupCountOrderByAggregateInput;
    _avg?: MatchupAvgOrderByAggregateInput;
    _max?: MatchupMaxOrderByAggregateInput;
    _min?: MatchupMinOrderByAggregateInput;
    _sum?: MatchupSumOrderByAggregateInput;
  };

  export type MatchupScalarWhereWithAggregatesInput = {
    AND?: MatchupScalarWhereWithAggregatesInput | MatchupScalarWhereWithAggregatesInput[];
    OR?: MatchupScalarWhereWithAggregatesInput[];
    NOT?: MatchupScalarWhereWithAggregatesInput | MatchupScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Matchup'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Matchup'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Matchup'> | Date | string;
    leagueId?: StringWithAggregatesFilter<'Matchup'> | string;
    week?: IntWithAggregatesFilter<'Matchup'> | number;
    season?: IntWithAggregatesFilter<'Matchup'> | number;
    homeTeamSlot?: IntWithAggregatesFilter<'Matchup'> | number;
    awayTeamSlot?: IntWithAggregatesFilter<'Matchup'> | number;
    homeScore?:
      | DecimalNullableWithAggregatesFilter<'Matchup'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    awayScore?:
      | DecimalNullableWithAggregatesFilter<'Matchup'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    homeProjected?:
      | DecimalNullableWithAggregatesFilter<'Matchup'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    awayProjected?:
      | DecimalNullableWithAggregatesFilter<'Matchup'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    isPlayoffs?: BoolWithAggregatesFilter<'Matchup'> | boolean;
    matchupType?: EnumMatchupTypeWithAggregatesFilter<'Matchup'> | $Enums.MatchupType;
  };

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[];
    OR?: TransactionWhereInput[];
    NOT?: TransactionWhereInput | TransactionWhereInput[];
    id?: StringFilter<'Transaction'> | string;
    createdAt?: DateTimeFilter<'Transaction'> | Date | string;
    leagueId?: StringFilter<'Transaction'> | string;
    type?: EnumTransactionTypeFilter<'Transaction'> | $Enums.TransactionType;
    status?: EnumTransactionStatusFilter<'Transaction'> | $Enums.TransactionStatus;
    processedAt?: DateTimeNullableFilter<'Transaction'> | Date | string | null;
    faabBid?: IntNullableFilter<'Transaction'> | number | null;
    metadata?: JsonNullableFilter<'Transaction'>;
    league?: XOR<LeagueScalarRelationFilter, LeagueWhereInput>;
    adds?: TransactionAddListRelationFilter;
    drops?: TransactionDropListRelationFilter;
  };

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    leagueId?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    processedAt?: SortOrderInput | SortOrder;
    faabBid?: SortOrderInput | SortOrder;
    metadata?: SortOrderInput | SortOrder;
    league?: LeagueOrderByWithRelationInput;
    adds?: TransactionAddOrderByRelationAggregateInput;
    drops?: TransactionDropOrderByRelationAggregateInput;
  };

  export type TransactionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: TransactionWhereInput | TransactionWhereInput[];
      OR?: TransactionWhereInput[];
      NOT?: TransactionWhereInput | TransactionWhereInput[];
      createdAt?: DateTimeFilter<'Transaction'> | Date | string;
      leagueId?: StringFilter<'Transaction'> | string;
      type?: EnumTransactionTypeFilter<'Transaction'> | $Enums.TransactionType;
      status?: EnumTransactionStatusFilter<'Transaction'> | $Enums.TransactionStatus;
      processedAt?: DateTimeNullableFilter<'Transaction'> | Date | string | null;
      faabBid?: IntNullableFilter<'Transaction'> | number | null;
      metadata?: JsonNullableFilter<'Transaction'>;
      league?: XOR<LeagueScalarRelationFilter, LeagueWhereInput>;
      adds?: TransactionAddListRelationFilter;
      drops?: TransactionDropListRelationFilter;
    },
    'id'
  >;

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    leagueId?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    processedAt?: SortOrderInput | SortOrder;
    faabBid?: SortOrderInput | SortOrder;
    metadata?: SortOrderInput | SortOrder;
    _count?: TransactionCountOrderByAggregateInput;
    _avg?: TransactionAvgOrderByAggregateInput;
    _max?: TransactionMaxOrderByAggregateInput;
    _min?: TransactionMinOrderByAggregateInput;
    _sum?: TransactionSumOrderByAggregateInput;
  };

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[];
    OR?: TransactionScalarWhereWithAggregatesInput[];
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Transaction'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Transaction'> | Date | string;
    leagueId?: StringWithAggregatesFilter<'Transaction'> | string;
    type?: EnumTransactionTypeWithAggregatesFilter<'Transaction'> | $Enums.TransactionType;
    status?: EnumTransactionStatusWithAggregatesFilter<'Transaction'> | $Enums.TransactionStatus;
    processedAt?: DateTimeNullableWithAggregatesFilter<'Transaction'> | Date | string | null;
    faabBid?: IntNullableWithAggregatesFilter<'Transaction'> | number | null;
    metadata?: JsonNullableWithAggregatesFilter<'Transaction'>;
  };

  export type TransactionAddWhereInput = {
    AND?: TransactionAddWhereInput | TransactionAddWhereInput[];
    OR?: TransactionAddWhereInput[];
    NOT?: TransactionAddWhereInput | TransactionAddWhereInput[];
    id?: StringFilter<'TransactionAdd'> | string;
    transactionId?: StringFilter<'TransactionAdd'> | string;
    teamSlot?: IntFilter<'TransactionAdd'> | number;
    playerId?: StringNullableFilter<'TransactionAdd'> | string | null;
    pickInfo?: JsonNullableFilter<'TransactionAdd'>;
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>;
  };

  export type TransactionAddOrderByWithRelationInput = {
    id?: SortOrder;
    transactionId?: SortOrder;
    teamSlot?: SortOrder;
    playerId?: SortOrderInput | SortOrder;
    pickInfo?: SortOrderInput | SortOrder;
    transaction?: TransactionOrderByWithRelationInput;
  };

  export type TransactionAddWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: TransactionAddWhereInput | TransactionAddWhereInput[];
      OR?: TransactionAddWhereInput[];
      NOT?: TransactionAddWhereInput | TransactionAddWhereInput[];
      transactionId?: StringFilter<'TransactionAdd'> | string;
      teamSlot?: IntFilter<'TransactionAdd'> | number;
      playerId?: StringNullableFilter<'TransactionAdd'> | string | null;
      pickInfo?: JsonNullableFilter<'TransactionAdd'>;
      transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>;
    },
    'id'
  >;

  export type TransactionAddOrderByWithAggregationInput = {
    id?: SortOrder;
    transactionId?: SortOrder;
    teamSlot?: SortOrder;
    playerId?: SortOrderInput | SortOrder;
    pickInfo?: SortOrderInput | SortOrder;
    _count?: TransactionAddCountOrderByAggregateInput;
    _avg?: TransactionAddAvgOrderByAggregateInput;
    _max?: TransactionAddMaxOrderByAggregateInput;
    _min?: TransactionAddMinOrderByAggregateInput;
    _sum?: TransactionAddSumOrderByAggregateInput;
  };

  export type TransactionAddScalarWhereWithAggregatesInput = {
    AND?:
      | TransactionAddScalarWhereWithAggregatesInput
      | TransactionAddScalarWhereWithAggregatesInput[];
    OR?: TransactionAddScalarWhereWithAggregatesInput[];
    NOT?:
      | TransactionAddScalarWhereWithAggregatesInput
      | TransactionAddScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'TransactionAdd'> | string;
    transactionId?: StringWithAggregatesFilter<'TransactionAdd'> | string;
    teamSlot?: IntWithAggregatesFilter<'TransactionAdd'> | number;
    playerId?: StringNullableWithAggregatesFilter<'TransactionAdd'> | string | null;
    pickInfo?: JsonNullableWithAggregatesFilter<'TransactionAdd'>;
  };

  export type TransactionDropWhereInput = {
    AND?: TransactionDropWhereInput | TransactionDropWhereInput[];
    OR?: TransactionDropWhereInput[];
    NOT?: TransactionDropWhereInput | TransactionDropWhereInput[];
    id?: StringFilter<'TransactionDrop'> | string;
    transactionId?: StringFilter<'TransactionDrop'> | string;
    teamSlot?: IntFilter<'TransactionDrop'> | number;
    playerId?: StringNullableFilter<'TransactionDrop'> | string | null;
    pickInfo?: JsonNullableFilter<'TransactionDrop'>;
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>;
  };

  export type TransactionDropOrderByWithRelationInput = {
    id?: SortOrder;
    transactionId?: SortOrder;
    teamSlot?: SortOrder;
    playerId?: SortOrderInput | SortOrder;
    pickInfo?: SortOrderInput | SortOrder;
    transaction?: TransactionOrderByWithRelationInput;
  };

  export type TransactionDropWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: TransactionDropWhereInput | TransactionDropWhereInput[];
      OR?: TransactionDropWhereInput[];
      NOT?: TransactionDropWhereInput | TransactionDropWhereInput[];
      transactionId?: StringFilter<'TransactionDrop'> | string;
      teamSlot?: IntFilter<'TransactionDrop'> | number;
      playerId?: StringNullableFilter<'TransactionDrop'> | string | null;
      pickInfo?: JsonNullableFilter<'TransactionDrop'>;
      transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>;
    },
    'id'
  >;

  export type TransactionDropOrderByWithAggregationInput = {
    id?: SortOrder;
    transactionId?: SortOrder;
    teamSlot?: SortOrder;
    playerId?: SortOrderInput | SortOrder;
    pickInfo?: SortOrderInput | SortOrder;
    _count?: TransactionDropCountOrderByAggregateInput;
    _avg?: TransactionDropAvgOrderByAggregateInput;
    _max?: TransactionDropMaxOrderByAggregateInput;
    _min?: TransactionDropMinOrderByAggregateInput;
    _sum?: TransactionDropSumOrderByAggregateInput;
  };

  export type TransactionDropScalarWhereWithAggregatesInput = {
    AND?:
      | TransactionDropScalarWhereWithAggregatesInput
      | TransactionDropScalarWhereWithAggregatesInput[];
    OR?: TransactionDropScalarWhereWithAggregatesInput[];
    NOT?:
      | TransactionDropScalarWhereWithAggregatesInput
      | TransactionDropScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'TransactionDrop'> | string;
    transactionId?: StringWithAggregatesFilter<'TransactionDrop'> | string;
    teamSlot?: IntWithAggregatesFilter<'TransactionDrop'> | number;
    playerId?: StringNullableWithAggregatesFilter<'TransactionDrop'> | string | null;
    pickInfo?: JsonNullableWithAggregatesFilter<'TransactionDrop'>;
  };

  export type GuildConfigWhereInput = {
    AND?: GuildConfigWhereInput | GuildConfigWhereInput[];
    OR?: GuildConfigWhereInput[];
    NOT?: GuildConfigWhereInput | GuildConfigWhereInput[];
    id?: StringFilter<'GuildConfig'> | string;
    createdAt?: DateTimeFilter<'GuildConfig'> | Date | string;
    updatedAt?: DateTimeFilter<'GuildConfig'> | Date | string;
    guildId?: StringFilter<'GuildConfig'> | string;
    guildName?: StringNullableFilter<'GuildConfig'> | string | null;
    notificationChannelId?: StringFilter<'GuildConfig'> | string;
    sleeperLeagueId?: StringFilter<'GuildConfig'> | string;
    tradeAlerts?: BoolFilter<'GuildConfig'> | boolean;
    waiverAlerts?: BoolFilter<'GuildConfig'> | boolean;
    injuryAlerts?: BoolFilter<'GuildConfig'> | boolean;
    lineupReminders?: BoolFilter<'GuildConfig'> | boolean;
    timezone?: StringFilter<'GuildConfig'> | string;
  };

  export type GuildConfigOrderByWithRelationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    guildId?: SortOrder;
    guildName?: SortOrderInput | SortOrder;
    notificationChannelId?: SortOrder;
    sleeperLeagueId?: SortOrder;
    tradeAlerts?: SortOrder;
    waiverAlerts?: SortOrder;
    injuryAlerts?: SortOrder;
    lineupReminders?: SortOrder;
    timezone?: SortOrder;
  };

  export type GuildConfigWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      guildId?: string;
      AND?: GuildConfigWhereInput | GuildConfigWhereInput[];
      OR?: GuildConfigWhereInput[];
      NOT?: GuildConfigWhereInput | GuildConfigWhereInput[];
      createdAt?: DateTimeFilter<'GuildConfig'> | Date | string;
      updatedAt?: DateTimeFilter<'GuildConfig'> | Date | string;
      guildName?: StringNullableFilter<'GuildConfig'> | string | null;
      notificationChannelId?: StringFilter<'GuildConfig'> | string;
      sleeperLeagueId?: StringFilter<'GuildConfig'> | string;
      tradeAlerts?: BoolFilter<'GuildConfig'> | boolean;
      waiverAlerts?: BoolFilter<'GuildConfig'> | boolean;
      injuryAlerts?: BoolFilter<'GuildConfig'> | boolean;
      lineupReminders?: BoolFilter<'GuildConfig'> | boolean;
      timezone?: StringFilter<'GuildConfig'> | string;
    },
    'id' | 'guildId'
  >;

  export type GuildConfigOrderByWithAggregationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    guildId?: SortOrder;
    guildName?: SortOrderInput | SortOrder;
    notificationChannelId?: SortOrder;
    sleeperLeagueId?: SortOrder;
    tradeAlerts?: SortOrder;
    waiverAlerts?: SortOrder;
    injuryAlerts?: SortOrder;
    lineupReminders?: SortOrder;
    timezone?: SortOrder;
    _count?: GuildConfigCountOrderByAggregateInput;
    _max?: GuildConfigMaxOrderByAggregateInput;
    _min?: GuildConfigMinOrderByAggregateInput;
  };

  export type GuildConfigScalarWhereWithAggregatesInput = {
    AND?: GuildConfigScalarWhereWithAggregatesInput | GuildConfigScalarWhereWithAggregatesInput[];
    OR?: GuildConfigScalarWhereWithAggregatesInput[];
    NOT?: GuildConfigScalarWhereWithAggregatesInput | GuildConfigScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'GuildConfig'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'GuildConfig'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'GuildConfig'> | Date | string;
    guildId?: StringWithAggregatesFilter<'GuildConfig'> | string;
    guildName?: StringNullableWithAggregatesFilter<'GuildConfig'> | string | null;
    notificationChannelId?: StringWithAggregatesFilter<'GuildConfig'> | string;
    sleeperLeagueId?: StringWithAggregatesFilter<'GuildConfig'> | string;
    tradeAlerts?: BoolWithAggregatesFilter<'GuildConfig'> | boolean;
    waiverAlerts?: BoolWithAggregatesFilter<'GuildConfig'> | boolean;
    injuryAlerts?: BoolWithAggregatesFilter<'GuildConfig'> | boolean;
    lineupReminders?: BoolWithAggregatesFilter<'GuildConfig'> | boolean;
    timezone?: StringWithAggregatesFilter<'GuildConfig'> | string;
  };

  export type UserNotificationPreferenceWhereInput = {
    AND?: UserNotificationPreferenceWhereInput | UserNotificationPreferenceWhereInput[];
    OR?: UserNotificationPreferenceWhereInput[];
    NOT?: UserNotificationPreferenceWhereInput | UserNotificationPreferenceWhereInput[];
    id?: StringFilter<'UserNotificationPreference'> | string;
    createdAt?: DateTimeFilter<'UserNotificationPreference'> | Date | string;
    updatedAt?: DateTimeFilter<'UserNotificationPreference'> | Date | string;
    discordUserId?: StringFilter<'UserNotificationPreference'> | string;
    dmTradeAlerts?: BoolFilter<'UserNotificationPreference'> | boolean;
    dmLineupReminders?: BoolFilter<'UserNotificationPreference'> | boolean;
    dmInjuryAlerts?: BoolFilter<'UserNotificationPreference'> | boolean;
    sleeperUserId?: StringNullableFilter<'UserNotificationPreference'> | string | null;
  };

  export type UserNotificationPreferenceOrderByWithRelationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    discordUserId?: SortOrder;
    dmTradeAlerts?: SortOrder;
    dmLineupReminders?: SortOrder;
    dmInjuryAlerts?: SortOrder;
    sleeperUserId?: SortOrderInput | SortOrder;
  };

  export type UserNotificationPreferenceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      discordUserId?: string;
      AND?: UserNotificationPreferenceWhereInput | UserNotificationPreferenceWhereInput[];
      OR?: UserNotificationPreferenceWhereInput[];
      NOT?: UserNotificationPreferenceWhereInput | UserNotificationPreferenceWhereInput[];
      createdAt?: DateTimeFilter<'UserNotificationPreference'> | Date | string;
      updatedAt?: DateTimeFilter<'UserNotificationPreference'> | Date | string;
      dmTradeAlerts?: BoolFilter<'UserNotificationPreference'> | boolean;
      dmLineupReminders?: BoolFilter<'UserNotificationPreference'> | boolean;
      dmInjuryAlerts?: BoolFilter<'UserNotificationPreference'> | boolean;
      sleeperUserId?: StringNullableFilter<'UserNotificationPreference'> | string | null;
    },
    'id' | 'discordUserId'
  >;

  export type UserNotificationPreferenceOrderByWithAggregationInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    discordUserId?: SortOrder;
    dmTradeAlerts?: SortOrder;
    dmLineupReminders?: SortOrder;
    dmInjuryAlerts?: SortOrder;
    sleeperUserId?: SortOrderInput | SortOrder;
    _count?: UserNotificationPreferenceCountOrderByAggregateInput;
    _max?: UserNotificationPreferenceMaxOrderByAggregateInput;
    _min?: UserNotificationPreferenceMinOrderByAggregateInput;
  };

  export type UserNotificationPreferenceScalarWhereWithAggregatesInput = {
    AND?:
      | UserNotificationPreferenceScalarWhereWithAggregatesInput
      | UserNotificationPreferenceScalarWhereWithAggregatesInput[];
    OR?: UserNotificationPreferenceScalarWhereWithAggregatesInput[];
    NOT?:
      | UserNotificationPreferenceScalarWhereWithAggregatesInput
      | UserNotificationPreferenceScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'UserNotificationPreference'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'UserNotificationPreference'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'UserNotificationPreference'> | Date | string;
    discordUserId?: StringWithAggregatesFilter<'UserNotificationPreference'> | string;
    dmTradeAlerts?: BoolWithAggregatesFilter<'UserNotificationPreference'> | boolean;
    dmLineupReminders?: BoolWithAggregatesFilter<'UserNotificationPreference'> | boolean;
    dmInjuryAlerts?: BoolWithAggregatesFilter<'UserNotificationPreference'> | boolean;
    sleeperUserId?:
      | StringNullableWithAggregatesFilter<'UserNotificationPreference'>
      | string
      | null;
  };

  export type UserCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    displayName?: string | null;
    email?: string | null;
    avatarUrl?: string | null;
    platformAccounts?: PlatformAccountCreateNestedManyWithoutUserInput;
    leagueMemberships?: LeagueMemberCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    displayName?: string | null;
    email?: string | null;
    avatarUrl?: string | null;
    platformAccounts?: PlatformAccountUncheckedCreateNestedManyWithoutUserInput;
    leagueMemberships?: LeagueMemberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    platformAccounts?: PlatformAccountUpdateManyWithoutUserNestedInput;
    leagueMemberships?: LeagueMemberUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    platformAccounts?: PlatformAccountUncheckedUpdateManyWithoutUserNestedInput;
    leagueMemberships?: LeagueMemberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    displayName?: string | null;
    email?: string | null;
    avatarUrl?: string | null;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type PlatformAccountCreateInput = {
    id?: string;
    platform: $Enums.Platform;
    platformId: string;
    username?: string | null;
    avatarUrl?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutPlatformAccountsInput;
  };

  export type PlatformAccountUncheckedCreateInput = {
    id?: string;
    userId: string;
    platform: $Enums.Platform;
    platformId: string;
    username?: string | null;
    avatarUrl?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PlatformAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    platformId?: StringFieldUpdateOperationsInput | string;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutPlatformAccountsNestedInput;
  };

  export type PlatformAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    platformId?: StringFieldUpdateOperationsInput | string;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PlatformAccountCreateManyInput = {
    id?: string;
    userId: string;
    platform: $Enums.Platform;
    platformId: string;
    username?: string | null;
    avatarUrl?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PlatformAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    platformId?: StringFieldUpdateOperationsInput | string;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PlatformAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    platformId?: StringFieldUpdateOperationsInput | string;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LeagueCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    platform: $Enums.Platform;
    platformLeagueId: string;
    name: string;
    season: number;
    leagueType?: $Enums.LeagueType;
    scoringFormat?: $Enums.ScoringFormat;
    rosterSize?: number;
    teamCount: number;
    members?: LeagueMemberCreateNestedManyWithoutLeagueInput;
    rosters?: RosterCreateNestedManyWithoutLeagueInput;
    matchups?: MatchupCreateNestedManyWithoutLeagueInput;
    transactions?: TransactionCreateNestedManyWithoutLeagueInput;
  };

  export type LeagueUncheckedCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    platform: $Enums.Platform;
    platformLeagueId: string;
    name: string;
    season: number;
    leagueType?: $Enums.LeagueType;
    scoringFormat?: $Enums.ScoringFormat;
    rosterSize?: number;
    teamCount: number;
    members?: LeagueMemberUncheckedCreateNestedManyWithoutLeagueInput;
    rosters?: RosterUncheckedCreateNestedManyWithoutLeagueInput;
    matchups?: MatchupUncheckedCreateNestedManyWithoutLeagueInput;
    transactions?: TransactionUncheckedCreateNestedManyWithoutLeagueInput;
  };

  export type LeagueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    platformLeagueId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    season?: IntFieldUpdateOperationsInput | number;
    leagueType?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType;
    scoringFormat?: EnumScoringFormatFieldUpdateOperationsInput | $Enums.ScoringFormat;
    rosterSize?: IntFieldUpdateOperationsInput | number;
    teamCount?: IntFieldUpdateOperationsInput | number;
    members?: LeagueMemberUpdateManyWithoutLeagueNestedInput;
    rosters?: RosterUpdateManyWithoutLeagueNestedInput;
    matchups?: MatchupUpdateManyWithoutLeagueNestedInput;
    transactions?: TransactionUpdateManyWithoutLeagueNestedInput;
  };

  export type LeagueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    platformLeagueId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    season?: IntFieldUpdateOperationsInput | number;
    leagueType?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType;
    scoringFormat?: EnumScoringFormatFieldUpdateOperationsInput | $Enums.ScoringFormat;
    rosterSize?: IntFieldUpdateOperationsInput | number;
    teamCount?: IntFieldUpdateOperationsInput | number;
    members?: LeagueMemberUncheckedUpdateManyWithoutLeagueNestedInput;
    rosters?: RosterUncheckedUpdateManyWithoutLeagueNestedInput;
    matchups?: MatchupUncheckedUpdateManyWithoutLeagueNestedInput;
    transactions?: TransactionUncheckedUpdateManyWithoutLeagueNestedInput;
  };

  export type LeagueCreateManyInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    platform: $Enums.Platform;
    platformLeagueId: string;
    name: string;
    season: number;
    leagueType?: $Enums.LeagueType;
    scoringFormat?: $Enums.ScoringFormat;
    rosterSize?: number;
    teamCount: number;
  };

  export type LeagueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    platformLeagueId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    season?: IntFieldUpdateOperationsInput | number;
    leagueType?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType;
    scoringFormat?: EnumScoringFormatFieldUpdateOperationsInput | $Enums.ScoringFormat;
    rosterSize?: IntFieldUpdateOperationsInput | number;
    teamCount?: IntFieldUpdateOperationsInput | number;
  };

  export type LeagueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    platformLeagueId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    season?: IntFieldUpdateOperationsInput | number;
    leagueType?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType;
    scoringFormat?: EnumScoringFormatFieldUpdateOperationsInput | $Enums.ScoringFormat;
    rosterSize?: IntFieldUpdateOperationsInput | number;
    teamCount?: IntFieldUpdateOperationsInput | number;
  };

  export type LeagueMemberCreateInput = {
    id?: string;
    teamName?: string | null;
    teamAvatar?: string | null;
    rosterSlot: number;
    wins?: number;
    losses?: number;
    ties?: number;
    pointsFor?: Decimal | DecimalJsLike | number | string;
    pointsAgainst?: Decimal | DecimalJsLike | number | string;
    user: UserCreateNestedOneWithoutLeagueMembershipsInput;
    league: LeagueCreateNestedOneWithoutMembersInput;
    rosters?: RosterCreateNestedManyWithoutMemberInput;
  };

  export type LeagueMemberUncheckedCreateInput = {
    id?: string;
    userId: string;
    leagueId: string;
    teamName?: string | null;
    teamAvatar?: string | null;
    rosterSlot: number;
    wins?: number;
    losses?: number;
    ties?: number;
    pointsFor?: Decimal | DecimalJsLike | number | string;
    pointsAgainst?: Decimal | DecimalJsLike | number | string;
    rosters?: RosterUncheckedCreateNestedManyWithoutMemberInput;
  };

  export type LeagueMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamName?: NullableStringFieldUpdateOperationsInput | string | null;
    teamAvatar?: NullableStringFieldUpdateOperationsInput | string | null;
    rosterSlot?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    ties?: IntFieldUpdateOperationsInput | number;
    pointsFor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    pointsAgainst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    user?: UserUpdateOneRequiredWithoutLeagueMembershipsNestedInput;
    league?: LeagueUpdateOneRequiredWithoutMembersNestedInput;
    rosters?: RosterUpdateManyWithoutMemberNestedInput;
  };

  export type LeagueMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    leagueId?: StringFieldUpdateOperationsInput | string;
    teamName?: NullableStringFieldUpdateOperationsInput | string | null;
    teamAvatar?: NullableStringFieldUpdateOperationsInput | string | null;
    rosterSlot?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    ties?: IntFieldUpdateOperationsInput | number;
    pointsFor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    pointsAgainst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    rosters?: RosterUncheckedUpdateManyWithoutMemberNestedInput;
  };

  export type LeagueMemberCreateManyInput = {
    id?: string;
    userId: string;
    leagueId: string;
    teamName?: string | null;
    teamAvatar?: string | null;
    rosterSlot: number;
    wins?: number;
    losses?: number;
    ties?: number;
    pointsFor?: Decimal | DecimalJsLike | number | string;
    pointsAgainst?: Decimal | DecimalJsLike | number | string;
  };

  export type LeagueMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamName?: NullableStringFieldUpdateOperationsInput | string | null;
    teamAvatar?: NullableStringFieldUpdateOperationsInput | string | null;
    rosterSlot?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    ties?: IntFieldUpdateOperationsInput | number;
    pointsFor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    pointsAgainst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
  };

  export type LeagueMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    leagueId?: StringFieldUpdateOperationsInput | string;
    teamName?: NullableStringFieldUpdateOperationsInput | string | null;
    teamAvatar?: NullableStringFieldUpdateOperationsInput | string | null;
    rosterSlot?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    ties?: IntFieldUpdateOperationsInput | number;
    pointsFor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    pointsAgainst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
  };

  export type PlayerCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    nflverseId?: string | null;
    sleeperId?: string | null;
    yahooId?: string | null;
    espnId?: string | null;
    firstName: string;
    lastName: string;
    fullName: string;
    position: $Enums.Position;
    team?: string | null;
    jerseyNumber?: number | null;
    status?: $Enums.PlayerStatus;
    injuryStatus?: string | null;
    byeWeek?: number | null;
    rosterPlayers?: RosterPlayerCreateNestedManyWithoutPlayerInput;
  };

  export type PlayerUncheckedCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    nflverseId?: string | null;
    sleeperId?: string | null;
    yahooId?: string | null;
    espnId?: string | null;
    firstName: string;
    lastName: string;
    fullName: string;
    position: $Enums.Position;
    team?: string | null;
    jerseyNumber?: number | null;
    status?: $Enums.PlayerStatus;
    injuryStatus?: string | null;
    byeWeek?: number | null;
    rosterPlayers?: RosterPlayerUncheckedCreateNestedManyWithoutPlayerInput;
  };

  export type PlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    nflverseId?: NullableStringFieldUpdateOperationsInput | string | null;
    sleeperId?: NullableStringFieldUpdateOperationsInput | string | null;
    yahooId?: NullableStringFieldUpdateOperationsInput | string | null;
    espnId?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position;
    team?: NullableStringFieldUpdateOperationsInput | string | null;
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: EnumPlayerStatusFieldUpdateOperationsInput | $Enums.PlayerStatus;
    injuryStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    byeWeek?: NullableIntFieldUpdateOperationsInput | number | null;
    rosterPlayers?: RosterPlayerUpdateManyWithoutPlayerNestedInput;
  };

  export type PlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    nflverseId?: NullableStringFieldUpdateOperationsInput | string | null;
    sleeperId?: NullableStringFieldUpdateOperationsInput | string | null;
    yahooId?: NullableStringFieldUpdateOperationsInput | string | null;
    espnId?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position;
    team?: NullableStringFieldUpdateOperationsInput | string | null;
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: EnumPlayerStatusFieldUpdateOperationsInput | $Enums.PlayerStatus;
    injuryStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    byeWeek?: NullableIntFieldUpdateOperationsInput | number | null;
    rosterPlayers?: RosterPlayerUncheckedUpdateManyWithoutPlayerNestedInput;
  };

  export type PlayerCreateManyInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    nflverseId?: string | null;
    sleeperId?: string | null;
    yahooId?: string | null;
    espnId?: string | null;
    firstName: string;
    lastName: string;
    fullName: string;
    position: $Enums.Position;
    team?: string | null;
    jerseyNumber?: number | null;
    status?: $Enums.PlayerStatus;
    injuryStatus?: string | null;
    byeWeek?: number | null;
  };

  export type PlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    nflverseId?: NullableStringFieldUpdateOperationsInput | string | null;
    sleeperId?: NullableStringFieldUpdateOperationsInput | string | null;
    yahooId?: NullableStringFieldUpdateOperationsInput | string | null;
    espnId?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position;
    team?: NullableStringFieldUpdateOperationsInput | string | null;
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: EnumPlayerStatusFieldUpdateOperationsInput | $Enums.PlayerStatus;
    injuryStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    byeWeek?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type PlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    nflverseId?: NullableStringFieldUpdateOperationsInput | string | null;
    sleeperId?: NullableStringFieldUpdateOperationsInput | string | null;
    yahooId?: NullableStringFieldUpdateOperationsInput | string | null;
    espnId?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position;
    team?: NullableStringFieldUpdateOperationsInput | string | null;
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: EnumPlayerStatusFieldUpdateOperationsInput | $Enums.PlayerStatus;
    injuryStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    byeWeek?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type RosterCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    week: number;
    season: number;
    league: LeagueCreateNestedOneWithoutRostersInput;
    member: LeagueMemberCreateNestedOneWithoutRostersInput;
    players?: RosterPlayerCreateNestedManyWithoutRosterInput;
  };

  export type RosterUncheckedCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leagueId: string;
    memberId: string;
    week: number;
    season: number;
    players?: RosterPlayerUncheckedCreateNestedManyWithoutRosterInput;
  };

  export type RosterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    week?: IntFieldUpdateOperationsInput | number;
    season?: IntFieldUpdateOperationsInput | number;
    league?: LeagueUpdateOneRequiredWithoutRostersNestedInput;
    member?: LeagueMemberUpdateOneRequiredWithoutRostersNestedInput;
    players?: RosterPlayerUpdateManyWithoutRosterNestedInput;
  };

  export type RosterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    leagueId?: StringFieldUpdateOperationsInput | string;
    memberId?: StringFieldUpdateOperationsInput | string;
    week?: IntFieldUpdateOperationsInput | number;
    season?: IntFieldUpdateOperationsInput | number;
    players?: RosterPlayerUncheckedUpdateManyWithoutRosterNestedInput;
  };

  export type RosterCreateManyInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leagueId: string;
    memberId: string;
    week: number;
    season: number;
  };

  export type RosterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    week?: IntFieldUpdateOperationsInput | number;
    season?: IntFieldUpdateOperationsInput | number;
  };

  export type RosterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    leagueId?: StringFieldUpdateOperationsInput | string;
    memberId?: StringFieldUpdateOperationsInput | string;
    week?: IntFieldUpdateOperationsInput | number;
    season?: IntFieldUpdateOperationsInput | number;
  };

  export type RosterPlayerCreateInput = {
    id?: string;
    slot: $Enums.RosterSlot;
    roster: RosterCreateNestedOneWithoutPlayersInput;
    player: PlayerCreateNestedOneWithoutRosterPlayersInput;
  };

  export type RosterPlayerUncheckedCreateInput = {
    id?: string;
    rosterId: string;
    playerId: string;
    slot: $Enums.RosterSlot;
  };

  export type RosterPlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    slot?: EnumRosterSlotFieldUpdateOperationsInput | $Enums.RosterSlot;
    roster?: RosterUpdateOneRequiredWithoutPlayersNestedInput;
    player?: PlayerUpdateOneRequiredWithoutRosterPlayersNestedInput;
  };

  export type RosterPlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rosterId?: StringFieldUpdateOperationsInput | string;
    playerId?: StringFieldUpdateOperationsInput | string;
    slot?: EnumRosterSlotFieldUpdateOperationsInput | $Enums.RosterSlot;
  };

  export type RosterPlayerCreateManyInput = {
    id?: string;
    rosterId: string;
    playerId: string;
    slot: $Enums.RosterSlot;
  };

  export type RosterPlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    slot?: EnumRosterSlotFieldUpdateOperationsInput | $Enums.RosterSlot;
  };

  export type RosterPlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rosterId?: StringFieldUpdateOperationsInput | string;
    playerId?: StringFieldUpdateOperationsInput | string;
    slot?: EnumRosterSlotFieldUpdateOperationsInput | $Enums.RosterSlot;
  };

  export type MatchupCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    week: number;
    season: number;
    homeTeamSlot: number;
    awayTeamSlot: number;
    homeScore?: Decimal | DecimalJsLike | number | string | null;
    awayScore?: Decimal | DecimalJsLike | number | string | null;
    homeProjected?: Decimal | DecimalJsLike | number | string | null;
    awayProjected?: Decimal | DecimalJsLike | number | string | null;
    isPlayoffs?: boolean;
    matchupType?: $Enums.MatchupType;
    league: LeagueCreateNestedOneWithoutMatchupsInput;
  };

  export type MatchupUncheckedCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leagueId: string;
    week: number;
    season: number;
    homeTeamSlot: number;
    awayTeamSlot: number;
    homeScore?: Decimal | DecimalJsLike | number | string | null;
    awayScore?: Decimal | DecimalJsLike | number | string | null;
    homeProjected?: Decimal | DecimalJsLike | number | string | null;
    awayProjected?: Decimal | DecimalJsLike | number | string | null;
    isPlayoffs?: boolean;
    matchupType?: $Enums.MatchupType;
  };

  export type MatchupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    week?: IntFieldUpdateOperationsInput | number;
    season?: IntFieldUpdateOperationsInput | number;
    homeTeamSlot?: IntFieldUpdateOperationsInput | number;
    awayTeamSlot?: IntFieldUpdateOperationsInput | number;
    homeScore?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    awayScore?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    homeProjected?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    awayProjected?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    isPlayoffs?: BoolFieldUpdateOperationsInput | boolean;
    matchupType?: EnumMatchupTypeFieldUpdateOperationsInput | $Enums.MatchupType;
    league?: LeagueUpdateOneRequiredWithoutMatchupsNestedInput;
  };

  export type MatchupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    leagueId?: StringFieldUpdateOperationsInput | string;
    week?: IntFieldUpdateOperationsInput | number;
    season?: IntFieldUpdateOperationsInput | number;
    homeTeamSlot?: IntFieldUpdateOperationsInput | number;
    awayTeamSlot?: IntFieldUpdateOperationsInput | number;
    homeScore?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    awayScore?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    homeProjected?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    awayProjected?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    isPlayoffs?: BoolFieldUpdateOperationsInput | boolean;
    matchupType?: EnumMatchupTypeFieldUpdateOperationsInput | $Enums.MatchupType;
  };

  export type MatchupCreateManyInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leagueId: string;
    week: number;
    season: number;
    homeTeamSlot: number;
    awayTeamSlot: number;
    homeScore?: Decimal | DecimalJsLike | number | string | null;
    awayScore?: Decimal | DecimalJsLike | number | string | null;
    homeProjected?: Decimal | DecimalJsLike | number | string | null;
    awayProjected?: Decimal | DecimalJsLike | number | string | null;
    isPlayoffs?: boolean;
    matchupType?: $Enums.MatchupType;
  };

  export type MatchupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    week?: IntFieldUpdateOperationsInput | number;
    season?: IntFieldUpdateOperationsInput | number;
    homeTeamSlot?: IntFieldUpdateOperationsInput | number;
    awayTeamSlot?: IntFieldUpdateOperationsInput | number;
    homeScore?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    awayScore?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    homeProjected?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    awayProjected?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    isPlayoffs?: BoolFieldUpdateOperationsInput | boolean;
    matchupType?: EnumMatchupTypeFieldUpdateOperationsInput | $Enums.MatchupType;
  };

  export type MatchupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    leagueId?: StringFieldUpdateOperationsInput | string;
    week?: IntFieldUpdateOperationsInput | number;
    season?: IntFieldUpdateOperationsInput | number;
    homeTeamSlot?: IntFieldUpdateOperationsInput | number;
    awayTeamSlot?: IntFieldUpdateOperationsInput | number;
    homeScore?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    awayScore?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    homeProjected?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    awayProjected?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    isPlayoffs?: BoolFieldUpdateOperationsInput | boolean;
    matchupType?: EnumMatchupTypeFieldUpdateOperationsInput | $Enums.MatchupType;
  };

  export type TransactionCreateInput = {
    id?: string;
    createdAt?: Date | string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    processedAt?: Date | string | null;
    faabBid?: number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    league: LeagueCreateNestedOneWithoutTransactionsInput;
    adds?: TransactionAddCreateNestedManyWithoutTransactionInput;
    drops?: TransactionDropCreateNestedManyWithoutTransactionInput;
  };

  export type TransactionUncheckedCreateInput = {
    id?: string;
    createdAt?: Date | string;
    leagueId: string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    processedAt?: Date | string | null;
    faabBid?: number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    adds?: TransactionAddUncheckedCreateNestedManyWithoutTransactionInput;
    drops?: TransactionDropUncheckedCreateNestedManyWithoutTransactionInput;
  };

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    faabBid?: NullableIntFieldUpdateOperationsInput | number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    league?: LeagueUpdateOneRequiredWithoutTransactionsNestedInput;
    adds?: TransactionAddUpdateManyWithoutTransactionNestedInput;
    drops?: TransactionDropUpdateManyWithoutTransactionNestedInput;
  };

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    leagueId?: StringFieldUpdateOperationsInput | string;
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    faabBid?: NullableIntFieldUpdateOperationsInput | number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    adds?: TransactionAddUncheckedUpdateManyWithoutTransactionNestedInput;
    drops?: TransactionDropUncheckedUpdateManyWithoutTransactionNestedInput;
  };

  export type TransactionCreateManyInput = {
    id?: string;
    createdAt?: Date | string;
    leagueId: string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    processedAt?: Date | string | null;
    faabBid?: number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    faabBid?: NullableIntFieldUpdateOperationsInput | number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    leagueId?: StringFieldUpdateOperationsInput | string;
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    faabBid?: NullableIntFieldUpdateOperationsInput | number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionAddCreateInput = {
    id?: string;
    teamSlot: number;
    playerId?: string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
    transaction: TransactionCreateNestedOneWithoutAddsInput;
  };

  export type TransactionAddUncheckedCreateInput = {
    id?: string;
    transactionId: string;
    teamSlot: number;
    playerId?: string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionAddUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamSlot?: IntFieldUpdateOperationsInput | number;
    playerId?: NullableStringFieldUpdateOperationsInput | string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
    transaction?: TransactionUpdateOneRequiredWithoutAddsNestedInput;
  };

  export type TransactionAddUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    transactionId?: StringFieldUpdateOperationsInput | string;
    teamSlot?: IntFieldUpdateOperationsInput | number;
    playerId?: NullableStringFieldUpdateOperationsInput | string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionAddCreateManyInput = {
    id?: string;
    transactionId: string;
    teamSlot: number;
    playerId?: string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionAddUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamSlot?: IntFieldUpdateOperationsInput | number;
    playerId?: NullableStringFieldUpdateOperationsInput | string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionAddUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    transactionId?: StringFieldUpdateOperationsInput | string;
    teamSlot?: IntFieldUpdateOperationsInput | number;
    playerId?: NullableStringFieldUpdateOperationsInput | string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionDropCreateInput = {
    id?: string;
    teamSlot: number;
    playerId?: string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
    transaction: TransactionCreateNestedOneWithoutDropsInput;
  };

  export type TransactionDropUncheckedCreateInput = {
    id?: string;
    transactionId: string;
    teamSlot: number;
    playerId?: string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionDropUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamSlot?: IntFieldUpdateOperationsInput | number;
    playerId?: NullableStringFieldUpdateOperationsInput | string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
    transaction?: TransactionUpdateOneRequiredWithoutDropsNestedInput;
  };

  export type TransactionDropUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    transactionId?: StringFieldUpdateOperationsInput | string;
    teamSlot?: IntFieldUpdateOperationsInput | number;
    playerId?: NullableStringFieldUpdateOperationsInput | string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionDropCreateManyInput = {
    id?: string;
    transactionId: string;
    teamSlot: number;
    playerId?: string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionDropUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamSlot?: IntFieldUpdateOperationsInput | number;
    playerId?: NullableStringFieldUpdateOperationsInput | string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionDropUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    transactionId?: StringFieldUpdateOperationsInput | string;
    teamSlot?: IntFieldUpdateOperationsInput | number;
    playerId?: NullableStringFieldUpdateOperationsInput | string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type GuildConfigCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    guildId: string;
    guildName?: string | null;
    notificationChannelId: string;
    sleeperLeagueId: string;
    tradeAlerts?: boolean;
    waiverAlerts?: boolean;
    injuryAlerts?: boolean;
    lineupReminders?: boolean;
    timezone?: string;
  };

  export type GuildConfigUncheckedCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    guildId: string;
    guildName?: string | null;
    notificationChannelId: string;
    sleeperLeagueId: string;
    tradeAlerts?: boolean;
    waiverAlerts?: boolean;
    injuryAlerts?: boolean;
    lineupReminders?: boolean;
    timezone?: string;
  };

  export type GuildConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    guildId?: StringFieldUpdateOperationsInput | string;
    guildName?: NullableStringFieldUpdateOperationsInput | string | null;
    notificationChannelId?: StringFieldUpdateOperationsInput | string;
    sleeperLeagueId?: StringFieldUpdateOperationsInput | string;
    tradeAlerts?: BoolFieldUpdateOperationsInput | boolean;
    waiverAlerts?: BoolFieldUpdateOperationsInput | boolean;
    injuryAlerts?: BoolFieldUpdateOperationsInput | boolean;
    lineupReminders?: BoolFieldUpdateOperationsInput | boolean;
    timezone?: StringFieldUpdateOperationsInput | string;
  };

  export type GuildConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    guildId?: StringFieldUpdateOperationsInput | string;
    guildName?: NullableStringFieldUpdateOperationsInput | string | null;
    notificationChannelId?: StringFieldUpdateOperationsInput | string;
    sleeperLeagueId?: StringFieldUpdateOperationsInput | string;
    tradeAlerts?: BoolFieldUpdateOperationsInput | boolean;
    waiverAlerts?: BoolFieldUpdateOperationsInput | boolean;
    injuryAlerts?: BoolFieldUpdateOperationsInput | boolean;
    lineupReminders?: BoolFieldUpdateOperationsInput | boolean;
    timezone?: StringFieldUpdateOperationsInput | string;
  };

  export type GuildConfigCreateManyInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    guildId: string;
    guildName?: string | null;
    notificationChannelId: string;
    sleeperLeagueId: string;
    tradeAlerts?: boolean;
    waiverAlerts?: boolean;
    injuryAlerts?: boolean;
    lineupReminders?: boolean;
    timezone?: string;
  };

  export type GuildConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    guildId?: StringFieldUpdateOperationsInput | string;
    guildName?: NullableStringFieldUpdateOperationsInput | string | null;
    notificationChannelId?: StringFieldUpdateOperationsInput | string;
    sleeperLeagueId?: StringFieldUpdateOperationsInput | string;
    tradeAlerts?: BoolFieldUpdateOperationsInput | boolean;
    waiverAlerts?: BoolFieldUpdateOperationsInput | boolean;
    injuryAlerts?: BoolFieldUpdateOperationsInput | boolean;
    lineupReminders?: BoolFieldUpdateOperationsInput | boolean;
    timezone?: StringFieldUpdateOperationsInput | string;
  };

  export type GuildConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    guildId?: StringFieldUpdateOperationsInput | string;
    guildName?: NullableStringFieldUpdateOperationsInput | string | null;
    notificationChannelId?: StringFieldUpdateOperationsInput | string;
    sleeperLeagueId?: StringFieldUpdateOperationsInput | string;
    tradeAlerts?: BoolFieldUpdateOperationsInput | boolean;
    waiverAlerts?: BoolFieldUpdateOperationsInput | boolean;
    injuryAlerts?: BoolFieldUpdateOperationsInput | boolean;
    lineupReminders?: BoolFieldUpdateOperationsInput | boolean;
    timezone?: StringFieldUpdateOperationsInput | string;
  };

  export type UserNotificationPreferenceCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    discordUserId: string;
    dmTradeAlerts?: boolean;
    dmLineupReminders?: boolean;
    dmInjuryAlerts?: boolean;
    sleeperUserId?: string | null;
  };

  export type UserNotificationPreferenceUncheckedCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    discordUserId: string;
    dmTradeAlerts?: boolean;
    dmLineupReminders?: boolean;
    dmInjuryAlerts?: boolean;
    sleeperUserId?: string | null;
  };

  export type UserNotificationPreferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    discordUserId?: StringFieldUpdateOperationsInput | string;
    dmTradeAlerts?: BoolFieldUpdateOperationsInput | boolean;
    dmLineupReminders?: BoolFieldUpdateOperationsInput | boolean;
    dmInjuryAlerts?: BoolFieldUpdateOperationsInput | boolean;
    sleeperUserId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type UserNotificationPreferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    discordUserId?: StringFieldUpdateOperationsInput | string;
    dmTradeAlerts?: BoolFieldUpdateOperationsInput | boolean;
    dmLineupReminders?: BoolFieldUpdateOperationsInput | boolean;
    dmInjuryAlerts?: BoolFieldUpdateOperationsInput | boolean;
    sleeperUserId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type UserNotificationPreferenceCreateManyInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    discordUserId: string;
    dmTradeAlerts?: boolean;
    dmLineupReminders?: boolean;
    dmInjuryAlerts?: boolean;
    sleeperUserId?: string | null;
  };

  export type UserNotificationPreferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    discordUserId?: StringFieldUpdateOperationsInput | string;
    dmTradeAlerts?: BoolFieldUpdateOperationsInput | boolean;
    dmLineupReminders?: BoolFieldUpdateOperationsInput | boolean;
    dmInjuryAlerts?: BoolFieldUpdateOperationsInput | boolean;
    sleeperUserId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type UserNotificationPreferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    discordUserId?: StringFieldUpdateOperationsInput | string;
    dmTradeAlerts?: BoolFieldUpdateOperationsInput | boolean;
    dmLineupReminders?: BoolFieldUpdateOperationsInput | boolean;
    dmInjuryAlerts?: BoolFieldUpdateOperationsInput | boolean;
    sleeperUserId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type PlatformAccountListRelationFilter = {
    every?: PlatformAccountWhereInput;
    some?: PlatformAccountWhereInput;
    none?: PlatformAccountWhereInput;
  };

  export type LeagueMemberListRelationFilter = {
    every?: LeagueMemberWhereInput;
    some?: LeagueMemberWhereInput;
    none?: LeagueMemberWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type PlatformAccountOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type LeagueMemberOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    displayName?: SortOrder;
    email?: SortOrder;
    avatarUrl?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    displayName?: SortOrder;
    email?: SortOrder;
    avatarUrl?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    displayName?: SortOrder;
    email?: SortOrder;
    avatarUrl?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type EnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>;
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>;
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type PlatformAccountPlatformPlatformIdCompoundUniqueInput = {
    platform: $Enums.Platform;
    platformId: string;
  };

  export type PlatformAccountCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    platform?: SortOrder;
    platformId?: SortOrder;
    username?: SortOrder;
    avatarUrl?: SortOrder;
    accessToken?: SortOrder;
    refreshToken?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PlatformAccountMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    platform?: SortOrder;
    platformId?: SortOrder;
    username?: SortOrder;
    avatarUrl?: SortOrder;
    accessToken?: SortOrder;
    refreshToken?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PlatformAccountMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    platform?: SortOrder;
    platformId?: SortOrder;
    username?: SortOrder;
    avatarUrl?: SortOrder;
    accessToken?: SortOrder;
    refreshToken?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>;
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>;
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPlatformFilter<$PrismaModel>;
    _max?: NestedEnumPlatformFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type EnumLeagueTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeagueType | EnumLeagueTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LeagueType[] | ListEnumLeagueTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LeagueType[] | ListEnumLeagueTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumLeagueTypeFilter<$PrismaModel> | $Enums.LeagueType;
  };

  export type EnumScoringFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.ScoringFormat | EnumScoringFormatFieldRefInput<$PrismaModel>;
    in?: $Enums.ScoringFormat[] | ListEnumScoringFormatFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ScoringFormat[] | ListEnumScoringFormatFieldRefInput<$PrismaModel>;
    not?: NestedEnumScoringFormatFilter<$PrismaModel> | $Enums.ScoringFormat;
  };

  export type RosterListRelationFilter = {
    every?: RosterWhereInput;
    some?: RosterWhereInput;
    none?: RosterWhereInput;
  };

  export type MatchupListRelationFilter = {
    every?: MatchupWhereInput;
    some?: MatchupWhereInput;
    none?: MatchupWhereInput;
  };

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput;
    some?: TransactionWhereInput;
    none?: TransactionWhereInput;
  };

  export type RosterOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type MatchupOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type LeaguePlatformPlatformLeagueIdSeasonCompoundUniqueInput = {
    platform: $Enums.Platform;
    platformLeagueId: string;
    season: number;
  };

  export type LeagueCountOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    platform?: SortOrder;
    platformLeagueId?: SortOrder;
    name?: SortOrder;
    season?: SortOrder;
    leagueType?: SortOrder;
    scoringFormat?: SortOrder;
    rosterSize?: SortOrder;
    teamCount?: SortOrder;
  };

  export type LeagueAvgOrderByAggregateInput = {
    season?: SortOrder;
    rosterSize?: SortOrder;
    teamCount?: SortOrder;
  };

  export type LeagueMaxOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    platform?: SortOrder;
    platformLeagueId?: SortOrder;
    name?: SortOrder;
    season?: SortOrder;
    leagueType?: SortOrder;
    scoringFormat?: SortOrder;
    rosterSize?: SortOrder;
    teamCount?: SortOrder;
  };

  export type LeagueMinOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    platform?: SortOrder;
    platformLeagueId?: SortOrder;
    name?: SortOrder;
    season?: SortOrder;
    leagueType?: SortOrder;
    scoringFormat?: SortOrder;
    rosterSize?: SortOrder;
    teamCount?: SortOrder;
  };

  export type LeagueSumOrderByAggregateInput = {
    season?: SortOrder;
    rosterSize?: SortOrder;
    teamCount?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type EnumLeagueTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeagueType | EnumLeagueTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LeagueType[] | ListEnumLeagueTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LeagueType[] | ListEnumLeagueTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumLeagueTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeagueType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumLeagueTypeFilter<$PrismaModel>;
    _max?: NestedEnumLeagueTypeFilter<$PrismaModel>;
  };

  export type EnumScoringFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScoringFormat | EnumScoringFormatFieldRefInput<$PrismaModel>;
    in?: $Enums.ScoringFormat[] | ListEnumScoringFormatFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ScoringFormat[] | ListEnumScoringFormatFieldRefInput<$PrismaModel>;
    not?: NestedEnumScoringFormatWithAggregatesFilter<$PrismaModel> | $Enums.ScoringFormat;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumScoringFormatFilter<$PrismaModel>;
    _max?: NestedEnumScoringFormatFilter<$PrismaModel>;
  };

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string;
  };

  export type LeagueScalarRelationFilter = {
    is?: LeagueWhereInput;
    isNot?: LeagueWhereInput;
  };

  export type LeagueMemberLeagueIdRosterSlotCompoundUniqueInput = {
    leagueId: string;
    rosterSlot: number;
  };

  export type LeagueMemberLeagueIdUserIdCompoundUniqueInput = {
    leagueId: string;
    userId: string;
  };

  export type LeagueMemberCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    leagueId?: SortOrder;
    teamName?: SortOrder;
    teamAvatar?: SortOrder;
    rosterSlot?: SortOrder;
    wins?: SortOrder;
    losses?: SortOrder;
    ties?: SortOrder;
    pointsFor?: SortOrder;
    pointsAgainst?: SortOrder;
  };

  export type LeagueMemberAvgOrderByAggregateInput = {
    rosterSlot?: SortOrder;
    wins?: SortOrder;
    losses?: SortOrder;
    ties?: SortOrder;
    pointsFor?: SortOrder;
    pointsAgainst?: SortOrder;
  };

  export type LeagueMemberMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    leagueId?: SortOrder;
    teamName?: SortOrder;
    teamAvatar?: SortOrder;
    rosterSlot?: SortOrder;
    wins?: SortOrder;
    losses?: SortOrder;
    ties?: SortOrder;
    pointsFor?: SortOrder;
    pointsAgainst?: SortOrder;
  };

  export type LeagueMemberMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    leagueId?: SortOrder;
    teamName?: SortOrder;
    teamAvatar?: SortOrder;
    rosterSlot?: SortOrder;
    wins?: SortOrder;
    losses?: SortOrder;
    ties?: SortOrder;
    pointsFor?: SortOrder;
    pointsAgainst?: SortOrder;
  };

  export type LeagueMemberSumOrderByAggregateInput = {
    rosterSlot?: SortOrder;
    wins?: SortOrder;
    losses?: SortOrder;
    ties?: SortOrder;
    pointsFor?: SortOrder;
    pointsAgainst?: SortOrder;
  };

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type EnumPositionFilter<$PrismaModel = never> = {
    equals?: $Enums.Position | EnumPositionFieldRefInput<$PrismaModel>;
    in?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>;
    not?: NestedEnumPositionFilter<$PrismaModel> | $Enums.Position;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type EnumPlayerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerStatus | EnumPlayerStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PlayerStatus[] | ListEnumPlayerStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlayerStatus[] | ListEnumPlayerStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumPlayerStatusFilter<$PrismaModel> | $Enums.PlayerStatus;
  };

  export type RosterPlayerListRelationFilter = {
    every?: RosterPlayerWhereInput;
    some?: RosterPlayerWhereInput;
    none?: RosterPlayerWhereInput;
  };

  export type RosterPlayerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    nflverseId?: SortOrder;
    sleeperId?: SortOrder;
    yahooId?: SortOrder;
    espnId?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    fullName?: SortOrder;
    position?: SortOrder;
    team?: SortOrder;
    jerseyNumber?: SortOrder;
    status?: SortOrder;
    injuryStatus?: SortOrder;
    byeWeek?: SortOrder;
  };

  export type PlayerAvgOrderByAggregateInput = {
    jerseyNumber?: SortOrder;
    byeWeek?: SortOrder;
  };

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    nflverseId?: SortOrder;
    sleeperId?: SortOrder;
    yahooId?: SortOrder;
    espnId?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    fullName?: SortOrder;
    position?: SortOrder;
    team?: SortOrder;
    jerseyNumber?: SortOrder;
    status?: SortOrder;
    injuryStatus?: SortOrder;
    byeWeek?: SortOrder;
  };

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    nflverseId?: SortOrder;
    sleeperId?: SortOrder;
    yahooId?: SortOrder;
    espnId?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    fullName?: SortOrder;
    position?: SortOrder;
    team?: SortOrder;
    jerseyNumber?: SortOrder;
    status?: SortOrder;
    injuryStatus?: SortOrder;
    byeWeek?: SortOrder;
  };

  export type PlayerSumOrderByAggregateInput = {
    jerseyNumber?: SortOrder;
    byeWeek?: SortOrder;
  };

  export type EnumPositionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Position | EnumPositionFieldRefInput<$PrismaModel>;
    in?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>;
    not?: NestedEnumPositionWithAggregatesFilter<$PrismaModel> | $Enums.Position;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPositionFilter<$PrismaModel>;
    _max?: NestedEnumPositionFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type EnumPlayerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerStatus | EnumPlayerStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PlayerStatus[] | ListEnumPlayerStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlayerStatus[] | ListEnumPlayerStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumPlayerStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlayerStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPlayerStatusFilter<$PrismaModel>;
    _max?: NestedEnumPlayerStatusFilter<$PrismaModel>;
  };

  export type LeagueMemberScalarRelationFilter = {
    is?: LeagueMemberWhereInput;
    isNot?: LeagueMemberWhereInput;
  };

  export type RosterMemberIdWeekSeasonCompoundUniqueInput = {
    memberId: string;
    week: number;
    season: number;
  };

  export type RosterCountOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    leagueId?: SortOrder;
    memberId?: SortOrder;
    week?: SortOrder;
    season?: SortOrder;
  };

  export type RosterAvgOrderByAggregateInput = {
    week?: SortOrder;
    season?: SortOrder;
  };

  export type RosterMaxOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    leagueId?: SortOrder;
    memberId?: SortOrder;
    week?: SortOrder;
    season?: SortOrder;
  };

  export type RosterMinOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    leagueId?: SortOrder;
    memberId?: SortOrder;
    week?: SortOrder;
    season?: SortOrder;
  };

  export type RosterSumOrderByAggregateInput = {
    week?: SortOrder;
    season?: SortOrder;
  };

  export type EnumRosterSlotFilter<$PrismaModel = never> = {
    equals?: $Enums.RosterSlot | EnumRosterSlotFieldRefInput<$PrismaModel>;
    in?: $Enums.RosterSlot[] | ListEnumRosterSlotFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RosterSlot[] | ListEnumRosterSlotFieldRefInput<$PrismaModel>;
    not?: NestedEnumRosterSlotFilter<$PrismaModel> | $Enums.RosterSlot;
  };

  export type RosterScalarRelationFilter = {
    is?: RosterWhereInput;
    isNot?: RosterWhereInput;
  };

  export type PlayerScalarRelationFilter = {
    is?: PlayerWhereInput;
    isNot?: PlayerWhereInput;
  };

  export type RosterPlayerRosterIdPlayerIdCompoundUniqueInput = {
    rosterId: string;
    playerId: string;
  };

  export type RosterPlayerCountOrderByAggregateInput = {
    id?: SortOrder;
    rosterId?: SortOrder;
    playerId?: SortOrder;
    slot?: SortOrder;
  };

  export type RosterPlayerMaxOrderByAggregateInput = {
    id?: SortOrder;
    rosterId?: SortOrder;
    playerId?: SortOrder;
    slot?: SortOrder;
  };

  export type RosterPlayerMinOrderByAggregateInput = {
    id?: SortOrder;
    rosterId?: SortOrder;
    playerId?: SortOrder;
    slot?: SortOrder;
  };

  export type EnumRosterSlotWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RosterSlot | EnumRosterSlotFieldRefInput<$PrismaModel>;
    in?: $Enums.RosterSlot[] | ListEnumRosterSlotFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RosterSlot[] | ListEnumRosterSlotFieldRefInput<$PrismaModel>;
    not?: NestedEnumRosterSlotWithAggregatesFilter<$PrismaModel> | $Enums.RosterSlot;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRosterSlotFilter<$PrismaModel>;
    _max?: NestedEnumRosterSlotFilter<$PrismaModel>;
  };

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalNullableFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type EnumMatchupTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchupType | EnumMatchupTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MatchupType[] | ListEnumMatchupTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MatchupType[] | ListEnumMatchupTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumMatchupTypeFilter<$PrismaModel> | $Enums.MatchupType;
  };

  export type MatchupLeagueIdWeekSeasonHomeTeamSlotAwayTeamSlotCompoundUniqueInput = {
    leagueId: string;
    week: number;
    season: number;
    homeTeamSlot: number;
    awayTeamSlot: number;
  };

  export type MatchupCountOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    leagueId?: SortOrder;
    week?: SortOrder;
    season?: SortOrder;
    homeTeamSlot?: SortOrder;
    awayTeamSlot?: SortOrder;
    homeScore?: SortOrder;
    awayScore?: SortOrder;
    homeProjected?: SortOrder;
    awayProjected?: SortOrder;
    isPlayoffs?: SortOrder;
    matchupType?: SortOrder;
  };

  export type MatchupAvgOrderByAggregateInput = {
    week?: SortOrder;
    season?: SortOrder;
    homeTeamSlot?: SortOrder;
    awayTeamSlot?: SortOrder;
    homeScore?: SortOrder;
    awayScore?: SortOrder;
    homeProjected?: SortOrder;
    awayProjected?: SortOrder;
  };

  export type MatchupMaxOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    leagueId?: SortOrder;
    week?: SortOrder;
    season?: SortOrder;
    homeTeamSlot?: SortOrder;
    awayTeamSlot?: SortOrder;
    homeScore?: SortOrder;
    awayScore?: SortOrder;
    homeProjected?: SortOrder;
    awayProjected?: SortOrder;
    isPlayoffs?: SortOrder;
    matchupType?: SortOrder;
  };

  export type MatchupMinOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    leagueId?: SortOrder;
    week?: SortOrder;
    season?: SortOrder;
    homeTeamSlot?: SortOrder;
    awayTeamSlot?: SortOrder;
    homeScore?: SortOrder;
    awayScore?: SortOrder;
    homeProjected?: SortOrder;
    awayProjected?: SortOrder;
    isPlayoffs?: SortOrder;
    matchupType?: SortOrder;
  };

  export type MatchupSumOrderByAggregateInput = {
    week?: SortOrder;
    season?: SortOrder;
    homeTeamSlot?: SortOrder;
    awayTeamSlot?: SortOrder;
    homeScore?: SortOrder;
    awayScore?: SortOrder;
    homeProjected?: SortOrder;
    awayProjected?: SortOrder;
  };

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalNullableWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: NestedDecimalNullableFilter<$PrismaModel>;
    _min?: NestedDecimalNullableFilter<$PrismaModel>;
    _max?: NestedDecimalNullableFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type EnumMatchupTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchupType | EnumMatchupTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MatchupType[] | ListEnumMatchupTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MatchupType[] | ListEnumMatchupTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumMatchupTypeWithAggregatesFilter<$PrismaModel> | $Enums.MatchupType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumMatchupTypeFilter<$PrismaModel>;
    _max?: NestedEnumMatchupTypeFilter<$PrismaModel>;
  };

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType;
  };

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus;
  };
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
  };

  export type TransactionAddListRelationFilter = {
    every?: TransactionAddWhereInput;
    some?: TransactionAddWhereInput;
    none?: TransactionAddWhereInput;
  };

  export type TransactionDropListRelationFilter = {
    every?: TransactionDropWhereInput;
    some?: TransactionDropWhereInput;
    none?: TransactionDropWhereInput;
  };

  export type TransactionAddOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TransactionDropOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    leagueId?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    processedAt?: SortOrder;
    faabBid?: SortOrder;
    metadata?: SortOrder;
  };

  export type TransactionAvgOrderByAggregateInput = {
    faabBid?: SortOrder;
  };

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    leagueId?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    processedAt?: SortOrder;
    faabBid?: SortOrder;
  };

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    leagueId?: SortOrder;
    type?: SortOrder;
    status?: SortOrder;
    processedAt?: SortOrder;
    faabBid?: SortOrder;
  };

  export type TransactionSumOrderByAggregateInput = {
    faabBid?: SortOrder;
  };

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>;
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>;
  };

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>;
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>;
  };
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedJsonNullableFilter<$PrismaModel>;
    _max?: NestedJsonNullableFilter<$PrismaModel>;
  };

  export type TransactionScalarRelationFilter = {
    is?: TransactionWhereInput;
    isNot?: TransactionWhereInput;
  };

  export type TransactionAddCountOrderByAggregateInput = {
    id?: SortOrder;
    transactionId?: SortOrder;
    teamSlot?: SortOrder;
    playerId?: SortOrder;
    pickInfo?: SortOrder;
  };

  export type TransactionAddAvgOrderByAggregateInput = {
    teamSlot?: SortOrder;
  };

  export type TransactionAddMaxOrderByAggregateInput = {
    id?: SortOrder;
    transactionId?: SortOrder;
    teamSlot?: SortOrder;
    playerId?: SortOrder;
  };

  export type TransactionAddMinOrderByAggregateInput = {
    id?: SortOrder;
    transactionId?: SortOrder;
    teamSlot?: SortOrder;
    playerId?: SortOrder;
  };

  export type TransactionAddSumOrderByAggregateInput = {
    teamSlot?: SortOrder;
  };

  export type TransactionDropCountOrderByAggregateInput = {
    id?: SortOrder;
    transactionId?: SortOrder;
    teamSlot?: SortOrder;
    playerId?: SortOrder;
    pickInfo?: SortOrder;
  };

  export type TransactionDropAvgOrderByAggregateInput = {
    teamSlot?: SortOrder;
  };

  export type TransactionDropMaxOrderByAggregateInput = {
    id?: SortOrder;
    transactionId?: SortOrder;
    teamSlot?: SortOrder;
    playerId?: SortOrder;
  };

  export type TransactionDropMinOrderByAggregateInput = {
    id?: SortOrder;
    transactionId?: SortOrder;
    teamSlot?: SortOrder;
    playerId?: SortOrder;
  };

  export type TransactionDropSumOrderByAggregateInput = {
    teamSlot?: SortOrder;
  };

  export type GuildConfigCountOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    guildId?: SortOrder;
    guildName?: SortOrder;
    notificationChannelId?: SortOrder;
    sleeperLeagueId?: SortOrder;
    tradeAlerts?: SortOrder;
    waiverAlerts?: SortOrder;
    injuryAlerts?: SortOrder;
    lineupReminders?: SortOrder;
    timezone?: SortOrder;
  };

  export type GuildConfigMaxOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    guildId?: SortOrder;
    guildName?: SortOrder;
    notificationChannelId?: SortOrder;
    sleeperLeagueId?: SortOrder;
    tradeAlerts?: SortOrder;
    waiverAlerts?: SortOrder;
    injuryAlerts?: SortOrder;
    lineupReminders?: SortOrder;
    timezone?: SortOrder;
  };

  export type GuildConfigMinOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    guildId?: SortOrder;
    guildName?: SortOrder;
    notificationChannelId?: SortOrder;
    sleeperLeagueId?: SortOrder;
    tradeAlerts?: SortOrder;
    waiverAlerts?: SortOrder;
    injuryAlerts?: SortOrder;
    lineupReminders?: SortOrder;
    timezone?: SortOrder;
  };

  export type UserNotificationPreferenceCountOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    discordUserId?: SortOrder;
    dmTradeAlerts?: SortOrder;
    dmLineupReminders?: SortOrder;
    dmInjuryAlerts?: SortOrder;
    sleeperUserId?: SortOrder;
  };

  export type UserNotificationPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    discordUserId?: SortOrder;
    dmTradeAlerts?: SortOrder;
    dmLineupReminders?: SortOrder;
    dmInjuryAlerts?: SortOrder;
    sleeperUserId?: SortOrder;
  };

  export type UserNotificationPreferenceMinOrderByAggregateInput = {
    id?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    discordUserId?: SortOrder;
    dmTradeAlerts?: SortOrder;
    dmLineupReminders?: SortOrder;
    dmInjuryAlerts?: SortOrder;
    sleeperUserId?: SortOrder;
  };

  export type PlatformAccountCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<PlatformAccountCreateWithoutUserInput, PlatformAccountUncheckedCreateWithoutUserInput>
      | PlatformAccountCreateWithoutUserInput[]
      | PlatformAccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PlatformAccountCreateOrConnectWithoutUserInput
      | PlatformAccountCreateOrConnectWithoutUserInput[];
    createMany?: PlatformAccountCreateManyUserInputEnvelope;
    connect?: PlatformAccountWhereUniqueInput | PlatformAccountWhereUniqueInput[];
  };

  export type LeagueMemberCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<LeagueMemberCreateWithoutUserInput, LeagueMemberUncheckedCreateWithoutUserInput>
      | LeagueMemberCreateWithoutUserInput[]
      | LeagueMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | LeagueMemberCreateOrConnectWithoutUserInput
      | LeagueMemberCreateOrConnectWithoutUserInput[];
    createMany?: LeagueMemberCreateManyUserInputEnvelope;
    connect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[];
  };

  export type PlatformAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<PlatformAccountCreateWithoutUserInput, PlatformAccountUncheckedCreateWithoutUserInput>
      | PlatformAccountCreateWithoutUserInput[]
      | PlatformAccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PlatformAccountCreateOrConnectWithoutUserInput
      | PlatformAccountCreateOrConnectWithoutUserInput[];
    createMany?: PlatformAccountCreateManyUserInputEnvelope;
    connect?: PlatformAccountWhereUniqueInput | PlatformAccountWhereUniqueInput[];
  };

  export type LeagueMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<LeagueMemberCreateWithoutUserInput, LeagueMemberUncheckedCreateWithoutUserInput>
      | LeagueMemberCreateWithoutUserInput[]
      | LeagueMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | LeagueMemberCreateOrConnectWithoutUserInput
      | LeagueMemberCreateOrConnectWithoutUserInput[];
    createMany?: LeagueMemberCreateManyUserInputEnvelope;
    connect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type PlatformAccountUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<PlatformAccountCreateWithoutUserInput, PlatformAccountUncheckedCreateWithoutUserInput>
      | PlatformAccountCreateWithoutUserInput[]
      | PlatformAccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PlatformAccountCreateOrConnectWithoutUserInput
      | PlatformAccountCreateOrConnectWithoutUserInput[];
    upsert?:
      | PlatformAccountUpsertWithWhereUniqueWithoutUserInput
      | PlatformAccountUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PlatformAccountCreateManyUserInputEnvelope;
    set?: PlatformAccountWhereUniqueInput | PlatformAccountWhereUniqueInput[];
    disconnect?: PlatformAccountWhereUniqueInput | PlatformAccountWhereUniqueInput[];
    delete?: PlatformAccountWhereUniqueInput | PlatformAccountWhereUniqueInput[];
    connect?: PlatformAccountWhereUniqueInput | PlatformAccountWhereUniqueInput[];
    update?:
      | PlatformAccountUpdateWithWhereUniqueWithoutUserInput
      | PlatformAccountUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PlatformAccountUpdateManyWithWhereWithoutUserInput
      | PlatformAccountUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PlatformAccountScalarWhereInput | PlatformAccountScalarWhereInput[];
  };

  export type LeagueMemberUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<LeagueMemberCreateWithoutUserInput, LeagueMemberUncheckedCreateWithoutUserInput>
      | LeagueMemberCreateWithoutUserInput[]
      | LeagueMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | LeagueMemberCreateOrConnectWithoutUserInput
      | LeagueMemberCreateOrConnectWithoutUserInput[];
    upsert?:
      | LeagueMemberUpsertWithWhereUniqueWithoutUserInput
      | LeagueMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: LeagueMemberCreateManyUserInputEnvelope;
    set?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[];
    disconnect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[];
    delete?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[];
    connect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[];
    update?:
      | LeagueMemberUpdateWithWhereUniqueWithoutUserInput
      | LeagueMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | LeagueMemberUpdateManyWithWhereWithoutUserInput
      | LeagueMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: LeagueMemberScalarWhereInput | LeagueMemberScalarWhereInput[];
  };

  export type PlatformAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<PlatformAccountCreateWithoutUserInput, PlatformAccountUncheckedCreateWithoutUserInput>
      | PlatformAccountCreateWithoutUserInput[]
      | PlatformAccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PlatformAccountCreateOrConnectWithoutUserInput
      | PlatformAccountCreateOrConnectWithoutUserInput[];
    upsert?:
      | PlatformAccountUpsertWithWhereUniqueWithoutUserInput
      | PlatformAccountUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PlatformAccountCreateManyUserInputEnvelope;
    set?: PlatformAccountWhereUniqueInput | PlatformAccountWhereUniqueInput[];
    disconnect?: PlatformAccountWhereUniqueInput | PlatformAccountWhereUniqueInput[];
    delete?: PlatformAccountWhereUniqueInput | PlatformAccountWhereUniqueInput[];
    connect?: PlatformAccountWhereUniqueInput | PlatformAccountWhereUniqueInput[];
    update?:
      | PlatformAccountUpdateWithWhereUniqueWithoutUserInput
      | PlatformAccountUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PlatformAccountUpdateManyWithWhereWithoutUserInput
      | PlatformAccountUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PlatformAccountScalarWhereInput | PlatformAccountScalarWhereInput[];
  };

  export type LeagueMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<LeagueMemberCreateWithoutUserInput, LeagueMemberUncheckedCreateWithoutUserInput>
      | LeagueMemberCreateWithoutUserInput[]
      | LeagueMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | LeagueMemberCreateOrConnectWithoutUserInput
      | LeagueMemberCreateOrConnectWithoutUserInput[];
    upsert?:
      | LeagueMemberUpsertWithWhereUniqueWithoutUserInput
      | LeagueMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: LeagueMemberCreateManyUserInputEnvelope;
    set?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[];
    disconnect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[];
    delete?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[];
    connect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[];
    update?:
      | LeagueMemberUpdateWithWhereUniqueWithoutUserInput
      | LeagueMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | LeagueMemberUpdateManyWithWhereWithoutUserInput
      | LeagueMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: LeagueMemberScalarWhereInput | LeagueMemberScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutPlatformAccountsInput = {
    create?: XOR<
      UserCreateWithoutPlatformAccountsInput,
      UserUncheckedCreateWithoutPlatformAccountsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPlatformAccountsInput;
    connect?: UserWhereUniqueInput;
  };

  export type EnumPlatformFieldUpdateOperationsInput = {
    set?: $Enums.Platform;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type UserUpdateOneRequiredWithoutPlatformAccountsNestedInput = {
    create?: XOR<
      UserCreateWithoutPlatformAccountsInput,
      UserUncheckedCreateWithoutPlatformAccountsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPlatformAccountsInput;
    upsert?: UserUpsertWithoutPlatformAccountsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutPlatformAccountsInput,
        UserUpdateWithoutPlatformAccountsInput
      >,
      UserUncheckedUpdateWithoutPlatformAccountsInput
    >;
  };

  export type LeagueMemberCreateNestedManyWithoutLeagueInput = {
    create?:
      | XOR<LeagueMemberCreateWithoutLeagueInput, LeagueMemberUncheckedCreateWithoutLeagueInput>
      | LeagueMemberCreateWithoutLeagueInput[]
      | LeagueMemberUncheckedCreateWithoutLeagueInput[];
    connectOrCreate?:
      | LeagueMemberCreateOrConnectWithoutLeagueInput
      | LeagueMemberCreateOrConnectWithoutLeagueInput[];
    createMany?: LeagueMemberCreateManyLeagueInputEnvelope;
    connect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[];
  };

  export type RosterCreateNestedManyWithoutLeagueInput = {
    create?:
      | XOR<RosterCreateWithoutLeagueInput, RosterUncheckedCreateWithoutLeagueInput>
      | RosterCreateWithoutLeagueInput[]
      | RosterUncheckedCreateWithoutLeagueInput[];
    connectOrCreate?:
      | RosterCreateOrConnectWithoutLeagueInput
      | RosterCreateOrConnectWithoutLeagueInput[];
    createMany?: RosterCreateManyLeagueInputEnvelope;
    connect?: RosterWhereUniqueInput | RosterWhereUniqueInput[];
  };

  export type MatchupCreateNestedManyWithoutLeagueInput = {
    create?:
      | XOR<MatchupCreateWithoutLeagueInput, MatchupUncheckedCreateWithoutLeagueInput>
      | MatchupCreateWithoutLeagueInput[]
      | MatchupUncheckedCreateWithoutLeagueInput[];
    connectOrCreate?:
      | MatchupCreateOrConnectWithoutLeagueInput
      | MatchupCreateOrConnectWithoutLeagueInput[];
    createMany?: MatchupCreateManyLeagueInputEnvelope;
    connect?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[];
  };

  export type TransactionCreateNestedManyWithoutLeagueInput = {
    create?:
      | XOR<TransactionCreateWithoutLeagueInput, TransactionUncheckedCreateWithoutLeagueInput>
      | TransactionCreateWithoutLeagueInput[]
      | TransactionUncheckedCreateWithoutLeagueInput[];
    connectOrCreate?:
      | TransactionCreateOrConnectWithoutLeagueInput
      | TransactionCreateOrConnectWithoutLeagueInput[];
    createMany?: TransactionCreateManyLeagueInputEnvelope;
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
  };

  export type LeagueMemberUncheckedCreateNestedManyWithoutLeagueInput = {
    create?:
      | XOR<LeagueMemberCreateWithoutLeagueInput, LeagueMemberUncheckedCreateWithoutLeagueInput>
      | LeagueMemberCreateWithoutLeagueInput[]
      | LeagueMemberUncheckedCreateWithoutLeagueInput[];
    connectOrCreate?:
      | LeagueMemberCreateOrConnectWithoutLeagueInput
      | LeagueMemberCreateOrConnectWithoutLeagueInput[];
    createMany?: LeagueMemberCreateManyLeagueInputEnvelope;
    connect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[];
  };

  export type RosterUncheckedCreateNestedManyWithoutLeagueInput = {
    create?:
      | XOR<RosterCreateWithoutLeagueInput, RosterUncheckedCreateWithoutLeagueInput>
      | RosterCreateWithoutLeagueInput[]
      | RosterUncheckedCreateWithoutLeagueInput[];
    connectOrCreate?:
      | RosterCreateOrConnectWithoutLeagueInput
      | RosterCreateOrConnectWithoutLeagueInput[];
    createMany?: RosterCreateManyLeagueInputEnvelope;
    connect?: RosterWhereUniqueInput | RosterWhereUniqueInput[];
  };

  export type MatchupUncheckedCreateNestedManyWithoutLeagueInput = {
    create?:
      | XOR<MatchupCreateWithoutLeagueInput, MatchupUncheckedCreateWithoutLeagueInput>
      | MatchupCreateWithoutLeagueInput[]
      | MatchupUncheckedCreateWithoutLeagueInput[];
    connectOrCreate?:
      | MatchupCreateOrConnectWithoutLeagueInput
      | MatchupCreateOrConnectWithoutLeagueInput[];
    createMany?: MatchupCreateManyLeagueInputEnvelope;
    connect?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[];
  };

  export type TransactionUncheckedCreateNestedManyWithoutLeagueInput = {
    create?:
      | XOR<TransactionCreateWithoutLeagueInput, TransactionUncheckedCreateWithoutLeagueInput>
      | TransactionCreateWithoutLeagueInput[]
      | TransactionUncheckedCreateWithoutLeagueInput[];
    connectOrCreate?:
      | TransactionCreateOrConnectWithoutLeagueInput
      | TransactionCreateOrConnectWithoutLeagueInput[];
    createMany?: TransactionCreateManyLeagueInputEnvelope;
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type EnumLeagueTypeFieldUpdateOperationsInput = {
    set?: $Enums.LeagueType;
  };

  export type EnumScoringFormatFieldUpdateOperationsInput = {
    set?: $Enums.ScoringFormat;
  };

  export type LeagueMemberUpdateManyWithoutLeagueNestedInput = {
    create?:
      | XOR<LeagueMemberCreateWithoutLeagueInput, LeagueMemberUncheckedCreateWithoutLeagueInput>
      | LeagueMemberCreateWithoutLeagueInput[]
      | LeagueMemberUncheckedCreateWithoutLeagueInput[];
    connectOrCreate?:
      | LeagueMemberCreateOrConnectWithoutLeagueInput
      | LeagueMemberCreateOrConnectWithoutLeagueInput[];
    upsert?:
      | LeagueMemberUpsertWithWhereUniqueWithoutLeagueInput
      | LeagueMemberUpsertWithWhereUniqueWithoutLeagueInput[];
    createMany?: LeagueMemberCreateManyLeagueInputEnvelope;
    set?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[];
    disconnect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[];
    delete?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[];
    connect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[];
    update?:
      | LeagueMemberUpdateWithWhereUniqueWithoutLeagueInput
      | LeagueMemberUpdateWithWhereUniqueWithoutLeagueInput[];
    updateMany?:
      | LeagueMemberUpdateManyWithWhereWithoutLeagueInput
      | LeagueMemberUpdateManyWithWhereWithoutLeagueInput[];
    deleteMany?: LeagueMemberScalarWhereInput | LeagueMemberScalarWhereInput[];
  };

  export type RosterUpdateManyWithoutLeagueNestedInput = {
    create?:
      | XOR<RosterCreateWithoutLeagueInput, RosterUncheckedCreateWithoutLeagueInput>
      | RosterCreateWithoutLeagueInput[]
      | RosterUncheckedCreateWithoutLeagueInput[];
    connectOrCreate?:
      | RosterCreateOrConnectWithoutLeagueInput
      | RosterCreateOrConnectWithoutLeagueInput[];
    upsert?:
      | RosterUpsertWithWhereUniqueWithoutLeagueInput
      | RosterUpsertWithWhereUniqueWithoutLeagueInput[];
    createMany?: RosterCreateManyLeagueInputEnvelope;
    set?: RosterWhereUniqueInput | RosterWhereUniqueInput[];
    disconnect?: RosterWhereUniqueInput | RosterWhereUniqueInput[];
    delete?: RosterWhereUniqueInput | RosterWhereUniqueInput[];
    connect?: RosterWhereUniqueInput | RosterWhereUniqueInput[];
    update?:
      | RosterUpdateWithWhereUniqueWithoutLeagueInput
      | RosterUpdateWithWhereUniqueWithoutLeagueInput[];
    updateMany?:
      | RosterUpdateManyWithWhereWithoutLeagueInput
      | RosterUpdateManyWithWhereWithoutLeagueInput[];
    deleteMany?: RosterScalarWhereInput | RosterScalarWhereInput[];
  };

  export type MatchupUpdateManyWithoutLeagueNestedInput = {
    create?:
      | XOR<MatchupCreateWithoutLeagueInput, MatchupUncheckedCreateWithoutLeagueInput>
      | MatchupCreateWithoutLeagueInput[]
      | MatchupUncheckedCreateWithoutLeagueInput[];
    connectOrCreate?:
      | MatchupCreateOrConnectWithoutLeagueInput
      | MatchupCreateOrConnectWithoutLeagueInput[];
    upsert?:
      | MatchupUpsertWithWhereUniqueWithoutLeagueInput
      | MatchupUpsertWithWhereUniqueWithoutLeagueInput[];
    createMany?: MatchupCreateManyLeagueInputEnvelope;
    set?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[];
    disconnect?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[];
    delete?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[];
    connect?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[];
    update?:
      | MatchupUpdateWithWhereUniqueWithoutLeagueInput
      | MatchupUpdateWithWhereUniqueWithoutLeagueInput[];
    updateMany?:
      | MatchupUpdateManyWithWhereWithoutLeagueInput
      | MatchupUpdateManyWithWhereWithoutLeagueInput[];
    deleteMany?: MatchupScalarWhereInput | MatchupScalarWhereInput[];
  };

  export type TransactionUpdateManyWithoutLeagueNestedInput = {
    create?:
      | XOR<TransactionCreateWithoutLeagueInput, TransactionUncheckedCreateWithoutLeagueInput>
      | TransactionCreateWithoutLeagueInput[]
      | TransactionUncheckedCreateWithoutLeagueInput[];
    connectOrCreate?:
      | TransactionCreateOrConnectWithoutLeagueInput
      | TransactionCreateOrConnectWithoutLeagueInput[];
    upsert?:
      | TransactionUpsertWithWhereUniqueWithoutLeagueInput
      | TransactionUpsertWithWhereUniqueWithoutLeagueInput[];
    createMany?: TransactionCreateManyLeagueInputEnvelope;
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    update?:
      | TransactionUpdateWithWhereUniqueWithoutLeagueInput
      | TransactionUpdateWithWhereUniqueWithoutLeagueInput[];
    updateMany?:
      | TransactionUpdateManyWithWhereWithoutLeagueInput
      | TransactionUpdateManyWithWhereWithoutLeagueInput[];
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[];
  };

  export type LeagueMemberUncheckedUpdateManyWithoutLeagueNestedInput = {
    create?:
      | XOR<LeagueMemberCreateWithoutLeagueInput, LeagueMemberUncheckedCreateWithoutLeagueInput>
      | LeagueMemberCreateWithoutLeagueInput[]
      | LeagueMemberUncheckedCreateWithoutLeagueInput[];
    connectOrCreate?:
      | LeagueMemberCreateOrConnectWithoutLeagueInput
      | LeagueMemberCreateOrConnectWithoutLeagueInput[];
    upsert?:
      | LeagueMemberUpsertWithWhereUniqueWithoutLeagueInput
      | LeagueMemberUpsertWithWhereUniqueWithoutLeagueInput[];
    createMany?: LeagueMemberCreateManyLeagueInputEnvelope;
    set?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[];
    disconnect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[];
    delete?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[];
    connect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[];
    update?:
      | LeagueMemberUpdateWithWhereUniqueWithoutLeagueInput
      | LeagueMemberUpdateWithWhereUniqueWithoutLeagueInput[];
    updateMany?:
      | LeagueMemberUpdateManyWithWhereWithoutLeagueInput
      | LeagueMemberUpdateManyWithWhereWithoutLeagueInput[];
    deleteMany?: LeagueMemberScalarWhereInput | LeagueMemberScalarWhereInput[];
  };

  export type RosterUncheckedUpdateManyWithoutLeagueNestedInput = {
    create?:
      | XOR<RosterCreateWithoutLeagueInput, RosterUncheckedCreateWithoutLeagueInput>
      | RosterCreateWithoutLeagueInput[]
      | RosterUncheckedCreateWithoutLeagueInput[];
    connectOrCreate?:
      | RosterCreateOrConnectWithoutLeagueInput
      | RosterCreateOrConnectWithoutLeagueInput[];
    upsert?:
      | RosterUpsertWithWhereUniqueWithoutLeagueInput
      | RosterUpsertWithWhereUniqueWithoutLeagueInput[];
    createMany?: RosterCreateManyLeagueInputEnvelope;
    set?: RosterWhereUniqueInput | RosterWhereUniqueInput[];
    disconnect?: RosterWhereUniqueInput | RosterWhereUniqueInput[];
    delete?: RosterWhereUniqueInput | RosterWhereUniqueInput[];
    connect?: RosterWhereUniqueInput | RosterWhereUniqueInput[];
    update?:
      | RosterUpdateWithWhereUniqueWithoutLeagueInput
      | RosterUpdateWithWhereUniqueWithoutLeagueInput[];
    updateMany?:
      | RosterUpdateManyWithWhereWithoutLeagueInput
      | RosterUpdateManyWithWhereWithoutLeagueInput[];
    deleteMany?: RosterScalarWhereInput | RosterScalarWhereInput[];
  };

  export type MatchupUncheckedUpdateManyWithoutLeagueNestedInput = {
    create?:
      | XOR<MatchupCreateWithoutLeagueInput, MatchupUncheckedCreateWithoutLeagueInput>
      | MatchupCreateWithoutLeagueInput[]
      | MatchupUncheckedCreateWithoutLeagueInput[];
    connectOrCreate?:
      | MatchupCreateOrConnectWithoutLeagueInput
      | MatchupCreateOrConnectWithoutLeagueInput[];
    upsert?:
      | MatchupUpsertWithWhereUniqueWithoutLeagueInput
      | MatchupUpsertWithWhereUniqueWithoutLeagueInput[];
    createMany?: MatchupCreateManyLeagueInputEnvelope;
    set?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[];
    disconnect?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[];
    delete?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[];
    connect?: MatchupWhereUniqueInput | MatchupWhereUniqueInput[];
    update?:
      | MatchupUpdateWithWhereUniqueWithoutLeagueInput
      | MatchupUpdateWithWhereUniqueWithoutLeagueInput[];
    updateMany?:
      | MatchupUpdateManyWithWhereWithoutLeagueInput
      | MatchupUpdateManyWithWhereWithoutLeagueInput[];
    deleteMany?: MatchupScalarWhereInput | MatchupScalarWhereInput[];
  };

  export type TransactionUncheckedUpdateManyWithoutLeagueNestedInput = {
    create?:
      | XOR<TransactionCreateWithoutLeagueInput, TransactionUncheckedCreateWithoutLeagueInput>
      | TransactionCreateWithoutLeagueInput[]
      | TransactionUncheckedCreateWithoutLeagueInput[];
    connectOrCreate?:
      | TransactionCreateOrConnectWithoutLeagueInput
      | TransactionCreateOrConnectWithoutLeagueInput[];
    upsert?:
      | TransactionUpsertWithWhereUniqueWithoutLeagueInput
      | TransactionUpsertWithWhereUniqueWithoutLeagueInput[];
    createMany?: TransactionCreateManyLeagueInputEnvelope;
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[];
    update?:
      | TransactionUpdateWithWhereUniqueWithoutLeagueInput
      | TransactionUpdateWithWhereUniqueWithoutLeagueInput[];
    updateMany?:
      | TransactionUpdateManyWithWhereWithoutLeagueInput
      | TransactionUpdateManyWithWhereWithoutLeagueInput[];
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutLeagueMembershipsInput = {
    create?: XOR<
      UserCreateWithoutLeagueMembershipsInput,
      UserUncheckedCreateWithoutLeagueMembershipsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutLeagueMembershipsInput;
    connect?: UserWhereUniqueInput;
  };

  export type LeagueCreateNestedOneWithoutMembersInput = {
    create?: XOR<LeagueCreateWithoutMembersInput, LeagueUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: LeagueCreateOrConnectWithoutMembersInput;
    connect?: LeagueWhereUniqueInput;
  };

  export type RosterCreateNestedManyWithoutMemberInput = {
    create?:
      | XOR<RosterCreateWithoutMemberInput, RosterUncheckedCreateWithoutMemberInput>
      | RosterCreateWithoutMemberInput[]
      | RosterUncheckedCreateWithoutMemberInput[];
    connectOrCreate?:
      | RosterCreateOrConnectWithoutMemberInput
      | RosterCreateOrConnectWithoutMemberInput[];
    createMany?: RosterCreateManyMemberInputEnvelope;
    connect?: RosterWhereUniqueInput | RosterWhereUniqueInput[];
  };

  export type RosterUncheckedCreateNestedManyWithoutMemberInput = {
    create?:
      | XOR<RosterCreateWithoutMemberInput, RosterUncheckedCreateWithoutMemberInput>
      | RosterCreateWithoutMemberInput[]
      | RosterUncheckedCreateWithoutMemberInput[];
    connectOrCreate?:
      | RosterCreateOrConnectWithoutMemberInput
      | RosterCreateOrConnectWithoutMemberInput[];
    createMany?: RosterCreateManyMemberInputEnvelope;
    connect?: RosterWhereUniqueInput | RosterWhereUniqueInput[];
  };

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string;
    increment?: Decimal | DecimalJsLike | number | string;
    decrement?: Decimal | DecimalJsLike | number | string;
    multiply?: Decimal | DecimalJsLike | number | string;
    divide?: Decimal | DecimalJsLike | number | string;
  };

  export type UserUpdateOneRequiredWithoutLeagueMembershipsNestedInput = {
    create?: XOR<
      UserCreateWithoutLeagueMembershipsInput,
      UserUncheckedCreateWithoutLeagueMembershipsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutLeagueMembershipsInput;
    upsert?: UserUpsertWithoutLeagueMembershipsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutLeagueMembershipsInput,
        UserUpdateWithoutLeagueMembershipsInput
      >,
      UserUncheckedUpdateWithoutLeagueMembershipsInput
    >;
  };

  export type LeagueUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<LeagueCreateWithoutMembersInput, LeagueUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: LeagueCreateOrConnectWithoutMembersInput;
    upsert?: LeagueUpsertWithoutMembersInput;
    connect?: LeagueWhereUniqueInput;
    update?: XOR<
      XOR<LeagueUpdateToOneWithWhereWithoutMembersInput, LeagueUpdateWithoutMembersInput>,
      LeagueUncheckedUpdateWithoutMembersInput
    >;
  };

  export type RosterUpdateManyWithoutMemberNestedInput = {
    create?:
      | XOR<RosterCreateWithoutMemberInput, RosterUncheckedCreateWithoutMemberInput>
      | RosterCreateWithoutMemberInput[]
      | RosterUncheckedCreateWithoutMemberInput[];
    connectOrCreate?:
      | RosterCreateOrConnectWithoutMemberInput
      | RosterCreateOrConnectWithoutMemberInput[];
    upsert?:
      | RosterUpsertWithWhereUniqueWithoutMemberInput
      | RosterUpsertWithWhereUniqueWithoutMemberInput[];
    createMany?: RosterCreateManyMemberInputEnvelope;
    set?: RosterWhereUniqueInput | RosterWhereUniqueInput[];
    disconnect?: RosterWhereUniqueInput | RosterWhereUniqueInput[];
    delete?: RosterWhereUniqueInput | RosterWhereUniqueInput[];
    connect?: RosterWhereUniqueInput | RosterWhereUniqueInput[];
    update?:
      | RosterUpdateWithWhereUniqueWithoutMemberInput
      | RosterUpdateWithWhereUniqueWithoutMemberInput[];
    updateMany?:
      | RosterUpdateManyWithWhereWithoutMemberInput
      | RosterUpdateManyWithWhereWithoutMemberInput[];
    deleteMany?: RosterScalarWhereInput | RosterScalarWhereInput[];
  };

  export type RosterUncheckedUpdateManyWithoutMemberNestedInput = {
    create?:
      | XOR<RosterCreateWithoutMemberInput, RosterUncheckedCreateWithoutMemberInput>
      | RosterCreateWithoutMemberInput[]
      | RosterUncheckedCreateWithoutMemberInput[];
    connectOrCreate?:
      | RosterCreateOrConnectWithoutMemberInput
      | RosterCreateOrConnectWithoutMemberInput[];
    upsert?:
      | RosterUpsertWithWhereUniqueWithoutMemberInput
      | RosterUpsertWithWhereUniqueWithoutMemberInput[];
    createMany?: RosterCreateManyMemberInputEnvelope;
    set?: RosterWhereUniqueInput | RosterWhereUniqueInput[];
    disconnect?: RosterWhereUniqueInput | RosterWhereUniqueInput[];
    delete?: RosterWhereUniqueInput | RosterWhereUniqueInput[];
    connect?: RosterWhereUniqueInput | RosterWhereUniqueInput[];
    update?:
      | RosterUpdateWithWhereUniqueWithoutMemberInput
      | RosterUpdateWithWhereUniqueWithoutMemberInput[];
    updateMany?:
      | RosterUpdateManyWithWhereWithoutMemberInput
      | RosterUpdateManyWithWhereWithoutMemberInput[];
    deleteMany?: RosterScalarWhereInput | RosterScalarWhereInput[];
  };

  export type RosterPlayerCreateNestedManyWithoutPlayerInput = {
    create?:
      | XOR<RosterPlayerCreateWithoutPlayerInput, RosterPlayerUncheckedCreateWithoutPlayerInput>
      | RosterPlayerCreateWithoutPlayerInput[]
      | RosterPlayerUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?:
      | RosterPlayerCreateOrConnectWithoutPlayerInput
      | RosterPlayerCreateOrConnectWithoutPlayerInput[];
    createMany?: RosterPlayerCreateManyPlayerInputEnvelope;
    connect?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[];
  };

  export type RosterPlayerUncheckedCreateNestedManyWithoutPlayerInput = {
    create?:
      | XOR<RosterPlayerCreateWithoutPlayerInput, RosterPlayerUncheckedCreateWithoutPlayerInput>
      | RosterPlayerCreateWithoutPlayerInput[]
      | RosterPlayerUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?:
      | RosterPlayerCreateOrConnectWithoutPlayerInput
      | RosterPlayerCreateOrConnectWithoutPlayerInput[];
    createMany?: RosterPlayerCreateManyPlayerInputEnvelope;
    connect?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[];
  };

  export type EnumPositionFieldUpdateOperationsInput = {
    set?: $Enums.Position;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type EnumPlayerStatusFieldUpdateOperationsInput = {
    set?: $Enums.PlayerStatus;
  };

  export type RosterPlayerUpdateManyWithoutPlayerNestedInput = {
    create?:
      | XOR<RosterPlayerCreateWithoutPlayerInput, RosterPlayerUncheckedCreateWithoutPlayerInput>
      | RosterPlayerCreateWithoutPlayerInput[]
      | RosterPlayerUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?:
      | RosterPlayerCreateOrConnectWithoutPlayerInput
      | RosterPlayerCreateOrConnectWithoutPlayerInput[];
    upsert?:
      | RosterPlayerUpsertWithWhereUniqueWithoutPlayerInput
      | RosterPlayerUpsertWithWhereUniqueWithoutPlayerInput[];
    createMany?: RosterPlayerCreateManyPlayerInputEnvelope;
    set?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[];
    disconnect?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[];
    delete?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[];
    connect?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[];
    update?:
      | RosterPlayerUpdateWithWhereUniqueWithoutPlayerInput
      | RosterPlayerUpdateWithWhereUniqueWithoutPlayerInput[];
    updateMany?:
      | RosterPlayerUpdateManyWithWhereWithoutPlayerInput
      | RosterPlayerUpdateManyWithWhereWithoutPlayerInput[];
    deleteMany?: RosterPlayerScalarWhereInput | RosterPlayerScalarWhereInput[];
  };

  export type RosterPlayerUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?:
      | XOR<RosterPlayerCreateWithoutPlayerInput, RosterPlayerUncheckedCreateWithoutPlayerInput>
      | RosterPlayerCreateWithoutPlayerInput[]
      | RosterPlayerUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?:
      | RosterPlayerCreateOrConnectWithoutPlayerInput
      | RosterPlayerCreateOrConnectWithoutPlayerInput[];
    upsert?:
      | RosterPlayerUpsertWithWhereUniqueWithoutPlayerInput
      | RosterPlayerUpsertWithWhereUniqueWithoutPlayerInput[];
    createMany?: RosterPlayerCreateManyPlayerInputEnvelope;
    set?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[];
    disconnect?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[];
    delete?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[];
    connect?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[];
    update?:
      | RosterPlayerUpdateWithWhereUniqueWithoutPlayerInput
      | RosterPlayerUpdateWithWhereUniqueWithoutPlayerInput[];
    updateMany?:
      | RosterPlayerUpdateManyWithWhereWithoutPlayerInput
      | RosterPlayerUpdateManyWithWhereWithoutPlayerInput[];
    deleteMany?: RosterPlayerScalarWhereInput | RosterPlayerScalarWhereInput[];
  };

  export type LeagueCreateNestedOneWithoutRostersInput = {
    create?: XOR<LeagueCreateWithoutRostersInput, LeagueUncheckedCreateWithoutRostersInput>;
    connectOrCreate?: LeagueCreateOrConnectWithoutRostersInput;
    connect?: LeagueWhereUniqueInput;
  };

  export type LeagueMemberCreateNestedOneWithoutRostersInput = {
    create?: XOR<
      LeagueMemberCreateWithoutRostersInput,
      LeagueMemberUncheckedCreateWithoutRostersInput
    >;
    connectOrCreate?: LeagueMemberCreateOrConnectWithoutRostersInput;
    connect?: LeagueMemberWhereUniqueInput;
  };

  export type RosterPlayerCreateNestedManyWithoutRosterInput = {
    create?:
      | XOR<RosterPlayerCreateWithoutRosterInput, RosterPlayerUncheckedCreateWithoutRosterInput>
      | RosterPlayerCreateWithoutRosterInput[]
      | RosterPlayerUncheckedCreateWithoutRosterInput[];
    connectOrCreate?:
      | RosterPlayerCreateOrConnectWithoutRosterInput
      | RosterPlayerCreateOrConnectWithoutRosterInput[];
    createMany?: RosterPlayerCreateManyRosterInputEnvelope;
    connect?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[];
  };

  export type RosterPlayerUncheckedCreateNestedManyWithoutRosterInput = {
    create?:
      | XOR<RosterPlayerCreateWithoutRosterInput, RosterPlayerUncheckedCreateWithoutRosterInput>
      | RosterPlayerCreateWithoutRosterInput[]
      | RosterPlayerUncheckedCreateWithoutRosterInput[];
    connectOrCreate?:
      | RosterPlayerCreateOrConnectWithoutRosterInput
      | RosterPlayerCreateOrConnectWithoutRosterInput[];
    createMany?: RosterPlayerCreateManyRosterInputEnvelope;
    connect?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[];
  };

  export type LeagueUpdateOneRequiredWithoutRostersNestedInput = {
    create?: XOR<LeagueCreateWithoutRostersInput, LeagueUncheckedCreateWithoutRostersInput>;
    connectOrCreate?: LeagueCreateOrConnectWithoutRostersInput;
    upsert?: LeagueUpsertWithoutRostersInput;
    connect?: LeagueWhereUniqueInput;
    update?: XOR<
      XOR<LeagueUpdateToOneWithWhereWithoutRostersInput, LeagueUpdateWithoutRostersInput>,
      LeagueUncheckedUpdateWithoutRostersInput
    >;
  };

  export type LeagueMemberUpdateOneRequiredWithoutRostersNestedInput = {
    create?: XOR<
      LeagueMemberCreateWithoutRostersInput,
      LeagueMemberUncheckedCreateWithoutRostersInput
    >;
    connectOrCreate?: LeagueMemberCreateOrConnectWithoutRostersInput;
    upsert?: LeagueMemberUpsertWithoutRostersInput;
    connect?: LeagueMemberWhereUniqueInput;
    update?: XOR<
      XOR<
        LeagueMemberUpdateToOneWithWhereWithoutRostersInput,
        LeagueMemberUpdateWithoutRostersInput
      >,
      LeagueMemberUncheckedUpdateWithoutRostersInput
    >;
  };

  export type RosterPlayerUpdateManyWithoutRosterNestedInput = {
    create?:
      | XOR<RosterPlayerCreateWithoutRosterInput, RosterPlayerUncheckedCreateWithoutRosterInput>
      | RosterPlayerCreateWithoutRosterInput[]
      | RosterPlayerUncheckedCreateWithoutRosterInput[];
    connectOrCreate?:
      | RosterPlayerCreateOrConnectWithoutRosterInput
      | RosterPlayerCreateOrConnectWithoutRosterInput[];
    upsert?:
      | RosterPlayerUpsertWithWhereUniqueWithoutRosterInput
      | RosterPlayerUpsertWithWhereUniqueWithoutRosterInput[];
    createMany?: RosterPlayerCreateManyRosterInputEnvelope;
    set?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[];
    disconnect?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[];
    delete?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[];
    connect?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[];
    update?:
      | RosterPlayerUpdateWithWhereUniqueWithoutRosterInput
      | RosterPlayerUpdateWithWhereUniqueWithoutRosterInput[];
    updateMany?:
      | RosterPlayerUpdateManyWithWhereWithoutRosterInput
      | RosterPlayerUpdateManyWithWhereWithoutRosterInput[];
    deleteMany?: RosterPlayerScalarWhereInput | RosterPlayerScalarWhereInput[];
  };

  export type RosterPlayerUncheckedUpdateManyWithoutRosterNestedInput = {
    create?:
      | XOR<RosterPlayerCreateWithoutRosterInput, RosterPlayerUncheckedCreateWithoutRosterInput>
      | RosterPlayerCreateWithoutRosterInput[]
      | RosterPlayerUncheckedCreateWithoutRosterInput[];
    connectOrCreate?:
      | RosterPlayerCreateOrConnectWithoutRosterInput
      | RosterPlayerCreateOrConnectWithoutRosterInput[];
    upsert?:
      | RosterPlayerUpsertWithWhereUniqueWithoutRosterInput
      | RosterPlayerUpsertWithWhereUniqueWithoutRosterInput[];
    createMany?: RosterPlayerCreateManyRosterInputEnvelope;
    set?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[];
    disconnect?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[];
    delete?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[];
    connect?: RosterPlayerWhereUniqueInput | RosterPlayerWhereUniqueInput[];
    update?:
      | RosterPlayerUpdateWithWhereUniqueWithoutRosterInput
      | RosterPlayerUpdateWithWhereUniqueWithoutRosterInput[];
    updateMany?:
      | RosterPlayerUpdateManyWithWhereWithoutRosterInput
      | RosterPlayerUpdateManyWithWhereWithoutRosterInput[];
    deleteMany?: RosterPlayerScalarWhereInput | RosterPlayerScalarWhereInput[];
  };

  export type RosterCreateNestedOneWithoutPlayersInput = {
    create?: XOR<RosterCreateWithoutPlayersInput, RosterUncheckedCreateWithoutPlayersInput>;
    connectOrCreate?: RosterCreateOrConnectWithoutPlayersInput;
    connect?: RosterWhereUniqueInput;
  };

  export type PlayerCreateNestedOneWithoutRosterPlayersInput = {
    create?: XOR<
      PlayerCreateWithoutRosterPlayersInput,
      PlayerUncheckedCreateWithoutRosterPlayersInput
    >;
    connectOrCreate?: PlayerCreateOrConnectWithoutRosterPlayersInput;
    connect?: PlayerWhereUniqueInput;
  };

  export type EnumRosterSlotFieldUpdateOperationsInput = {
    set?: $Enums.RosterSlot;
  };

  export type RosterUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<RosterCreateWithoutPlayersInput, RosterUncheckedCreateWithoutPlayersInput>;
    connectOrCreate?: RosterCreateOrConnectWithoutPlayersInput;
    upsert?: RosterUpsertWithoutPlayersInput;
    connect?: RosterWhereUniqueInput;
    update?: XOR<
      XOR<RosterUpdateToOneWithWhereWithoutPlayersInput, RosterUpdateWithoutPlayersInput>,
      RosterUncheckedUpdateWithoutPlayersInput
    >;
  };

  export type PlayerUpdateOneRequiredWithoutRosterPlayersNestedInput = {
    create?: XOR<
      PlayerCreateWithoutRosterPlayersInput,
      PlayerUncheckedCreateWithoutRosterPlayersInput
    >;
    connectOrCreate?: PlayerCreateOrConnectWithoutRosterPlayersInput;
    upsert?: PlayerUpsertWithoutRosterPlayersInput;
    connect?: PlayerWhereUniqueInput;
    update?: XOR<
      XOR<
        PlayerUpdateToOneWithWhereWithoutRosterPlayersInput,
        PlayerUpdateWithoutRosterPlayersInput
      >,
      PlayerUncheckedUpdateWithoutRosterPlayersInput
    >;
  };

  export type LeagueCreateNestedOneWithoutMatchupsInput = {
    create?: XOR<LeagueCreateWithoutMatchupsInput, LeagueUncheckedCreateWithoutMatchupsInput>;
    connectOrCreate?: LeagueCreateOrConnectWithoutMatchupsInput;
    connect?: LeagueWhereUniqueInput;
  };

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null;
    increment?: Decimal | DecimalJsLike | number | string;
    decrement?: Decimal | DecimalJsLike | number | string;
    multiply?: Decimal | DecimalJsLike | number | string;
    divide?: Decimal | DecimalJsLike | number | string;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type EnumMatchupTypeFieldUpdateOperationsInput = {
    set?: $Enums.MatchupType;
  };

  export type LeagueUpdateOneRequiredWithoutMatchupsNestedInput = {
    create?: XOR<LeagueCreateWithoutMatchupsInput, LeagueUncheckedCreateWithoutMatchupsInput>;
    connectOrCreate?: LeagueCreateOrConnectWithoutMatchupsInput;
    upsert?: LeagueUpsertWithoutMatchupsInput;
    connect?: LeagueWhereUniqueInput;
    update?: XOR<
      XOR<LeagueUpdateToOneWithWhereWithoutMatchupsInput, LeagueUpdateWithoutMatchupsInput>,
      LeagueUncheckedUpdateWithoutMatchupsInput
    >;
  };

  export type LeagueCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<
      LeagueCreateWithoutTransactionsInput,
      LeagueUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: LeagueCreateOrConnectWithoutTransactionsInput;
    connect?: LeagueWhereUniqueInput;
  };

  export type TransactionAddCreateNestedManyWithoutTransactionInput = {
    create?:
      | XOR<
          TransactionAddCreateWithoutTransactionInput,
          TransactionAddUncheckedCreateWithoutTransactionInput
        >
      | TransactionAddCreateWithoutTransactionInput[]
      | TransactionAddUncheckedCreateWithoutTransactionInput[];
    connectOrCreate?:
      | TransactionAddCreateOrConnectWithoutTransactionInput
      | TransactionAddCreateOrConnectWithoutTransactionInput[];
    createMany?: TransactionAddCreateManyTransactionInputEnvelope;
    connect?: TransactionAddWhereUniqueInput | TransactionAddWhereUniqueInput[];
  };

  export type TransactionDropCreateNestedManyWithoutTransactionInput = {
    create?:
      | XOR<
          TransactionDropCreateWithoutTransactionInput,
          TransactionDropUncheckedCreateWithoutTransactionInput
        >
      | TransactionDropCreateWithoutTransactionInput[]
      | TransactionDropUncheckedCreateWithoutTransactionInput[];
    connectOrCreate?:
      | TransactionDropCreateOrConnectWithoutTransactionInput
      | TransactionDropCreateOrConnectWithoutTransactionInput[];
    createMany?: TransactionDropCreateManyTransactionInputEnvelope;
    connect?: TransactionDropWhereUniqueInput | TransactionDropWhereUniqueInput[];
  };

  export type TransactionAddUncheckedCreateNestedManyWithoutTransactionInput = {
    create?:
      | XOR<
          TransactionAddCreateWithoutTransactionInput,
          TransactionAddUncheckedCreateWithoutTransactionInput
        >
      | TransactionAddCreateWithoutTransactionInput[]
      | TransactionAddUncheckedCreateWithoutTransactionInput[];
    connectOrCreate?:
      | TransactionAddCreateOrConnectWithoutTransactionInput
      | TransactionAddCreateOrConnectWithoutTransactionInput[];
    createMany?: TransactionAddCreateManyTransactionInputEnvelope;
    connect?: TransactionAddWhereUniqueInput | TransactionAddWhereUniqueInput[];
  };

  export type TransactionDropUncheckedCreateNestedManyWithoutTransactionInput = {
    create?:
      | XOR<
          TransactionDropCreateWithoutTransactionInput,
          TransactionDropUncheckedCreateWithoutTransactionInput
        >
      | TransactionDropCreateWithoutTransactionInput[]
      | TransactionDropUncheckedCreateWithoutTransactionInput[];
    connectOrCreate?:
      | TransactionDropCreateOrConnectWithoutTransactionInput
      | TransactionDropCreateOrConnectWithoutTransactionInput[];
    createMany?: TransactionDropCreateManyTransactionInputEnvelope;
    connect?: TransactionDropWhereUniqueInput | TransactionDropWhereUniqueInput[];
  };

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType;
  };

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus;
  };

  export type LeagueUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<
      LeagueCreateWithoutTransactionsInput,
      LeagueUncheckedCreateWithoutTransactionsInput
    >;
    connectOrCreate?: LeagueCreateOrConnectWithoutTransactionsInput;
    upsert?: LeagueUpsertWithoutTransactionsInput;
    connect?: LeagueWhereUniqueInput;
    update?: XOR<
      XOR<LeagueUpdateToOneWithWhereWithoutTransactionsInput, LeagueUpdateWithoutTransactionsInput>,
      LeagueUncheckedUpdateWithoutTransactionsInput
    >;
  };

  export type TransactionAddUpdateManyWithoutTransactionNestedInput = {
    create?:
      | XOR<
          TransactionAddCreateWithoutTransactionInput,
          TransactionAddUncheckedCreateWithoutTransactionInput
        >
      | TransactionAddCreateWithoutTransactionInput[]
      | TransactionAddUncheckedCreateWithoutTransactionInput[];
    connectOrCreate?:
      | TransactionAddCreateOrConnectWithoutTransactionInput
      | TransactionAddCreateOrConnectWithoutTransactionInput[];
    upsert?:
      | TransactionAddUpsertWithWhereUniqueWithoutTransactionInput
      | TransactionAddUpsertWithWhereUniqueWithoutTransactionInput[];
    createMany?: TransactionAddCreateManyTransactionInputEnvelope;
    set?: TransactionAddWhereUniqueInput | TransactionAddWhereUniqueInput[];
    disconnect?: TransactionAddWhereUniqueInput | TransactionAddWhereUniqueInput[];
    delete?: TransactionAddWhereUniqueInput | TransactionAddWhereUniqueInput[];
    connect?: TransactionAddWhereUniqueInput | TransactionAddWhereUniqueInput[];
    update?:
      | TransactionAddUpdateWithWhereUniqueWithoutTransactionInput
      | TransactionAddUpdateWithWhereUniqueWithoutTransactionInput[];
    updateMany?:
      | TransactionAddUpdateManyWithWhereWithoutTransactionInput
      | TransactionAddUpdateManyWithWhereWithoutTransactionInput[];
    deleteMany?: TransactionAddScalarWhereInput | TransactionAddScalarWhereInput[];
  };

  export type TransactionDropUpdateManyWithoutTransactionNestedInput = {
    create?:
      | XOR<
          TransactionDropCreateWithoutTransactionInput,
          TransactionDropUncheckedCreateWithoutTransactionInput
        >
      | TransactionDropCreateWithoutTransactionInput[]
      | TransactionDropUncheckedCreateWithoutTransactionInput[];
    connectOrCreate?:
      | TransactionDropCreateOrConnectWithoutTransactionInput
      | TransactionDropCreateOrConnectWithoutTransactionInput[];
    upsert?:
      | TransactionDropUpsertWithWhereUniqueWithoutTransactionInput
      | TransactionDropUpsertWithWhereUniqueWithoutTransactionInput[];
    createMany?: TransactionDropCreateManyTransactionInputEnvelope;
    set?: TransactionDropWhereUniqueInput | TransactionDropWhereUniqueInput[];
    disconnect?: TransactionDropWhereUniqueInput | TransactionDropWhereUniqueInput[];
    delete?: TransactionDropWhereUniqueInput | TransactionDropWhereUniqueInput[];
    connect?: TransactionDropWhereUniqueInput | TransactionDropWhereUniqueInput[];
    update?:
      | TransactionDropUpdateWithWhereUniqueWithoutTransactionInput
      | TransactionDropUpdateWithWhereUniqueWithoutTransactionInput[];
    updateMany?:
      | TransactionDropUpdateManyWithWhereWithoutTransactionInput
      | TransactionDropUpdateManyWithWhereWithoutTransactionInput[];
    deleteMany?: TransactionDropScalarWhereInput | TransactionDropScalarWhereInput[];
  };

  export type TransactionAddUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?:
      | XOR<
          TransactionAddCreateWithoutTransactionInput,
          TransactionAddUncheckedCreateWithoutTransactionInput
        >
      | TransactionAddCreateWithoutTransactionInput[]
      | TransactionAddUncheckedCreateWithoutTransactionInput[];
    connectOrCreate?:
      | TransactionAddCreateOrConnectWithoutTransactionInput
      | TransactionAddCreateOrConnectWithoutTransactionInput[];
    upsert?:
      | TransactionAddUpsertWithWhereUniqueWithoutTransactionInput
      | TransactionAddUpsertWithWhereUniqueWithoutTransactionInput[];
    createMany?: TransactionAddCreateManyTransactionInputEnvelope;
    set?: TransactionAddWhereUniqueInput | TransactionAddWhereUniqueInput[];
    disconnect?: TransactionAddWhereUniqueInput | TransactionAddWhereUniqueInput[];
    delete?: TransactionAddWhereUniqueInput | TransactionAddWhereUniqueInput[];
    connect?: TransactionAddWhereUniqueInput | TransactionAddWhereUniqueInput[];
    update?:
      | TransactionAddUpdateWithWhereUniqueWithoutTransactionInput
      | TransactionAddUpdateWithWhereUniqueWithoutTransactionInput[];
    updateMany?:
      | TransactionAddUpdateManyWithWhereWithoutTransactionInput
      | TransactionAddUpdateManyWithWhereWithoutTransactionInput[];
    deleteMany?: TransactionAddScalarWhereInput | TransactionAddScalarWhereInput[];
  };

  export type TransactionDropUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?:
      | XOR<
          TransactionDropCreateWithoutTransactionInput,
          TransactionDropUncheckedCreateWithoutTransactionInput
        >
      | TransactionDropCreateWithoutTransactionInput[]
      | TransactionDropUncheckedCreateWithoutTransactionInput[];
    connectOrCreate?:
      | TransactionDropCreateOrConnectWithoutTransactionInput
      | TransactionDropCreateOrConnectWithoutTransactionInput[];
    upsert?:
      | TransactionDropUpsertWithWhereUniqueWithoutTransactionInput
      | TransactionDropUpsertWithWhereUniqueWithoutTransactionInput[];
    createMany?: TransactionDropCreateManyTransactionInputEnvelope;
    set?: TransactionDropWhereUniqueInput | TransactionDropWhereUniqueInput[];
    disconnect?: TransactionDropWhereUniqueInput | TransactionDropWhereUniqueInput[];
    delete?: TransactionDropWhereUniqueInput | TransactionDropWhereUniqueInput[];
    connect?: TransactionDropWhereUniqueInput | TransactionDropWhereUniqueInput[];
    update?:
      | TransactionDropUpdateWithWhereUniqueWithoutTransactionInput
      | TransactionDropUpdateWithWhereUniqueWithoutTransactionInput[];
    updateMany?:
      | TransactionDropUpdateManyWithWhereWithoutTransactionInput
      | TransactionDropUpdateManyWithWhereWithoutTransactionInput[];
    deleteMany?: TransactionDropScalarWhereInput | TransactionDropScalarWhereInput[];
  };

  export type TransactionCreateNestedOneWithoutAddsInput = {
    create?: XOR<TransactionCreateWithoutAddsInput, TransactionUncheckedCreateWithoutAddsInput>;
    connectOrCreate?: TransactionCreateOrConnectWithoutAddsInput;
    connect?: TransactionWhereUniqueInput;
  };

  export type TransactionUpdateOneRequiredWithoutAddsNestedInput = {
    create?: XOR<TransactionCreateWithoutAddsInput, TransactionUncheckedCreateWithoutAddsInput>;
    connectOrCreate?: TransactionCreateOrConnectWithoutAddsInput;
    upsert?: TransactionUpsertWithoutAddsInput;
    connect?: TransactionWhereUniqueInput;
    update?: XOR<
      XOR<TransactionUpdateToOneWithWhereWithoutAddsInput, TransactionUpdateWithoutAddsInput>,
      TransactionUncheckedUpdateWithoutAddsInput
    >;
  };

  export type TransactionCreateNestedOneWithoutDropsInput = {
    create?: XOR<TransactionCreateWithoutDropsInput, TransactionUncheckedCreateWithoutDropsInput>;
    connectOrCreate?: TransactionCreateOrConnectWithoutDropsInput;
    connect?: TransactionWhereUniqueInput;
  };

  export type TransactionUpdateOneRequiredWithoutDropsNestedInput = {
    create?: XOR<TransactionCreateWithoutDropsInput, TransactionUncheckedCreateWithoutDropsInput>;
    connectOrCreate?: TransactionCreateOrConnectWithoutDropsInput;
    upsert?: TransactionUpsertWithoutDropsInput;
    connect?: TransactionWhereUniqueInput;
    update?: XOR<
      XOR<TransactionUpdateToOneWithWhereWithoutDropsInput, TransactionUpdateWithoutDropsInput>,
      TransactionUncheckedUpdateWithoutDropsInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>;
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>;
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedEnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>;
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>;
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPlatformFilter<$PrismaModel>;
    _max?: NestedEnumPlatformFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedEnumLeagueTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeagueType | EnumLeagueTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LeagueType[] | ListEnumLeagueTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LeagueType[] | ListEnumLeagueTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumLeagueTypeFilter<$PrismaModel> | $Enums.LeagueType;
  };

  export type NestedEnumScoringFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.ScoringFormat | EnumScoringFormatFieldRefInput<$PrismaModel>;
    in?: $Enums.ScoringFormat[] | ListEnumScoringFormatFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ScoringFormat[] | ListEnumScoringFormatFieldRefInput<$PrismaModel>;
    not?: NestedEnumScoringFormatFilter<$PrismaModel> | $Enums.ScoringFormat;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedEnumLeagueTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeagueType | EnumLeagueTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.LeagueType[] | ListEnumLeagueTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.LeagueType[] | ListEnumLeagueTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumLeagueTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeagueType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumLeagueTypeFilter<$PrismaModel>;
    _max?: NestedEnumLeagueTypeFilter<$PrismaModel>;
  };

  export type NestedEnumScoringFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScoringFormat | EnumScoringFormatFieldRefInput<$PrismaModel>;
    in?: $Enums.ScoringFormat[] | ListEnumScoringFormatFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ScoringFormat[] | ListEnumScoringFormatFieldRefInput<$PrismaModel>;
    not?: NestedEnumScoringFormatWithAggregatesFilter<$PrismaModel> | $Enums.ScoringFormat;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumScoringFormatFilter<$PrismaModel>;
    _max?: NestedEnumScoringFormatFilter<$PrismaModel>;
  };

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string;
  };

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type NestedEnumPositionFilter<$PrismaModel = never> = {
    equals?: $Enums.Position | EnumPositionFieldRefInput<$PrismaModel>;
    in?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>;
    not?: NestedEnumPositionFilter<$PrismaModel> | $Enums.Position;
  };

  export type NestedEnumPlayerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerStatus | EnumPlayerStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PlayerStatus[] | ListEnumPlayerStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlayerStatus[] | ListEnumPlayerStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumPlayerStatusFilter<$PrismaModel> | $Enums.PlayerStatus;
  };

  export type NestedEnumPositionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Position | EnumPositionFieldRefInput<$PrismaModel>;
    in?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>;
    not?: NestedEnumPositionWithAggregatesFilter<$PrismaModel> | $Enums.Position;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPositionFilter<$PrismaModel>;
    _max?: NestedEnumPositionFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumPlayerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerStatus | EnumPlayerStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.PlayerStatus[] | ListEnumPlayerStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PlayerStatus[] | ListEnumPlayerStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumPlayerStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlayerStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPlayerStatusFilter<$PrismaModel>;
    _max?: NestedEnumPlayerStatusFilter<$PrismaModel>;
  };

  export type NestedEnumRosterSlotFilter<$PrismaModel = never> = {
    equals?: $Enums.RosterSlot | EnumRosterSlotFieldRefInput<$PrismaModel>;
    in?: $Enums.RosterSlot[] | ListEnumRosterSlotFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RosterSlot[] | ListEnumRosterSlotFieldRefInput<$PrismaModel>;
    not?: NestedEnumRosterSlotFilter<$PrismaModel> | $Enums.RosterSlot;
  };

  export type NestedEnumRosterSlotWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RosterSlot | EnumRosterSlotFieldRefInput<$PrismaModel>;
    in?: $Enums.RosterSlot[] | ListEnumRosterSlotFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RosterSlot[] | ListEnumRosterSlotFieldRefInput<$PrismaModel>;
    not?: NestedEnumRosterSlotWithAggregatesFilter<$PrismaModel> | $Enums.RosterSlot;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRosterSlotFilter<$PrismaModel>;
    _max?: NestedEnumRosterSlotFilter<$PrismaModel>;
  };

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalNullableFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedEnumMatchupTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchupType | EnumMatchupTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MatchupType[] | ListEnumMatchupTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MatchupType[] | ListEnumMatchupTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumMatchupTypeFilter<$PrismaModel> | $Enums.MatchupType;
  };

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>
      | null;
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalNullableWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: NestedDecimalNullableFilter<$PrismaModel>;
    _min?: NestedDecimalNullableFilter<$PrismaModel>;
    _max?: NestedDecimalNullableFilter<$PrismaModel>;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedEnumMatchupTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchupType | EnumMatchupTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.MatchupType[] | ListEnumMatchupTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MatchupType[] | ListEnumMatchupTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumMatchupTypeWithAggregatesFilter<$PrismaModel> | $Enums.MatchupType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumMatchupTypeFilter<$PrismaModel>;
    _max?: NestedEnumMatchupTypeFilter<$PrismaModel>;
  };

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType;
  };

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus;
  };

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>;
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>;
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>;
  };

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>;
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>;
  };
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonNullableFilterBase<$PrismaModel>>,
          Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
    path?: string[];
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>;
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter;
  };

  export type PlatformAccountCreateWithoutUserInput = {
    id?: string;
    platform: $Enums.Platform;
    platformId: string;
    username?: string | null;
    avatarUrl?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PlatformAccountUncheckedCreateWithoutUserInput = {
    id?: string;
    platform: $Enums.Platform;
    platformId: string;
    username?: string | null;
    avatarUrl?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PlatformAccountCreateOrConnectWithoutUserInput = {
    where: PlatformAccountWhereUniqueInput;
    create: XOR<
      PlatformAccountCreateWithoutUserInput,
      PlatformAccountUncheckedCreateWithoutUserInput
    >;
  };

  export type PlatformAccountCreateManyUserInputEnvelope = {
    data: PlatformAccountCreateManyUserInput | PlatformAccountCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type LeagueMemberCreateWithoutUserInput = {
    id?: string;
    teamName?: string | null;
    teamAvatar?: string | null;
    rosterSlot: number;
    wins?: number;
    losses?: number;
    ties?: number;
    pointsFor?: Decimal | DecimalJsLike | number | string;
    pointsAgainst?: Decimal | DecimalJsLike | number | string;
    league: LeagueCreateNestedOneWithoutMembersInput;
    rosters?: RosterCreateNestedManyWithoutMemberInput;
  };

  export type LeagueMemberUncheckedCreateWithoutUserInput = {
    id?: string;
    leagueId: string;
    teamName?: string | null;
    teamAvatar?: string | null;
    rosterSlot: number;
    wins?: number;
    losses?: number;
    ties?: number;
    pointsFor?: Decimal | DecimalJsLike | number | string;
    pointsAgainst?: Decimal | DecimalJsLike | number | string;
    rosters?: RosterUncheckedCreateNestedManyWithoutMemberInput;
  };

  export type LeagueMemberCreateOrConnectWithoutUserInput = {
    where: LeagueMemberWhereUniqueInput;
    create: XOR<LeagueMemberCreateWithoutUserInput, LeagueMemberUncheckedCreateWithoutUserInput>;
  };

  export type LeagueMemberCreateManyUserInputEnvelope = {
    data: LeagueMemberCreateManyUserInput | LeagueMemberCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type PlatformAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: PlatformAccountWhereUniqueInput;
    update: XOR<
      PlatformAccountUpdateWithoutUserInput,
      PlatformAccountUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      PlatformAccountCreateWithoutUserInput,
      PlatformAccountUncheckedCreateWithoutUserInput
    >;
  };

  export type PlatformAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: PlatformAccountWhereUniqueInput;
    data: XOR<
      PlatformAccountUpdateWithoutUserInput,
      PlatformAccountUncheckedUpdateWithoutUserInput
    >;
  };

  export type PlatformAccountUpdateManyWithWhereWithoutUserInput = {
    where: PlatformAccountScalarWhereInput;
    data: XOR<
      PlatformAccountUpdateManyMutationInput,
      PlatformAccountUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type PlatformAccountScalarWhereInput = {
    AND?: PlatformAccountScalarWhereInput | PlatformAccountScalarWhereInput[];
    OR?: PlatformAccountScalarWhereInput[];
    NOT?: PlatformAccountScalarWhereInput | PlatformAccountScalarWhereInput[];
    id?: StringFilter<'PlatformAccount'> | string;
    userId?: StringFilter<'PlatformAccount'> | string;
    platform?: EnumPlatformFilter<'PlatformAccount'> | $Enums.Platform;
    platformId?: StringFilter<'PlatformAccount'> | string;
    username?: StringNullableFilter<'PlatformAccount'> | string | null;
    avatarUrl?: StringNullableFilter<'PlatformAccount'> | string | null;
    accessToken?: StringNullableFilter<'PlatformAccount'> | string | null;
    refreshToken?: StringNullableFilter<'PlatformAccount'> | string | null;
    expiresAt?: DateTimeNullableFilter<'PlatformAccount'> | Date | string | null;
    createdAt?: DateTimeFilter<'PlatformAccount'> | Date | string;
    updatedAt?: DateTimeFilter<'PlatformAccount'> | Date | string;
  };

  export type LeagueMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: LeagueMemberWhereUniqueInput;
    update: XOR<LeagueMemberUpdateWithoutUserInput, LeagueMemberUncheckedUpdateWithoutUserInput>;
    create: XOR<LeagueMemberCreateWithoutUserInput, LeagueMemberUncheckedCreateWithoutUserInput>;
  };

  export type LeagueMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: LeagueMemberWhereUniqueInput;
    data: XOR<LeagueMemberUpdateWithoutUserInput, LeagueMemberUncheckedUpdateWithoutUserInput>;
  };

  export type LeagueMemberUpdateManyWithWhereWithoutUserInput = {
    where: LeagueMemberScalarWhereInput;
    data: XOR<LeagueMemberUpdateManyMutationInput, LeagueMemberUncheckedUpdateManyWithoutUserInput>;
  };

  export type LeagueMemberScalarWhereInput = {
    AND?: LeagueMemberScalarWhereInput | LeagueMemberScalarWhereInput[];
    OR?: LeagueMemberScalarWhereInput[];
    NOT?: LeagueMemberScalarWhereInput | LeagueMemberScalarWhereInput[];
    id?: StringFilter<'LeagueMember'> | string;
    userId?: StringFilter<'LeagueMember'> | string;
    leagueId?: StringFilter<'LeagueMember'> | string;
    teamName?: StringNullableFilter<'LeagueMember'> | string | null;
    teamAvatar?: StringNullableFilter<'LeagueMember'> | string | null;
    rosterSlot?: IntFilter<'LeagueMember'> | number;
    wins?: IntFilter<'LeagueMember'> | number;
    losses?: IntFilter<'LeagueMember'> | number;
    ties?: IntFilter<'LeagueMember'> | number;
    pointsFor?: DecimalFilter<'LeagueMember'> | Decimal | DecimalJsLike | number | string;
    pointsAgainst?: DecimalFilter<'LeagueMember'> | Decimal | DecimalJsLike | number | string;
  };

  export type UserCreateWithoutPlatformAccountsInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    displayName?: string | null;
    email?: string | null;
    avatarUrl?: string | null;
    leagueMemberships?: LeagueMemberCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutPlatformAccountsInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    displayName?: string | null;
    email?: string | null;
    avatarUrl?: string | null;
    leagueMemberships?: LeagueMemberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutPlatformAccountsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutPlatformAccountsInput,
      UserUncheckedCreateWithoutPlatformAccountsInput
    >;
  };

  export type UserUpsertWithoutPlatformAccountsInput = {
    update: XOR<
      UserUpdateWithoutPlatformAccountsInput,
      UserUncheckedUpdateWithoutPlatformAccountsInput
    >;
    create: XOR<
      UserCreateWithoutPlatformAccountsInput,
      UserUncheckedCreateWithoutPlatformAccountsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutPlatformAccountsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutPlatformAccountsInput,
      UserUncheckedUpdateWithoutPlatformAccountsInput
    >;
  };

  export type UserUpdateWithoutPlatformAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    leagueMemberships?: LeagueMemberUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutPlatformAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    leagueMemberships?: LeagueMemberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type LeagueMemberCreateWithoutLeagueInput = {
    id?: string;
    teamName?: string | null;
    teamAvatar?: string | null;
    rosterSlot: number;
    wins?: number;
    losses?: number;
    ties?: number;
    pointsFor?: Decimal | DecimalJsLike | number | string;
    pointsAgainst?: Decimal | DecimalJsLike | number | string;
    user: UserCreateNestedOneWithoutLeagueMembershipsInput;
    rosters?: RosterCreateNestedManyWithoutMemberInput;
  };

  export type LeagueMemberUncheckedCreateWithoutLeagueInput = {
    id?: string;
    userId: string;
    teamName?: string | null;
    teamAvatar?: string | null;
    rosterSlot: number;
    wins?: number;
    losses?: number;
    ties?: number;
    pointsFor?: Decimal | DecimalJsLike | number | string;
    pointsAgainst?: Decimal | DecimalJsLike | number | string;
    rosters?: RosterUncheckedCreateNestedManyWithoutMemberInput;
  };

  export type LeagueMemberCreateOrConnectWithoutLeagueInput = {
    where: LeagueMemberWhereUniqueInput;
    create: XOR<
      LeagueMemberCreateWithoutLeagueInput,
      LeagueMemberUncheckedCreateWithoutLeagueInput
    >;
  };

  export type LeagueMemberCreateManyLeagueInputEnvelope = {
    data: LeagueMemberCreateManyLeagueInput | LeagueMemberCreateManyLeagueInput[];
    skipDuplicates?: boolean;
  };

  export type RosterCreateWithoutLeagueInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    week: number;
    season: number;
    member: LeagueMemberCreateNestedOneWithoutRostersInput;
    players?: RosterPlayerCreateNestedManyWithoutRosterInput;
  };

  export type RosterUncheckedCreateWithoutLeagueInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberId: string;
    week: number;
    season: number;
    players?: RosterPlayerUncheckedCreateNestedManyWithoutRosterInput;
  };

  export type RosterCreateOrConnectWithoutLeagueInput = {
    where: RosterWhereUniqueInput;
    create: XOR<RosterCreateWithoutLeagueInput, RosterUncheckedCreateWithoutLeagueInput>;
  };

  export type RosterCreateManyLeagueInputEnvelope = {
    data: RosterCreateManyLeagueInput | RosterCreateManyLeagueInput[];
    skipDuplicates?: boolean;
  };

  export type MatchupCreateWithoutLeagueInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    week: number;
    season: number;
    homeTeamSlot: number;
    awayTeamSlot: number;
    homeScore?: Decimal | DecimalJsLike | number | string | null;
    awayScore?: Decimal | DecimalJsLike | number | string | null;
    homeProjected?: Decimal | DecimalJsLike | number | string | null;
    awayProjected?: Decimal | DecimalJsLike | number | string | null;
    isPlayoffs?: boolean;
    matchupType?: $Enums.MatchupType;
  };

  export type MatchupUncheckedCreateWithoutLeagueInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    week: number;
    season: number;
    homeTeamSlot: number;
    awayTeamSlot: number;
    homeScore?: Decimal | DecimalJsLike | number | string | null;
    awayScore?: Decimal | DecimalJsLike | number | string | null;
    homeProjected?: Decimal | DecimalJsLike | number | string | null;
    awayProjected?: Decimal | DecimalJsLike | number | string | null;
    isPlayoffs?: boolean;
    matchupType?: $Enums.MatchupType;
  };

  export type MatchupCreateOrConnectWithoutLeagueInput = {
    where: MatchupWhereUniqueInput;
    create: XOR<MatchupCreateWithoutLeagueInput, MatchupUncheckedCreateWithoutLeagueInput>;
  };

  export type MatchupCreateManyLeagueInputEnvelope = {
    data: MatchupCreateManyLeagueInput | MatchupCreateManyLeagueInput[];
    skipDuplicates?: boolean;
  };

  export type TransactionCreateWithoutLeagueInput = {
    id?: string;
    createdAt?: Date | string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    processedAt?: Date | string | null;
    faabBid?: number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    adds?: TransactionAddCreateNestedManyWithoutTransactionInput;
    drops?: TransactionDropCreateNestedManyWithoutTransactionInput;
  };

  export type TransactionUncheckedCreateWithoutLeagueInput = {
    id?: string;
    createdAt?: Date | string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    processedAt?: Date | string | null;
    faabBid?: number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    adds?: TransactionAddUncheckedCreateNestedManyWithoutTransactionInput;
    drops?: TransactionDropUncheckedCreateNestedManyWithoutTransactionInput;
  };

  export type TransactionCreateOrConnectWithoutLeagueInput = {
    where: TransactionWhereUniqueInput;
    create: XOR<TransactionCreateWithoutLeagueInput, TransactionUncheckedCreateWithoutLeagueInput>;
  };

  export type TransactionCreateManyLeagueInputEnvelope = {
    data: TransactionCreateManyLeagueInput | TransactionCreateManyLeagueInput[];
    skipDuplicates?: boolean;
  };

  export type LeagueMemberUpsertWithWhereUniqueWithoutLeagueInput = {
    where: LeagueMemberWhereUniqueInput;
    update: XOR<
      LeagueMemberUpdateWithoutLeagueInput,
      LeagueMemberUncheckedUpdateWithoutLeagueInput
    >;
    create: XOR<
      LeagueMemberCreateWithoutLeagueInput,
      LeagueMemberUncheckedCreateWithoutLeagueInput
    >;
  };

  export type LeagueMemberUpdateWithWhereUniqueWithoutLeagueInput = {
    where: LeagueMemberWhereUniqueInput;
    data: XOR<LeagueMemberUpdateWithoutLeagueInput, LeagueMemberUncheckedUpdateWithoutLeagueInput>;
  };

  export type LeagueMemberUpdateManyWithWhereWithoutLeagueInput = {
    where: LeagueMemberScalarWhereInput;
    data: XOR<
      LeagueMemberUpdateManyMutationInput,
      LeagueMemberUncheckedUpdateManyWithoutLeagueInput
    >;
  };

  export type RosterUpsertWithWhereUniqueWithoutLeagueInput = {
    where: RosterWhereUniqueInput;
    update: XOR<RosterUpdateWithoutLeagueInput, RosterUncheckedUpdateWithoutLeagueInput>;
    create: XOR<RosterCreateWithoutLeagueInput, RosterUncheckedCreateWithoutLeagueInput>;
  };

  export type RosterUpdateWithWhereUniqueWithoutLeagueInput = {
    where: RosterWhereUniqueInput;
    data: XOR<RosterUpdateWithoutLeagueInput, RosterUncheckedUpdateWithoutLeagueInput>;
  };

  export type RosterUpdateManyWithWhereWithoutLeagueInput = {
    where: RosterScalarWhereInput;
    data: XOR<RosterUpdateManyMutationInput, RosterUncheckedUpdateManyWithoutLeagueInput>;
  };

  export type RosterScalarWhereInput = {
    AND?: RosterScalarWhereInput | RosterScalarWhereInput[];
    OR?: RosterScalarWhereInput[];
    NOT?: RosterScalarWhereInput | RosterScalarWhereInput[];
    id?: StringFilter<'Roster'> | string;
    createdAt?: DateTimeFilter<'Roster'> | Date | string;
    updatedAt?: DateTimeFilter<'Roster'> | Date | string;
    leagueId?: StringFilter<'Roster'> | string;
    memberId?: StringFilter<'Roster'> | string;
    week?: IntFilter<'Roster'> | number;
    season?: IntFilter<'Roster'> | number;
  };

  export type MatchupUpsertWithWhereUniqueWithoutLeagueInput = {
    where: MatchupWhereUniqueInput;
    update: XOR<MatchupUpdateWithoutLeagueInput, MatchupUncheckedUpdateWithoutLeagueInput>;
    create: XOR<MatchupCreateWithoutLeagueInput, MatchupUncheckedCreateWithoutLeagueInput>;
  };

  export type MatchupUpdateWithWhereUniqueWithoutLeagueInput = {
    where: MatchupWhereUniqueInput;
    data: XOR<MatchupUpdateWithoutLeagueInput, MatchupUncheckedUpdateWithoutLeagueInput>;
  };

  export type MatchupUpdateManyWithWhereWithoutLeagueInput = {
    where: MatchupScalarWhereInput;
    data: XOR<MatchupUpdateManyMutationInput, MatchupUncheckedUpdateManyWithoutLeagueInput>;
  };

  export type MatchupScalarWhereInput = {
    AND?: MatchupScalarWhereInput | MatchupScalarWhereInput[];
    OR?: MatchupScalarWhereInput[];
    NOT?: MatchupScalarWhereInput | MatchupScalarWhereInput[];
    id?: StringFilter<'Matchup'> | string;
    createdAt?: DateTimeFilter<'Matchup'> | Date | string;
    updatedAt?: DateTimeFilter<'Matchup'> | Date | string;
    leagueId?: StringFilter<'Matchup'> | string;
    week?: IntFilter<'Matchup'> | number;
    season?: IntFilter<'Matchup'> | number;
    homeTeamSlot?: IntFilter<'Matchup'> | number;
    awayTeamSlot?: IntFilter<'Matchup'> | number;
    homeScore?: DecimalNullableFilter<'Matchup'> | Decimal | DecimalJsLike | number | string | null;
    awayScore?: DecimalNullableFilter<'Matchup'> | Decimal | DecimalJsLike | number | string | null;
    homeProjected?:
      | DecimalNullableFilter<'Matchup'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    awayProjected?:
      | DecimalNullableFilter<'Matchup'>
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    isPlayoffs?: BoolFilter<'Matchup'> | boolean;
    matchupType?: EnumMatchupTypeFilter<'Matchup'> | $Enums.MatchupType;
  };

  export type TransactionUpsertWithWhereUniqueWithoutLeagueInput = {
    where: TransactionWhereUniqueInput;
    update: XOR<TransactionUpdateWithoutLeagueInput, TransactionUncheckedUpdateWithoutLeagueInput>;
    create: XOR<TransactionCreateWithoutLeagueInput, TransactionUncheckedCreateWithoutLeagueInput>;
  };

  export type TransactionUpdateWithWhereUniqueWithoutLeagueInput = {
    where: TransactionWhereUniqueInput;
    data: XOR<TransactionUpdateWithoutLeagueInput, TransactionUncheckedUpdateWithoutLeagueInput>;
  };

  export type TransactionUpdateManyWithWhereWithoutLeagueInput = {
    where: TransactionScalarWhereInput;
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutLeagueInput>;
  };

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[];
    OR?: TransactionScalarWhereInput[];
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[];
    id?: StringFilter<'Transaction'> | string;
    createdAt?: DateTimeFilter<'Transaction'> | Date | string;
    leagueId?: StringFilter<'Transaction'> | string;
    type?: EnumTransactionTypeFilter<'Transaction'> | $Enums.TransactionType;
    status?: EnumTransactionStatusFilter<'Transaction'> | $Enums.TransactionStatus;
    processedAt?: DateTimeNullableFilter<'Transaction'> | Date | string | null;
    faabBid?: IntNullableFilter<'Transaction'> | number | null;
    metadata?: JsonNullableFilter<'Transaction'>;
  };

  export type UserCreateWithoutLeagueMembershipsInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    displayName?: string | null;
    email?: string | null;
    avatarUrl?: string | null;
    platformAccounts?: PlatformAccountCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutLeagueMembershipsInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    displayName?: string | null;
    email?: string | null;
    avatarUrl?: string | null;
    platformAccounts?: PlatformAccountUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutLeagueMembershipsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutLeagueMembershipsInput,
      UserUncheckedCreateWithoutLeagueMembershipsInput
    >;
  };

  export type LeagueCreateWithoutMembersInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    platform: $Enums.Platform;
    platformLeagueId: string;
    name: string;
    season: number;
    leagueType?: $Enums.LeagueType;
    scoringFormat?: $Enums.ScoringFormat;
    rosterSize?: number;
    teamCount: number;
    rosters?: RosterCreateNestedManyWithoutLeagueInput;
    matchups?: MatchupCreateNestedManyWithoutLeagueInput;
    transactions?: TransactionCreateNestedManyWithoutLeagueInput;
  };

  export type LeagueUncheckedCreateWithoutMembersInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    platform: $Enums.Platform;
    platformLeagueId: string;
    name: string;
    season: number;
    leagueType?: $Enums.LeagueType;
    scoringFormat?: $Enums.ScoringFormat;
    rosterSize?: number;
    teamCount: number;
    rosters?: RosterUncheckedCreateNestedManyWithoutLeagueInput;
    matchups?: MatchupUncheckedCreateNestedManyWithoutLeagueInput;
    transactions?: TransactionUncheckedCreateNestedManyWithoutLeagueInput;
  };

  export type LeagueCreateOrConnectWithoutMembersInput = {
    where: LeagueWhereUniqueInput;
    create: XOR<LeagueCreateWithoutMembersInput, LeagueUncheckedCreateWithoutMembersInput>;
  };

  export type RosterCreateWithoutMemberInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    week: number;
    season: number;
    league: LeagueCreateNestedOneWithoutRostersInput;
    players?: RosterPlayerCreateNestedManyWithoutRosterInput;
  };

  export type RosterUncheckedCreateWithoutMemberInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leagueId: string;
    week: number;
    season: number;
    players?: RosterPlayerUncheckedCreateNestedManyWithoutRosterInput;
  };

  export type RosterCreateOrConnectWithoutMemberInput = {
    where: RosterWhereUniqueInput;
    create: XOR<RosterCreateWithoutMemberInput, RosterUncheckedCreateWithoutMemberInput>;
  };

  export type RosterCreateManyMemberInputEnvelope = {
    data: RosterCreateManyMemberInput | RosterCreateManyMemberInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutLeagueMembershipsInput = {
    update: XOR<
      UserUpdateWithoutLeagueMembershipsInput,
      UserUncheckedUpdateWithoutLeagueMembershipsInput
    >;
    create: XOR<
      UserCreateWithoutLeagueMembershipsInput,
      UserUncheckedCreateWithoutLeagueMembershipsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutLeagueMembershipsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutLeagueMembershipsInput,
      UserUncheckedUpdateWithoutLeagueMembershipsInput
    >;
  };

  export type UserUpdateWithoutLeagueMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    platformAccounts?: PlatformAccountUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutLeagueMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    displayName?: NullableStringFieldUpdateOperationsInput | string | null;
    email?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    platformAccounts?: PlatformAccountUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type LeagueUpsertWithoutMembersInput = {
    update: XOR<LeagueUpdateWithoutMembersInput, LeagueUncheckedUpdateWithoutMembersInput>;
    create: XOR<LeagueCreateWithoutMembersInput, LeagueUncheckedCreateWithoutMembersInput>;
    where?: LeagueWhereInput;
  };

  export type LeagueUpdateToOneWithWhereWithoutMembersInput = {
    where?: LeagueWhereInput;
    data: XOR<LeagueUpdateWithoutMembersInput, LeagueUncheckedUpdateWithoutMembersInput>;
  };

  export type LeagueUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    platformLeagueId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    season?: IntFieldUpdateOperationsInput | number;
    leagueType?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType;
    scoringFormat?: EnumScoringFormatFieldUpdateOperationsInput | $Enums.ScoringFormat;
    rosterSize?: IntFieldUpdateOperationsInput | number;
    teamCount?: IntFieldUpdateOperationsInput | number;
    rosters?: RosterUpdateManyWithoutLeagueNestedInput;
    matchups?: MatchupUpdateManyWithoutLeagueNestedInput;
    transactions?: TransactionUpdateManyWithoutLeagueNestedInput;
  };

  export type LeagueUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    platformLeagueId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    season?: IntFieldUpdateOperationsInput | number;
    leagueType?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType;
    scoringFormat?: EnumScoringFormatFieldUpdateOperationsInput | $Enums.ScoringFormat;
    rosterSize?: IntFieldUpdateOperationsInput | number;
    teamCount?: IntFieldUpdateOperationsInput | number;
    rosters?: RosterUncheckedUpdateManyWithoutLeagueNestedInput;
    matchups?: MatchupUncheckedUpdateManyWithoutLeagueNestedInput;
    transactions?: TransactionUncheckedUpdateManyWithoutLeagueNestedInput;
  };

  export type RosterUpsertWithWhereUniqueWithoutMemberInput = {
    where: RosterWhereUniqueInput;
    update: XOR<RosterUpdateWithoutMemberInput, RosterUncheckedUpdateWithoutMemberInput>;
    create: XOR<RosterCreateWithoutMemberInput, RosterUncheckedCreateWithoutMemberInput>;
  };

  export type RosterUpdateWithWhereUniqueWithoutMemberInput = {
    where: RosterWhereUniqueInput;
    data: XOR<RosterUpdateWithoutMemberInput, RosterUncheckedUpdateWithoutMemberInput>;
  };

  export type RosterUpdateManyWithWhereWithoutMemberInput = {
    where: RosterScalarWhereInput;
    data: XOR<RosterUpdateManyMutationInput, RosterUncheckedUpdateManyWithoutMemberInput>;
  };

  export type RosterPlayerCreateWithoutPlayerInput = {
    id?: string;
    slot: $Enums.RosterSlot;
    roster: RosterCreateNestedOneWithoutPlayersInput;
  };

  export type RosterPlayerUncheckedCreateWithoutPlayerInput = {
    id?: string;
    rosterId: string;
    slot: $Enums.RosterSlot;
  };

  export type RosterPlayerCreateOrConnectWithoutPlayerInput = {
    where: RosterPlayerWhereUniqueInput;
    create: XOR<
      RosterPlayerCreateWithoutPlayerInput,
      RosterPlayerUncheckedCreateWithoutPlayerInput
    >;
  };

  export type RosterPlayerCreateManyPlayerInputEnvelope = {
    data: RosterPlayerCreateManyPlayerInput | RosterPlayerCreateManyPlayerInput[];
    skipDuplicates?: boolean;
  };

  export type RosterPlayerUpsertWithWhereUniqueWithoutPlayerInput = {
    where: RosterPlayerWhereUniqueInput;
    update: XOR<
      RosterPlayerUpdateWithoutPlayerInput,
      RosterPlayerUncheckedUpdateWithoutPlayerInput
    >;
    create: XOR<
      RosterPlayerCreateWithoutPlayerInput,
      RosterPlayerUncheckedCreateWithoutPlayerInput
    >;
  };

  export type RosterPlayerUpdateWithWhereUniqueWithoutPlayerInput = {
    where: RosterPlayerWhereUniqueInput;
    data: XOR<RosterPlayerUpdateWithoutPlayerInput, RosterPlayerUncheckedUpdateWithoutPlayerInput>;
  };

  export type RosterPlayerUpdateManyWithWhereWithoutPlayerInput = {
    where: RosterPlayerScalarWhereInput;
    data: XOR<
      RosterPlayerUpdateManyMutationInput,
      RosterPlayerUncheckedUpdateManyWithoutPlayerInput
    >;
  };

  export type RosterPlayerScalarWhereInput = {
    AND?: RosterPlayerScalarWhereInput | RosterPlayerScalarWhereInput[];
    OR?: RosterPlayerScalarWhereInput[];
    NOT?: RosterPlayerScalarWhereInput | RosterPlayerScalarWhereInput[];
    id?: StringFilter<'RosterPlayer'> | string;
    rosterId?: StringFilter<'RosterPlayer'> | string;
    playerId?: StringFilter<'RosterPlayer'> | string;
    slot?: EnumRosterSlotFilter<'RosterPlayer'> | $Enums.RosterSlot;
  };

  export type LeagueCreateWithoutRostersInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    platform: $Enums.Platform;
    platformLeagueId: string;
    name: string;
    season: number;
    leagueType?: $Enums.LeagueType;
    scoringFormat?: $Enums.ScoringFormat;
    rosterSize?: number;
    teamCount: number;
    members?: LeagueMemberCreateNestedManyWithoutLeagueInput;
    matchups?: MatchupCreateNestedManyWithoutLeagueInput;
    transactions?: TransactionCreateNestedManyWithoutLeagueInput;
  };

  export type LeagueUncheckedCreateWithoutRostersInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    platform: $Enums.Platform;
    platformLeagueId: string;
    name: string;
    season: number;
    leagueType?: $Enums.LeagueType;
    scoringFormat?: $Enums.ScoringFormat;
    rosterSize?: number;
    teamCount: number;
    members?: LeagueMemberUncheckedCreateNestedManyWithoutLeagueInput;
    matchups?: MatchupUncheckedCreateNestedManyWithoutLeagueInput;
    transactions?: TransactionUncheckedCreateNestedManyWithoutLeagueInput;
  };

  export type LeagueCreateOrConnectWithoutRostersInput = {
    where: LeagueWhereUniqueInput;
    create: XOR<LeagueCreateWithoutRostersInput, LeagueUncheckedCreateWithoutRostersInput>;
  };

  export type LeagueMemberCreateWithoutRostersInput = {
    id?: string;
    teamName?: string | null;
    teamAvatar?: string | null;
    rosterSlot: number;
    wins?: number;
    losses?: number;
    ties?: number;
    pointsFor?: Decimal | DecimalJsLike | number | string;
    pointsAgainst?: Decimal | DecimalJsLike | number | string;
    user: UserCreateNestedOneWithoutLeagueMembershipsInput;
    league: LeagueCreateNestedOneWithoutMembersInput;
  };

  export type LeagueMemberUncheckedCreateWithoutRostersInput = {
    id?: string;
    userId: string;
    leagueId: string;
    teamName?: string | null;
    teamAvatar?: string | null;
    rosterSlot: number;
    wins?: number;
    losses?: number;
    ties?: number;
    pointsFor?: Decimal | DecimalJsLike | number | string;
    pointsAgainst?: Decimal | DecimalJsLike | number | string;
  };

  export type LeagueMemberCreateOrConnectWithoutRostersInput = {
    where: LeagueMemberWhereUniqueInput;
    create: XOR<
      LeagueMemberCreateWithoutRostersInput,
      LeagueMemberUncheckedCreateWithoutRostersInput
    >;
  };

  export type RosterPlayerCreateWithoutRosterInput = {
    id?: string;
    slot: $Enums.RosterSlot;
    player: PlayerCreateNestedOneWithoutRosterPlayersInput;
  };

  export type RosterPlayerUncheckedCreateWithoutRosterInput = {
    id?: string;
    playerId: string;
    slot: $Enums.RosterSlot;
  };

  export type RosterPlayerCreateOrConnectWithoutRosterInput = {
    where: RosterPlayerWhereUniqueInput;
    create: XOR<
      RosterPlayerCreateWithoutRosterInput,
      RosterPlayerUncheckedCreateWithoutRosterInput
    >;
  };

  export type RosterPlayerCreateManyRosterInputEnvelope = {
    data: RosterPlayerCreateManyRosterInput | RosterPlayerCreateManyRosterInput[];
    skipDuplicates?: boolean;
  };

  export type LeagueUpsertWithoutRostersInput = {
    update: XOR<LeagueUpdateWithoutRostersInput, LeagueUncheckedUpdateWithoutRostersInput>;
    create: XOR<LeagueCreateWithoutRostersInput, LeagueUncheckedCreateWithoutRostersInput>;
    where?: LeagueWhereInput;
  };

  export type LeagueUpdateToOneWithWhereWithoutRostersInput = {
    where?: LeagueWhereInput;
    data: XOR<LeagueUpdateWithoutRostersInput, LeagueUncheckedUpdateWithoutRostersInput>;
  };

  export type LeagueUpdateWithoutRostersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    platformLeagueId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    season?: IntFieldUpdateOperationsInput | number;
    leagueType?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType;
    scoringFormat?: EnumScoringFormatFieldUpdateOperationsInput | $Enums.ScoringFormat;
    rosterSize?: IntFieldUpdateOperationsInput | number;
    teamCount?: IntFieldUpdateOperationsInput | number;
    members?: LeagueMemberUpdateManyWithoutLeagueNestedInput;
    matchups?: MatchupUpdateManyWithoutLeagueNestedInput;
    transactions?: TransactionUpdateManyWithoutLeagueNestedInput;
  };

  export type LeagueUncheckedUpdateWithoutRostersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    platformLeagueId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    season?: IntFieldUpdateOperationsInput | number;
    leagueType?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType;
    scoringFormat?: EnumScoringFormatFieldUpdateOperationsInput | $Enums.ScoringFormat;
    rosterSize?: IntFieldUpdateOperationsInput | number;
    teamCount?: IntFieldUpdateOperationsInput | number;
    members?: LeagueMemberUncheckedUpdateManyWithoutLeagueNestedInput;
    matchups?: MatchupUncheckedUpdateManyWithoutLeagueNestedInput;
    transactions?: TransactionUncheckedUpdateManyWithoutLeagueNestedInput;
  };

  export type LeagueMemberUpsertWithoutRostersInput = {
    update: XOR<
      LeagueMemberUpdateWithoutRostersInput,
      LeagueMemberUncheckedUpdateWithoutRostersInput
    >;
    create: XOR<
      LeagueMemberCreateWithoutRostersInput,
      LeagueMemberUncheckedCreateWithoutRostersInput
    >;
    where?: LeagueMemberWhereInput;
  };

  export type LeagueMemberUpdateToOneWithWhereWithoutRostersInput = {
    where?: LeagueMemberWhereInput;
    data: XOR<
      LeagueMemberUpdateWithoutRostersInput,
      LeagueMemberUncheckedUpdateWithoutRostersInput
    >;
  };

  export type LeagueMemberUpdateWithoutRostersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamName?: NullableStringFieldUpdateOperationsInput | string | null;
    teamAvatar?: NullableStringFieldUpdateOperationsInput | string | null;
    rosterSlot?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    ties?: IntFieldUpdateOperationsInput | number;
    pointsFor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    pointsAgainst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    user?: UserUpdateOneRequiredWithoutLeagueMembershipsNestedInput;
    league?: LeagueUpdateOneRequiredWithoutMembersNestedInput;
  };

  export type LeagueMemberUncheckedUpdateWithoutRostersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    leagueId?: StringFieldUpdateOperationsInput | string;
    teamName?: NullableStringFieldUpdateOperationsInput | string | null;
    teamAvatar?: NullableStringFieldUpdateOperationsInput | string | null;
    rosterSlot?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    ties?: IntFieldUpdateOperationsInput | number;
    pointsFor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    pointsAgainst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
  };

  export type RosterPlayerUpsertWithWhereUniqueWithoutRosterInput = {
    where: RosterPlayerWhereUniqueInput;
    update: XOR<
      RosterPlayerUpdateWithoutRosterInput,
      RosterPlayerUncheckedUpdateWithoutRosterInput
    >;
    create: XOR<
      RosterPlayerCreateWithoutRosterInput,
      RosterPlayerUncheckedCreateWithoutRosterInput
    >;
  };

  export type RosterPlayerUpdateWithWhereUniqueWithoutRosterInput = {
    where: RosterPlayerWhereUniqueInput;
    data: XOR<RosterPlayerUpdateWithoutRosterInput, RosterPlayerUncheckedUpdateWithoutRosterInput>;
  };

  export type RosterPlayerUpdateManyWithWhereWithoutRosterInput = {
    where: RosterPlayerScalarWhereInput;
    data: XOR<
      RosterPlayerUpdateManyMutationInput,
      RosterPlayerUncheckedUpdateManyWithoutRosterInput
    >;
  };

  export type RosterCreateWithoutPlayersInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    week: number;
    season: number;
    league: LeagueCreateNestedOneWithoutRostersInput;
    member: LeagueMemberCreateNestedOneWithoutRostersInput;
  };

  export type RosterUncheckedCreateWithoutPlayersInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leagueId: string;
    memberId: string;
    week: number;
    season: number;
  };

  export type RosterCreateOrConnectWithoutPlayersInput = {
    where: RosterWhereUniqueInput;
    create: XOR<RosterCreateWithoutPlayersInput, RosterUncheckedCreateWithoutPlayersInput>;
  };

  export type PlayerCreateWithoutRosterPlayersInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    nflverseId?: string | null;
    sleeperId?: string | null;
    yahooId?: string | null;
    espnId?: string | null;
    firstName: string;
    lastName: string;
    fullName: string;
    position: $Enums.Position;
    team?: string | null;
    jerseyNumber?: number | null;
    status?: $Enums.PlayerStatus;
    injuryStatus?: string | null;
    byeWeek?: number | null;
  };

  export type PlayerUncheckedCreateWithoutRosterPlayersInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    nflverseId?: string | null;
    sleeperId?: string | null;
    yahooId?: string | null;
    espnId?: string | null;
    firstName: string;
    lastName: string;
    fullName: string;
    position: $Enums.Position;
    team?: string | null;
    jerseyNumber?: number | null;
    status?: $Enums.PlayerStatus;
    injuryStatus?: string | null;
    byeWeek?: number | null;
  };

  export type PlayerCreateOrConnectWithoutRosterPlayersInput = {
    where: PlayerWhereUniqueInput;
    create: XOR<
      PlayerCreateWithoutRosterPlayersInput,
      PlayerUncheckedCreateWithoutRosterPlayersInput
    >;
  };

  export type RosterUpsertWithoutPlayersInput = {
    update: XOR<RosterUpdateWithoutPlayersInput, RosterUncheckedUpdateWithoutPlayersInput>;
    create: XOR<RosterCreateWithoutPlayersInput, RosterUncheckedCreateWithoutPlayersInput>;
    where?: RosterWhereInput;
  };

  export type RosterUpdateToOneWithWhereWithoutPlayersInput = {
    where?: RosterWhereInput;
    data: XOR<RosterUpdateWithoutPlayersInput, RosterUncheckedUpdateWithoutPlayersInput>;
  };

  export type RosterUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    week?: IntFieldUpdateOperationsInput | number;
    season?: IntFieldUpdateOperationsInput | number;
    league?: LeagueUpdateOneRequiredWithoutRostersNestedInput;
    member?: LeagueMemberUpdateOneRequiredWithoutRostersNestedInput;
  };

  export type RosterUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    leagueId?: StringFieldUpdateOperationsInput | string;
    memberId?: StringFieldUpdateOperationsInput | string;
    week?: IntFieldUpdateOperationsInput | number;
    season?: IntFieldUpdateOperationsInput | number;
  };

  export type PlayerUpsertWithoutRosterPlayersInput = {
    update: XOR<
      PlayerUpdateWithoutRosterPlayersInput,
      PlayerUncheckedUpdateWithoutRosterPlayersInput
    >;
    create: XOR<
      PlayerCreateWithoutRosterPlayersInput,
      PlayerUncheckedCreateWithoutRosterPlayersInput
    >;
    where?: PlayerWhereInput;
  };

  export type PlayerUpdateToOneWithWhereWithoutRosterPlayersInput = {
    where?: PlayerWhereInput;
    data: XOR<
      PlayerUpdateWithoutRosterPlayersInput,
      PlayerUncheckedUpdateWithoutRosterPlayersInput
    >;
  };

  export type PlayerUpdateWithoutRosterPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    nflverseId?: NullableStringFieldUpdateOperationsInput | string | null;
    sleeperId?: NullableStringFieldUpdateOperationsInput | string | null;
    yahooId?: NullableStringFieldUpdateOperationsInput | string | null;
    espnId?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position;
    team?: NullableStringFieldUpdateOperationsInput | string | null;
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: EnumPlayerStatusFieldUpdateOperationsInput | $Enums.PlayerStatus;
    injuryStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    byeWeek?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type PlayerUncheckedUpdateWithoutRosterPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    nflverseId?: NullableStringFieldUpdateOperationsInput | string | null;
    sleeperId?: NullableStringFieldUpdateOperationsInput | string | null;
    yahooId?: NullableStringFieldUpdateOperationsInput | string | null;
    espnId?: NullableStringFieldUpdateOperationsInput | string | null;
    firstName?: StringFieldUpdateOperationsInput | string;
    lastName?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position;
    team?: NullableStringFieldUpdateOperationsInput | string | null;
    jerseyNumber?: NullableIntFieldUpdateOperationsInput | number | null;
    status?: EnumPlayerStatusFieldUpdateOperationsInput | $Enums.PlayerStatus;
    injuryStatus?: NullableStringFieldUpdateOperationsInput | string | null;
    byeWeek?: NullableIntFieldUpdateOperationsInput | number | null;
  };

  export type LeagueCreateWithoutMatchupsInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    platform: $Enums.Platform;
    platformLeagueId: string;
    name: string;
    season: number;
    leagueType?: $Enums.LeagueType;
    scoringFormat?: $Enums.ScoringFormat;
    rosterSize?: number;
    teamCount: number;
    members?: LeagueMemberCreateNestedManyWithoutLeagueInput;
    rosters?: RosterCreateNestedManyWithoutLeagueInput;
    transactions?: TransactionCreateNestedManyWithoutLeagueInput;
  };

  export type LeagueUncheckedCreateWithoutMatchupsInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    platform: $Enums.Platform;
    platformLeagueId: string;
    name: string;
    season: number;
    leagueType?: $Enums.LeagueType;
    scoringFormat?: $Enums.ScoringFormat;
    rosterSize?: number;
    teamCount: number;
    members?: LeagueMemberUncheckedCreateNestedManyWithoutLeagueInput;
    rosters?: RosterUncheckedCreateNestedManyWithoutLeagueInput;
    transactions?: TransactionUncheckedCreateNestedManyWithoutLeagueInput;
  };

  export type LeagueCreateOrConnectWithoutMatchupsInput = {
    where: LeagueWhereUniqueInput;
    create: XOR<LeagueCreateWithoutMatchupsInput, LeagueUncheckedCreateWithoutMatchupsInput>;
  };

  export type LeagueUpsertWithoutMatchupsInput = {
    update: XOR<LeagueUpdateWithoutMatchupsInput, LeagueUncheckedUpdateWithoutMatchupsInput>;
    create: XOR<LeagueCreateWithoutMatchupsInput, LeagueUncheckedCreateWithoutMatchupsInput>;
    where?: LeagueWhereInput;
  };

  export type LeagueUpdateToOneWithWhereWithoutMatchupsInput = {
    where?: LeagueWhereInput;
    data: XOR<LeagueUpdateWithoutMatchupsInput, LeagueUncheckedUpdateWithoutMatchupsInput>;
  };

  export type LeagueUpdateWithoutMatchupsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    platformLeagueId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    season?: IntFieldUpdateOperationsInput | number;
    leagueType?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType;
    scoringFormat?: EnumScoringFormatFieldUpdateOperationsInput | $Enums.ScoringFormat;
    rosterSize?: IntFieldUpdateOperationsInput | number;
    teamCount?: IntFieldUpdateOperationsInput | number;
    members?: LeagueMemberUpdateManyWithoutLeagueNestedInput;
    rosters?: RosterUpdateManyWithoutLeagueNestedInput;
    transactions?: TransactionUpdateManyWithoutLeagueNestedInput;
  };

  export type LeagueUncheckedUpdateWithoutMatchupsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    platformLeagueId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    season?: IntFieldUpdateOperationsInput | number;
    leagueType?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType;
    scoringFormat?: EnumScoringFormatFieldUpdateOperationsInput | $Enums.ScoringFormat;
    rosterSize?: IntFieldUpdateOperationsInput | number;
    teamCount?: IntFieldUpdateOperationsInput | number;
    members?: LeagueMemberUncheckedUpdateManyWithoutLeagueNestedInput;
    rosters?: RosterUncheckedUpdateManyWithoutLeagueNestedInput;
    transactions?: TransactionUncheckedUpdateManyWithoutLeagueNestedInput;
  };

  export type LeagueCreateWithoutTransactionsInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    platform: $Enums.Platform;
    platformLeagueId: string;
    name: string;
    season: number;
    leagueType?: $Enums.LeagueType;
    scoringFormat?: $Enums.ScoringFormat;
    rosterSize?: number;
    teamCount: number;
    members?: LeagueMemberCreateNestedManyWithoutLeagueInput;
    rosters?: RosterCreateNestedManyWithoutLeagueInput;
    matchups?: MatchupCreateNestedManyWithoutLeagueInput;
  };

  export type LeagueUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    platform: $Enums.Platform;
    platformLeagueId: string;
    name: string;
    season: number;
    leagueType?: $Enums.LeagueType;
    scoringFormat?: $Enums.ScoringFormat;
    rosterSize?: number;
    teamCount: number;
    members?: LeagueMemberUncheckedCreateNestedManyWithoutLeagueInput;
    rosters?: RosterUncheckedCreateNestedManyWithoutLeagueInput;
    matchups?: MatchupUncheckedCreateNestedManyWithoutLeagueInput;
  };

  export type LeagueCreateOrConnectWithoutTransactionsInput = {
    where: LeagueWhereUniqueInput;
    create: XOR<
      LeagueCreateWithoutTransactionsInput,
      LeagueUncheckedCreateWithoutTransactionsInput
    >;
  };

  export type TransactionAddCreateWithoutTransactionInput = {
    id?: string;
    teamSlot: number;
    playerId?: string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionAddUncheckedCreateWithoutTransactionInput = {
    id?: string;
    teamSlot: number;
    playerId?: string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionAddCreateOrConnectWithoutTransactionInput = {
    where: TransactionAddWhereUniqueInput;
    create: XOR<
      TransactionAddCreateWithoutTransactionInput,
      TransactionAddUncheckedCreateWithoutTransactionInput
    >;
  };

  export type TransactionAddCreateManyTransactionInputEnvelope = {
    data: TransactionAddCreateManyTransactionInput | TransactionAddCreateManyTransactionInput[];
    skipDuplicates?: boolean;
  };

  export type TransactionDropCreateWithoutTransactionInput = {
    id?: string;
    teamSlot: number;
    playerId?: string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionDropUncheckedCreateWithoutTransactionInput = {
    id?: string;
    teamSlot: number;
    playerId?: string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionDropCreateOrConnectWithoutTransactionInput = {
    where: TransactionDropWhereUniqueInput;
    create: XOR<
      TransactionDropCreateWithoutTransactionInput,
      TransactionDropUncheckedCreateWithoutTransactionInput
    >;
  };

  export type TransactionDropCreateManyTransactionInputEnvelope = {
    data: TransactionDropCreateManyTransactionInput | TransactionDropCreateManyTransactionInput[];
    skipDuplicates?: boolean;
  };

  export type LeagueUpsertWithoutTransactionsInput = {
    update: XOR<
      LeagueUpdateWithoutTransactionsInput,
      LeagueUncheckedUpdateWithoutTransactionsInput
    >;
    create: XOR<
      LeagueCreateWithoutTransactionsInput,
      LeagueUncheckedCreateWithoutTransactionsInput
    >;
    where?: LeagueWhereInput;
  };

  export type LeagueUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: LeagueWhereInput;
    data: XOR<LeagueUpdateWithoutTransactionsInput, LeagueUncheckedUpdateWithoutTransactionsInput>;
  };

  export type LeagueUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    platformLeagueId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    season?: IntFieldUpdateOperationsInput | number;
    leagueType?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType;
    scoringFormat?: EnumScoringFormatFieldUpdateOperationsInput | $Enums.ScoringFormat;
    rosterSize?: IntFieldUpdateOperationsInput | number;
    teamCount?: IntFieldUpdateOperationsInput | number;
    members?: LeagueMemberUpdateManyWithoutLeagueNestedInput;
    rosters?: RosterUpdateManyWithoutLeagueNestedInput;
    matchups?: MatchupUpdateManyWithoutLeagueNestedInput;
  };

  export type LeagueUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    platformLeagueId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    season?: IntFieldUpdateOperationsInput | number;
    leagueType?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType;
    scoringFormat?: EnumScoringFormatFieldUpdateOperationsInput | $Enums.ScoringFormat;
    rosterSize?: IntFieldUpdateOperationsInput | number;
    teamCount?: IntFieldUpdateOperationsInput | number;
    members?: LeagueMemberUncheckedUpdateManyWithoutLeagueNestedInput;
    rosters?: RosterUncheckedUpdateManyWithoutLeagueNestedInput;
    matchups?: MatchupUncheckedUpdateManyWithoutLeagueNestedInput;
  };

  export type TransactionAddUpsertWithWhereUniqueWithoutTransactionInput = {
    where: TransactionAddWhereUniqueInput;
    update: XOR<
      TransactionAddUpdateWithoutTransactionInput,
      TransactionAddUncheckedUpdateWithoutTransactionInput
    >;
    create: XOR<
      TransactionAddCreateWithoutTransactionInput,
      TransactionAddUncheckedCreateWithoutTransactionInput
    >;
  };

  export type TransactionAddUpdateWithWhereUniqueWithoutTransactionInput = {
    where: TransactionAddWhereUniqueInput;
    data: XOR<
      TransactionAddUpdateWithoutTransactionInput,
      TransactionAddUncheckedUpdateWithoutTransactionInput
    >;
  };

  export type TransactionAddUpdateManyWithWhereWithoutTransactionInput = {
    where: TransactionAddScalarWhereInput;
    data: XOR<
      TransactionAddUpdateManyMutationInput,
      TransactionAddUncheckedUpdateManyWithoutTransactionInput
    >;
  };

  export type TransactionAddScalarWhereInput = {
    AND?: TransactionAddScalarWhereInput | TransactionAddScalarWhereInput[];
    OR?: TransactionAddScalarWhereInput[];
    NOT?: TransactionAddScalarWhereInput | TransactionAddScalarWhereInput[];
    id?: StringFilter<'TransactionAdd'> | string;
    transactionId?: StringFilter<'TransactionAdd'> | string;
    teamSlot?: IntFilter<'TransactionAdd'> | number;
    playerId?: StringNullableFilter<'TransactionAdd'> | string | null;
    pickInfo?: JsonNullableFilter<'TransactionAdd'>;
  };

  export type TransactionDropUpsertWithWhereUniqueWithoutTransactionInput = {
    where: TransactionDropWhereUniqueInput;
    update: XOR<
      TransactionDropUpdateWithoutTransactionInput,
      TransactionDropUncheckedUpdateWithoutTransactionInput
    >;
    create: XOR<
      TransactionDropCreateWithoutTransactionInput,
      TransactionDropUncheckedCreateWithoutTransactionInput
    >;
  };

  export type TransactionDropUpdateWithWhereUniqueWithoutTransactionInput = {
    where: TransactionDropWhereUniqueInput;
    data: XOR<
      TransactionDropUpdateWithoutTransactionInput,
      TransactionDropUncheckedUpdateWithoutTransactionInput
    >;
  };

  export type TransactionDropUpdateManyWithWhereWithoutTransactionInput = {
    where: TransactionDropScalarWhereInput;
    data: XOR<
      TransactionDropUpdateManyMutationInput,
      TransactionDropUncheckedUpdateManyWithoutTransactionInput
    >;
  };

  export type TransactionDropScalarWhereInput = {
    AND?: TransactionDropScalarWhereInput | TransactionDropScalarWhereInput[];
    OR?: TransactionDropScalarWhereInput[];
    NOT?: TransactionDropScalarWhereInput | TransactionDropScalarWhereInput[];
    id?: StringFilter<'TransactionDrop'> | string;
    transactionId?: StringFilter<'TransactionDrop'> | string;
    teamSlot?: IntFilter<'TransactionDrop'> | number;
    playerId?: StringNullableFilter<'TransactionDrop'> | string | null;
    pickInfo?: JsonNullableFilter<'TransactionDrop'>;
  };

  export type TransactionCreateWithoutAddsInput = {
    id?: string;
    createdAt?: Date | string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    processedAt?: Date | string | null;
    faabBid?: number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    league: LeagueCreateNestedOneWithoutTransactionsInput;
    drops?: TransactionDropCreateNestedManyWithoutTransactionInput;
  };

  export type TransactionUncheckedCreateWithoutAddsInput = {
    id?: string;
    createdAt?: Date | string;
    leagueId: string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    processedAt?: Date | string | null;
    faabBid?: number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    drops?: TransactionDropUncheckedCreateNestedManyWithoutTransactionInput;
  };

  export type TransactionCreateOrConnectWithoutAddsInput = {
    where: TransactionWhereUniqueInput;
    create: XOR<TransactionCreateWithoutAddsInput, TransactionUncheckedCreateWithoutAddsInput>;
  };

  export type TransactionUpsertWithoutAddsInput = {
    update: XOR<TransactionUpdateWithoutAddsInput, TransactionUncheckedUpdateWithoutAddsInput>;
    create: XOR<TransactionCreateWithoutAddsInput, TransactionUncheckedCreateWithoutAddsInput>;
    where?: TransactionWhereInput;
  };

  export type TransactionUpdateToOneWithWhereWithoutAddsInput = {
    where?: TransactionWhereInput;
    data: XOR<TransactionUpdateWithoutAddsInput, TransactionUncheckedUpdateWithoutAddsInput>;
  };

  export type TransactionUpdateWithoutAddsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    faabBid?: NullableIntFieldUpdateOperationsInput | number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    league?: LeagueUpdateOneRequiredWithoutTransactionsNestedInput;
    drops?: TransactionDropUpdateManyWithoutTransactionNestedInput;
  };

  export type TransactionUncheckedUpdateWithoutAddsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    leagueId?: StringFieldUpdateOperationsInput | string;
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    faabBid?: NullableIntFieldUpdateOperationsInput | number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    drops?: TransactionDropUncheckedUpdateManyWithoutTransactionNestedInput;
  };

  export type TransactionCreateWithoutDropsInput = {
    id?: string;
    createdAt?: Date | string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    processedAt?: Date | string | null;
    faabBid?: number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    league: LeagueCreateNestedOneWithoutTransactionsInput;
    adds?: TransactionAddCreateNestedManyWithoutTransactionInput;
  };

  export type TransactionUncheckedCreateWithoutDropsInput = {
    id?: string;
    createdAt?: Date | string;
    leagueId: string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    processedAt?: Date | string | null;
    faabBid?: number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    adds?: TransactionAddUncheckedCreateNestedManyWithoutTransactionInput;
  };

  export type TransactionCreateOrConnectWithoutDropsInput = {
    where: TransactionWhereUniqueInput;
    create: XOR<TransactionCreateWithoutDropsInput, TransactionUncheckedCreateWithoutDropsInput>;
  };

  export type TransactionUpsertWithoutDropsInput = {
    update: XOR<TransactionUpdateWithoutDropsInput, TransactionUncheckedUpdateWithoutDropsInput>;
    create: XOR<TransactionCreateWithoutDropsInput, TransactionUncheckedCreateWithoutDropsInput>;
    where?: TransactionWhereInput;
  };

  export type TransactionUpdateToOneWithWhereWithoutDropsInput = {
    where?: TransactionWhereInput;
    data: XOR<TransactionUpdateWithoutDropsInput, TransactionUncheckedUpdateWithoutDropsInput>;
  };

  export type TransactionUpdateWithoutDropsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    faabBid?: NullableIntFieldUpdateOperationsInput | number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    league?: LeagueUpdateOneRequiredWithoutTransactionsNestedInput;
    adds?: TransactionAddUpdateManyWithoutTransactionNestedInput;
  };

  export type TransactionUncheckedUpdateWithoutDropsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    leagueId?: StringFieldUpdateOperationsInput | string;
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    faabBid?: NullableIntFieldUpdateOperationsInput | number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    adds?: TransactionAddUncheckedUpdateManyWithoutTransactionNestedInput;
  };

  export type PlatformAccountCreateManyUserInput = {
    id?: string;
    platform: $Enums.Platform;
    platformId: string;
    username?: string | null;
    avatarUrl?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    expiresAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type LeagueMemberCreateManyUserInput = {
    id?: string;
    leagueId: string;
    teamName?: string | null;
    teamAvatar?: string | null;
    rosterSlot: number;
    wins?: number;
    losses?: number;
    ties?: number;
    pointsFor?: Decimal | DecimalJsLike | number | string;
    pointsAgainst?: Decimal | DecimalJsLike | number | string;
  };

  export type PlatformAccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    platformId?: StringFieldUpdateOperationsInput | string;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PlatformAccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    platformId?: StringFieldUpdateOperationsInput | string;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PlatformAccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform;
    platformId?: StringFieldUpdateOperationsInput | string;
    username?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type LeagueMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamName?: NullableStringFieldUpdateOperationsInput | string | null;
    teamAvatar?: NullableStringFieldUpdateOperationsInput | string | null;
    rosterSlot?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    ties?: IntFieldUpdateOperationsInput | number;
    pointsFor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    pointsAgainst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    league?: LeagueUpdateOneRequiredWithoutMembersNestedInput;
    rosters?: RosterUpdateManyWithoutMemberNestedInput;
  };

  export type LeagueMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    leagueId?: StringFieldUpdateOperationsInput | string;
    teamName?: NullableStringFieldUpdateOperationsInput | string | null;
    teamAvatar?: NullableStringFieldUpdateOperationsInput | string | null;
    rosterSlot?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    ties?: IntFieldUpdateOperationsInput | number;
    pointsFor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    pointsAgainst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    rosters?: RosterUncheckedUpdateManyWithoutMemberNestedInput;
  };

  export type LeagueMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    leagueId?: StringFieldUpdateOperationsInput | string;
    teamName?: NullableStringFieldUpdateOperationsInput | string | null;
    teamAvatar?: NullableStringFieldUpdateOperationsInput | string | null;
    rosterSlot?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    ties?: IntFieldUpdateOperationsInput | number;
    pointsFor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    pointsAgainst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
  };

  export type LeagueMemberCreateManyLeagueInput = {
    id?: string;
    userId: string;
    teamName?: string | null;
    teamAvatar?: string | null;
    rosterSlot: number;
    wins?: number;
    losses?: number;
    ties?: number;
    pointsFor?: Decimal | DecimalJsLike | number | string;
    pointsAgainst?: Decimal | DecimalJsLike | number | string;
  };

  export type RosterCreateManyLeagueInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberId: string;
    week: number;
    season: number;
  };

  export type MatchupCreateManyLeagueInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    week: number;
    season: number;
    homeTeamSlot: number;
    awayTeamSlot: number;
    homeScore?: Decimal | DecimalJsLike | number | string | null;
    awayScore?: Decimal | DecimalJsLike | number | string | null;
    homeProjected?: Decimal | DecimalJsLike | number | string | null;
    awayProjected?: Decimal | DecimalJsLike | number | string | null;
    isPlayoffs?: boolean;
    matchupType?: $Enums.MatchupType;
  };

  export type TransactionCreateManyLeagueInput = {
    id?: string;
    createdAt?: Date | string;
    type: $Enums.TransactionType;
    status?: $Enums.TransactionStatus;
    processedAt?: Date | string | null;
    faabBid?: number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type LeagueMemberUpdateWithoutLeagueInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamName?: NullableStringFieldUpdateOperationsInput | string | null;
    teamAvatar?: NullableStringFieldUpdateOperationsInput | string | null;
    rosterSlot?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    ties?: IntFieldUpdateOperationsInput | number;
    pointsFor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    pointsAgainst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    user?: UserUpdateOneRequiredWithoutLeagueMembershipsNestedInput;
    rosters?: RosterUpdateManyWithoutMemberNestedInput;
  };

  export type LeagueMemberUncheckedUpdateWithoutLeagueInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    teamName?: NullableStringFieldUpdateOperationsInput | string | null;
    teamAvatar?: NullableStringFieldUpdateOperationsInput | string | null;
    rosterSlot?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    ties?: IntFieldUpdateOperationsInput | number;
    pointsFor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    pointsAgainst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    rosters?: RosterUncheckedUpdateManyWithoutMemberNestedInput;
  };

  export type LeagueMemberUncheckedUpdateManyWithoutLeagueInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    teamName?: NullableStringFieldUpdateOperationsInput | string | null;
    teamAvatar?: NullableStringFieldUpdateOperationsInput | string | null;
    rosterSlot?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    ties?: IntFieldUpdateOperationsInput | number;
    pointsFor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
    pointsAgainst?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string;
  };

  export type RosterUpdateWithoutLeagueInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    week?: IntFieldUpdateOperationsInput | number;
    season?: IntFieldUpdateOperationsInput | number;
    member?: LeagueMemberUpdateOneRequiredWithoutRostersNestedInput;
    players?: RosterPlayerUpdateManyWithoutRosterNestedInput;
  };

  export type RosterUncheckedUpdateWithoutLeagueInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    memberId?: StringFieldUpdateOperationsInput | string;
    week?: IntFieldUpdateOperationsInput | number;
    season?: IntFieldUpdateOperationsInput | number;
    players?: RosterPlayerUncheckedUpdateManyWithoutRosterNestedInput;
  };

  export type RosterUncheckedUpdateManyWithoutLeagueInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    memberId?: StringFieldUpdateOperationsInput | string;
    week?: IntFieldUpdateOperationsInput | number;
    season?: IntFieldUpdateOperationsInput | number;
  };

  export type MatchupUpdateWithoutLeagueInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    week?: IntFieldUpdateOperationsInput | number;
    season?: IntFieldUpdateOperationsInput | number;
    homeTeamSlot?: IntFieldUpdateOperationsInput | number;
    awayTeamSlot?: IntFieldUpdateOperationsInput | number;
    homeScore?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    awayScore?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    homeProjected?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    awayProjected?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    isPlayoffs?: BoolFieldUpdateOperationsInput | boolean;
    matchupType?: EnumMatchupTypeFieldUpdateOperationsInput | $Enums.MatchupType;
  };

  export type MatchupUncheckedUpdateWithoutLeagueInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    week?: IntFieldUpdateOperationsInput | number;
    season?: IntFieldUpdateOperationsInput | number;
    homeTeamSlot?: IntFieldUpdateOperationsInput | number;
    awayTeamSlot?: IntFieldUpdateOperationsInput | number;
    homeScore?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    awayScore?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    homeProjected?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    awayProjected?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    isPlayoffs?: BoolFieldUpdateOperationsInput | boolean;
    matchupType?: EnumMatchupTypeFieldUpdateOperationsInput | $Enums.MatchupType;
  };

  export type MatchupUncheckedUpdateManyWithoutLeagueInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    week?: IntFieldUpdateOperationsInput | number;
    season?: IntFieldUpdateOperationsInput | number;
    homeTeamSlot?: IntFieldUpdateOperationsInput | number;
    awayTeamSlot?: IntFieldUpdateOperationsInput | number;
    homeScore?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    awayScore?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    homeProjected?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    awayProjected?:
      | NullableDecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string
      | null;
    isPlayoffs?: BoolFieldUpdateOperationsInput | boolean;
    matchupType?: EnumMatchupTypeFieldUpdateOperationsInput | $Enums.MatchupType;
  };

  export type TransactionUpdateWithoutLeagueInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    faabBid?: NullableIntFieldUpdateOperationsInput | number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    adds?: TransactionAddUpdateManyWithoutTransactionNestedInput;
    drops?: TransactionDropUpdateManyWithoutTransactionNestedInput;
  };

  export type TransactionUncheckedUpdateWithoutLeagueInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    faabBid?: NullableIntFieldUpdateOperationsInput | number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
    adds?: TransactionAddUncheckedUpdateManyWithoutTransactionNestedInput;
    drops?: TransactionDropUncheckedUpdateManyWithoutTransactionNestedInput;
  };

  export type TransactionUncheckedUpdateManyWithoutLeagueInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    faabBid?: NullableIntFieldUpdateOperationsInput | number | null;
    metadata?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type RosterCreateManyMemberInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leagueId: string;
    week: number;
    season: number;
  };

  export type RosterUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    week?: IntFieldUpdateOperationsInput | number;
    season?: IntFieldUpdateOperationsInput | number;
    league?: LeagueUpdateOneRequiredWithoutRostersNestedInput;
    players?: RosterPlayerUpdateManyWithoutRosterNestedInput;
  };

  export type RosterUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    leagueId?: StringFieldUpdateOperationsInput | string;
    week?: IntFieldUpdateOperationsInput | number;
    season?: IntFieldUpdateOperationsInput | number;
    players?: RosterPlayerUncheckedUpdateManyWithoutRosterNestedInput;
  };

  export type RosterUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    leagueId?: StringFieldUpdateOperationsInput | string;
    week?: IntFieldUpdateOperationsInput | number;
    season?: IntFieldUpdateOperationsInput | number;
  };

  export type RosterPlayerCreateManyPlayerInput = {
    id?: string;
    rosterId: string;
    slot: $Enums.RosterSlot;
  };

  export type RosterPlayerUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    slot?: EnumRosterSlotFieldUpdateOperationsInput | $Enums.RosterSlot;
    roster?: RosterUpdateOneRequiredWithoutPlayersNestedInput;
  };

  export type RosterPlayerUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rosterId?: StringFieldUpdateOperationsInput | string;
    slot?: EnumRosterSlotFieldUpdateOperationsInput | $Enums.RosterSlot;
  };

  export type RosterPlayerUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    rosterId?: StringFieldUpdateOperationsInput | string;
    slot?: EnumRosterSlotFieldUpdateOperationsInput | $Enums.RosterSlot;
  };

  export type RosterPlayerCreateManyRosterInput = {
    id?: string;
    playerId: string;
    slot: $Enums.RosterSlot;
  };

  export type RosterPlayerUpdateWithoutRosterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    slot?: EnumRosterSlotFieldUpdateOperationsInput | $Enums.RosterSlot;
    player?: PlayerUpdateOneRequiredWithoutRosterPlayersNestedInput;
  };

  export type RosterPlayerUncheckedUpdateWithoutRosterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    playerId?: StringFieldUpdateOperationsInput | string;
    slot?: EnumRosterSlotFieldUpdateOperationsInput | $Enums.RosterSlot;
  };

  export type RosterPlayerUncheckedUpdateManyWithoutRosterInput = {
    id?: StringFieldUpdateOperationsInput | string;
    playerId?: StringFieldUpdateOperationsInput | string;
    slot?: EnumRosterSlotFieldUpdateOperationsInput | $Enums.RosterSlot;
  };

  export type TransactionAddCreateManyTransactionInput = {
    id?: string;
    teamSlot: number;
    playerId?: string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionDropCreateManyTransactionInput = {
    id?: string;
    teamSlot: number;
    playerId?: string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionAddUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamSlot?: IntFieldUpdateOperationsInput | number;
    playerId?: NullableStringFieldUpdateOperationsInput | string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionAddUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamSlot?: IntFieldUpdateOperationsInput | number;
    playerId?: NullableStringFieldUpdateOperationsInput | string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionAddUncheckedUpdateManyWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamSlot?: IntFieldUpdateOperationsInput | number;
    playerId?: NullableStringFieldUpdateOperationsInput | string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionDropUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamSlot?: IntFieldUpdateOperationsInput | number;
    playerId?: NullableStringFieldUpdateOperationsInput | string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionDropUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamSlot?: IntFieldUpdateOperationsInput | number;
    playerId?: NullableStringFieldUpdateOperationsInput | string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  export type TransactionDropUncheckedUpdateManyWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teamSlot?: IntFieldUpdateOperationsInput | number;
    playerId?: NullableStringFieldUpdateOperationsInput | string | null;
    pickInfo?: NullableJsonNullValueInput | InputJsonValue;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
