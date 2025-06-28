import { FC, useState } from 'react';
import { CommonRule } from '../types/common';
import { Rule } from '../types/variant';

interface RuleFieldProps {
  commonRule: CommonRule;
  onChange: (rule: Rule) => void;
}

export const RuleField: FC<RuleFieldProps> = ({
  commonRule,
  onChange,
}) => {
  const [value, setValue] = useState<number>(1);
  const [tags, setTags] = useState<string>('');
  const [variantName, setVariantName] = useState<string>('');

  const handleValueChange = (newValue: number) => {
    setValue(newValue);
    updateRule(newValue, tags, variantName);
  };

  const handleTagsChange = (newTags: string) => {
    setTags(newTags);
    updateRule(value, newTags, variantName);
  };

  const handleVariantNameChange = (newVariantName: string) => {
    setVariantName(newVariantName);
    updateRule(value, tags, newVariantName);
  };

  const updateRule = (
    ruleValue: number,
    ruleTags: string,
    ruleVariantName: string
  ) => {
    const rule: Rule = {
      ...commonRule,
      value: ruleValue,
      tags: ruleTags.trim()
        ? ruleTags.split(',').map((tag) => tag.trim())
        : undefined,
      variant_name: ruleVariantName.trim() || undefined,
    };
    onChange(rule);
  };

  return (
    <div className="rule-field">
      <div className="rule-header">
        <h4 className="rule-name">{commonRule.name}</h4>
        {commonRule.description && (
          <p className="rule-description">{commonRule.description}</p>
        )}
      </div>

      <div className="rule-inputs">
        <div className="input-group">
          <label htmlFor={`value-${commonRule.name}`}>Points:</label>
          <input
            id={`value-${commonRule.name}`}
            type="number"
            value={value}
            onChange={(e) => handleValueChange(Number(e.target.value))}
            min="0"
            step="1"
            className="form-input"
          />
        </div>

        <div className="input-group">
          <label htmlFor={`tags-${commonRule.name}`}>
            Tags (comma-separated):
          </label>
          <input
            id={`tags-${commonRule.name}`}
            type="text"
            value={tags}
            onChange={(e) => handleTagsChange(e.target.value)}
            placeholder="e.g., basic, scoring, special"
            className="form-input"
          />
        </div>

        <div className="input-group">
          <label htmlFor={`variant-name-${commonRule.name}`}>
            Variant Name:
          </label>
          <input
            id={`variant-name-${commonRule.name}`}
            type="text"
            value={variantName}
            onChange={(e) => handleVariantNameChange(e.target.value)}
            placeholder="Optional variant-specific name"
            className="form-input"
          />
        </div>
      </div>

      {commonRule.notes && (
        <div className="rule-notes">
          <p>
            <strong>Notes:</strong> {commonRule.notes}
          </p>
        </div>
      )}

      {commonRule.tiles && commonRule.tiles.length > 0 && (
        <div className="rule-tiles">
          <p>
            <strong>Example Tiles:</strong> {commonRule.tiles.join(', ')}
          </p>
        </div>
      )}
    </div>
  );
};
