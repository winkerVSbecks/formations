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
    bg: 'iguana-green',
  }),
  withSpacing,
  withBackgroundColor(clrs),
  withBorder(clrs),
  mapProps(dimensions),
)('div');

function dimensions({ w, h, ...props}) {
  return {
    style: { width: `${w}vh`, height: `${h}vh` },
    ...props,
  };
}
