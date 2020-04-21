import React from 'react';
import s from './menu.module.css'

let Menu = ()=>{
  return(
    <div className={s.menu}>
      <a href="/#">Home</a>
      <a href="/#">Projects</a>
      <a href="/#">Guides</a>
      <a href="/#">Blog</a>
      <a href="/#">Training & Certification</a>
      <div className = {s.button_for_search}></div>
    </div>
  )
}
export default Menu;