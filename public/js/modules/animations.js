var tl = new TimelineMax({repeat:-1, yoyo:false, repeatDelay:0, onComplete:timelineDone, onCompleteParams:["test1", "test2"]});

tl.to(".text", 6, {text:{value:`Keeping the balance between <span id="function">functionality </span> and <span id="creative">creativity</span>`, padSpace:true,  ease:Linear.easeNone},delay:1}); 
//tl.to(".text", 2, {text:{value:`<span id="creative">creativity</span>`, padSpace:true, ease:Linear.easeNone},delay:0});
// tl.to(".text", 5, {text:{value:' Keeping the balance', padSpace:true,  ease:Linear.easeNone},delay:0});

// tl.to(".text", 5, {text:{value:'between', padSpace:true,  ease:Linear.easeNone},delay:1});
// tl.to(".text", 4, {text:{value:`<span id="function">functionality </span> and `, padSpace:true,  ease:Linear.easeNone},delay:0}); tl.to(".text", 2, {text:{value:`<span id="creative">creativity</span>`, padSpace:true, ease:Linear.easeNone},delay:0});

tl.to(".text", 6, {text:{value:`Keeping the balance between <span id="function">functionality </span> and <span id="creative">creativity</span>`, padSpace:true,  ease:Linear.easeNone},delay:0}); 
//tl.to(".text", 2, {text:{value:`<span id="creative">creativity</span>`, padSpace:true, ease:Linear.easeNone},delay:0});



function timelineDone(p1, p2) {
    console.log("timeline done. params: " + p1 + " and " + p2);
}

 
    gsap.registerPlugin(TextPlugin)