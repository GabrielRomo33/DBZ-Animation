
setTimeout(function(){
    document.getElementById("loading-page").className += "loaded";
    document.getElementById("loader").className += "opzero";
    document.getElementById("lastray").className += " finalray";
    document.body.className += "whitebk";
},6500);

gsap.to("#bg",{
    scrollTrigger:{
        scrub:1
    },
    scale:1.5
})
gsap.to("#Goku",{
    scrollTrigger:{
        scrub:1
    },
    scale:0.5
})
gsap.to("#clouds_1",{
    scrollTrigger:{
        scrub:1
    },
    x:300
})
gsap.to("#clouds_2",{
    scrollTrigger:{
        scrub:1
    },
    x:-300
})
gsap.to("#text",{
    scrollTrigger:{
        scrub:1
    },
    y:500
})

console.log("Hi JS");
