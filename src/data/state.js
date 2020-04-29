let reRenderEntireTree = ()=>{
  console.log('asd');
}


let state = {
  menu: {
    menu_list: [
      "Home",
      "Projects",
      "Guides",
      "Blog",
      "Training & certification",
    ],
    input_search_text: "",
  },
  content: {
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
  },
};
window.state = state;

// export let renderCard = () => {
//   let new_Card = {
//     relative_url_picture: "storage/card_picture/spring_integration.svg",
//     head: "Spring integration",
//     description:
//       "Supports the well-known Enterprise Integration Patterns via lightweight messagging and declarative adapters.",
//   };
//   state.content.arr_card.push(new_Card);
// };

export let updateInputSearchText = (newText) => {
  state.menu.input_search_text = newText;
  reRenderEntireTree(state);
};

export let showSearchCard = () => {
  let reg_exp_input_search_text = new RegExp(
    `${state.menu.input_search_text}`,
    "gi"
  );
  let filter_arr = state.content.arr_card.filter((card) => {
    return (
      card.head.match(reg_exp_input_search_text) ||
      card.description.match(reg_exp_input_search_text)
    );
  });
  filter_arr.map((card) => {
    card.head = card.head.replace(
      reg_exp_input_search_text,
      '<span style="background-color:yellow;">' +
        state.menu.input_search_text +
        "</span>"
    );
    card.description = card.description.replace(
      reg_exp_input_search_text,
      '<span style="background-color:yellow;">' +
        state.menu.input_search_text +
        "</span>"
    );
  });
  state.content.arr_card = [];
  filter_arr.forEach(card =>{
    state.content.arr_card.push(card)
  })
  reRenderEntireTree();
};

export let subscribe=(observer)=>{
  reRenderEntireTree = observer;
}

export default state;
