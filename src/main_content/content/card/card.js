import React from "react";
import TextCardContainer from "./text_card";
import CardPicture from "./card_picture";
import s from "./card.module.css"
import { NavLink } from "react-router-dom";

let BoxСard = (props) => {
  return (
    <a href ="/#"className={s.card}>
      <CardPicture relative_url_picture={props.relative_url_picture} />
      <TextCardContainer head={props.head} description={props.description} />
    </a>
  );
};

class Card extends React.Component {
  state = {
    arr_card: [
      {
        relative_url_picture: "storage/card_picture/spring_boot.svg",
        head: "Spring boot",
        description:
          "Takes an optionated view of building Spring application and gets you up running as quickly as possible",
      },
      {
        relative_url_picture: "storage/card_picture/spring_framework.svg",
        head: "Spring framework",
        description:
          "Provides core support for dependency injection, transaction management, web apps, data access, messaging and more.",
      },
      {
        relative_url_picture: "storage/card_picture/spring_cloud_data.svg",
        head: "Spring cloud data flow",
        description:
          "An orchestration service for composable data microservice applications on modern runtimes",
      },
      {
        relative_url_picture: "storage/card_picture/spring_cloud.svg",
        head: "Spring cloud ",
        description:
          "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
      },
      {
        relative_url_picture: "storage/card_picture/spring_data.svg",
        head: "Spring data",
        description:
          "Provides a consistent approach to data access - relational, non relational, map-reduse, and beyong",
      },
      {
        relative_url_picture: "storage/card_picture/spring_integration.svg",
        head: "Spring integration",
        description:
          "Supports the well-known Enterprise Integration Patterns via lightweight messagging and declarative adapters.",
      },
    ],
  };

  renderCard() {
    return this.state.arr_card.map((item) => {
      return (
        <BoxСard
          head={item.head}
          description={item.description}
          relative_url_picture={item.relative_url_picture}
          key={item.head + Math.random()}
        />
      );
    });
  }

  render() {
    return this.renderCard();
  }
}

export default Card;
