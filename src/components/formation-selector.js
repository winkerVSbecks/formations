import React from 'react';
import { Block, Label, ColourSelector, Select } from 'components';

export const FormationSelector = ({ name, onSelect, value, ...props }) => (
  <Block {...props}>
    <Label className="db fw8 ttu tracked" mb={1} lh="copy" htmlFor={name}>{ name }</Label>
    <div className="flex items-stretch">
      <ColourSelector label={`${name} team color`} mr={3} />
      <Select
        color="mid-gray"
        className="flex-auto fw8"
        name={name}
        onChange={e => onSelect(e.target.value)}
        value={value}
      >
        <option>442</option>
        <option>433</option>
        <option>4231</option>
        <option>451</option>
        <option>352</option>
      </Select>
    </div>
  </Block>
);
