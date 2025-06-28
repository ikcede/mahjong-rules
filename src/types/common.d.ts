export type CommonRule = {
  /** The name of the rule. */
  name: string;

  /** A short description of the rule. */
  description: string;

  /** Additional notes or explanations about the rule. */
  notes: string;

  /** An example set of tiles that satisfies the rule. */
  tiles: string[];
};
