let top_menu = document.querySelector(".top-menu");
let open_button_top_menu = document.querySelector(".navigation");
let close_button_top_menu = document.querySelector(".navigation1");
let icon_label = document.querySelector(".under-header");
function openMenu() {
  top_menu.classList.toggle("open");
  open_button_top_menu.classList.toggle("open");
  close_button_top_menu.classList.toggle("open");
  icon_label.classList.toggle("open");
}
open_button_top_menu.onclick = openMenu;
close_button_top_menu.onclick = openMenu;

//full height of document
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

let itemOfPicture = document.querySelectorAll(".main-block .block > a");
let arrOfItem = [];
for (let item of itemOfPicture) {
  //add current elem
  arrOfItem.push(item);
}

function getArrOfClone(clone) {
  // it's for my
  let arrClone = []; // i made clone of arrOfItem, for paste
  clone.forEach(item => {
    arrClone.push(item.cloneNode(true));
  });
  return arrClone;
}
let clone = getArrOfClone(arrOfItem);

let currentValueElem = itemOfPicture.length;
clone.forEach(item => {
  arrOfItem.push(item);
}); //add arrClone in arrOfItem(it's main arr)

function addItemOnPage(arr) {
  //add rest elem in html
  let lastElem = document.querySelector(".main-block .block");
  for (let i = currentValueElem; i < arr.length; i++) {
    lastElem.insertAdjacentElement("beforeend", arr[i]);
  }
}
addItemOnPage(arrOfItem);



let locale_HTML = document.body.innerHTML;
function findOnPage(name, status) {  
  let input = document.getElementById(name).value;
  // name = numer.replace(/^\s+/g,'');
  // name = numer.replace(/[ ]{1,}/g,' ');
  if (input.length < 3 && status == true) {
    alert("Need to enter more 3 char");
    function FindOnPageBack() {
      document.body.innerHTML = locale_HTML;
    }
  } else{
    if (status) {
      FindOnPageBack(), findOnPageGo();
    }
    if (!status) FindOnPageBack();
  }
  function findOnPageGo() {
    let elem_search = "/" + input + "/gi";
    let pr = document.body.innerHTML;
    let result_arr = [];
    let result = [];
    result = pr.match(/>(.*?)</g);
    let warning = true;
    for(var i=0;i<result.length;i++) {
    if(result[i].match(eval(elem_search))!=null) {
        warning = false;
      }
    }
    if(warning == true) {
      alert('No results');
    }
    for (var i = 0; i < result.length; i++) {
      result_arr[i] = result[i].replace(
        eval(elem_search),
        '<span style="background-color:yellow;">' + input + "</span>"
      );
    }
    for (var i = 0; i < result.length; i++) {
      pr = pr.replace(result[i], result_arr[i]); //заменяем в переменной с html текст на новый из новогом ассива
    }
    document.body.innerHTML = pr;
  }
  function FindOnPageBack() {
    document.body.innerHTML = locale_HTML;
  }
}
