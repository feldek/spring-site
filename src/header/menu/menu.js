import React from "react";
import s from "./Menu.module.css";
import PlaceForSearch from "../../Content/PlaceForSearch/PlaceForSearch";
import PlaceForSearchTablet from "../../Content/PlaceForSearch/PlaceForSearchTablet";
import Media from "react-media";

let Menu = (props) => {
  let listMenu = props.menu.menuList.map((item) => {
    return (
      <a href="/#" key={item}>
        {item}
      </a>
    );
  });
  return (
    <div className={s.menu}>
      {listMenu}
      <Media
        query="(min-width: 1000px)"
        render={() => (
          <PlaceForSearch menu={props.menu} dispatch={props.dispatch} />
        )}
      />
      <Media
        query="(max-width: 1000px)"
        render={() => (
          <PlaceForSearchTablet menu={props.menu} dispatch={props.dispatch} />
        )}
      />
    </div>
  );
};
export default Menu;
