// gsap.to(".page2",{
//     backgroundColor: "blue",
//     scrollTrigger: {
//         trigger: ".page2",
//         scroller: "body",
//         start: "top 80%",
//         scrub: 2
//     }
// })

// ******** page 1 GSAP **********

gsap.from(".page1 h1", {
    opacity: 0,
    y: 100,
    delay: 1,
    duration: 1
})

gsap.from(".navbar .icon", {
    x: -50,
    opacity: 0,
    delay: 1,
    duration: 1
})
gsap.from(".navbar h3", {
    y: -30,
    opacity: 0,
    delay: 1,
    duration: 1,
    stagger: 0.2
})

gsap.from(".navbar", {
    borderBottom: "1px solid white",
    delay: 1,
    duration: 1
})

gsap.from(".page1 .img1", {
    x: -100,
    opacity: 0,
    delay: 1,
    duration: 1
})

gsap.from(".page1 .img2", {
    y: 150,
    opacity: 0,
    delay: 1,
    duration: 1.2
})

gsap.from(".page1 .img3", {
    x: 100,
    opacity: 0,
    delay: 0.8,
    duration: 1
})

// ************* page 2 gsap *************
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2 h1",
        scroller: "body",
        scrub: 1,
    }
})

gsap.from(".page2 .img4", {
    y: 100,
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        scrub: 2,
    }
})

tl.from(".page2 h1", {
    opacity: 0,
    x: 100,
    duration: 1,
})
tl.to(".page2 h1", {
    y: 250,
    duration: 1
})

// *********** page 3 gsap **************

let image = document.querySelector(".page3 .img5")
let text = document.querySelector(".page3 h1")

image.addEventListener("mouseenter", function () {
    image.style.backgroundPosition = "top"
})
text.addEventListener("mouseenter", function () {
    image.style.backgroundPosition = "top"
})

gsap.to("#horizontal .img6", {
    y: 100,
    duration: 3,
    repeat: -1,
    yoyo: Infinity
})

// gsap.to("#horizontal .img8",{
//     y:20,
//     duration:2,
//     repeat:-1,
//     yoyo: Infinity
// })

let time = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top 0%",
        end: "top -310%",
        scrub: 3,
        pin: true
    }
})

time.from(".page3 h1", {
    y: 300
})
    .to(".page3", {
        transform: "translateX(-385%)"
    })
    .from("#horizontal .img9", {
        y: -700
    }, ">")

gsap.from(".page4 h1", {
    y: -300,
    duration: 2,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
        trigger: ".page4",
        scroller: "body",
        start: "top bottom",
        end: "top 0%",
        scrub: 1
    }
})
gsap.from(".page4 .store", {
    y: 300,
    duration: 2,
    rotate: 360,
    scrollTrigger: {
        trigger: ".page4",
        scroller: "body",
        start: "top bottom",
        end: "top 0%",
        scrub: 1
    }
})

// **************** FOOTER part ********************

let logo = document.querySelector(".logo")
let one = document.querySelector("#one")
let two = document.querySelector("#two")

logo.addEventListener("mouseenter", function () {
    one.style.fontStyle = "normal"
    one.style.color = "white"
    one.style.textShadow = "none"
    two.style.fontStyle = "italic"
    two.style.color = "black"
    two.style.textShadow = "1px 1px white, -1px -1px white"
    two.style.transition = "all ease 0.5s"
})
logo.addEventListener("mouseleave", function () {
    one.style.fontStyle = ""
    one.style.color = ""
    one.style.textShadow = ""
    two.style.transform = ""
    two.style.fontStyle = ""
    two.style.color = ""
    two.style.textShadow = ""
    two.style.transition = "all ease 0.5s"
})

// ****** NAVIGATION PART*******
let repeat = 0

let nav3 = document.querySelector("#nav3")

let nav1 = document.querySelector(".navbar #nav1")
nav1.addEventListener("click", function () {

    gsap.to(".navbar h3",{
        y: -150,
        duration: 1.5,
        stagger: 0.1
    })

    gsap.to(".navbar #info1", {
        transform: "translateY(0px)",
        duration: 0.7
    })
})

let exit = document.querySelector("#exit")
exit.addEventListener("click", function () {
    
    gsap.to(".navbar h3",{
        y: 0,
        duration: 0.5,
        stagger: 0.1
    })

    gsap.to("#info1", {
        transform: "translateY(-570px)"
    })
})

exit.addEventListener("mouseenter", function () {
    gsap.to("#line1", {
        rotate: 400,
        duration: 0.5,
        backgroundColor: "black"
    })
    gsap.to("#line2", {
        rotate: -400,
        duration: 0.5
    })
})
exit.addEventListener("mouseleave", function () {
    gsap.to("#line1", {
        rotate: 40,
        duration: 0.5,
        backgroundColor: "pink"
    })
    gsap.to("#line2", {
        rotate: -40,
        duration: 0.5
    })
})

let nav2 = document.querySelector(".navbar #nav2")
nav2.addEventListener("click", function () {

    gsap.to(".navbar h3",{
        y: -150,
        duration: 1.5,
        stagger: 0.1
    })

    gsap.to(".navbar #info2", {
        transform: "translateY(0px)",
        duration: 0.7
    })
})
let exit2 = document.querySelector(".exit2")
exit2.addEventListener("click", function () {

    gsap.to(".navbar h3",{
        y: 0,
        duration: 0.5,
        stagger: 0.1
    })

    gsap.to("#info2", {
        transform: "translateY(-570px)"
    })
})

exit2.addEventListener("mouseenter", function () {
    gsap.to(".cross1", {
        rotate: 400,
        duration: 0.5,
        backgroundColor: "black"
    })
    gsap.to(".cross2", {
        rotate: -400,
        duration: 0.5
    })
})
exit2.addEventListener("mouseleave", function () {
    gsap.to(".cross1", {
        rotate: 40,
        duration: 0.5,
        backgroundColor: "pink"
    })
    gsap.to(".cross2", {
        rotate: -40,
        duration: 0.5
    })
})