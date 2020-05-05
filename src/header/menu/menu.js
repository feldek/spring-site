import React from "react";
import s from "./menu.module.css";
import ButtonForSearch  from "../button_for_search/button_for_search";
import  ButtonForSearchTablet from "../button_for_search/button_for_searchTablet";

import Media from "react-media";

let Menu = (props) => {
  let list_menu = props.menu.menu_list.map((item) => {
    return (
      <a href="/#" key={item}>
        {item}
      </a>
    );
  });

  return (
    <div className={s.menu}>
      {list_menu}
      <Media
        query="(min-width: 1000px)"
        render={() => (
          <ButtonForSearch menu={props.menu} dispatch={props.dispatch} />
        )}
      />
      <Media
        query="(max-width: 1000px)"
        render={() => (
          <ButtonForSearchTablet menu={props.menu} dispatch={props.dispatch} />
        )}
      />
    </div>
  );
};
export default Menu;
