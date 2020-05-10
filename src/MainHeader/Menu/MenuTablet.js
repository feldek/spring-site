import React, { useState, useEffect } from "react";
import s from "./MenuTablet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import PlaceForSearchTablet from "../../Content/PlaceForSearch/PlaceForSearchTablet";

let MenuTablet = (props) => {
  let [toggleMenu, setToggleMenu] = useState(false);
  let stateToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const [render, setRender] = useState(toggleMenu);

  let listMenu = props.menuList.map((item) => {
    return (
      <a href="/#" key={item}>
        {item}
      </a>
    );
  });

  useEffect(() => {
    if (toggleMenu) setRender(true);
  }, [toggleMenu]);

  const onAnimationEnd = () => {
    if (!toggleMenu) setRender(false);
  };

  return (
    <div className={s.menu}>
      <button
        style={{ animation: `${toggleMenu ? "fadeIn" : "fadeOut"} 1.5s` }}
        className={s.buttonOpenMenu}
        onClick={() => {
          stateToggleMenu();
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      {render && (
        <div
          className={s.listMenu}
          style={{ animation: `${toggleMenu ? "fadeIn" : "fadeOut"} 1.5s` }}
          onAnimationEnd={onAnimationEnd}
        >
          {listMenu}
          <PlaceForSearchTablet
            stateToggleMenu={stateToggleMenu}
            updateInputSearchText={props.updateInputSearchText}
            resetInputSearchText={props.resetInputSearchText}
            inputSearchText={props.inputSearchText}
          />
        </div>
      )}
    </div>
  );
};
export default MenuTablet;
