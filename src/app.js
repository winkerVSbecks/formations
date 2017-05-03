import React from 'react';
import { Block, Pitch, markings, FormationSelector } from 'components';
import { renderFormation } from 'formations';

// Old Trafford = 76 x 116;
// http://newsimg.bbc.co.uk/media/images/40747000/gif/_40747002_footy_pitch_finale1.gif
const size = 95;

export const App = () => (
  <Block
    ph={3}
    bg="light-green"
    className="vh-100 flex items-center sans-serif"
  >
    <Block className="flex items-center center mw9">
      <Pitch w={76 * size / 116} h={size} pa={3} mr={6}>
        { markings }
        { renderFormation(433)('away', 'blue') }
        { renderFormation(352)('home', 'candy-apple') }
      </Pitch>
      <FormationSelector />
    </Block>
  </Block>
);
