const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
hue=0;
ctx.strokeStyle = `hsl(${hue},100%,50%)`;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.fillStyle = 'limegreen';

let isDrawing = false;
let lastX=0;
let lastY=0;

function draw(e){
  if(!isDrawing) return;
  ctx.beginPath();
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  ctx.moveTo(lastX,lastY);
  ctx.lineTo(e.offsetX,e.offsetY);
  ctx.stroke();
  [lastX,lastY]=[e.offsetX,e.offsetY];
  ctx.lineWidth =50;
  hue++;
}

canvas.addEventListener('mousedown',(e)=>{
  isDrawing = true;
  lastX=e.offsetX;
  lastY=e.offsetY;
  hue++;
}
);

canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',()=>isDrawing = false);
canvas.addEventListener('mouseout',()=>isDrawing =false);
