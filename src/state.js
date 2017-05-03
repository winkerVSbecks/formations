import { provideState } from 'freactal';

const initialState =  () => ({
  home: 352,
  away: 433,
});

const effects = {
  pickHomeFormation: (_, formation) => state => Object.assign({}, state, { home: formation }),
  pickAwayFormation: (_, formation) => state => Object.assign({}, state, { away: formation }),
};

export const withState = provideState({ initialState, effects });
