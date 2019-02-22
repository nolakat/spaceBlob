jQuery(function($){

    /**
     * Main class for our BWMorphingBlob
     */
     BWMorphingBlob = function( ) {
         this.init();
     };

     BWMorphingBlob.prototype = {

        elements: {

        },

        classes : {

        },

        timing : {

        },

        morphContainer:{
            alignment: 'center', //@todo align-left, align-right , align-center 
            size: ' ', //@todo width and height size should be equal
            backgroundImage: ' ' //@todo 
        },

        morphBlob: [
            {
                // //@todo -- can use MorphSVGPlugin.convertToPath to get d attribute from uploaded svgs if necessary
                path: 'M551,903.5c-52.2,0-99.4-7.1-140.3-21c-40.7-13.9-75.6-34.7-103.7-61.9c-28.2-27.4-49.9-61.4-64.3-101.3 c-14.7-40.4-22.1-87.3-22.1-139.2c0-54.6,5.6-108,16.6-158.7c11.9-54.4,29.5-102.9,52.4-144c25.1-45,55.9-80.2,91.7-104.5 c39.4-26.8,84.7-40.3,134.7-40.3c68.9,0,245.3,4.4,396.3,45.1c72.4,19.5,129.1,44.8,168.8,75.3c46.1,35.4,69.4,78.2,69.4,127.1 c0,49.3-22.2,108.3-64.1,170.4c-38.5,57.1-92.8,115.9-156.8,170.2c-62.6,53-130.5,98.2-196.3,130.7 C664.2,885.4,601.1,903.5,551,903.5z',
                duration: 2,
                easing: Power0.easeNone
            },
            {
                path:  "M504,903.5c-102.2,0-180.1-30.3-231.5-89.9c-49.1-56.9-74-140.2-74-247.6c0-113.3,25.9-224.6,71-305.2 c25.6-45.7,56.9-81.4,93.1-106.2c39.8-27.3,85.3-41.1,135.4-41.1c96.6,0,260.7,17.3,405.2,66.1c112.8,38.1,247.3,107.7,247.3,223.4 c0,49.8-24,105.9-71.4,166.7c-42.3,54.4-102.1,110.5-173,162.3c-67.9,49.6-141.3,92.1-212.4,122.8 ßC620.2,886.7,554.6,903.5,504,903.5z",
                duration: 2,
                easing: Power0.easeNone
            }
        ],

        parallaxObjects: [
            {
                image: ' ',
                positionBottom: '',
                positionLeft: ''
            },
            {

            }
        ],

        init: function(){

            var morphingBlob = document.getElementById("MorphingBlob");

            this.morphLoop(morphingBlob);
            this.hoverMorph(morphingBlob);
            this.parallaxEffects();
            this.spaceAnimation();

        },
        morphLoop: function(blob){

            t = $(blob);
            maskPath = t.find("#mask path");

            var e= new TimelineMax({paused: false,repeat: -1, yoyo: true});
            console.log(this.morphBlob);
        
            //---- Morphs Blob on Loop
            for(i = 0; i < this.morphBlob.length; i++){
                
                    
                    e.to(maskPath, this.morphBlob[i].duration, {
                        morphSVG: this.morphBlob[i].path,
                        ease: Power0.easeNone

                    });
            }
        },
        hoverMorph: function(blob){

                $(blob).on("mousemove", function(o){
                    
                    t = $(this);
                    maskPath = t.find("#mask path");
                    
                    var a = t.outerWidth(), 
                    n = t.outerHeight(),
                    r = t.offset().left - window.pageXOffset,
                    i = t.offset().top - window.pageYOffset,
                    s = (o.clientX - r) / a,
                    l = (o.clientY - i) / n,
                    c = 2 * (s - 0.5),
                    f = 2 * (l - 0.5),
                    d = 10 * c,
                    u = 1.2 - Math.abs(0.2 * c),
                    h = 1.1 - Math.abs(0.2 * f),
                    v = 50 * c,
                    p = 100 * f;
                    
                    TweenLite.to(maskPath, 1, {
                        scaleX: u.toFixed(2),
                        scaleY: h.toFixed(2),
                        x: v.toFixed(),
                        y: p.toFixed(),
                        transformOrigin: "50% 50%"
                    });
                });
                $(blob).on("mouseleave", function(t){
                    TweenLite.to(maskPath, 1, {
                        scaleX: 1,
                        scaleY: 1,
                        x: 0,
                        y: 0,
                        transformOrigin: "50% 50%"
                    });
                });
        },

        parallaxEffects: function(){
            //Parallax Initiation 
            var scene = document.getElementById('parallax-scene');

                var parallaxInstance = new Parallax(scene, {
                    invertX: true,
                    invertY: true,
                    limitX: 26,
                    limitY: 5
                });
        },

        spaceAnimation: function(){

        //Animatons for the space background. Not sure if we're going to use them.
        TweenMax.staggerFrom(".blink", 1, {delay: 0.15, opacity: 0, repeat: -1, yoyo: true}, 0.2);
        TweenMax.to(".bigstar", 1, { repeat: -1, yoyo: true});
        TweenMax.to(".bigstar-circle", 1, { scale: 1.2, repeat: -1, yoyo:true, ease:Back.easeOut, transformOrigin: "center center"});
        TweenMax.to("#comet", 4, {x:1600, y: 1000, scale: 0.25, repeat: -1, repeatDelay: 10, ease: Expo.easeOut});
        
    }
};

    $(function(){

            new BWMorphingBlob();

    });
    
});