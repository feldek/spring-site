import React from "react";
import Container_heading from "./container_heading";
// class Main extends React.Component {
//   state = {
//     project: {
//       heading: "Projects",
//       description:
//         "From configuration to security, web apps to big data—whatever the infrastructure needs of your application may be, there is a Spring Project to help you build it. Start small and use just what you need—Spring is modular by design.",
//     },
//   };
//   renderMain(){
//     return(
//       <Container_heading 
//       heading={this.state.project.heading}
//       description ={this.state.project.description}
//       />
//     )
//   }
//   render(){
//     return this.renderMain();
//   }
// }

let Main=()=>{
  state = {
    project: {
      heading: "Projects",
      description:
        "From configuration to security, web apps to big data—whatever the infrastructure needs of your application may be, there is a Spring Project to help you build it. Start small and use just what you need—Spring is modular by design.",
    },
  };
  return(
    <Container_heading 
      heading={this.state.project.heading}
      description ={this.state.project.description}
      />
  )
}
export default Main;
