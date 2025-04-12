var TL=gsap.timeline({
    scrollTrigger:{
      trigger:"#s1", 
      start:"top 115%",
      end:"bottom 90%",
      scrub:true,
    }
})
var TLFirst=gsap.timeline({
    scrollTrigger:{
      trigger:"#s2", 
      start:"top 75%",
      end:"bottom 90%",
      scrub:true,
    }
})
var TLtwo=gsap.timeline({
    scrollTrigger:{
      trigger:"#s3", 
      start:"top 75%",
      end:"bottom 90%",
      scrub:true,
    }
})
TL.to(".hero-center-image",{
    top:"134%",
    width:"32vw",
    rotate:"0",
    left:"53%",
})
TLFirst.to(".hero-center-image",{
    top:"235%",
    width:"26vw",
    rotate:"0",
    left:"28%",
})
TLtwo.to(".hero-center-image",{
    top:"318%",
    width:"38vw",
    rotate:"35deg",
    left:"38%",
})