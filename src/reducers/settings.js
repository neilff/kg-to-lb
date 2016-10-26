import { SETTINGS } from '../actions/settings';

const initial = {
  conversionSetting: 'lbs',
};

export default function reducer(state = initial, action = {}) {
  switch (action.type) {
    case SETTINGS.SET_CONVERSION:
      return {
        conversionSetting: action.payload,
      };

    default:
      return state;
  }
}
