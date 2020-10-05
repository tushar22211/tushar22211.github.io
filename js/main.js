(function ($) {
  "use strict";
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-header").removeClass("sticky");
      $("#back-top").fadeIn(500);
    } else {
      $("#sticky-header").addClass("sticky");
      $("#back-top").fadeIn(500);
    }
  });
  $(document).ready(function () {
    var menu = $("ul#navigation");
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: "+",
        openedSymbol: "-",
      });
    }
    $(".slider_active").owlCarousel({
      loop: !0,
      margin: 0,
      items: 1,
      autoplay: !0,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      nav: !0,
      dots: !1,
      autoplayHoverPause: !0,
      autoplaySpeed: 800,
      responsive: {
        0: { items: 1, nav: !1 },
        767: { items: 1, nav: !1 },
        992: { items: 1, nav: !1 },
        1200: { items: 1, nav: !1 },
        1600: { items: 1, nav: !0 },
      },
    });
    $(".testmonial_active").owlCarousel({
      loop: !0,
      margin: 0,
      items: 1,
      autoplay: !0,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      nav: !0,
      dots: !1,
      autoplayHoverPause: !0,
      autoplaySpeed: 800,
      responsive: {
        0: { items: 1, dots: !1, nav: !1 },
        767: { items: 1, dots: !1, nav: !1 },
        992: { items: 1, nav: !1 },
        1200: { items: 1, nav: !1 },
        1500: { items: 1 },
      },
    });
    $(".financial_active").owlCarousel({
      loop: !0,
      margin: 0,
      items: 1,
      autoplay: !0,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      nav: !0,
      dots: !1,
      autoplayHoverPause: !0,
      autoplaySpeed: 800,
      responsive: {
        0: { items: 1, nav: !1 },
        767: { items: 1, nav: !1 },
        992: { items: 1 },
        1200: { items: 1 },
        1500: { items: 1 },
      },
    });
    $(".testmonial_active2").owlCarousel({
      loop: !0,
      margin: 0,
      items: 1,
      autoplay: !1,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      nav: !1,
      dots: !0,
      autoplayHoverPause: !0,
      autoplaySpeed: 800,
      center: !0,
      responsive: {
        0: { items: 1, nav: !1 },
        767: { items: 1, nav: !1 },
        992: { items: 1 },
        1200: { items: 1 },
        1500: { items: 1 },
      },
    });
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: !0,
      masonry: { columnWidth: 1 },
    });
    $(".portfolio-menu").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });
    $(".portfolio-menu button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
    new WOW().init();
    $(".counter").counterUp({ delay: 10, time: 10000 });
    $(".popup-image").magnificPopup({
      type: "image",
      gallery: { enabled: !0 },
    });
    $(".img-pop-up").magnificPopup({ type: "image", gallery: { enabled: !0 } });
    $(".popup-video").magnificPopup({ type: "iframe" });
    $.scrollIt({
      upKey: 38,
      downKey: 40,
      easing: "linear",
      scrollTime: 600,
      activeClass: "active",
      onPageChange: null,
      topOffset: 0,
    });
    $.scrollUp({
      scrollName: "scrollUp",
      topDistance: "4500",
      topSpeed: 300,
      animation: "fade",
      animationInSpeed: 200,
      animationOutSpeed: 200,
      scrollText: '<i class="fa fa-angle-double-up"></i>',
      activeOverlay: !1,
    });
    $(".brand-active").owlCarousel({
      loop: !0,
      margin: 30,
      items: 1,
      autoplay: !0,
      nav: !1,
      dots: !1,
      autoplayHoverPause: !0,
      autoplaySpeed: 800,
      responsive: {
        0: { items: 1, nav: !1 },
        767: { items: 4 },
        992: { items: 7 },
      },
    });
    $(".project-active").owlCarousel({
      loop: !0,
      margin: 30,
      items: 1,
      navText: [
        '<i class="Flaticon flaticon-left-arrow"></i>',
        '<i class="Flaticon flaticon-right-arrow"></i>',
      ],
      nav: !0,
      dots: !1,
      responsive: {
        0: { items: 1, nav: !1 },
        767: { items: 1, nav: !1 },
        992: { items: 2, nav: !1 },
        1200: { items: 1 },
        1501: { items: 2 },
      },
    });
    if (document.getElementById("default-select")) {
      $("select").niceSelect();
    }
    $(".details_active").owlCarousel({
      loop: !0,
      margin: 0,
      items: 1,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      nav: !0,
      dots: !1,
      responsive: {
        0: { items: 1, nav: !1 },
        767: { items: 1, nav: !1 },
        992: { items: 1, nav: !1 },
        1200: { items: 1 },
      },
    });
  });
  $(document).ready(function () {
    $(".popup-with-form").magnificPopup({
      type: "inline",
      preloader: !1,
      focus: "#name",
      callbacks: {
        beforeOpen: function () {
          if ($(window).width() < 700) {
            this.st.focus = !1;
          } else {
            this.st.focus = "#name";
          }
        },
      },
    });
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !0,
      live: !0,
      callback: function (box) {},
      scrollContainer: null,
      resetAnimation: !0,
    });
    wow.init();
  });
  function mailChimp() {
    $("#mc_embed_signup").find("form").ajaxChimp();
  }
  mailChimp();
  $("#search_input_box").hide();
  $("#search").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $("#search_input_box").slideUp(500);
  });
  $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
})(jQuery);
