import { Template } from './types/template';
import { Variant, Rule } from '../types/variant';
import { CommonRule } from '../types/common';

/**
 * Generates a Variant object from a Template by matching rules from the provided common rules
 * and filling in the extra properties from the template.
 */
export function generateRulesFromTemplate(
  template: Template,
  commonRules: CommonRule[]
): Variant {
  const generatedRules: Rule[] = [];

  for (const templateRule of template.rules) {
    if (templateRule.name === undefined || templateRule.name === '') {
      console.error(`Rule name is undefined or empty for ${templateRule}`);
      continue;
    }

    // Find matching rule in common rules
    const commonRule = commonRules.find((rule: CommonRule) =>
      templateRule.name.toLowerCase().includes(rule.name.toLowerCase())
    );

    if (commonRule) {
      // Create generated rule by combining common rule data with template data
      const generatedRule: Rule = {
        ...commonRule,
        ...templateRule,
      };

      generatedRules.push(generatedRule);
    } else {
      // If no matching rule found, create a minimal rule with template data
      console.warn(
        `No matching rule found for "${templateRule.name}" in common rules`
      );
    }
  }

  return {
    name: template.name,
    description: template.description,
    link: template.link,
    score_type: template.score_type,
    rules: generatedRules,
  };
}
