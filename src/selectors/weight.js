import { createSelector } from 'reselect';

import { getConversionSetting } from '../selectors/settings';

export const getWeight = (state) => state.weight.weightInLB;

export const getConvertedWeight = createSelector(
  [getWeight, getConversionSetting],
  (weight, conversionSetting) => {
    const conversion = conversionSetting === 'lbs' ? 1 : 0.453592;

    return weight * conversion;
  }
);
