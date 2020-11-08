const caseUpdateInputSearchText = "UpdateInputSearchText";
const caseResetInputSearchText = "ResetInputSearchText";
const caseToggleArmLineSearch = "ToggleArmLineSearch";
const caseToggleArmMenu = "ToggleArmMenu";

let initialState = {
  inputSearchText: "",
  armLineSearch: false,
  armMenu: false,
};

const ContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case caseUpdateInputSearchText: {
      return { ...state, inputSearchText: action.newText };
    }
    case caseResetInputSearchText: {
      let stateCopy = { ...state };
      if (stateCopy.inputSearchText.length === 0) {
        stateCopy.armLineSearch = false;
        stateCopy.armMenu = false;
      } else stateCopy.inputSearchText = "";
      return stateCopy;
    }
    case caseToggleArmLineSearch: {
      return { ...state, armLineSearch: !state.armLineSearch };
    }
    case caseToggleArmMenu: {
      return { ...state, armMenu: !state.armMenu };
    }

    default:
      return state;
  }
};

export const toggleArmMenu = () => {
  return { type: caseToggleArmMenu };
};

export const toggleArmLineSearch = () => {
  return { type: caseToggleArmLineSearch };
};

export const resetInputSearchText = () => {
  return { type: caseResetInputSearchText };
};

export const updateInputSearchText = (text) => {
  return { type: caseUpdateInputSearchText, newText: text };
};

export default ContentReducer;
