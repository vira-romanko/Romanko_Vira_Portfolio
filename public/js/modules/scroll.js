(() => {
  const scrollTo = document.querySelectorAll(".scrollTo");
  console.log("fired", scrollTo.textContent);

  scrollTo.forEach(e => e.addEventListener("click", scrollto));

  function scrollto() {
    TweenLite.to(window, 0.5, {
      scrollTo: { y: `.${this.textContent}`, offsetY: 0 }
    });
  }

  document.querySelector("#to-top").addEventListener("click", function() {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: "header",
        offsetY: 70
      }
    })
  });
      
    
})();
