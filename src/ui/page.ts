const fonts = ['Arial', 'Georgia', 'Times New Roman', 'Courier New', 'Verdana', 'Comic Sans MS'];
let currentFontIndex = 0;

const titleElement = document.createElement('h1');
titleElement.textContent = 'Sidequest Counter';
titleElement.style.textAlign = 'center';
titleElement.style.marginTop = '50px';
titleElement.style.fontSize = '48px';
titleElement.style.transition = 'font-family 0.5s ease-in-out';

document.body.style.backgroundColor = '#f0f0f0';
document.body.appendChild(titleElement);

setInterval(() => {
  currentFontIndex = (currentFontIndex + 1) % fonts.length;
  titleElement.style.fontFamily = fonts[currentFontIndex];
}, 5000);

titleElement.style.fontFamily = fonts[currentFontIndex];


// UI Page //