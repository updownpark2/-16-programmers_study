import App from "./App.js";

const app = new App({
  $target: document.querySelector("#todo-list"),
  data: [{ text: "onemorechance", isCompleted: false }],
});
