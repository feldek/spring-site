import React from "react";
import s from "./MenuTablet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { toggleStateMenu } from "../../Data/State";
import Menu from "./Menu";

let MenuTablet = (props) => {
  let dropDownText;
  if (props.menu.menuIsOpened) {
    dropDownText = <Menu menu={props.menu} dispatch={props.dispatch} />;
  }
  return (
    <div className={s.menu}>
      <button
        className={s.buttonOpenMenu}
        onClick={() => {
          props.dispatch(toggleStateMenu());
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={s.listMenu}>{dropDownText}</div>
    </div>
  );
};
export default MenuTablet;
