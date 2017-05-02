import React from 'react';
import {
  compose,
  withDefaults,
  withSpacing,
  withBackgroundColor,
  withColor,
  withSize,
} from 'tachyons-measured';
import clrs from 'clrs';
import { asGridItem } from 'enhancers';

const enhanced = compose(
  withDefaults({
    color: 'white',
  }),
  withSpacing,
  withBackgroundColor(clrs),
  withColor(clrs),
  asGridItem,
  withSize,
);

export const Player = enhanced(({ ...props}) => (
  <svg
    viewBox="0 0 40 40"
    preserveAspectRatio="none"
    {...props}
  >
    <rect
      fill="currentColor"
      x="5" y="5"
      transform="rotate(45, 20, 20)"
      width="30" height="30"
      rx="4" ry="4"
    />
  </svg>
));
