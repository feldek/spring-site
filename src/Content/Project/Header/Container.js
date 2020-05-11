import React from "react";
import HeadingMain from "./Header";
import DescriptionMain from "./Description";

let ContainerHeading = (props) => {
  let project = {
    heading: "Projects",
    description:
      "From configuration to security, web apps to big data—whatever the infrastructure needs of your application may be, there is a Spring Project to help you build it. Start small and use just what you need—Spring is modular by design.",
  };
  return (
    <div className="container_heading">
      <HeadingMain heading={project.heading} />
      <DescriptionMain description={project.description} />
    </div>
  );
};
export default ContainerHeading;
