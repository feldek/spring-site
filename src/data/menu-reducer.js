const UPDATE_INPUT_SEARCH_TEXT = "UPDATE-INPUT-SEARCH-TEXT";
// const SHOW_SEARCH_CARD = "SHOW-SEARCH-CARD";
const HIGHLIGHT_SEARCH_TEXT = "HIGHLIGHT-SEARCH-TEXT";
const RESET_INPUT_SEARCH_TEXT = "RESET-INPUT-SEARCH-TEXT";
const TOGGLE_STATE_MENU = "TOGGLE-STATE-MENU";
const TOGGLE_STATE_INPUT_SEARCH = "TOGGLE-STATE-INPUT-SEARCH";

const menuReducer = (state, action) => {
  if (action.type === UPDATE_INPUT_SEARCH_TEXT) {
    state.input_search_text = action.newText;
    // this.reRenderEntireTree(this._state);
  } else if (action.type === HIGHLIGHT_SEARCH_TEXT) {
    let reg_exp_input_search_text = new RegExp(
      `${state.input_search_text}`,
      "gi"
    );
    return {
      __html: action.text.replace(
        reg_exp_input_search_text,
        '<span style="background-color:yellow;">' +
          state.input_search_text +
          "</span>"
      ),
    };
  } else if (action.type === RESET_INPUT_SEARCH_TEXT) {
    state.input_search_text = "";
    // this.reRenderEntireTree(store._state);
  } else if (action.type === TOGGLE_STATE_MENU) {
    state.menuIsOpened = !state.menuIsOpened;
    // this.reRenderEntireTree(this._state);
  } else if (action.type === TOGGLE_STATE_INPUT_SEARCH) {
    state.searchIsOpened = !state.searchIsOpened;
    // this.reRenderEntireTree(this._state);
  }
  return state;
};

// export const updateInputSearchText = (text) => {
//   return { type: UPDATE_INPUT_SEARCH_TEXT, newText: text };
// };
// export const highlightSearchText = (text) => {
//   return { type: HIGHLIGHT_SEARCH_TEXT, text: text };
// };
// export const resetInputSearchText = () => {
//   return { type: RESET_INPUT_SEARCH_TEXT };
// };
// export const toggleStateMenu = () => {
//   return { type: TOGGLE_STATE_MENU };
// };
// export const toggleStateInputSearch = () => {
//   return { type: TOGGLE_STATE_INPUT_SEARCH };
// };

// export default menuReducer;
