import React from "react";
import s from "./PlaceForSearch.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  updateInputSearchText,
  resetInputSearchText,
  toggleStateInputSearch,
} from "../../Data/State";

let PlaceForSearch = (props) => {
  let onInputChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateInputSearchText(text));
  };
  let inputSearchContainer;

  if (props.menu.searchIsOpened) {
    inputSearchContainer = (
      <div>
        <button
          className={s.buttonForCancel}
          onClick={() => {
            props.dispatch(resetInputSearchText());
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <form>
          <input
            onChange={onInputChange}
            value={props.menu.inputSearchText}
            className={s.placeForSearch}
            type="text"
            id="text-to-find"
            placeholder="Enter something to search"
            autoFocus
          />
        </form>
      </div>
    );
  }

  return (
    <div className={s.search}>
      <button
        name="buttonForSearch"
        className={s.buttonForSearch}
        onClick={() => {
          props.dispatch(toggleStateInputSearch());
        }}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
      {inputSearchContainer}
    </div>
  );
};
export default PlaceForSearch;
