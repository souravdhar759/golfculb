gsap.to("#nav",{
   backgroundColor :"black",
   height:"80px", 
   duration:0.5,
   scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    start:"top -10%",
    end:"top -11",
    scrub:1
   }
})
gsap.to("#main",{
    backgroundColor :"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start: "top -30%",
        end:"top -80%",
        scrub:2
    }
})
var cur=document.querySelector("#curser");
var curblur=document.querySelector("#curser-blur");
document.addEventListener("mousemove",function (dit) {
    cur.style.left = dit.x +"px"
    cur.style.top = dit.y +"px"
    curblur.style.left = dit.x-100 +"px"
    curblur.style.top = dit.y-100 +"px"
    
})

