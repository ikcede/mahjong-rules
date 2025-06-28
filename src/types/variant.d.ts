export type Rule = CommonRule & {
  value: number;
  tags?: string[];
  variant_name?: string;
  alt_names?: string[];
};

export type Variant = {
  name: string;
  description?: string;
  link?: string;
  score_type: string;
  rules: Rule[];
};
