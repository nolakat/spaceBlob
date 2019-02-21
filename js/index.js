import 'gsap';

TweenMax.staggerFrom(".blink", 1, {delay: 0.15, opacity: 0, repeat: -1, yoyo: true}, 0.2);

TweenMax.to(".bigstar", 1, { repeat: -1, yoyo: true});
TweenMax.to(".bigstar-circle", 1, {scale: 1.2, repeat: -1, yoyo:true, ease:Back.easeOut, transformOrigin: "center center"
});

TweenMax.to("#comet", 4, {x:1600, y: 1000, scale: .25, repeat: -1, repeatDelay: 10, ease: Expo.easeOut});

		 var scene = document.getElementById('scene');
		 var parallaxInstance = new Parallax(scene, {
			invertX: true,
			invertY: true,
			limitX: 26,
			limitY: 5
		 });