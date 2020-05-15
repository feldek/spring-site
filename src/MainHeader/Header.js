import React from "react";
import s from "./Header.module.css";
import Menu from "./Menu/Menu";
import Media from "react-media";
import MenuTablet from "./Menu/MenuTablet";

let Header = (props) => {
  let menuList = [
    "Home",
    "Projects",
    "Guides",
    "Blog",
    "Training & certification",
  ];
  return (
    <header>
      <div className={s.topLine}></div>
      <div className={s.menuLogoPc}></div>
      <Media
        query="(max-width: 1000px)"
        render={() => (
          <MenuTablet
            menuList={menuList}
            state = {props.state}
            dispatch={props.dispatch}
            // updateInputSearchText={props.updateInputSearchText}
            // resetInputSearchText={props.resetInputSearchText}
            // inputSearchText={props.inputSearchText}
          />
        )}
      />
      <Media
        query="(min-width: 1000px)"
        render={() => (
          <Menu
            menuList={menuList}
            state = {props.state}
            dispatch={props.dispatch}
            // updateInputSearchText={props.updateInputSearchText}
            // resetInputSearchText={props.resetInputSearchText}
            // inputSearchText={props.inputSearchText}
          />
        )}
      />
    </header>
  );
};

export default Header;
