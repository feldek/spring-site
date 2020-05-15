import React from "react";
import ContainerHeading from "./Header/Container";
import s from "./ContainerContent.module.css";
import Card from "./Content/Cards";

let ContainerContent = (props) => {
  return (
    <div className={s.containerСontent}>
      <ContainerHeading />
      {/* <Card inputSearchText={props.inputSearchText} /> */}
      <Card state={props.state} />
    </div>
  );
};

export default ContainerContent;
