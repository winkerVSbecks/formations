import React from 'react';
import { Block } from 'components';
import { Stadium, Controls } from 'containers';

export const App = () => (
  <Block
    ph={{ all: 0, l: 3 }}
    mt={3}
    bg="white"
    className="flex sans-serif"
  >

    <Block className="flex items-center flex-column flex-row-l center mw9">

      <Stadium />
      <Block
        mv={{ all: 4, l: 0 }}
        w={{ all: 100, l: 5 }}
        ph={{ all: 3, ns: 0 }}
      >
        <Controls />
      </Block>

    </Block>
  </Block>
);
