import React from 'react';
import { Block, Text } from 'components';

export const Player = ({ className, ...props }) => (
  <Block className={`${className} relative pointer hide-child`} {...props}>
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
    <Text
      ma={0}
      pa={2}
      bg="mid-gray" color="white"
      radius={1}
      lh="solid" f={6}
      className="tc absolute z-999 shadow-2 tooltip code child pointer-none"
    >
      <span className="db mb1">{ `col: ${props.col}` }</span>
      { `row: ${props.row}` }
    </Text>
  </Block>
);
