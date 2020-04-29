import React from "react";
import s from "./header.module.css";
import Menu from "./menu/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

let Header = (props) => {
  
  return (
    <header>
      <div className={s.top_line}></div>
      <div className={s.menu_logo_pc}></div>
      <div className={s.button_open_menu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <Menu
        menu={props.menu}
        updateInputSearchText={props.updateInputSearchText}
      />
    </header>
  );
};
export default Header;
