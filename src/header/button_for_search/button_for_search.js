import React from "react";
import s from "./button_for_search.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

let ButtonForSearch = (props) => {
  return (
    <div className={s.search}>
      <div className={s.button_for_search}><FontAwesomeIcon icon={faSearch}/></div>
      <div className={s.button_for_cancel}><FontAwesomeIcon icon={faTimes}/></div>
      <form onsubmit="return false;" class="open">
        <input
          class={s.place_for_search}
          type="text"
          id="text-to-find"
          // value={""}
          placeholder="Enter something to search"
          autofocus
        ></input>
      </form>
    </div>
  );
};
export default ButtonForSearch;
