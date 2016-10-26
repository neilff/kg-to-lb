import { WEIGHT } from '../actions/weight';

const initial = {
  weightInLB: 100,
};

export default function reducer(state = initial, action = {}) {
  switch (action.type) {
    case WEIGHT.CHANGE_WEIGHT:
      return {
        ...state,
        weightInLB: action.payload,
      };

    default:
      return state;
  }
}
