const UPDATE_INPUT_SEARCH_TEXT = "UPDATE-INPUT-SEARCH-TEXT";
const SHOW_SEARCH_CARD = "SHOW-SEARCH-CARD";
const HIGHLIGHT_SEARCH_TEXT = "HIGHLIGHT-SEARCH-TEXT";
const RESET_INPUT_SEARCH_TEXT = "RESET-INPUT-SEARCH-TEXT";
const TOGGLE_STATE_MENU = "TOGGLE-STATE-MENU";
const TOGGLE_STATE_INPUT_SEARCH = "TOGGLE-STATE-INPUT-SEARCH";

let store = {
  _state: {
    menu: {
      menuList: [
        "Home",
        "Projects",
        "Guides",
        "Blog",
        "Training & certification",
      ],
      inputSearchText: "",
      menuIsOpened: false,
      searchIsOpened: false,
    },
    content: {
      cards: [
        {
          relativeUrlPicture: "storage/card_picture/spring_boot.svg",
          head: "Spring boot",
          description:
            "Takes an  optionated view of building Spring application and gets you up running as quickly as possible",
        },
        {
          relativeUrlPicture: "storage/card_picture/spring_framework.svg",
          head: "Spring framework",
          description:
            "Provides core support for dependency injection, transaction management, web apps, data access, messaging and more.",
        },
        {
          relativeUrlPicture: "storage/card_picture/spring_cloud_data.svg",
          head: "Spring cloud data flow",
          description:
            "An orchestration service for composable data microservice applications on modern runtimes",
        },
        {
          relativeUrlPicture: "storage/card_picture/spring_cloud.svg",
          head: "Spring cloud ",
          description:
            "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
        },
        {
          relativeUrlPicture: "storage/card_picture/spring_data.svg",
          head: "Spring data",
          description:
            "Provides a consistent approach to data access - relational, non relational, map-reduse, and beyong",
        },
        {
          relativeUrlPicture: "storage/card_picture/spring_integration.svg",
          head: "Spring integration",
          description:
            "Supports the well-known Enterprise Integration Patterns via lightweight messagging and declarative adapters.",
        },
      ],
    },
  },

  reRenderEntireTree() {
    console.log("asd");
  },
  subscribe(observer) {
    this.reRenderEntireTree = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    if (action.type === UPDATE_INPUT_SEARCH_TEXT) {
      this._state.menu.inputSearchText = action.newText;
      this.reRenderEntireTree(this._state);
    } else if (action.type === SHOW_SEARCH_CARD) {
      let regExpInputSearchText = new RegExp(
        `${this._state.menu.inputSearchText}`,
        "gi"
      );
      return this._state.content.cards.filter((card) => {
        return (
          card.head.match(regExpInputSearchText) ||
          card.description.match(regExpInputSearchText)
        );
      });
    } else if (action.type === HIGHLIGHT_SEARCH_TEXT) {
      let regExpInputSearchText = new RegExp(
        `${this._state.menu.inputSearchText}`,
        "gi"
      );
      return {
        __html: action.text.replace(
          regExpInputSearchText,
          '<span style="background-color:yellow;">' +
            this._state.menu.inputSearchText +
            "</span>"
        ),
      };
    } else if (action.type === RESET_INPUT_SEARCH_TEXT) {
      this._state.menu.inputSearchText = "";
      this.reRenderEntireTree(store._state);
    } else if (action.type === TOGGLE_STATE_MENU) {
      this._state.menu.menuIsOpened = !this._state.menu.menuIsOpened;
      this.reRenderEntireTree(this._state);
    } else if (action.type === TOGGLE_STATE_INPUT_SEARCH) {
      this._state.menu.searchIsOpened = !this._state.menu.searchIsOpened;
      this.reRenderEntireTree(this._state);
    }
  },
};

export const updateInputSearchText = (text) => {
  return { type: UPDATE_INPUT_SEARCH_TEXT, newText: text };
};
export const showSearchCard = () => {
  return { type: SHOW_SEARCH_CARD };
};
export const highlightSearchText = (text) => {
  return { type: HIGHLIGHT_SEARCH_TEXT, text: text };
};
export const resetInputSearchText = () => {
  return { type: RESET_INPUT_SEARCH_TEXT };
};
export const toggleStateMenu = () => {
  return { type: TOGGLE_STATE_MENU };
};
export const toggleStateInputSearch = () => {
  return { type: TOGGLE_STATE_INPUT_SEARCH };
};

window.store = store;

export default store;
