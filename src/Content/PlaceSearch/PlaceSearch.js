import React from "react";
import s from "./PlaceSearch.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";
import {
  updateInputSearchText,
  resetInputSearchText,
  toggleArmLineSearch,
} from "../../Data/ContentReducer";
import { useSelector, useDispatch } from "react-redux";

let PlaceSearch = (props) => {
  const inputSearchText = useSelector((state) => state.content.inputSearchText);
  const armLineSearch = useSelector((state) => state.content.armLineSearch);
  const dispatch = useDispatch();

  let onInputChange = (e) => {
    let text = e.target.value;
    dispatch(updateInputSearchText(text));
  };

  const { x } = useSpring({
    from: { x: 0 },
    x: armLineSearch ? 1 : 0,
    config: { duration: 500 },
  });

  return (
    <div className={s.search}>
      <button
        form="text-to-find"
        name="buttonSearch"
        className={s.buttonSearch}
        onClick={() => {
          dispatch(toggleArmLineSearch());
        }}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <animated.div
        style={{
          opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
          transform: x.interpolate((x) => `scale(${x})`),
        }}
      >
        <button
          form="text-to-find"
          className={s.buttonCancel}
          onClick={() => {
            dispatch(resetInputSearchText());
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <form className={s.form}>
          <input
            onChange={onInputChange}
            value={inputSearchText}
            className={s.placeSearch}
            type="text"
            id="text-to-find"
            placeholder="Enter something to search"
            autoFocus
          />
        </form>
      </animated.div>
    </div>
  );
};
export default PlaceSearch;
