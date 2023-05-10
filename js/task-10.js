
const input = document.querySelector('#controls input');
const createCollectionBtn = document.querySelector('[data-create]');
const destroyCollectionBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  let boxes = [];
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1){
    const boxEl = document.createElement('div');
    boxEl.style.width = `${boxSize}px`;
    boxEl.style.height = `${boxSize}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.marginBottom = '20px';
    boxes.push(boxEl);
    boxSize += 10;
  }
  return boxesContainer.append(...boxes);
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
  
}

createCollectionBtn.addEventListener('click', () => {
  createBoxes(input.value)
})
destroyCollectionBtn.addEventListener('click', () => {
  destroyBoxes()
})

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.