/*Horizontal-sale ANIMATION */
  const horizontalSaleTL = gsap.timeline();
  horizontalSaleTL
    .fromTo(
      ".horizontal-sale",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    )
    .fromTo(
      ".horizontal-sale .horizontal-sale_percent-number",
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 1
      }
    )
    .fromTo(
      ".horizontal-sale .horizontal-sale_title",
      {
        scale: 0,
      },
      {
        scale: 1,
      },
      ">-1"
    );
    
  let horizontalSaleScene = new ScrollMagic.Scene({
    triggerElement: ".horizontal-sale",
    triggerHook: 1,
    reverse: true,
    offset: 150,
    duration: document.querySelector(".horizontal-sale").offsetHeight,
  })
    .setTween(horizontalSaleTL)
    .addTo(homeController);


  /*products-group ANIMATION */
  const productsGroupTL = gsap.timeline();
  productsGroupTL.fromTo(
    ".collection1 .img-link",
    {
      opacity: 0,
      y: 100
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      duration: .3
    }
  );
    
    
  let productsGroupScene = new ScrollMagic.Scene({
    triggerElement: ".collection1",
    triggerHook: 1,
    reverse: false,
    offset: 0,
    duration: 0
  })
    .setTween(productsGroupTL)
    .addTo(homeController);


/*footer ANIMATION */
  // const footerTL = gsap.timeline();
  // footerTL.fromTo(
  //   "footer .footer-fade-in",
  //   {
  //     opacity: 0,
  //     y: 100,
  //   },
  //   {
  //     opacity: 1,
  //     y: 0,
  //     stagger: 0.3,
  //     duration: 0.3,
  //   }
  // );
    
    
  // let footerScene = new ScrollMagic.Scene({
  //   triggerElement: "footer",
  //   triggerHook: 1,
  //   reverse: false,
  //   offset: 0,
  //   duration: 0,
  // })
  //   .setTween(footerTL)
  //   // .addIndicators()
  //   .addTo(homeController);

// document.querySelector(".close-mobile-menu").addEventListener('click', () => {
//   document.querySelector(".mobile-menu").classList.remove("active");
// });
// document.querySelector(".open-mobile-menu").addEventListener("click", () => {
//   document.querySelector(".mobile-menu").classList.add("active");
// });

  const openMobileMenu = document.querySelector(".open-mobile-menu");
  openMobileMenu.addEventListener("click", () => {
    mobileMenuTL.play();
  });
  const closeMobileMenu = document.querySelector(".close-mobile-menu");
  closeMobileMenu.addEventListener("click", () => {
    mobileMenuTL.reverse();
  });

  const mobileModeOn = () => {
    if (window.innerWidth <= 991) {
      document.querySelector("header .menu").classList.add("mobile-mode");
    } else {
      document.querySelector("header .menu").classList.remove("mobile-mode");
    }
  };
  mobileModeOn();
  window.addEventListener("resize", function (event) {
    mobileModeOn();
  });
  