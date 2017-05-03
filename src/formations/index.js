import R from 'ramda';
import { f442 } from './4-4-2';
import { f433 } from './4-3-3';
import { f4231 } from './4-2-3-1';
import { f451 } from './4-5-1';
import { f352 } from './3-5-2';

const formations = {
  442: f442,
  433: f433,
  4231: f4231,
  451: f451,
  352: f352,
};

export const renderFormation = R.propOr(
  R.always(null),
  R.__,
  formations,
);
