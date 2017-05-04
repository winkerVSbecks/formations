import { injectState } from 'freactal';
import { ColourSelector as ColourSelectorComponent } from './colour-selector';
import { withState } from './colour-selector.state';

export const ColourSelector = withState(injectState(ColourSelectorComponent));
