import React from 'react';
import { injectState } from 'freactal';
import { Pitch, markings } from 'components';
import { renderFormation } from 'formations';

// Old Trafford = 76 x 116;
const size = 95;

export const Stadium = injectState(({ state, effects }) => (
  <Pitch
    w={76 * size / 116} h={size} pa={3} mr={{ all: 0, l: 6 }}
    className="order-1 order-0-l"
  >
    { markings }
    { renderFormation(state.away.formation)('away', state.away.colour) }
    { renderFormation(state.home.formation)('home', state.home.colour) }
  </Pitch>
));
