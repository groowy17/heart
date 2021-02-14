const animateCSS = (element, animation, prefix = 'animate__') =>

  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const nodes = document.querySelectorAll(element);

    for (let node of nodes) {
      node.classList.add(`${prefix}animated`, animationName);
    }

    function handleAnimationEnd(event) {
      event.stopPropagation();
      for (let node of nodes) {
        node.classList.remove(`${prefix}animated`, animationName);
      }
      resolve('Animation ended');
    }
    
    for (let node of nodes) {
      node.addEventListener('animationend', handleAnimationEnd, {once: true});
    }
  });

function random(max){
    return Math.random() * (max - 0) + 0;
}

const heart = document.querySelector('.heart');
const rects = document.querySelectorAll('.rect');

heart.addEventListener('click', (e) => {
    animateCSS('.heart__path', 'pulse').then((message) => {
      for (let rect of rects) {
        rect.style.cssText = '';
      }
    });
    
  for (let rect of rects) {
    let styles = 'transform: translate3d(' + (random(500) - 250) + 'px, ' + (random(300) - 150) + 'px, 0) rotate(' + random(360) + 'deg);\
                  animation: bang 700ms ease-out forwards;\
                  opacity: 0';
    rect.style.cssText = styles.toString();
  }
  });