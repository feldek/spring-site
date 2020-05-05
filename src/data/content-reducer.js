// import store from "./state"
const SHOW_SEARCH_CARD = "SHOW-SEARCH-CARD";

const contentReducer = (state, action) => {
  if (action.type === SHOW_SEARCH_CARD) {
    // if (this._state.menu.input_search_text.length < 2)
    //   return this._state.content.arr_card;
    let reg_exp_input_search_text = new RegExp(
      `${store._state.menu.input_search_text}`,
      "gi"
    );
    // debugger;
    return state.arr_card.filter((card) => {
      return (
        card.head.match(reg_exp_input_search_text) ||
        card.description.match(reg_exp_input_search_text)
      );
    });
  }
  return state;
};

// export const showSearchCard = () => {
//   return { type: SHOW_SEARCH_CARD };
// };

// export default contentReducer;
