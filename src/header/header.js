import React from "react";
import s from "./header.module.css";
import Menu from "./menu";
let Header = () => {
  return (
    <header>
      <div className = {s.top_line}></div>
      <div className={s.menu_logo_pc}>
        {/* <img className="menu_logo_pc" src ="storage/spring-logo.png" alt="spring-logo"/> */}
      </div>
      <Menu />
    </header>
  );
};
export default Header;
