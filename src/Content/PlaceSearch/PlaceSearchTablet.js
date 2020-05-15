import React from "react";
import s from "./PlaceSearch.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  updateInputSearchText,
  resetInputSearchText,
} from "../../Data/ContentReducer";

let PlaceSearchTablet = (props) => {
  let onInputChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateInputSearchText(text));
  };
  // debugger;

  return (
    <div className={s.search}>
      <button
        form="text-to-find"
        className={s.buttonSearch}
        onClick={props.stateToggleMenu}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <button
        form="text-to-find"
        className={s.buttonCancel}
        onClick={() => {
          props.dispatch(resetInputSearchText());
        }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <form>
        <input
          onChange={onInputChange}
          value={props.state.content.inputSearchText}
          className={s.placeSearch}
          type="text"
          id="text-to-find"
          placeholder="Enter something to search"
        />
      </form>
    </div>
  );
};
export default PlaceSearchTablet;
