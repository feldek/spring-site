import React, { useState } from "react";
import s from "./MenuTablet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import PlaceSearchTablet from "../../Content/PlaceSearch/PlaceSearchTablet";
import { animated, useTransition } from "react-spring";

let MenuTablet = (props1) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const stateToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  const transitions = useTransition(toggleMenu, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  });

  let listMenu = props1.menuList.map((item) => {
    return (
      <a href="/#" key={item}>
        {item}
      </a>
    );
  });

  return (
    <div className={s.menu}>
      <button className={s.buttonOpenMenu} onClick={stateToggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props} className={s.listMenu}>
              {listMenu}
              <PlaceSearchTablet
                stateToggleMenu={stateToggleMenu}
                // updateInputSearchText={props1.updateInputSearchText}
                state = {props1.state}
                dispatch={props1.dispatch}
                // resetInputSearchText={props1.resetInputSearchText}
                // inputSearchText={props1.inputSearchText}
              />
            </animated.div>
          )
      )}
    </div>
  );
};
export default MenuTablet;
