import { actionTypes } from './actions';

export const exampleInitialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  current: 1,
  defultData: null,
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    case actionTypes.UPDATE_DATA:
      return {
        ...state,
        ...{ current: state.current + 1 },
      };

    default:
      return state;
  }
}

export default reducer;
