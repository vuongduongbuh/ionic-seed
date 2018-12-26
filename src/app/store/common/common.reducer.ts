import * as common from '@dv-store/common/common.actions';

export interface State {
  loading: Boolean;
}

const initialState: State = {
  loading: false
};

export function reducer(
  state = initialState,
  action: common.CommonActions
): State {
  switch (action.type) {
    case common.LOAD_COUNTRIES: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case common.LOAD_COUNTRIES_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        countries: action.payload
      });
    }
    case common.LOAD_COUNTRIES_FAILED: {
      return Object.assign({}, state, {
        loading: false
      });
    }
    default:
      return state;
  }
}

export const getIsLoadingState = (state: State) => state.loading;
