import React from "react";
import s from "./button_for_search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { updateInputSearchText, resetInputSearchText, toggleStateMenu } from "../../data/state";

let ButtonForSearchTablet = (props) => {

  let onInputChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateInputSearchText(text));
  };

  return (
    <div className={s.search}>
      <div
        className={s.button_for_search}
        onClick={() => {
          props.dispatch(toggleStateMenu());
        }}
      >
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div
          className={s.button_for_cancel}
          onClick={() => {
            props.dispatch(resetInputSearchText());
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <form>
          <input
            onChange={onInputChange}
            value={props.menu.input_search_text}
            className={s.place_for_search}
            type="text"
            id="text-to-find"
            // value={""}
            placeholder="Enter something to search"
            autoFocus
          />
        </form>
      
    </div>
  );
};
export default ButtonForSearchTablet;
