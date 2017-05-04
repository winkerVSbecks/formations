import { provideState } from 'freactal';

const initialState =  () => ({
  isVisible: false,
});

const effects = {
  toggleVisibility : (_, value) => state => Object.assign({}, state, { isVisible: value }),
};

export const withState = provideState({ initialState, effects });
