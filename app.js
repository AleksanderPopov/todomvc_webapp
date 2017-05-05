let addTodo = function(event) {
  let input = event.target;
  let text = input.value.trim();

  if (event.which === 13 && text !== '') {
    let liElem = document.createElement('li');
    liElem.textContent = text;
    document.getElementById('todo-list').appendChild(liElem);
    input.value = '';
  }
};

let teachNewTodoFieldToAddTodos = function() {
  document.getElementById('new-todo').addEventListener('keyup', addTodo);
};

document.addEventListener('DOMContentLoaded', teachNewTodoFieldToAddTodos);
