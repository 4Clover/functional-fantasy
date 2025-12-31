/**
 * Calculate the Levenshtein distance between two strings.
 * This measures the minimum number of single-character edits
 * (insertions, deletions, substitutions) required to transform one string into another.
 */
export function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= a.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= b.length; j++) {
    matrix[0]![j] = j;
  }

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i]![j] = Math.min(
        matrix[i - 1]![j]! + 1, // deletion
        matrix[i]![j - 1]! + 1, // insertion
        matrix[i - 1]![j - 1]! + cost // substitution
      );
    }
  }

  return matrix[a.length]![b.length]!;
}

/**
 * Find the best matching player from a list using fuzzy matching.
 * First attempts exact match, then falls back to Levenshtein distance.
 *
 * @param searchName - The name to search for
 * @param players - Array of player objects with a playerName property
 * @param maxDistance - Maximum edit distance to accept (default: 2)
 * @returns The best matching player, or undefined if no match within tolerance
 */
export function fuzzyFindPlayer<T extends { playerName: string }>(
  searchName: string,
  players: T[],
  maxDistance: number = 2
): T | undefined {
  const normalized = searchName.toLowerCase();

  // Try exact match first
  const exact = players.find(p => p.playerName.toLowerCase() === normalized);
  if (exact) return exact;

  // Find best fuzzy match within tolerance
  let bestMatch: T | undefined;
  let bestDistance = maxDistance + 1;

  for (const player of players) {
    const distance = levenshteinDistance(normalized, player.playerName.toLowerCase());
    if (distance < bestDistance) {
      bestDistance = distance;
      bestMatch = player;
    }
  }

  return bestMatch;
}
