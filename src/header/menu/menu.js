import React from "react";
import s from "./menu.module.css";
import ButtonForSearch from "../button_for_search/button_for_search";

let Menu = () => {
  return (
    <div className={s.menu}>
      <a href="/#">Home</a>
      <a href="/#">Projects</a>
      <a href="/#">Guides</a>
      <a href="/#">Blog</a>
      <a href="/#">Training & Certification</a>
      <ButtonForSearch />
    </div>
  );
};
export default Menu;
