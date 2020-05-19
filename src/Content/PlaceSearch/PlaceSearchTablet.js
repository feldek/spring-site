import React from "react";
import s from "./PlaceSearch.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  updateInputSearchText,
  resetInputSearchText,
  toggleArmMenu,
} from "../../Data/ContentReducer";
import { useSelector, useDispatch } from "react-redux";

let PlaceSearchTablet = (props) => {
  const inputSearchText = useSelector((state) => state.content.inputSearchText);
  const dispatch = useDispatch();
  let onInputChange = (e) => {
    let text = e.target.value;
    dispatch(updateInputSearchText(text));
  };

  return (
    <div className={s.search}>
      <button
        form="text-to-find"
        className={s.buttonSearch}
        onClick={() => dispatch(toggleArmMenu())}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <button
        form="text-to-find"
        className={s.buttonCancel}
        onClick={() => {
          dispatch(resetInputSearchText());
        }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <form className={s.form}>
        <input
          onChange={onInputChange}
          value={inputSearchText}
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
