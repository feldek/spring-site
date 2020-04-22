import React from "react";
import ContainerHeading from "./header/container";
import s from "./container_content.module.css";
import ContainerCard from "./content/container_card";

class ContainerContent extends React.Component {
  state = {
    project: {
      heading: "Projects",
      description:
        "From configuration to security, web apps to big data—whatever the infrastructure needs of your application may be, there is a Spring Project to help you build it. Start small and use just what you need—Spring is modular by design.",
    },
  };
  renderContainerContent() {
    return (
      <div className={s.container_content}>
        <ContainerHeading
          heading={this.state.project.heading}
          description={this.state.project.description}
        />
        <ContainerCard />
      </div>
    );
  }
  render() {
    return this.renderContainerContent();
  }
}

export default ContainerContent;
