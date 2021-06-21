const mouse = document.querySelector('.mouse');
const outermouse = document.querySelector('.outermouse');

// mouse position
window.addEventListener('mousemove', (e) => {
  outermouse.style.top = `${e.clientY}px` ;
  outermouse.style.left = `${e.clientX}px`;
});

// mouse actions on click
window.addEventListener('mousedown', (e) => {
  if(outermouse.style.border != '1px solid red'){
    outermouse.style.border = '1px solid red';
    mouse.style.width = '12px';
    mouse.style.height = '12px';

    setTimeout(() => {
      mouse.style.width = '15px';
      mouse.style.height = '15px';
      outermouse.style.border = '1px solid white'
    }, 100)
  }
});
