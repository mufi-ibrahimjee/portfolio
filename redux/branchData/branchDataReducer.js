import {
  FETCH_BRANCHDATA_REQUEST,
  FETCH_BRANCHDATA_SUCCESS,
  FETCH_BRANCHDATA_FAILURE,
  SET_SELECTED_BRANCH,
} from "./branchDataTypes";

const initialState = {
  loading: false,
  branchData: [],
  selectedBranchValue: "",
  selectedBranchKey: "",
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BRANCHDATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BRANCHDATA_SUCCESS:
      return {
        loading: false,
        branchData: action.payload,
        error: "",
      };
    case FETCH_BRANCHDATA_FAILURE:
      return {
        loading: false,
        branchData: initialState,
        error: action.payload,
      };
    case SET_SELECTED_BRANCH:
      return {
        loading: false,
        branchData: state.branchData,
        selectedBranchValue: action.payload[1],
        selectedBranchKey: action.payload[0],
        error: "",
      };
    default:
      return state;
  }
};

export default reducer;
