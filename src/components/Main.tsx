import { ChangeEvent, FC, useState } from 'react';
import { CommonRule } from '../types/common';
import commonRulesData from '../../data/rules/common-rules.json';
import { Rule } from './rule/Rule';

import './Main.css';

export const Main: FC = () => {
  const [matchedRules, setMatchedRules] = useState<CommonRule[]>([
    ...commonRulesData,
  ]);

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();

    const matches: CommonRule[] = [];
    commonRulesData.forEach((rule) => {
      if (rule.name.toLowerCase().indexOf(query) > -1) {
        matches.push(rule);
      }
    });
    setMatchedRules(matches);
  };

  return (
    <main>
      <h1>Mahjong Rules Browser</h1>

      <input
        className="rules-search"
        type="text"
        placeholder="Look up common rules..."
        onChange={onSearch}
      ></input>

      <div className="rule-list">
        {matchedRules.map((rule) => (
          <Rule rule={rule} />
        ))}
      </div>
    </main>
  );
};
