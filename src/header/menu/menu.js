import React from "react";
import s from "./Menu.module.css";
import PlaceForSearch from "../../Content/PlaceForSearch/PlaceForSearch";
import Media from "react-media";

let Menu = (props) => {
  let listMenu = props.menuList.map((item) => {
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
          <PlaceForSearch
            updateInputSearchText={props.updateInputSearchText}
            resetInputSearchText={props.resetInputSearchText}
            inputSearchText={props.inputSearchText}
          />
        )}
      />
    </div>
  );
};
export default Menu;
