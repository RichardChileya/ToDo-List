import Action from './modules/tasks.js';
import './style.css';

// Display list of todo items in localstorage
Action.displaySavedItems();

const enterInput = document.querySelector('#user__input__btn');
const enterField = document.querySelector('#user__input__field');
const clearAll = document.querySelector('#clear__all');

const addItemToDomOnEnter = () => {
  const inputField = document.querySelector('#user__input__field');
  const allTodos = JSON.parse(localStorage.getItem('allTodos')) || [];
  const { value } = inputField;
  if (value) {
    const itemObj = {
      description: value,
      completed: false,
      index: allTodos.length + 1,
    };

    Action.addItemToDom(itemObj);
    const updatedTodos = [...allTodos, itemObj];
    localStorage.setItem('allTodos', JSON.stringify(updatedTodos));

    inputField.value = '';
  }
};

enterInput.addEventListener('click', addItemToDomOnEnter);

enterField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addItemToDomOnEnter();
    event.preventDefault();
  }
});

clearAll.addEventListener('click', () => {
  const completedItem = document.querySelectorAll('.completed');
  completedItem.forEach((val) => val.parentElement.parentElement.remove());

  const allTodos = JSON.parse(localStorage.getItem('allTodos'));
  const filteredTodos = allTodos.filter((val) => val.completed === false);
  filteredTodos.forEach((val, i) => {
    val.index = i + 1;
  });
  if (filteredTodos.length > 0) {
    window.location.reload();
  }
  localStorage.setItem('allTodos', JSON.stringify(filteredTodos));
});