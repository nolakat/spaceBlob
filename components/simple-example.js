var box = document.getElementById('box');


TweenMax.staggerFrom(".box", 2, {x: 400, ease: Elastic.easeOut, delay: 0.5, rotation: 360, scale: 2}, 0.2);
TweenMax.to(".box", 0.5, {opacity:0, delay: 2, onComplete: complete});

function complete(){
	console.log("all done 😎");
}