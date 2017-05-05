import React from 'react';
import { Block, Legend, ColourSelector, FormationSelector } from 'components';

export const TeamSelector = ({
  symbol,
  name,
  onSelectFormation,
  onSelectColour,
  team,
  ...props,
}) => (
  <Block {...props}>
    <Legend
      className="db fw8 ttu tracked"
      mb={1}
      mh={0}
      lh="copy"
      htmlFor={name}
    >{
      `${symbol}${name}`
    }</Legend>
    <div className="flex items-stretch">
      <ColourSelector
        label={`${name} team color`}
        mr={3}
        value={team.colour}
        onSelect={onSelectColour}
      />
      <FormationSelector
        name={`${name}-formation`}
        onSelect={onSelectFormation}
        value={team.formation}
      />
    </div>
  </Block>
);
