import { FC, useState, useMemo } from 'react';
import { Template, TemplateRule } from '../generator/types/template';
import { Rule } from '../types/variant';
import { RuleField } from './RuleField';

interface TemplateViewProps {
  templateRules: TemplateRule[];
  onTemplateChange: (template: Template) => void;
}

export const TemplateView: FC<TemplateViewProps> = ({
  templateRules,
  onTemplateChange,
}) => {
  const [variantName, setVariantName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [scoreType, setScoreType] = useState('');
  const [rules, setRules] = useState<Rule[]>([]);

  const handleRuleChange = (index: number, updatedRule: Rule) => {
    const updatedRules = [...rules];
    updatedRules[index] = updatedRule;
    setRules(updatedRules);
    updateTemplate(
      variantName,
      description,
      link,
      scoreType,
      updatedRules
    );
  };

  const updateTemplate = (
    name: string,
    desc: string,
    linkUrl: string,
    score: string,
    ruleList: Rule[]
  ) => {
    const template: Template = {
      name,
      description: desc || undefined,
      link: linkUrl || undefined,
      score_type: score,
      rules: ruleList.map((rule) => ({
        name: rule.name,
        value: rule.value,
        tags: rule.tags,
        variant_name: rule.variant_name,
        alt_names: rule.alt_names,
      })),
    };
    onTemplateChange(template);
  };

  const handleVariantNameChange = (name: string) => {
    setVariantName(name);
    updateTemplate(name, description, link, scoreType, rules);
  };

  const handleDescriptionChange = (desc: string) => {
    setDescription(desc);
    updateTemplate(variantName, desc, link, scoreType, rules);
  };

  const handleLinkChange = (linkUrl: string) => {
    setLink(linkUrl);
    updateTemplate(variantName, description, linkUrl, scoreType, rules);
  };

  const handleScoreTypeChange = (score: string) => {
    setScoreType(score);
    updateTemplate(variantName, description, link, score, rules);
  };

  return (
    <div className="template-view">
      <h2>Edit Template</h2>

      <div className="form-section">
        <h3>Variant Information</h3>

        <div className="form-group">
          <label htmlFor="variant-name">Variant Name:</label>
          <input
            id="variant-name"
            type="text"
            value={variantName}
            onChange={(e) => handleVariantNameChange(e.target.value)}
            placeholder="Enter variant name"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => handleDescriptionChange(e.target.value)}
            placeholder="Enter description (optional)"
            className="form-textarea"
            rows={3}
          />
        </div>

        <div className="form-group">
          <label htmlFor="link">Link:</label>
          <input
            id="link"
            type="url"
            value={link}
            onChange={(e) => handleLinkChange(e.target.value)}
            placeholder="Enter link (optional)"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="score-type">Score Type:</label>
          <input
            id="score-type"
            type="text"
            value={scoreType}
            onChange={(e) => handleScoreTypeChange(e.target.value)}
            placeholder="Enter score type"
            className="form-input"
          />
        </div>
      </div>

      <div className="form-section">
        <h3>Edit Rules</h3>
        <div className="rules-container">
          {templateRules.map((templateRule, index) => (
            <RuleField
              key={templateRule.name}
              commonRule={{
                name: templateRule.name,
                description: '',
                notes: '',
                tiles: [],
              }}
              onChange={(rule) => handleRuleChange(index, rule)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
