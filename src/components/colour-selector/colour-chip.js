import React from 'react';
import { Block } from 'components';

export const ColourChip = ({ colour, ...props }) => (
  <Block bg={colour} className="pointer" { ...props } />
);
