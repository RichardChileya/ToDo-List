import './style.css';

const toDoItems = [
  {
    info: 'Wash the dishes',
    completed: true,
    index: 1,
  },
  {
    info: 'Set Appointment for Tomorrow',
    completed: true,
    index: 2,
  },
  {
    info: 'Work on  my Thesis',
    completed: false,
    index: 3,
  },
];

toDoItems.forEach((val) => {
  const itemsContainer = document.querySelector('.list-container');
  const divElement = document.createElement('div');
  divElement.id = val.index;
  divElement.className = 'list-item';
  divElement.innerHTML = `
  <div class = "info">
      <div class ="inner-info">
        <input type="checkbox">
        <span>${val.info}</span>
        <i class="fa-solid fa-ellipsis-vertical" ></i>
      </div>
  </div>
  `;
  itemsContainer.appendChild(divElement);
});