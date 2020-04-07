function openMenu() {
  document.querySelector(".top-menu").classList.toggle("open");
  document.querySelector(".navigation").classList.toggle("open");
  document.querySelector(".navigation1").classList.toggle("open");
  document.querySelector(".under-header").classList.toggle("open");
}
document.querySelector(".navigation").onclick = openMenu;
document.querySelector(".navigation1").onclick = openMenu;

let arr_card = [
  {
    relative_url_picture: "libs/card_picture/spring_boot.svg",
    head: "Spring boot",
    description:
      "Takes an optionated view of building Spring application and gets you up running as quickly as possible",
  },
  {
    relative_url_picture: "libs/card_picture/spring_framework.svg",
    head: "Spring framework",
    description:
      "Provides core support for dependency injection, transaction management, web apps, data access, messaging and more.",
  },
  {
    relative_url_picture: "libs/card_picture/spring_cloud_data.svg",
    head: "Spring cloud data flow",
    description:
      "An orchestration service for composable data microservice applications on modern runtimes",
  },
  {
    relative_url_picture: "libs/card_picture/spring_cloud.svg",
    head: "Spring cloud ",
    description:
      "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
  },
  {
    relative_url_picture: "libs/card_picture/spring_data.svg",
    head: "Spring data",
    description:
      "Provides a consistent approach to data access - relational, non relational, map-reduse, and beyong",
  },
  {
    relative_url_picture: "libs/card_picture/spring_integration.svg",
    head: "Spring integration",
    description:
      "Supports the well-known Enterprise Integration Patterns via lightweight messagging and declarative adapters.",
  },
];

function push_arr_card(url_picture, head_push, description_push) {
  arr_card.push({
    relative_url_picture: `${url_picture}`,
    head: `${head_push}`,
    description: `${description_push}`,
  });
}

function max_height_window() {
  let scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  let top_menu1 = document.querySelector(".top-menu");
  top_menu1.style = `height : ${scrollHeight}px`;
}

function add_card_on_page(arr_with_elem) {
  let div_block = document.createElement("div");
  div_block.className = "block";
  for (let item of arr_with_elem) {
    let div_prop_picture = document.createElement("div");
    div_prop_picture.className = "prop-picture";
    div_prop_picture.innerHTML = `<img src="${item.relative_url_picture}" alt="Picture">`;

    let div_description = document.createElement("p");
    div_description.innerHTML = `${item.description}`;

    let div_head = document.createElement("div");
    div_head.className = "mini-head";
    div_head.innerHTML = `${item.head}`;

    let div_frame_text = document.createElement("div");
    div_frame_text.className = "frame-text";
    div_frame_text.insertAdjacentElement("beforeend", div_head);
    div_frame_text.insertAdjacentElement("beforeend", div_description);

    let a_box_card = document.createElement("a");
    a_box_card.href = "";
    a_box_card.className = "box-card";
    a_box_card.insertAdjacentElement("beforeend", div_prop_picture);
    a_box_card.insertAdjacentElement("beforeend", div_frame_text);

    div_block.insertAdjacentElement("beforeend", a_box_card);
  }

  let h1_head = document.createElement("h1");
  h1_head.className = "head";
  h1_head.innerHTML = "Main Projects";

  let p_text = document.createElement("p");
  p_text.className = "text";
  p_text.innerHTML =
    "From configuration to security, web apps to big data – whatever the infrastructure" +
    "needs of your application may be, there is a  <strong>Spring Project</strong> to help" +
    "you build it. Start small and use just what you need – <strong>Spring is modular by design.</strong>";

  let div_main_block = document.querySelector(".main-block");
  div_main_block.insertAdjacentElement("beforeend", h1_head);
  div_main_block.insertAdjacentElement("beforeend", p_text);
  div_main_block.insertAdjacentElement("beforeend", div_block);
}

add_card_on_page(arr_card);
max_height_window();

let locale_HTML = document.querySelector(".main-block").innerHTML;
function findOnPage(status) {
  function findOnPageGo() {
    let input = document.querySelector(".place_for_search").value;
    if (input === "") return;
    let inputRegular = "/" + input + "/gi";
    inputRegular.trim();
    if (input.length < 3) {
      fill_card_exceptions("Enter more 2 symbols");
      openMenu();
      return;
    }
    let searchElemAll = document.querySelectorAll(".frame-text");
    searchElemAll.forEach((elem) => {
      let match = false; // indicator true search
      elem.innerHTML = elem.innerHTML.replace(
        eval(inputRegular),
        '<span style="background-color:yellow;">' + input + "</span>"
      );
      elem.closest("a.box-card").classList.toggle("open");
      match = elem.innerHTML.match(
        eval('/<span style="background-color:yellow;">/gi')
      )
        ? true
        : false;
      if (match) {
        elem.closest("a.box-card").classList.toggle("open");
      }
      match = false;
    });
    document.querySelector(".place_for_search").value = "";

    let cardClassOpen = document.querySelectorAll(".block a.open");

    if (searchElemAll.length === cardClassOpen.length)
      fill_card_exceptions("Nothing found");

    function fill_card_exceptions(content) {
      document.querySelectorAll(".block a").forEach((elem) => {
        if (elem.closest("a.box-card").classList[1])
          elem.closest("a.box-card").classList.toggle("open");
        elem.innerHTML = `<div class = "nothing_card_box"><div class = "nothing_card_box">${content}</div></div>`;
      });
    }

    openMenu();
  }
  function findOnPageBack() {
    document.querySelector(".main-block").innerHTML = locale_HTML;
  }
  if (document.querySelector("form.open")) {
    document.querySelector("form").classList.toggle("open");
  }

  if (status) {
    findOnPageBack();
    findOnPageGo();
    max_height_window();
  } else if (!status) {
    findOnPageBack();
    document.querySelector("form").classList.toggle("open");
    document.querySelector(".place_for_search").value = "";
  }
}
