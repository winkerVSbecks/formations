import React from 'react';
import { injectState } from 'freactal';
import { Block, MatchSelector, TeamSelector, FooterBlock, Button, Text } from 'components';

const Info = () => (
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em" height="1em"
    className="dib v-mid"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </svg>
);

export const Controls = injectState(({ state, effects }) => (
  <Block
    mv={{ all: 4, l: 0 }}
    w={{ all: 100, l: 5 }}
    ph={{ all: 3, ns: 0 }}
  >
    <MatchSelector>
      <TeamSelector
        name="away"
        symbol="🛫‍‍"
        onSelectFormation={effects.pickAwayFormation}
        onSelectColour={effects.pickAwayColour}
        team={state.away}
        mb={4}
      />
      <TeamSelector
        name="home"
        symbol="🏠"
        onSelectFormation={effects.pickHomeFormation}
        onSelectColour={effects.pickHomeColour}
        team={state.home}
        mb={4}
      />

      <Button
        ba="mid-gray" bw={2}
        bg={state.debug ? 'mid-gray' : 'moon-gray'}
        pa={2} mb={4}
        w={100}
        color={state.debug ? 'white' : 'mid-gray'}
        onClick={effects.toggleDebug}
        className="fw8 ttu tracked"
      >
        Debug
      </Button>
      <Text f={6} mv={0} color="mid-gray" lh="copy">
        <Info /> Hover over the players to see grid positioning
      </Text>
    </MatchSelector>
    <FooterBlock pa={3} />
  </Block>
));
