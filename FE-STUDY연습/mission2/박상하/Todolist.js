function Todolist(data) {
  const div = document.querySelector("#todo-list");
  const div2 = document.createElement("div");
  div.appendChild(div2);
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const button = document.querySelector(".BTN");
  this.data = data;

  this.render = function () {
    div2.innerHTML = `<ul>
    ${this.data
      .map(function (item, index) {
        return ` ${
          item.isComlited
            ? `<s><li id=${index}>${item.text}<button class="BTN">๐</button></li></s>`
            : `<li id=${index}>${item.text}<button class="BTN">๐</button></li>`
        } `;
      })
      .join("")}
    
    </ul>`;
  };
  //์ด์  ๋ฐ์ดํฐ ์ถ๊ฐ

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let inputValue = input.value;
    todolist.addTodo(inputValue);
    input.value = "";
  });

  div2.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
      const LiId = event.target.parentElement.id;
      todolist.removeTodo(LiId);
    }
    if (event.target.nodeName === "LI") {
      const LiId2 = event.target.id;
      todolist.invert(LiId2);
    }
  });

  this.setState = function (newdata) {
    this.data = newdata;
  };

  this.addTodo = function (value) {
    const plusdata2 = [{ text: value, isComlited: false }];
    const plusdata = [...this.data, ...plusdata2]; //this๋ฅผ ๋ถ์ฌ์ผ ํ ์์ ์ data๊ฐ ๋๋ค
    this.setState(plusdata);
    this.render();
  };

  this.removeTodo = function (LiId) {
    const removedata = this.data.filter(function (item, index) {
      return index !== LiId * 1;
    });
    this.setState(removedata);
    this.render();
  };

  this.invert = function (LiId2) {
    this.data[LiId2].isComlited = !this.data[LiId2].isComlited;
    this.render();
  };
}
