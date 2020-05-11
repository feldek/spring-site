import React from "react";
import s from "./TextCard.module.css";

let TextCard = (props) => {
  const highlightSearchText = (searchText, incomingText) => {
    let regExpSearchText = new RegExp(`${searchText}`, "gi");
    return {
      __html: incomingText.replace(
        regExpSearchText,
        '<span style="background-color:yellow;">' + searchText + "</span>"
      ),
    };
  };

  return (
    <div className={s.content}>
      <div
        className={s.head}
        dangerouslySetInnerHTML={highlightSearchText(
          props.inputSearchText,
          props.head
        )}
      ></div>
      <p
        dangerouslySetInnerHTML={highlightSearchText(
          props.inputSearchText,
          props.description
        )}
      ></p>
    </div>
  );
};
export default TextCard;
