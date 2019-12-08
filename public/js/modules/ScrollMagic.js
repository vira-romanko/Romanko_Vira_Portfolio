(() => {
    console.log("I am running on magic!");

    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: "#hero",duration: $("#hero").height()}).setClassToggle("#hero-link", "active").addTo(controller);
})();