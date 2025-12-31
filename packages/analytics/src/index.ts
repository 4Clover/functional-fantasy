// Utils
export { mean, standardDeviation, variance, sum, median } from './utils/statistics.js';
export { levenshteinDistance, fuzzyFindPlayer } from './utils/fuzzy-match.js';

// VORP
export { STRICT_BASELINES, WAIVER_BASELINES, scaleBaseline } from './vorp/baselines.js';
export { VORPCalculator, type VORPResult } from './vorp/calculator.js';

// WAR
export {
  MonteCarloSimulator,
  type PlayerProfile,
  type WARSimulationResult,
} from './war/monte-carlo.js';
export { WARCalculator, type WARResult } from './war/calculator.js';
export { REPLACEMENT_VALUES, DEFAULT_REPLACEMENT_VALUE } from './war/constants.js';

// Report Card
export {
  calculateWeeklyAllPlay,
  calculateSeasonAllPlay,
  type AllPlayResult,
} from './report-card/all-play.js';
export {
  calculateWeeklyLineupEfficiency,
  type LineupEfficiencyResult,
} from './report-card/lineup-efficiency.js';
export { calculateLuckIndex, type LuckIndexResult } from './report-card/luck-index.js';
export {
  calculateSeasonSuperlatives,
  calculateWeeklySuperlatives,
  type Superlative,
} from './report-card/superlatives.js';
export {
  ReportCardGenerator,
  type WeeklyReportCard,
  type WeeklyTeamReport,
  type SeasonReportCard,
  type SeasonTeamReport,
} from './report-card/generator.js';
