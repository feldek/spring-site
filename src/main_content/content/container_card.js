import React from "react";
import Card from "./card/card";
import s from "./container_card.module.css"

let ContainerCard = () => {
  return (
    <div className={s.container}>
      <Card />
    </div>
  );
};
export default ContainerCard;
