import createTypes from './utils/createTypes';
import createAction from './utils/createAction';

export const SETTINGS = createTypes('SETTINGS', [
  'SET_CONVERSION',
]);

export const setConversion = (val) => createAction(SETTINGS.SET_CONVERSION, val);
