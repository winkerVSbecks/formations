import React from 'react';
import { Form, Fieldset, Legend, TeamSelector } from 'components';

export const MatchSelector = ({ home, away, onSelectAway, onSelectHome, ...props }) => (
  <Form
    f={5}
    w={{ all: 100, l: 5 }}
    ph={{ all: 3, ns: 0 }}
    color="mid-gray"
    className="center"
    {...props}
  >
    <Fieldset pv={4} ph={{ all: 4, l: 3 }} mh={0} ba="mid-gray" bw={2}>
      <Legend
        f={5}
        ph={2}
        mh={0}
        className="ttu tracked fw8">
        formations
      </Legend>
      <TeamSelector
        name="away"
        symbol="🛫‍‍"
        onSelect={onSelectAway}
        team={away}
        mb={4}
      />
      <TeamSelector
        name="home"
        symbol="🏠"
        onSelect={onSelectHome}
        team={home}
      />
    </Fieldset>
  </Form>
);
