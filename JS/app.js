//-------------------------------------------------------------
function countproject() {
  const cards = document.querySelectorAll(".cards");
  const caunt = document.querySelector(".main-ptn");
  caunt.textContent = "Projects" + "  " + cards.length;
}
countproject();

function removeProject() {
  const remove = document.querySelectorAll(".close");
  remove.forEach(function (ele) {
    ele.addEventListener("click", () => {
      ele.parentElement.remove();
      countproject();
    });
  });
}

//-------------------------------------------------------------

const add_prjct = document.querySelector(".add_prjct");
removeProject();

add_prjct.onclick = function () {
  const card = document.createElement("div");
  const closed = document.createElement("span");
  card.className = "cards";
  closed.className = "close";
  closed.textContent = "X";
  add_prjct.before(card);
  card.prepend(closed);
  countproject();
  removeProject();
};

//-------------------------------------------------------------
const Up = document.querySelector(".btn_UP");
window.onscroll = function () {
  if (window.scrollY >= 700) {
    Up.classList.add("show");
  } else {
    Up.classList.remove("show");
  }
};

Up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
//-------------------------------------------------------------
