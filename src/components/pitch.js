import {
  compose,
  withDefaults,
  withSpacing,
  withBackgroundColor,
  withBorder,
} from 'tachyons-measured';
import { mapProps } from 'recompose';
import clrs from 'clrs';

export const Pitch = compose(
  withDefaults({
    bg: 'green',
  }),
  withSpacing,
  withBackgroundColor(clrs),
  withBorder(clrs),
  mapProps(dimensions),
)('div');

function dimensions({ w, h, ...props}) {
  return {
    style: {
      width: `${w}vh`,
      height: `${h}vh`,
      maxWidth: '100vw',
      display: 'grid',
      gridTemplateRows: `repeat(15, 1fr)`,
      gridTemplateColumns: `repeat(5, 1fr)`,
    },
    ...props,
  };
}
