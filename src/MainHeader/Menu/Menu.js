import React from "react";
import s from "./Menu.module.css";
import Media from "react-media";
import PlaceSearch from "../../Content/PlaceSearch/PlaceSearch";
import { NavLink } from "react-router-dom";

let Menu = (props) => {
  let listMenu = props.menuList.map((item) => {
    return (
      <NavLink to="/project" key={item}>
        {item}
      </NavLink>
    );
  });

  return (
    <div className={s.menu}>
      {listMenu}
      <Media query="(min-width: 1000px)" render={() => <PlaceSearch />} />
    </div>
  );
};
export default Menu;
