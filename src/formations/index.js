import R from 'ramda';
import { f442 } from './4-4-2';
import { f433 } from './4-3-3';
import { f4231 } from './4-2-3-1';

const formations = {
  442: f442,
  433: f433,
  4231: f4231,
};

export const renderFormation = R.propOr(
  R.always(null),
  R.__,
  formations,
);
