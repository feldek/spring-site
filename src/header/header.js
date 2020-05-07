import React from "react";
import s from "./Header.module.css";
import Menu from "./Menu/Menu";
import Media from "react-media";
import MenuTablet from "./Menu/MenuTablet";

let Header = (props) => {
  return (
    <header>
      <div className={s.topLine}></div>
      <div className={s.menuLogoPc}></div>
      <Media
        query="(max-width: 1000px)"
        render={() => (
          <MenuTablet menu={props.menu} dispatch={props.dispatch} />
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
