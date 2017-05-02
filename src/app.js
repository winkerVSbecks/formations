import React from 'react';
import { Block, Pitch, markings } from 'components';
import { renderFormation } from 'formations';

// Old Trafford = 76 x 116;
// http://newsimg.bbc.co.uk/media/images/40747000/gif/_40747002_footy_pitch_finale1.gif
const size = 95;

console.log(renderFormation);

export const App = () => (
  <Block className="vh-100 flex items-center justify-center" bg="dark-liver">
    <Pitch w={76 * size / 116} h={size} pa={3}>
      { markings }
      { renderFormation(433)('home') }
      { renderFormation(433)('away') }
    </Pitch>
  </Block>
);
