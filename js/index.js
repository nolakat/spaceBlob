import 'gsap';
import $ from 'jquery';

var tl= new TimelineMax({paused: false,repeat: -1, yoyo: true});

var blobMask = document.getElementById("mask-01");
var blob = document.getElementById("magic-blob");
TweenMax.staggerFrom(".blink", 1, {delay: 0.15, opacity: 0, repeat: -1, yoyo: true}, 0.2);

		tl.to(blobMask, 3, {morphSVG:"#mask-02", ease:Back.easeOut }, "+=1")
		 .to(blobMask, 3, {morphSVG:"#mask-03", ease:Back.easeOut }, "+=1")
		 .to(blobMask, 3, {morphSVG:"#mask-01", ease:Back.easeOut}, "+=1");
	

		 console.log(tl);

		 blob.addEventListener('mouseenter', mouseEnter);
		 blob.addEventListener('mouseleave', mouseLeave);
		 blob.addEventListener('touchstart', mouseEnter);
		 blob.addEventListener('touchend',   mouseLeave);

		 function restartMotion(){
			console.log("all done 😎");
			tl.restart(); 
		}

		 function mouseEnter(){
			 console.log("mouse enter");
			 tl.stop();
			 TweenMax.to("#SPACEBG_1", 2, {scale: 2});
			 TweenMax.to(blobMask, 2, {morphSVG: "#mask-lg", ease:Back.easeOut, onComplete: function(){
				 console.log('wiggle it');
			 }});
		 }

		 function mouseLeave(){
			TweenMax.to(blobMask, 1, {morphSVG: "#mask-01", onComplete: restartMotion});
		 }
	 
