$(document).ready(function () {
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $(".m-menu");
  const tab = $(".tab");

  mMenuBtn.on("click", function () {
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
  });

  $(".tab").on("click", function () {
    if ($(this).hasClass("active")) return;
    $(".tab").removeClass("active");
    $(this).addClass("active");
    $(".tabs-content").removeClass("visible");
    let activeTabContent = $(this).attr("data-target");
    $(activeTabContent).addClass("visible");
  });

  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        navigation: {
          nextEl: ".button-next",
        },
      },
    },
  });
});
