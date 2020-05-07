import React from "react";
import TextCardContainer from "./TextCard";
import CardPicture from "./CardPicture";
import s from "./Card.module.css";
import { showSearchCard } from "../../../Data/State";

let Card = (props) => {
  let renderArrCard =
    props.dispatch(showSearchCard()).length === 0 ? (
      <div className={s.nothingFound}>"Nothing found"</div>
    ) : (
      props.dispatch(showSearchCard()).map((card) => {
        return (
          <a href="/#" className={s.card} key={card.head}>
            <CardPicture relativeUrlPicture={card.relativeUrlPicture} />
            <TextCardContainer
              head={card.head}
              description={card.description}
              dispatch={props.dispatch}
            />
          </a>
        );
      })
    );
  return <div className={s.container}>{renderArrCard}</div>;
};

export default Card;
