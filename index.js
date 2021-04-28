let list = document.getElementById("list");
let form = document.getElementById("form");
let field = document.getElementById("field");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  createItem(field.value);
});

function createItem(value) {
  let ourHtml = `<li>${value} <button onclick="deleteItem(this)">Delete</button></li>`;
  list.insertAdjacentHTML("beforeend", ourHtml);
  field.value = "";
  field.focus();
}

function deleteItem(itemToDelete) {
  itemToDelete.parentElement.remove();
}
