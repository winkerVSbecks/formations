import React from 'react';
import { Form, Fieldset, Legend, FormationSelector } from 'components';

export const MatchSelector = ({ home, away, onSelectAway, onSelectHome }) => (
  <Form f={5} w={5} color="dark-green" className="center">
    <Fieldset pa={3} mh={0} ba="dark-green" bw={1}>
      <Legend f={5} ph={2} mh={0} className="ttu tracked">formations</Legend>
      <FormationSelector
        name="🛫‍‍ away"
        onSelect={onSelectAway}
        value={away}
      />
      <FormationSelector
        name="🏠 home"
        onSelect={onSelectHome}
        value={home}
      />
    </Fieldset>
  </Form>
);
