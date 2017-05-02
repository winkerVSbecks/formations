import R from 'ramda';
import { f442 } from './4-4-2';
import { f433 } from './4-3-3';

const formations = {
  442: f442,
  433: f433,
};

export const renderFormation = R.propOr(
  R.always(null),
  R.__,
  formations,
);
