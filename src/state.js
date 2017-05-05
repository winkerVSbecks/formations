import R from 'ramda';
import { provideState } from 'freactal';

const initialState =  () => ({
  home: { formation: 352, colour: 'red' },
  away: { formation: 433, colour: 'blue' },
});

const effects = {
  pickHomeFormation: (_, payload) => state => R.assocPath(['home', 'formation'], payload, state),
  pickAwayFormation: (_, payload) => state => R.assocPath(['away', 'formation'], payload, state),
};

export const withState = provideState({ initialState, effects });
