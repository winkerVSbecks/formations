import React from 'react';
import { Block, Button } from 'components';
import { ColourSelectorModal } from './colour-selector-modal';

export const ColourSelector = ({ state, effects, label, onSelect, value =  'red', ...props }) => (
  <Block {...props}>
    <Button
      h={100} w={2}
      bg={value}
      onClick={() => effects.toggleVisibility(true)}
    />
    <ColourSelectorModal
      isVisible={state.isVisible}
      close={() => effects.toggleVisibility(false)}
      label={label}
      onSelect={onSelect}
      value={value}
    />
  </Block>
);
