export type Template = Omit<Variant, 'rules'> & {
  rules: TemplateRule[];
};

export type TemplateRule = Partial<Rule> & {
  name: string;
  value: number;
};
