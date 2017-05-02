import React from 'react';
import { Block, Pitch, markings } from 'components';
import { renderFormation } from 'formations';

// Old Trafford = 76 x 116;
// http://newsimg.bbc.co.uk/media/images/40747000/gif/_40747002_footy_pitch_finale1.gif
const size = 95;

export const App = () => (
  <Block
    ph={3}
    bg="dark-liver"
    className="vh-100 flex items-center mw8 center"
  >
    <Pitch w={76 * size / 116} h={size} pa={3}>
      { markings }
      { renderFormation(442)('away', 'blue') }
      { renderFormation(4231)('home', 'candy-apple') }
    </Pitch>
  </Block>
);
