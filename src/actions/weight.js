import createTypes from './utils/createTypes';
import createAction from './utils/createAction';

export const WEIGHT = createTypes('WEIGHT', [
  'CHANGE_WEIGHT',
]);

export const onWeightChange = (kgs) => createAction(WEIGHT.CHANGE_WEIGHT, kgs);
