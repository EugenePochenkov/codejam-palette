import checkLocalStorage from './checkLocalStorage';

const initialData = {
  tool: 'pencil',
  currentColor: '#008000',
  prevColor: '#e8f741',
  canvas: '',
};

const data = checkLocalStorage(initialData);

const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');

if (!data.canvas) {
  context.fillStyle = data.prevColor;
} else {
  const image = new Image();
  image.onload = () => {
    context.drawImage(image, 0, 0);
  };
  image.src = data.canvas;
}

context.fillRect(0, 0, 512, 512);

const currentTool = document.querySelector(`.${data.tool}`);
currentTool.classList.add('active');

const currentColorEl = document.querySelector('.current .toolbar__color');
currentColorEl.style.backgroundColor = data.currentColor;

const prevColorEl = document.querySelector('.prev .toolbar__color');
prevColorEl.style.backgroundColor = data.prevColor;

export {
  data, canvas, context, currentColorEl, prevColorEl,
};
