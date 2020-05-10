import React, { useState } from "react";
import s from "./PlaceForSearch.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";

let PlaceForSearch = (props) => {
  let onInputChange = (e) => {
    let text = e.target.value;
    props.updateInputSearchText(text);
  };

  let [toggleInputSearch, setToggleInputSearch] = useState(false);
  const stateToggleInputSearch = () => {
    setToggleInputSearch(!toggleInputSearch);
  };

  const { x } = useSpring({
    from: { x: 0 },
    x: toggleInputSearch ? 1 : 0,
    config: { duration: 500 },
  });

  return (
    <div className={s.search}>
      <button
        name="buttonForSearch"
        className={s.buttonForSearch}
        onClick={() => {
          stateToggleInputSearch();
        }}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
      {/* {toggleInputSearch && ( */}
      <animated.div
        style={{
          opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
          transform: x.interpolate((x) => `scale(${x})`),
        }}
      >
        <button
          className={s.buttonForCancel}
          onClick={() => {
            props.resetInputSearchText();
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <form>
          <input
            onChange={onInputChange}
            value={props.inputSearchText}
            className={s.placeForSearch}
            type="text"
            id="text-to-find"
            placeholder="Enter something to search"
            autoFocus
          />
        </form>
      </animated.div>
      {/* )} */}
    </div>
  );
};
export default PlaceForSearch;
