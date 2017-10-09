// var firstTime = true;
//
// if(firstTime){
//   console.log('run');
//   var lineDrawing = anime({
//     targets: '#lineDrawing .lines path',
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: 'easeInOutSine',
//     duration: anime.random(1000, 3000),
//     //delay: anime.random(0, 2000),
//     delay: function(el, i) { return i * 250 },
//     direction: 'alternate',
//     loop: false
//
//   });
//   firstTime = false;
// }


var pathEls = document.querySelectorAll('path');



for (var i = 0; i < pathEls.length; i++) {


  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(1000, 2000),
    delay: anime.random(0, 1000),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
}
