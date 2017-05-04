import React from 'react';
import { injectState } from 'freactal';
import Modal from 'react-modal';
import { Block, Pitch, markings, MatchSelector } from 'components';
import { renderFormation } from 'formations';
import { withState } from 'state';

// Old Trafford = 76 x 116;
// http://newsimg.bbc.co.uk/media/images/40747000/gif/_40747002_footy_pitch_finale1.gif
const size = 95;

export const App = withState(injectState(({ state, effects }) => (
  <Block
    ph={3}
    bg="white"
    className="vh-100 flex items-center sans-serif"
  >
    <Block className="flex items-center center mw9">
      <Pitch w={76 * size / 116} h={size} pa={3} mr={6}>
        { markings }
        { renderFormation(state.away)('away', 'blue') }
        { renderFormation(state.home)('home', 'candy-apple') }
      </Pitch>
      <MatchSelector
        home={state.home}
        away={state.away}
        onSelectHome={effects.pickHomeFormation}
        onSelectAway={effects.pickAwayFormation}
      />
    </Block>
  </Block>
)));
