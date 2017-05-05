import React from 'react';
import { Block, Button } from 'components';
import { ColourSelectorModal } from './colour-selector-modal';
import { ColourChip } from './colour-chip';
import clrs from 'clrs';

export const ColourSelector = ({ state, effects, label, onSelect, value, ...props }) => (
  <Block {...props}>
    <Button
      h={2} w={2}
      bg={value}
      onClick={() => effects.toggleVisibility(true)}
    />
    <ColourSelectorModal
      isVisible={state.isVisible}
      close={() => effects.toggleVisibility(false)}
      label={label}
    >
      {
        clrs.map((clr, idx) => (
          <ColourChip
            colour={clr}
            key={idx}
            onClick={() => {
              onSelect(clr);
              effects.toggleVisibility(false);
            }}
          />
        ))
      }
    </ColourSelectorModal>
  </Block>
);
