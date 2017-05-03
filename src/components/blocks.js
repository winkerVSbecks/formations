import { compose, withMeasured } from 'tachyons-measured';
import clrs from 'clrs';
import { asGridItem } from 'enhancers';

export const Block = compose(
  withMeasured(clrs),
  asGridItem,
)('div');

export const Form = compose(
  withMeasured(clrs),
  asGridItem,
)('form');

export const Fieldset = compose(
  withMeasured(clrs),
  asGridItem,
)('fieldset');

export const Legend = compose(
  withMeasured(clrs),
  asGridItem,
)('legend');

export const Label = compose(
  withMeasured(clrs),
  asGridItem,
)('label');
