import { DECREASE, INCREASE, RESET } from "./actions";

//reducer
const defaultState = {
  count: 89,
  name: "test",
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}
