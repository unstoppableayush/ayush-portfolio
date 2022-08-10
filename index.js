const textAnim = document.querySelector(".profession");

const typewriter = new Typewriter(textAnim, {
loop: true
});

typewriter
.start()
.pauseFor(200)
.typeString("A Coder")
.pauseFor(700)
.deleteChars(5)
.typeString("Web Developer")
.pauseFor(700)
.deleteChars(8)
.changeDeleteSpeed(40)
.typeString("esigner")
.deleteChars(14)
.typeString("An android developer")
.pauseFor(500)




let tl=  gsap.timeline({
    scrollTrigger: {
        trigger: "#skills, #guaranties",
        start: "center bottom",
        toggleActions: "play pause resume reset"
    }
})

tl.from("#skills", {y:150, opacity: 0, duration: 1.5})
tl.from("#guaranties", {y:150, opacity: 0, duration: 1.5})


