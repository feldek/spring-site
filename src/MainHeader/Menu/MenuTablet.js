import React from "react";
import s from "./MenuTablet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import PlaceSearchTablet from "../../Content/PlaceSearch/PlaceSearchTablet";
import { animated, useTransition } from "react-spring";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleArmMenu } from "../../Data/ContentReducer";

let MenuTablet = (props1) => {
  const armMenu = useSelector((state) => state.content.armMenu);
  const dispatch = useDispatch();

  const transitions = useTransition(armMenu, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  });

  let listMenu = props1.menuList.map((item) => {
    return (
      <Link to="/" key={item}>
        {item}
      </Link>
    );
  });

  return (
    <div className={s.menu}>
      <button
        className={s.buttonOpenMenu}
        onClick={() => dispatch(toggleArmMenu())}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props} className={s.listMenu}>
              {listMenu}
              <PlaceSearchTablet />
            </animated.div>
          )
      )}
    </div>
  );
};
export default MenuTablet;
