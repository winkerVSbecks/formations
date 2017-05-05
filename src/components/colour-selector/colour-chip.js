import React from 'react';
import { Button } from 'components';

export const ColourChip = ({ colour, ...props }) => (
  <Button
    w="auto"
    ma={0}
    bw={0}
    bg={colour}
    className="db pointer"
    { ...props }
  />
);
