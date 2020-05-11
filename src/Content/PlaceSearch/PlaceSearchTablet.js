import React from "react";
import s from "./PlaceSearch.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

let PlaceSearchTablet = (props) => {
  let onInputChange = (e) => {
    let text = e.target.value;
    props.updateInputSearchText(text);
  };

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
        onClick={props.resetInputSearchText}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <form>
        <input
          onChange={onInputChange}
          value={props.inputSearchText}
          className={s.placeSearch}
          type="text"
          id="text-to-find"
          placeholder="Enter something to search"
          autoFocus
        />
      </form>
    </div>
  );
};
export default PlaceSearchTablet;
