import React from 'react';
import { Form, Fieldset, Legend, FormationSelector } from 'components';

export const MatchSelector = ({ home, away, onSelectAway, onSelectHome, ...props }) => (
  <Form f={5} w={{ all: 90, l: 5 }} color="mid-gray" className="center" {...props}>
    <Fieldset pv={4} ph={{ all: 4, l: 3 }} mh={0} ba="mid-gray" bw={2}>

      <Legend f={5} ph={2} mh={0} className="ttu tracked fw8">formations</Legend>

      <FormationSelector
        name="🛫‍‍ away"
        onSelect={onSelectAway}
        value={away}
        mb={4}
      />

      <FormationSelector
        name="🏠 home"
        onSelect={onSelectHome}
        value={home}
      />
    </Fieldset>
  </Form>
);
