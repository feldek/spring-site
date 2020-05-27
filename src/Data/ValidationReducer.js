const caseSetValidation = "SetValidation";

let initialState = { loginCheck: false };

const ValidationReducer = (state = initialState, action) => {
  switch (action.type) {
    case caseSetValidation: {
      return { ...state, loginCheck: action.status };
    }
    default:
      return state;
  }
};

export const setValidation = (statusValidation) => {
  return { type: caseSetValidation, status: statusValidation };
};

export default ValidationReducer;
