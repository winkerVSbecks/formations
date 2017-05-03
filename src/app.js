import React from 'react';
import { injectState } from 'freactal';
import { Block, Pitch, markings, MatchSelector } from 'components';
import { renderFormation } from 'formations';
import { withState } from 'state';

// Old Trafford = 76 x 116;
// http://newsimg.bbc.co.uk/media/images/40747000/gif/_40747002_footy_pitch_finale1.gif
const size = 95;

export const App = withState(injectState(({ state: { away, home }, effects }) => (
  <Block
    ph={3}
    bg="light-green"
    className="vh-100 flex items-center sans-serif"
  >
    <Block className="flex items-center center mw9">
      <Pitch w={76 * size / 116} h={size} pa={3} mr={6}>
        { markings }
        { renderFormation(away)('away', 'blue') }
        { renderFormation(home)('home', 'candy-apple') }
      </Pitch>
      <MatchSelector
        home={home}
        away={away}
        onSelectHome={effects.pickHomeFormation}
        onSelectAway={effects.pickAwayFormation}
      />
    </Block>
  </Block>
)));
