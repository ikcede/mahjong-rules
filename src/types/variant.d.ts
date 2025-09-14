/** A variant is a specific Mahjong style with a unique set of rules. */
export type Variant = {
  /** The name of the variant. */
  name: string;

  /** The shorthand style of the variant (e.g. "hk", "jp"). */
  style: string;

  /** A short description of the variant. */
  description?: string;

  /** A link to the reference page for the variant. */
  link?: string;

  /** The type of score used in the variant (e.g. "Fan", "Yaku"). */
  score_type: string;

  /** The rules of the variant. */
  rules: Rule[];
};

/** A rule is a combination of a common rule and a variant-specific properties. */
export type Rule = CommonRule & {
  /** The value of the rule in the variant's score type. */
  value: number;

  /** Tags for the rule. */
  tags?: string[];

  /** Overrides the name of the rule for the variant. */
  variant_name?: string;

  /** Alternative names for the rule. */
  alt_names?: string[];
};