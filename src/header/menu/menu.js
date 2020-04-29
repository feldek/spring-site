import React from "react";
import s from "./menu.module.css";
import ButtonForSearch from "../button_for_search/button_for_search";

let Menu = (props) => {
  let list_menu = props.menu.menu_list.map((item) => {
    return (
      <a href="/#" key={item + Math.random()}>
        {item}
      </a>
    );
  });

  return (
    <div className={s.menu}>
      {list_menu}
      <ButtonForSearch
        input_search_text={props.menu.input_search_text}
        updateInputSearchText={props.updateInputSearchText}
      />
    </div>
  );
};
export default Menu;
