function openMenu() {
  document.querySelector(".top-menu").classList.toggle("open");
  document.querySelector(".navigation").classList.toggle("open");
  document.querySelector(".navigation1").classList.toggle("open");
  document.querySelector(".under-header").classList.toggle("open");
}
document.querySelector(".navigation").onclick = openMenu;
// document.querySelector(".navigation1").onclick = openMenu;

let itemOfPicture = document.querySelectorAll(".main-block .block > a");
let arrOfItem = [];
for (let item of itemOfPicture) {
  //add current elem
  arrOfItem.push(item);
}

// function getArrOfClone(clone) {
//   // it's for my
//   let arrClone = []; // i made clone of arrOfItem, for paste
//   clone.forEach(item => {
//     arrClone.push(item.cloneNode(true));
//   });
//   return arrClone;
// }
// let clone = getArrOfClone(arrOfItem);

let currentValueElem = itemOfPicture.length;
// clone.forEach(item => {
//   arrOfItem.push(item);
// }); //add arrClone in arrOfItem(it's main arr)

function addItemOnPage(arr) {
  //add rest elem in html
  let lastElem = document.querySelector(".main-block .block");
  for (let i = currentValueElem; i < arr.length; i++) {
    lastElem.insertAdjacentElement("beforeend", arr[i]);
  }
}
addItemOnPage(arrOfItem);

// full height of document
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
  top_menu1.style = `height : ${scrollHeight + 50}px`;
}
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
    searchElemAll.forEach(elem => {
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

    if (searchElemAll.length === cardClassOpen.length) fill_card_exceptions("Nothing found");

    function fill_card_exceptions(content) {
      document.querySelectorAll(".block a").forEach(elem => {
        if(elem.closest("a.box-card").classList[1]) elem.closest("a.box-card").classList.toggle("open");
        elem.innerHTML = `<div class = "nothing_card_box"><div class = "nothing_card_box">${content}</div></div>`;
      });
    }

    max_height_window();
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
  } else if (!status) {
    findOnPageBack();
    document.querySelector("form").classList.toggle("open");
    document.querySelector(".place_for_search").value = "";
  }
}
