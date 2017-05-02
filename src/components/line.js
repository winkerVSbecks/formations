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

export const Line = enhanced(({ ...props}) => (
  <svg
    viewBox="0 0 40 2"
    preserveAspectRatio="none"
    {...props}>
    <path strokeWidth={2} stroke="currentColor" d="M0,1 H40" />
  </svg>
));
