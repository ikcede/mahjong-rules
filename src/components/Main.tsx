import { FC, useState } from 'react';
import { CommonRule } from '../types/common';
import { Template, TemplateRule } from '../generator/types/template';
import { RulesList } from './RulesList';
import { TemplateView } from './TemplateView';
import commonRulesData from '../../data/rules/common-rules.json';

export const Main: FC = () => {
  const [selectedRules, setSelectedRules] = useState<CommonRule[]>([]);
  const [template, setTemplate] = useState<Template | null>(null);

  const commonRules: CommonRule[] = commonRulesData;

  const handleRuleSelection = (rules: CommonRule[]) => {
    setSelectedRules(rules);
  };

  const handleTemplateChange = (updatedTemplate: Template) => {
    setTemplate(updatedTemplate);
  };

  const templateRules: TemplateRule[] = selectedRules.map((rule) => ({
    name: rule.name,
    value: 1, // Default value
  }));

  return (
    <div className="main">
      <h1>Mahjong Rules Template Generator</h1>

      <div className="main-content">
        <div className="left-panel">
          <h2>Select Rules</h2>
          <RulesList
            allRules={commonRules}
            selectedRules={selectedRules}
            onChange={handleRuleSelection}
          />
        </div>

        <div className="right-panel">
          <h2>Edit Template</h2>
          <TemplateView
            templateRules={templateRules}
            onTemplateChange={handleTemplateChange}
          />
        </div>
      </div>

      <div className="template-output-section">
        <h2>Generated Template</h2>
        <textarea
          value={template ? JSON.stringify(template, null, 2) : ''}
          readOnly
          className="template-output"
          rows={20}
          placeholder="Template will appear here after selecting rules and filling in variant information..."
        />
      </div>
    </div>
  );
};
