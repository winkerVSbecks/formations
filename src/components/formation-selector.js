import React from 'react';
import { Select } from 'components';

export const FormationSelector = ({ name, onSelect, value }) => (
  <Select
    color="mid-gray"
    className="flex-auto fw8"
    ba="mid-gray" bw={2}
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
);
