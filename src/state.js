import { provideState } from 'freactal';

const initialState =  () => ({
  home: 352,
  away: 433,
  colorSelectorVisible: false,
});

const effects = {
  pickHomeFormation: (_, formation) => state => Object.assign({}, state, { home: formation }),
  pickAwayFormation: (_, formation) => state => Object.assign({}, state, { away: formation }),
  toggleColorSelector : (_, value) => state => Object.assign({}, state, { colorSelectorVisible: value })
};

export const withState = provideState({ initialState, effects });
