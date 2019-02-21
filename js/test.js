//  function(e, t, o) {
//     "use strict";
//     function a(e, t) {
//         if (!(e instanceof t))
//             throw new TypeError("Cannot call a class as a function")
//     }
//     var n = function() {
//         function e(e, t) {
//             for (var o = 0; o < t.length; o++) {
//                 var a = t[o];
//                 a.enumerable = a.enumerable || !1,
//                 a.configurable = !0,
//                 "value"in a && (a.writable = !0),
//                 Object.defineProperty(e, a.key, a)
//             }
//         }
//         return function(t, o, a) {
//             return o && e(t.prototype, o),
//             a && e(t, a),
//             t
//         }
//     }()
//       , r = {
//         Planets: function() {
//             function e(t, o) {
//                 a(this, e),
//                 this.svg = t,
//                 this.options = o,
//                 this.mask = t.find("#mask"),
//                 this.maskPath = this.mask.find("path"),
//                 this.space = t.find("#space"),
//                 this.stars = t.find("#stars > *"),
//                 this.nova = t.find("#nova > *"),
//                 this.comet = t.find("#comet"),
//                 this.saturn = t.find("#saturn"),
//                 this.mimas = t.find("#mimas"),
//                 this.tefia = t.find("#tefia"),
//                 this.tl = new TimelineMax({
//                     repeat: -1,
//                     paused: !0
//                 })
//             }
//             return n(e, [{
//                 key: "init",
//                 value: function() {
//                     this.handleStars(),
//                     this.handleNova(),
//                     this.handleComet(),
//                     this.handleMorph(),
//                     this.registerMorphMove()
//                 }
//             }, {
//                 key: "handleStars",
//                 value: function() {
//                     for (var e = 0; e < this.stars.length; e++) {
//                         var t = new TimelineMax({
//                             repeat: -1,
//                             yoyo: !0
//                         });
//                         t.fromTo(this.stars[e], 1 + Math.random(), {
//                             opacity: .2,
//                             delay: Math.random()
//                         }, {
//                             opacity: 1
//                         }),
//                         this.tl.add(t, 0)
//                     }
//                 }
//             }, {
//                 key: "handleNova",
//                 value: function() {
//                     for (var e = 0; e < this.nova.length; e++) {
//                         var t = new TimelineMax({
//                             repeat: -1,
//                             yoyo: !0,
//                             delay: Math.random()
//                         })
//                           , o = $(this.nova[e])
//                           , a = o.find("path")
//                           , n = o.find("polygon")
//                           , r = o.find("rect")
//                           , i = Math.random();
//                         t.set(n, {
//                             transformOrigin: "50% 50%"
//                         }),
//                         t.set(r, {
//                             transformOrigin: "50% 50%"
//                         }),
//                         t.fromTo(a, 1 + i, {
//                             fill: "#9CB7DC"
//                         }, {
//                             fill: "#fff"
//                         }, 0),
//                         t.fromTo(n, 1 + i, {
//                             scaleX: .7
//                         }, {
//                             scaleX: 1
//                         }, 0),
//                         t.fromTo(r, 1 + i, {
//                             scaleY: .7
//                         }, {
//                             scaleY: 1
//                         }, 0),
//                         this.tl.add(t, 0)
//                     }
//                 }
//             }, {
//                 key: "handleComet",
//                 value: function() {
//                     for (var e = new TimelineMax({
//                         repeat: -1
//                     }), t = 0; t < 10; t++) {
//                         var o = 2 * Math.random() + 1;
//                         e.fromTo(this.comet, Math.floor(7 * Math.random()) + 8, {
//                             x: 0,
//                             y: 0,
//                             opacity: 1
//                         }, {
//                             bezier: {
//                                 type: "soft",
//                                 values: [{
//                                     x: 300 * o,
//                                     y: 650
//                                 }, {
//                                     x: 500 * o,
//                                     y: 1300
//                                 }, {
//                                     x: 600 * o,
//                                     y: 1900
//                                 }],
//                                 autoRotate: -45
//                             },
//                             opacity: .2,
//                             delay: 0 === t ? Math.floor(4 * Math.random()) + 3 : Math.floor(10 * Math.random()) + 15
//                         })
//                     }
//                     this.tl.add(e, 0)
//                 }
//             }, {
//                 key: "handleMorph",
//                 value: function() {
//                     var e = new TimelineMax({
//                         repeat: -1,
//                         yoyo: !0
//                     });
//                     e.to(this.maskPath, 2, {
//                         morphSVG: {
//                             shape: "M1467.3,291.3C1224,159.2,885,222,670.6,390.5C415.2,591.3,301,817.8,383.8,1122.4 c99.4,365.9,446,413.3,763.3,383.1c191.2-18.2,458.6-66.9,592-207c131.1-137.7,190.4-273.8,142.3-469.6 C1832.8,631.2,1748.7,444.2,1467.3,291.3z",
//                             precompile: ["M1268.4,271.7 C1016.8,207.6 733.8,248.7 522.6,404.29 268.4,591.5 237.8,967.7 449.1,1199.9 655.1,1426.3 973.9,1544 1277,1539.5 1455.2,1536.9 1615,1497.3 1738.7,1361.3 1860.3,1227.59 1926,1030.5 1874.7,849.59 1783,526 1561,346.3 1268.4,271.7 z", "M1467.3,291.3 C1224,159.19 885,222 670.6,390.5 415.2,591.29 301,817.8 383.8,1122.4 483.2,1488.3 829.8,1535.7 1147.09,1505.5 1338.3,1487.3 1605.69,1438.6 1739.1,1298.5 1870.19,1160.8 1929.5,1024.7 1881.4,828.9 1832.8,631.2 1748.7,444.2 1467.3,291.3 z"]
//                         },
//                         ease: Power0.easeNone
//                     }),
//                     e.to(this.maskPath, 2, {
//                         morphSVG: {
//                             shape: "M1389.3,312c-496.2-60.3-737.9,41.8-900.6,269.8c-123.2,172.7-188.4,456.2-41.3,727.4 c153.6,283.2,430.8,127.5,743.9,122.7c184-2.8,368.7,57.6,536.9-33.6c164.5-89.2,235.9-205.3,222.6-515.8 C1935.3,524.2,1757.2,356.7,1389.3,312z",
//                             precompile: ["M1467.3,291.3 C1224,159.19 885,222 670.6,390.5 415.2,591.29 301,817.8 383.8,1122.4 483.2,1488.3 829.8,1535.7 1147.09,1505.5 1338.3,1487.3 1605.69,1438.6 1739.1,1298.5 1870.19,1160.8 1929.5,1024.7 1881.4,828.9 1832.8,631.2 1748.7,444.2 1467.3,291.3 z", "M1389.3,312 C893.09,251.7 651.4,353.8 488.69,581.79 365.49,754.5 300.29,1038 447.39,1309.19 600.99,1592.4 878.2,1436.69 1191.3,1431.9 1375.3,1429.1 1560,1489.49 1728.19,1398.3 1892.69,1309.09 1964.1,1193 1950.79,882.5 1935.3,524.2 1757.2,356.7 1389.3,312 z"]
//                         },
//                         ease: Power0.easeNone
//                     }),
//                     e.to(this.maskPath, 3, {
//                         morphSVG: {
//                             shape: "M1372,276.8c-259.8-68.5-702.2,106.6-920.3,272.8c-262.5,200-264.7,534.1-46.5,782.2 c212.8,241.9,455.5,84.9,768.5,80.1c184-2.8,386.3,74.6,554.5-16.6c164.5-89.2,298-309,245-502.4 C1878.4,547.3,1674.2,356.5,1372,276.8z",
//                             precompile: ["M1389.3,312 C893.09,251.7 651.4,353.8 488.69,581.79 365.49,754.5 300.29,1038 447.39,1309.19 600.99,1592.4 878.2,1436.69 1191.3,1431.9 1375.3,1429.1 1560,1489.49 1728.19,1398.3 1892.69,1309.09 1964.1,1193 1950.79,882.5 1935.3,524.2 1757.2,356.7 1389.3,312 z", "M1372,276.8 C1112.2,208.3 669.8,383.4 451.7,549.6 189.2,749.6 187,1083.7 405.2,1331.8 618,1573.7 860.7,1416.7 1173.7,1411.9 1357.7,1409.1 1560,1486.5 1728.2,1395.3 1892.7,1306.1 2026.2,1086.3 1973.2,892.9 1878.4,547.29 1674.2,356.5 1372,276.8 z"]
//                         },
//                         ease: Power0.easeNone
//                     }),
//                     this.tl.add(e, 0)
//                 }
//             }, {
//                 key: "registerMorphMove",
//                 value: function() {
//                     var e = this
//                       , t = this.svg;
//                     t.on("mousemove", function(o) {
//                         var a = t.outerWidth()
//                           , n = t.outerHeight()
//                           , r = t.offset().left - window.pageXOffset
//                           , i = t.offset().top - window.pageYOffset
//                           , s = (o.clientX - r) / a
//                           , l = (o.clientY - i) / n
//                           , c = 2 * (s - .5)
//                           , f = 2 * (l - .5)
//                           , d = 10 * c
//                           , u = 1.2 - Math.abs(.2 * c)
//                           , h = 1.1 - Math.abs(.2 * f)
//                           , v = 50 * c
//                           , p = 100 * f;
//                         TweenLite.to(e.maskPath, .7, {
//                             rotation: d.toFixed(2),
//                             scaleX: u.toFixed(2),
//                             scaleY: h.toFixed(2),
//                             x: v.toFixed(),
//                             y: p.toFixed(),
//                             transformOrigin: "50% 50%"
//                         })
//                     }),
//                     t.on("mouseleave", function(t) {
//                         TweenLite.to(e.maskPath, .7, {
//                             rotation: 0,
//                             scaleX: 1,
//                             scaleY: 1,
//                             x: 0,
//                             y: 0,
//                             transformOrigin: "50% 50%"
//                         })
//                     })
//                 }
//             }, {
//                 key: "registerPiecesMove",
//                 value: function(e, t) {
//                     var o = this;
//                     e.on("mousemove", function(t) {
//                         var a = e.outerWidth()
//                           , n = e.outerHeight()
//                           , r = e.offset().left - window.pageXOffset
//                           , i = e.offset().top - window.pageYOffset
//                           , s = (t.clientX - r) / a
//                           , l = (t.clientY - i) / n
//                           , c = 2 * (s - .5)
//                           , f = 2 * (l - .5)
//                           , d = 40 * c
//                           , u = 40 * f
//                           , h = 80 * c - 20
//                           , v = 50 * f - 20
//                           , p = 20 * c
//                           , g = 20 * f;
//                         TweenLite.to(o.mimas, .8, {
//                             x: d.toFixed(),
//                             y: u.toFixed()
//                         }),
//                         TweenLite.to(o.saturn, .5, {
//                             x: h.toFixed(),
//                             y: v.toFixed()
//                         }),
//                         TweenLite.to(o.tefia, 1, {
//                             x: p.toFixed(),
//                             y: g.toFixed()
//                         })
//                     })
//                 }
//             }, {
//                 key: "play",
//                 value: function() {
//                     this.tl.play()
//                 }
//             }, {
//                 key: "pause",
//                 value: function() {
//                     this.tl.pause()
//                 }
//             }]),
//             e
//         }(),
//         Man: function() {
//             function e(t, o) {
//                 a(this, e),
//                 this.svg = t,
//                 this.options = o,
//                 this.mask = t.find("#mask"),
//                 this.maskPath = this.mask.find("path"),
//                 this.space = t.find("#space"),
//                 this.stars = t.find("#stars > *"),
//                 this.nova = t.find("#nova > *"),
//                 this.comet = t.find("#comet"),
//                 this.logo = t.find("#logo"),
//                 this.man = t.find("#man"),
//                 this.tl = new TimelineMax({
//                     repeat: -1,
//                     paused: !0
//                 }),
//                 this.init()
//             }
//             return n(e, [{
//                 key: "init",
//                 value: function() {
//                     this.handleStars(),
//                     this.handleNova(),
//                     this.handleComet(),
//                     this.handleMorph(),
//                     this.registerMorphMove()
//                 }
//             }, {
//                 key: "handleStars",
//                 value: function() {
//                     for (var e = 0; e < this.stars.length; e++) {
//                         var t = new TimelineMax({
//                             repeat: -1,
//                             yoyo: !0
//                         });
//                         t.fromTo(this.stars[e], 1 + Math.random(), {
//                             opacity: .2,
//                             delay: Math.random()
//                         }, {
//                             opacity: 1
//                         }),
//                         this.tl.add(t, 0)
//                     }
//                 }
//             }, {
//                 key: "handleNova",
//                 value: function() {
//                     for (var e = 0; e < this.nova.length; e++) {
//                         var t = new TimelineMax({
//                             repeat: -1,
//                             yoyo: !0,
//                             delay: Math.random()
//                         })
//                           , o = $(this.nova[e])
//                           , a = o.find("path")
//                           , n = o.find("polygon")
//                           , r = o.find("rect")
//                           , i = Math.random();
//                         t.set(n, {
//                             transformOrigin: "50% 50%"
//                         }),
//                         t.set(r, {
//                             transformOrigin: "50% 50%"
//                         }),
//                         t.fromTo(a, 1 + i, {
//                             fill: "#9CB7DC"
//                         }, {
//                             fill: "#fff"
//                         }, 0),
//                         t.fromTo(n, 1 + i, {
//                             scaleX: .7
//                         }, {
//                             scaleX: 1
//                         }, 0),
//                         t.fromTo(r, 1 + i, {
//                             scaleY: .7
//                         }, {
//                             scaleY: 1
//                         }, 0),
//                         this.tl.add(t, 0)
//                     }
//                 }
//             }, {
//                 key: "handleComet",
//                 value: function() {
//                     for (var e = new TimelineMax({
//                         repeat: -1
//                     }), t = 0; t < 10; t++) {
//                         var o = 2 * Math.random() + 1;
//                         e.fromTo(this.comet, Math.floor(7 * Math.random()) + 8, {
//                             x: 0,
//                             y: 0,
//                             opacity: 1
//                         }, {
//                             bezier: {
//                                 type: "soft",
//                                 values: [{
//                                     x: -300 * o,
//                                     y: 650
//                                 }, {
//                                     x: -500 * o,
//                                     y: 1300
//                                 }, {
//                                     x: -600 * o,
//                                     y: 1900
//                                 }],
//                                 autoRotate: 225
//                             },
//                             opacity: .2,
//                             delay: 0 === t ? Math.floor(4 * Math.random()) + 3 : Math.floor(10 * Math.random()) + 15
//                         })
//                     }
//                     this.tl.add(e, 0)
//                 }
//             }, {
//                 key: "handleMorph",
//                 value: function() {
//                     var e = new TimelineMax({
//                         repeat: -1,
//                         yoyo: !0
//                     });
//                     e.to(this.maskPath, 2, {
//                         morphSVG: {
//                             shape: "M1792.9,1473.3c-336.9,339.8-996.2,472.6-1326.1,162c-305.5-287.5-243.8-908.1,99.9-1163.1 c341.1-253.1,965.2-201.1,1169.2,26C1975.9,765.2,1981.1,1283.4,1792.9,1473.3z",
//                             precompile: ["M1525.2,1694.9 C1073.9,1853.9 354.2,1832.3 223.2,1398.6 89.5,955.7 385.4,550.5 755.4,335.4 1125.4,120.29 1772.9,211.09 1944.8,715.9 2116.8,1220.59 1776.4,1606.5 1525.2,1694.9 z", "M1792.9,1473.3 C1456,1813.1 796.7,1945.9 466.8,1635.3 161.3,1347.8 223,727.2 566.7,472.2 907.8,219.1 1531.9,271.1 1735.9,498.2 1975.9,765.2 1981.1,1283.4 1792.9,1473.3 z"]
//                         },
//                         ease: Power0.easeNone
//                     }),
//                     e.to(this.maskPath, 2, {
//                         morphSVG: {
//                             shape: "M757.8,283.8c466.4-106.7,1179-3.5,1259.9,442.2c82.6,455.2-257.4,824.2-649.5,995.9 s-1025,7.9-1138.5-513.1S498.2,343.2,757.8,283.8z",
//                             precompile: ["M566.7000000000002,472.20000000000005 C907.8,219.1 1531.9,271.1 1735.9,498.2 1975.9,765.2 1981.1,1283.4 1792.9,1473.3 1456,1813.1 796.7,1945.9 466.8,1635.3 161.3,1347.8 223,727.2 566.7,472.2 z", "M757.8,283.8 C1224.19,177.1 1936.8,280.3 2017.7,726 2100.3,1181.2 1760.3,1550.2 1368.2,1721.9 976.09,1893.6 343.2,1729.8 229.7,1208.8 116.2,687.8 498.2,343.2 757.8,283.8 z"]
//                         },
//                         ease: Power0.easeNone
//                     }),
//                     e.to(this.maskPath, 3, {
//                         morphSVG: {
//                             shape: "M423.6,589.3C784.2,271.2,1431.1,94.4,1720.9,429.2c295.9,341.8,375,780.1-53.2,1068.9 c-353.8,238.7-903.2,508.8-1258.7,126.8S222.9,766.3,423.6,589.3z",
//                             precompile: ["M757.8,283.8 C1224.19,177.1 1936.8,280.3 2017.7,726 2100.3,1181.2 1760.3,1550.2 1368.2,1721.9 976.09,1893.6 343.2,1729.8 229.7,1208.8 116.2,687.8 498.2,343.2 757.8,283.8 z", "M423.6,589.3 C784.2,271.2 1431.1,94.4 1720.9,429.2 2016.8,771 2095.9,1209.3 1667.7,1498.1 1313.9,1736.8 764.5,2006.9 409,1624.9 53.5,1242.9 222.9,766.3 423.6,589.29 z"]
//                         },
//                         ease: Power0.easeNone
//                     }),
//                     this.tl.add(e, 0)
//                 }
//             }, {
//                 key: "registerMorphMove",
//                 value: function() {
//                     var e = this
//                       , t = this.svg;
//                     t.on("mousemove", function(o) {
//                         var a = t.outerWidth()
//                           , n = t.outerHeight()
//                           , r = t.offset().left - window.pageXOffset
//                           , i = t.offset().top - window.pageYOffset
//                           , s = (o.clientX - r) / a
//                           , l = (o.clientY - i) / n
//                           , c = 2 * (s - .5)
//                           , f = 2 * (l - .5)
//                           , d = 10 * c
//                           , u = 1.2 - Math.abs(.2 * c)
//                           , h = 1.1 - Math.abs(.2 * f)
//                           , v = 50 * c
//                           , p = 100 * f;
//                         TweenLite.to(e.maskPath, .7, {
//                             rotation: d.toFixed(2),
//                             scaleX: u.toFixed(2),
//                             scaleY: h.toFixed(2),
//                             x: v.toFixed(),
//                             y: p.toFixed(),
//                             transformOrigin: "50% 50%"
//                         })
//                     }),
//                     t.on("mouseleave", function(t) {
//                         TweenLite.to(e.maskPath, .7, {
//                             rotation: 0,
//                             scaleX: 1,
//                             scaleY: 1,
//                             x: 0,
//                             y: 0,
//                             transformOrigin: "50% 50%"
//                         })
//                     })
//                 }
//             }, {
//                 key: "registerPiecesMove",
//                 value: function(e) {
//                     var t = this;
//                     e.on("mousemove", function(o) {
//                         var a = e.outerWidth()
//                           , n = e.outerHeight()
//                           , r = e.offset().left - window.pageXOffset
//                           , i = e.offset().top - window.pageYOffset
//                           , s = (o.clientX - r) / a
//                           , l = (o.clientY - i) / n
//                           , c = 2 * (s - .5)
//                           , f = 2 * (l - .5)
//                           , d = 80 * c
//                           , u = 50 * f
//                           , h = 40 * c - 20
//                           , v = 40 * f - 20;
//                         TweenLite.to(t.man, 1.1, {
//                             x: d.toFixed(),
//                             y: u.toFixed()
//                         }),
//                         TweenLite.to(t.logo, 1.4, {
//                             x: h.toFixed(),
//                             y: v.toFixed()
//                         })
//                     })
//                 }
//             }, {
//                 key: "play",
//                 value: function() {
//                     this.tl.play()
//                 }
//             }, {
//                 key: "pause",
//                 value: function() {
//                     this.tl.pause()
//                 }
//             }]),
//             e
//         }(),
//         Dog: function() {
//             function e(t, o) {
//                 a(this, e),
//                 this.svg = t,
//                 this.options = o,
//                 this.mask = t.find("#mask"),
//                 this.maskPath = this.mask.find("path"),
//                 this.space = t.find("#space"),
//                 this.stars = t.find("#stars > *"),
//                 this.nova = t.find("#nova > *"),
//                 this.comet = t.find("#comet"),
//                 this.dog = t.find("#dog"),
//                 this.tl = new TimelineMax({
//                     repeat: -1,
//                     paused: !0
//                 }),
//                 this.init()
//             }
//             return n(e, [{
//                 key: "init",
//                 value: function() {
//                     this.handleStars(),
//                     this.handleNova(),
//                     this.handleComet(),
//                     this.handleMorph(),
//                     this.registerMorphMove()
//                 }
//             }, {
//                 key: "handleStars",
//                 value: function() {
//                     for (var e = 0; e < this.stars.length; e++) {
//                         var t = new TimelineMax({
//                             repeat: -1,
//                             yoyo: !0
//                         });
//                         t.fromTo(this.stars[e], 1 + Math.random(), {
//                             opacity: .2,
//                             delay: Math.random()
//                         }, {
//                             opacity: 1
//                         }),
//                         this.tl.add(t, 0)
//                     }
//                 }
//             }, {
//                 key: "handleNova",
//                 value: function() {
//                     for (var e = 0; e < this.nova.length; e++) {
//                         var t = new TimelineMax({
//                             repeat: -1,
//                             yoyo: !0,
//                             delay: Math.random()
//                         })
//                           , o = $(this.nova[e])
//                           , a = o.find("path")
//                           , n = o.find("polygon")
//                           , r = o.find("rect")
//                           , i = Math.random();
//                         t.set(n, {
//                             transformOrigin: "50% 50%"
//                         }),
//                         t.set(r, {
//                             transformOrigin: "50% 50%"
//                         }),
//                         t.fromTo(a, 1 + i, {
//                             fill: "#9CB7DC"
//                         }, {
//                             fill: "#fff"
//                         }, 0),
//                         t.fromTo(n, 1 + i, {
//                             scaleX: .7
//                         }, {
//                             scaleX: 1
//                         }, 0),
//                         t.fromTo(r, 1 + i, {
//                             scaleY: .7
//                         }, {
//                             scaleY: 1
//                         }, 0),
//                         this.tl.add(t, 0)
//                     }
//                 }
//             }, {
//                 key: "handleComet",
//                 value: function() {
//                     for (var e = new TimelineMax({
//                         repeat: -1
//                     }), t = 0; t < 10; t++) {
//                         var o = 2 * Math.random() + 1;
//                         e.fromTo(this.comet, Math.floor(7 * Math.random()) + 8, {
//                             x: 0,
//                             y: 0,
//                             opacity: 1
//                         }, {
//                             bezier: {
//                                 type: "soft",
//                                 values: [{
//                                     x: -300 * o,
//                                     y: 650
//                                 }, {
//                                     x: -500 * o,
//                                     y: 1300
//                                 }, {
//                                     x: -600 * o,
//                                     y: 1900
//                                 }],
//                                 autoRotate: 225
//                             },
//                             opacity: .2,
//                             delay: 0 === t ? Math.floor(4 * Math.random()) + 3 : Math.floor(10 * Math.random()) + 15
//                         })
//                     }
//                     this.tl.add(e, 0)
//                 }
//             }, {
//                 key: "handleMorph",
//                 value: function() {
//                     var e = new TimelineMax({
//                         repeat: -1,
//                         yoyo: !0
//                     });
//                     e.to(this.maskPath, 2, {
//                         morphSVG: {
//                             shape: "M802.8,543.2C47.3,723.3,34.1,1943.2,1084.6,1855.5c768.3-64.2,1000.3-778.4,657.5-1117.3 C1530.7,529.2,1138.1,463.2,802.8,543.2z",
//                             precompile: ["M782.4,517.4 C43.8,757.8 -11.2,1658.2 1026.2,1845.9 2063.6,2033.6 2122.69,1174.6 1779.8,835.7 1568.4,626.6 1277,356.4 782.4,517.4 z", "M802.8,543.2 C47.3,723.3 34.1,1943.2 1084.59,1855.5 1852.9,1791.3 2084.89,1077.09 1742.1,738.2 1530.7,529.2 1138.09,463.2 802.8,543.2 z"]
//                         },
//                         ease: Power0.easeNone
//                     }),
//                     e.to(this.maskPath, 2, {
//                         morphSVG: {
//                             shape: "M753,483.4c-664,81.6-751.8,1262.1,264,1400c1032.5,140.1,1078.9-674.2,762.8-1047.8 C1587.8,608.7,1252.1,422.1,753,483.4z",
//                             precompile: ["M802.8,543.2 C47.3,723.3 34.1,1943.2 1084.59,1855.5 1852.9,1791.3 2084.89,1077.09 1742.1,738.2 1530.7,529.2 1138.09,463.2 802.8,543.2 z", "M753,483.4 C89,565 1.2,1745.5 1017,1883.4 2049.5,2023.5 2095.9,1209.2 1779.8,835.6 1587.8,608.7 1252.09,422.1 753,483.4 z"]
//                         },
//                         ease: Power0.easeNone
//                     }),
//                     e.to(this.maskPath, 3, {
//                         morphSVG: {
//                             shape: "M790.8,570.2C65.5,847.8-26.6,1901.4,1026.2,1845.9c1090.7-57.6,1124.8-662,818.8-1034.4 C1516,410.9,1033.8,477.2,790.8,570.2z",
//                             precompile: ["M753,483.4 C89,565 1.2,1745.5 1017,1883.4 2049.5,2023.5 2095.9,1209.2 1779.8,835.6 1587.8,608.7 1252.09,422.1 753,483.4 z", "M790.8,570.2 C65.5,847.8 -26.6,1901.4 1026.2,1845.9 2116.9,1788.3 2151,1183.9 1845,811.5 1516,410.9 1033.8,477.2 790.8,570.2 z"]
//                         },
//                         ease: Power0.easeNone
//                     }),
//                     this.tl.add(e, 0)
//                 }
//             }, {
//                 key: "registerMorphMove",
//                 value: function() {
//                     var e = this
//                       , t = this.svg;
//                     t.on("mousemove", function(o) {
//                         var a = t.outerWidth()
//                           , n = t.outerHeight()
//                           , r = t.offset().left - window.pageXOffset
//                           , i = t.offset().top - window.pageYOffset
//                           , s = (o.clientX - r) / a
//                           , l = (o.clientY - i) / n
//                           , c = 2 * (s - .5)
//                           , f = 2 * (l - .5)
//                           , d = 10 * c
//                           , u = 1.2 - Math.abs(.2 * c)
//                           , h = 1.1 - Math.abs(.2 * f)
//                           , v = 50 * c
//                           , p = 100 * f;
//                         TweenLite.to(e.maskPath, .7, {
//                             rotation: d.toFixed(2),
//                             scaleX: u.toFixed(2),
//                             scaleY: h.toFixed(2),
//                             x: v.toFixed(),
//                             y: p.toFixed(),
//                             transformOrigin: "50% 50%"
//                         })
//                     }),
//                     t.on("mouseleave", function(t) {
//                         TweenLite.to(e.maskPath, .7, {
//                             rotation: 0,
//                             scaleX: 1,
//                             scaleY: 1,
//                             x: 0,
//                             y: 0,
//                             transformOrigin: "50% 50%"
//                         })
//                     })
//                 }
//             }, {
//                 key: "registerPiecesMove",
//                 value: function(e) {
//                     var t = this;
//                     e.on("mousemove", function(o) {
//                         var a = e.outerWidth()
//                           , n = e.outerHeight()
//                           , r = e.offset().left - window.pageXOffset
//                           , i = e.offset().top - window.pageYOffset
//                           , s = (o.clientX - r) / a
//                           , l = (o.clientY - i) / n
//                           , c = 2 * (s - .5)
//                           , f = 2 * (l - .5)
//                           , d = 80 * c
//                           , u = 50 * f;
//                         TweenLite.to(t.dog, 1.1, {
//                             x: d.toFixed(),
//                             y: u.toFixed()
//                         })
//                     })
//                 }
//             }, {
//                 key: "play",
//                 value: function() {
//                     this.tl.play()
//                 }
//             }, {
//                 key: "pause",
//                 value: function() {
//                     this.tl.pause()
//                 }
//             }]),
//             e
//         }()
//     };
//     e.exports = r
// }