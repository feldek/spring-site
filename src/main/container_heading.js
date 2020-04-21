import React from "react";
import Heading_main from "./heading_main";
import Description_main from "./description_main"

let Container_heading = (props) => {
  return (
    <div className="container_heading">
      <Heading_main heading={props.heading}/>
      {/* <Heading_main heading={props.heading} /> */}
      <Description_main description={props.description}/>
      {/* <Description_main description={props.description}/> */}
    </div>
  );
};
export default Container_heading;
