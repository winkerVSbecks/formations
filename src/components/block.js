import { compose, withMeasured } from 'tachyons-measured';
import clrs from 'clrs';
import { asGridItem } from 'enhancers';

export const Block = compose(
  withMeasured(clrs),
  asGridItem,
)('div');
