import React from 'react';
import { injectState } from 'freactal';
import { Block, Pitch, markings, MatchSelector } from 'components';
import { renderFormation } from 'formations';
import { withState } from 'state';

// Old Trafford = 76 x 116;
const size = 95;

export const App = withState(injectState(({ state, effects }) => (
  <Block
    ph={{ all: 0, l: 3 }}
    mt={3}
    bg="white"
    className="flex sans-serif"
  >
    <Block className="flex items-center flex-column flex-row-l center mw9">
      <Pitch
        w={76 * size / 116} h={size} pa={3} mr={{ all: 0, l: 6 }}
        className="order-1 order-0-l"
      >
        { markings }
        { renderFormation(state.away.formation)('away', 'blue') }
        { renderFormation(state.home.formation)('home', 'candy-apple') }
      </Pitch>
      <MatchSelector
        home={state.home.formation}
        away={state.away.formation}
        onSelectHome={effects.pickHomeFormation}
        onSelectAway={effects.pickAwayFormation}
        mv={{ all: 4, l: 0 }}
      />
    </Block>
  </Block>
)));
