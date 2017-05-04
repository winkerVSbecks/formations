import R from 'ramda';
import { provideState } from 'freactal';

const initialState =  () => ({
  home: { formation: 352, color: 'red' },
  away: { formation: 433, color: 'blue' },
});

const effects = {
  pickHomeFormation: (_, formation) => state =>
    R.assocPath(['home', 'formation'], formation, state),
  pickAwayFormation: (_, formation) => state =>
    R.assocPath(['away', 'formation'], formation, state),
};

export const withState = provideState({ initialState, effects });
