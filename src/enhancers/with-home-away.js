import { mapProps } from 'recompose';

export const withHomeAway = mapProps((type) => {
  return {
    near: type === 'home' ? 'self-end' : 'self-start',
    far: type === 'home' ? 'self-start' : 'self-end',
    left: type === 'home' ? 'self-justify-start' : 'self-justify-end',
    right: type === 'home' ? 'self-justify-end' : 'self-justify-start',
    dir: type === 'home' ? -1 : 1,
    center: 'self-justify-center',
    middle: 'self-center',
  };
});
