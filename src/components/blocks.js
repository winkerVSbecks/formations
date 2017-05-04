import React from 'react';
import { compose, withMeasured, withDefaults, withBaseStyles } from 'tachyons-measured';
import clrs from 'clrs';
import { asGridItem } from 'enhancers';

export const Block = compose(
  withMeasured(clrs),
  asGridItem,
)('div');

export const Form = withMeasured(clrs)('form');
export const Fieldset = withMeasured(clrs)('fieldset');
export const Legend = withMeasured(clrs)('legend');
export const Label = withMeasured(clrs)('label');
export const Header = withMeasured(clrs)('header');
export const Select = withMeasured(clrs)('select');

export const Heading = withMeasured(clrs)(({ level = 1, ...props }) => {
  const Tag = `h${level}`;
  return <Tag {...props} />;
});

export const Button = compose(
  withDefaults({
    bn: true,
    bg: 'transparent',
    pa: 0,
    w: 3,
    color: 'white',
    type: 'button',
  }),
  withBaseStyles('input-reset pointer'),
  withMeasured(clrs),
)('button');
