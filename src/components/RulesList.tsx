import { FC } from 'react';

import { CommonRule } from '../types/common';

interface RulesListProps {
  allRules: CommonRule[];
  selectedRules: CommonRule[];
  onChange: (selectedRules: CommonRule[]) => void;
}

export const RulesList: FC<RulesListProps> = ({
  allRules,
  selectedRules,
  onChange,
}) => {
  const handleRuleToggle = (ruleName: string) => {
    const isCurrentlySelected = selectedRules.some(
      (rule) => rule.name === ruleName
    );
    const updatedSelectedRules = isCurrentlySelected
      ? selectedRules.filter((rule) => rule.name !== ruleName)
      : [
          ...selectedRules,
          allRules.find((rule) => rule.name === ruleName)!,
        ];
    onChange(updatedSelectedRules);
  };

  return (
    <div className="rules-list">
      <h3>Select Rules</h3>
      <div className="rules-container">
        {allRules.map((rule) => {
          const isSelected = selectedRules.some(
            (selectedRule) => selectedRule.name === rule.name
          );
          return (
            <div key={rule.name} className="rule-item">
              <label className="rule-label">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleRuleToggle(rule.name)}
                  className="rule-checkbox"
                />
                <span className="rule-name">{rule.name}</span>
              </label>
              {rule.description && (
                <p className="rule-description">{rule.description}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
