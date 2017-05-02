import R from 'ramda';
import { createEagerElement } from 'recompose';

function gridItemTransform({ col, row, style, ...props }) {
  return {
    style: {
      ...style,
      gridColumn: col,
      gridRow: row,
    },
    ...props,
  };
}

export function asGridItem(component) {
  function AsGridItem(ownerProps) {
    const props = gridItemTransform(ownerProps);

    return createEagerElement(component, props);
  }

  AsGridItem.displayName = 'AsGridItem';
  AsGridItem.propTypes = R.merge(component.propTypes, {

  });

  return AsGridItem;
};
