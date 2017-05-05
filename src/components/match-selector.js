import React from 'react';
import { Form, Fieldset, Legend } from 'components';

export const MatchSelector = ({ children, ...props }) => (
  <Form
    f={5}
    w={100}
    color="mid-gray"
    className="center"
    {...props}
  >
    <Fieldset pv={4} ph={{ all: 4, l: 3 }} mh={0} ba="mid-gray" bw={2}>
      <Legend
        f={5}
        ph={2}
        mh={0}
        color="light-red"
        className="ttu tracked fw8">
        FORMATIONS
      </Legend>
      { children }
    </Fieldset>
  </Form>
);
