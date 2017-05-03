import React from 'react';
import { Block, Form, Fieldset, Legend, Label } from 'components';

export const FormationSelector = () => (
  <Form f={5} w={5} color="dark-green" className="center">
    <Fieldset pa={3} mh={0} ba="dark-green" bw={1}>
      <Legend f={4} ph={2} mh={0} className="ttu tracked">formations</Legend>
      <Block>
        <Label className="db fw6" mb={1} lh="copy" htmlFor="home">🏠 home</Label>
        <select className="w-100" name="home">
          <option>442</option>
          <option>433</option>
          <option>4231</option>
          <option>451</option>
          <option>352</option>
        </select>
      </Block>
      <Block mt={3}>
        <Label className="db fw6" mb={1} lh="copy" htmlFor="away">🛫‍‍ away</Label>
        <select className="w-100" name="away">
          <option>442</option>
          <option>433</option>
          <option>4231</option>
          <option>451</option>
          <option>352</option>
        </select>
      </Block>
    </Fieldset>
  </Form>
);
