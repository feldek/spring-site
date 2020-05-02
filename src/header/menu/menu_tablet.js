import React from "react";
import s from "./menu_tablet.module.css";
import Menu from "./menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { toggleStateMenu } from "../../data/state";


let MenuTablet = (props) => {
  let dropDownText;
  if (props.menu.menuIsOpened) {
    dropDownText = <Menu menu={props.menu} dispatch={props.dispatch} />;
  }
  return (
    <div className={s.menu}>
    <div
      className={s.button_open_menu}
      onClick={() => {
        props.dispatch(toggleStateMenu());
      }}
    >
      <FontAwesomeIcon icon={faBars} />
    </div>
    <div className={s.list_menu}>{dropDownText}</div>
  </div>
  );
};
export default MenuTablet;
