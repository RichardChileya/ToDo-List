let todo;
let todos;

class Task {
  constructor() {
    if (JSON.parse(localStorage.getItem('todos')) !== null) {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    } else {
      this.todos = [];
    }
  }

  add() {
    this.todos.push({
      // eslint-disable-next-line no-undef
      Descreption: input.value,
      completed: false,
      id: todos.length + 1,
    });
    localStorage.setItem(todo, JSON.stringify('todos'));
  }
}

export default Task;