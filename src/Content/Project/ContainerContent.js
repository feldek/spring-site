import React from "react";
import ContainerHeading from "./Header/Container";
import s from "./ContainerContent.module.css";
import Card from "./Content/Card";

let ContainerContent = (props) => {
  return (
    <div className={s.container_content}>
      <ContainerHeading />
      <Card content={props.content} dispatch={props.dispatch} />
    </div>
  );
};

export default ContainerContent;
