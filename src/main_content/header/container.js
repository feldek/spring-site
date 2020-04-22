import React from "react";
import HeadingMain from "./header";
import DescriptionMain from "./description"

let ContainerHeading = (props) => {
  return (
    <div className="container_heading">
      <HeadingMain heading={props.heading}/>
      {/* <Heading_main heading={props.heading} /> */}
      <DescriptionMain description={props.description}/>
      {/* <Description_main description={props.description}/> */}
    </div>
  );
};
export default ContainerHeading;
