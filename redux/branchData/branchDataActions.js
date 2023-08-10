import {
  FETCH_BRANCHDATA_REQUEST,
  FETCH_BRANCHDATA_SUCCESS,
  FETCH_BRANCHDATA_FAILURE,
  SET_SELECTED_BRANCH,
} from "./branchDataTypes";

export const fetchBranchDataRequest = () => {
  return {
    type: FETCH_BRANCHDATA_REQUEST,
  };
};

export const fetchBranchDataSuccess = (branchData) => {
  return {
    type: FETCH_BRANCHDATA_SUCCESS,
    payload: branchData,
  };
};

export const fetchBranchDataFailure = (error) => {
  return {
    type: FETCH_BRANCHDATA_FAILURE,
    payload: error,
  };
};

export const setSelectedBranch = (branch) => {
  return {
    type: SET_SELECTED_BRANCH,
    payload: branch,
  };
};
