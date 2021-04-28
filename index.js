let list = document.getElementById("list");
let form = document.getElementById("form");
let field = document.getElementById("field");
let deleteButton = document.querySelector("delete");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  createItem(field.value);
});

function createItem(value) {
  let ourHtml = `<li>${value} <button class="delete">Delete</button></li>`;
  list.insertAdjacentHTML("beforeend", ourHtml);
  field.value = "";
  field.focus();
}
