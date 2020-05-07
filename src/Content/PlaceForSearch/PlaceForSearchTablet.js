import React from "react";
import s from "./PlaceForSearch.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  updateInputSearchText,
  resetInputSearchText,
  toggleStateMenu,
} from "../../Data/State";

let PlaceForSearchTablet = (props) => {
  let onInputChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateInputSearchText(text));
  };

  return (
    <div className={s.search}>
      <button
        className={s.buttonForSearch}
        onClick={() => {
          props.dispatch(toggleStateMenu());
        }}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
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
};
export default PlaceForSearchTablet;
