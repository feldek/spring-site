import React from "react";
import s from "./button_for_search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import {showSearchCard} from './../../data/state'

let ButtonForSearch = (props) => {

  let newElement = React.createRef();

  let onInputChange = () => {
    let text = newElement.current.value;
    props.updateInputSearchText(text);
  };





  return (
    <div className={s.search}>
      <div className={s.button_for_search} onClick={showSearchCard}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className={s.button_for_cancel}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <form>
        <input
          onChange={onInputChange}
          ref={newElement}
          value={props.input_search_text}
          className={s.place_for_search}
          type="text"
          id="text-to-find"
          // value={""}
          placeholder="Enter something to search"
          autoFocus
        ></input>
      </form>
    </div>
  );
};
export default ButtonForSearch;
