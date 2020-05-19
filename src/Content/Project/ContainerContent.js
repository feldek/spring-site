import React from "react";
import ContainerHeading from "./Header/Container";
import s from "./ContainerContent.module.css";
import Cards from "./Content/Cards";

let ContainerContent = (props) => {
  return (
    <div className={s.containerСontent}>
      <ContainerHeading />
      <Cards />
    </div>
  );
};

export default ContainerContent;
