import React from "react";
import ContainerHeading from "./header/container";
import s from "./container_content.module.css";
import Card from "./content/card";

let ContainerContent = (props) => {
  return (
    <div className={s.container_content}>
      <ContainerHeading />
      <Card content={props.content} dispatch={props.dispatch}/>
    </div>
  );
};

export default ContainerContent;
