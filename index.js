import { Header, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
const router = new Navigo(window.location.origin);
router
  .on({
    ":page": (params) => render(state[capitalize(params.page)]),
    "/": () => render(state.Home),
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Main(st)}
  ${Footer()}
`;

  router.updatePageLinks();
}
render(state.Home);

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
console.log(hamburger, nav);
hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
});
