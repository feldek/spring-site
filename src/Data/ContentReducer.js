const caseUpdateInputSearchText = "UpdateInputSearchText";
const caseResetInputSearchText = "ResetInputSearchText";

let initialState = { inputSearchText: "" };

const ContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case caseUpdateInputSearchText:
      state.inputSearchText = action.newText;
      return state;
    case caseResetInputSearchText:
      // if (window.matchMedia("(min-width: 1000px)").matches) {
      //   document.body.style.backgroundColor =
      //     state.inputSearchText === "" ? "green" : "red";
      // }

      state.inputSearchText = "";
      return state;
    default:
      return state;
  }
};

export const resetInputSearchText = () => {
  return { type: caseResetInputSearchText };
};

export const updateInputSearchText = (text) => {
  return { type: caseUpdateInputSearchText, newText: text };
};

export default ContentReducer;
