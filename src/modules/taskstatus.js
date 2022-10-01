export default class ItemStatus {
  static handleCheckbox(e) {
    const { parentElement } = e.target;
    const spanElement = parentElement.children[1];
    const allTodos = JSON.parse(localStorage.getItem('allTodos'));
    const { id } = parentElement.parentElement;

    if (e.target.checked) {
      spanElement.classList.add('completed');

      allTodos.forEach((todo) => {
        if (Number(id) === todo.index) { todo.completed = true; }
      });
    } else {
      spanElement.classList.remove('completed');

      allTodos.forEach((todo) => {
        if (Number(id) === todo.index) { todo.completed = false; }
      });
    }
    localStorage.setItem('allTodos', JSON.stringify(allTodos));
  }
}