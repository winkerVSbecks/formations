import React from 'react';
import { Form, Fieldset, Legend, FormationSelector } from 'components';

export const MatchSelector = ({ home, away, onSelectAway, onSelectHome }) => (
  <Form f={5} w={5} color="mid-gray" className="center">
    <Fieldset pv={4} ph={3} mh={0} ba="mid-gray" bw={1}>

      <Legend f={5} ph={2} mh={0} className="ttu tracked fw6">formations</Legend>

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
