import React from 'react';
import { Block, Label } from 'components';

export const FormationSelector = ({ name, onSelect, value }) => (
  <Block mb={3}>
    <Label className="db fw6" mb={1} lh="copy" htmlFor={name}>{ name }</Label>
    <select
      className="w-100"
      name={name}
      onChange={e => onSelect(e.target.value)}
      value={value}
    >
      <option>442</option>
      <option>433</option>
      <option>4231</option>
      <option>451</option>
      <option>352</option>
    </select>
  </Block>
);
