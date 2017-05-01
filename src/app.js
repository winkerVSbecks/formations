import React from 'react';
import { Block, Pitch } from 'components';

// Old Trafford = 76 x 116;
// http://newsimg.bbc.co.uk/media/images/40747000/gif/_40747002_footy_pitch_finale1.gif

export const App = () => (
  <Block className="vh-100 flex items-center justify-center" bg="dark-liver">
    <Pitch w={76 * 75 / 116} h={75} />
  </Block>
);
