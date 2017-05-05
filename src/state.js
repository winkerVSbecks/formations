import R from 'ramda';
import { provideState } from 'freactal';

const initialState =  () => ({
  home: { formation: 433, colour: 'light-red' },
  away: { formation: 352, colour: 'blue' },
});

const effects = {
  pickHomeFormation: (_, payload) => state => R.assocPath(['home', 'formation'], payload, state),
  pickHomeColour: (_, payload) => state => R.assocPath(['home', 'colour'], payload, state),
  pickAwayFormation: (_, payload) => state => R.assocPath(['away', 'formation'], payload, state),
  pickAwayColour: (_, payload) => state => R.assocPath(['away', 'colour'], payload, state),
};

export const withState = provideState({ initialState, effects });
