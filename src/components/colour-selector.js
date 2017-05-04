import React from 'react';
import { Block, Label } from 'components';

export const FormationSelector = ({ name, onSelect, value, ...props }) => (
  <Block {...props}>
    <Label className="db fw6" mb={1} lh="copy" htmlFor={name}>{ name }</Label>
    <div className="flex items-stretch">
      <Block w={2} bg="red" mr={3} radius={2} className="pointer" />
      <select
        className="flex-auto"
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
    </div>
  </Block>
);
