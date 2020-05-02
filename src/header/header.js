import React from "react";
import s from "./header.module.css";
import Menu from "./menu/menu";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import Media from "react-media";
import MenuTablet from "./menu/menu_tablet";

let Header = (props) => {

  return (
    <header>
      <div className={s.top_line}></div>
      <div className={s.menu_logo_pc}></div>
      <Media
        query="(max-width: 1000px)"
        render={() => (<MenuTablet menu={props.menu} dispatch={props.dispatch}/>
        )}
      />

      <Media
        query="(min-width: 1000px)"
        render={() => <Menu menu={props.menu} dispatch={props.dispatch} />}
      />
    </header>
  );
};

export default Header;

