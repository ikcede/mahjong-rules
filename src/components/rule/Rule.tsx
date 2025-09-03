import { FC, useState } from 'react';

import { CommonRule } from '../../types/common';

import './Rule.css';

interface RuleProps {
  rule: CommonRule;
  showDescription?: boolean;
}

export const Rule: FC<RuleProps> = ({ rule, showDescription = false }) => {
  const [expanded, setExpanded] = useState(showDescription);

  return (
    <div className="rule-container">
      <button
        className="rule-header"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="rule-name">{rule.name}</div>
        <div className="rule-arrow">{expanded ? '▼' : '▶'}</div>
      </button>
      {expanded && (
        <div className="rule-description">{rule.description}</div>
      )}
    </div>
  );
};
