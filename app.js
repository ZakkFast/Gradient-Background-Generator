const css = document.getElementById('css');
const message = document.getElementById('message');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
var body = document.getElementById('gradient');
const rngBtn = document.getElementById('randomizeButton');

const phraseArray = [
  'Robot: Hey, Nice!',
  'Robot: I like those colors!',
  'Robot: Quack',
  'Robot: Rawr xD',
  'Robot: I picked these colors just for you! <3',
  'Robot: I did my best, hope you like it!',
  'Robot: 42!',
  'Robot: 01010001 01110101 01100001 01100011 01101011 00101110 00100000 01001001 00100000 01100001 01101101 00100000 01100001 00100000 01100100 01110101 01100011 01101011 00100001',
  'Robot: Is this a duplicate message?',
  'Robot: Love the color on the right, the one on the left though...',
  'Robot: Dude. Nice.',
  'Robot: Daaaannnnggg (Your name here), that is nice!',
  'Robot: You know.. someone had to type all these messages out.',
  'Robot: Love the color on the left, the one on the right though...',
  'Robot: Press Alt+F4 for a secret!',
  'Robot: It is dangerous to go alone, take this!',
  'Robot: Error(404): Funny text not found.',
  'Robot: What is my purpose?',
  'Robot: We have been trying to reach you regarding your cars extended warranty',
  'Robot: (>".")>',
  'Robot: tee-hee, that tickles',
  'Tim: Um.. How did I get here?',
  "Old Gregg: Whadya doin in my waters?"
];

function pickRandomColor() {
  rng = () => Math.floor(Math.random() * 255);
  randomQuote = phraseArray[Math.floor(Math.random() * phraseArray.length)];

  colorVal1 = `rgb(${rng()}, ${rng()}, ${rng()})`;
  colorVal2 = `rgb(${rng()}, ${rng()}, ${rng()})`;

  body.style.background = `linear-gradient(to right, ${colorVal1}, ${colorVal2})`;
  
  css.innerHTML = body.style.background + ';';

  message.innerHTML = randomQuote;
}

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

  css.innerHTML = body.style.background + ';';
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
rngBtn.addEventListener('click', pickRandomColor);
