import React from 'react';
import { Block } from 'components';

export const Player = ({ ...props }) => (
  <Block {...props}>
    <svg
      viewBox="0 0 40 40"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
    >
      <rect
        fill="currentColor"
        x="5" y="5"
        transform="rotate(45, 20, 20)"
        width="30" height="30"
        rx="4" ry="4"
      />
    </svg>
    <div>PROPS!</div>
  </Block>
);
