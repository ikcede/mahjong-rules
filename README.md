# Mahjong Rules

This repository maintains a list of common rules and their scores for different Mahjong variants.

## Rules

The rules are broken into two categories:

1. Base rules without points
2. Styles like Hong Kong Traditional which add include point values for each rule used in the style.

## JSON Formats

### Common Rules JSON

Linked from [src/types/common.d.ts](src/types/common.d.ts).

```typescript
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
```

### Style JSONs

Linked from [src/types/variant.d.ts](src/types/variant.d.ts).

```typescript
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
```

## Demo

You can browse the common rules at [https://ikcede.github.io/mahjong-rules/](https://ikcede.github.io/mahjong-rules/).

## Development

After cloning the repository, you can run the following commands to start the development server:

```bash
npm install
npm run start
```
