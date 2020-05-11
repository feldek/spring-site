import React from "react";
import TextCard from "./TextCard";
import CardPicture from "./CardPicture";
import s from "./Cards.module.css";

let Cards = (props) => {
  let cards = [
    {
      relativeUrlPicture: "storage/card_picture/spring_boot.svg",
      head: "Spring boot",
      description:
        "Takes an  optionated view of building Spring application and gets you up running as quickly as possible",
    },
    {
      relativeUrlPicture: "storage/card_picture/spring_framework.svg",
      head: "Spring framework",
      description:
        "Provides core support for dependency injection, transaction management, web apps, data access, messaging and more.",
    },
    {
      relativeUrlPicture: "storage/card_picture/spring_cloud_data.svg",
      head: "Spring cloud data flow",
      description:
        "An orchestration service for composable data microservice applications on modern runtimes",
    },
    {
      relativeUrlPicture: "storage/card_picture/spring_cloud.svg",
      head: "Spring cloud ",
      description:
        "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
    },
    {
      relativeUrlPicture: "storage/card_picture/spring_data.svg",
      head: "Spring data",
      description:
        "Provides a consistent approach to data access - relational, non relational, map-reduse, and beyong",
    },
    {
      relativeUrlPicture: "storage/card_picture/spring_integration.svg",
      head: "Spring integration",
      description:
        "Supports the well-known Enterprise Integration Patterns via lightweight messagging and declarative adapters.",
    },
  ];
  let alreadyFilteredCards;

  const filterCards = (searchText, cards) => {
    let regExpSearchText = new RegExp(`${searchText}`, "gi");
    return cards.filter((card) => {
      return (
        card.head.match(regExpSearchText) ||
        card.description.match(regExpSearchText)
      );
    });
  };

  alreadyFilteredCards = filterCards(props.inputSearchText, cards);

  let renderCards =
    alreadyFilteredCards.length === 0 ? (
      <div className={s.nothingFound}>"Nothing found"</div>
    ) : (
      alreadyFilteredCards.map((card) => {
        return (
          <a href="/#" className={s.card} key={card.head}>
            <CardPicture relativeUrlPicture={card.relativeUrlPicture} />
            <TextCard
              head={card.head}
              description={card.description}
              inputSearchText={props.inputSearchText}
            />
          </a>
        );
      })
    );
  return <div className={s.container}>{renderCards}</div>;
};

export default Cards;
