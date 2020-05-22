$(function () {
  "use strict";

  //===== Prealoder

  $(window).on("load", function (event) {
    $(".preloader").delay(2200).fadeOut(500);
  });

  //===== Sticky

  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".header-area").removeClass("sticky");
    } else {
      $(".header-area").addClass("sticky");
    }
  });

  //===== Section Menu Active

  var scrollLink = $(".page-scroll");
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 80;
      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });

  //===== close navbar-collapse when a  clicked

  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });

  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".navbar-nav a").on("click", function () {
    $(".navbar-toggler").removeClass("active");
  });

  //===== Back to top

  // Show or hide the sticky footer button

  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });

  //Animate the scroll to yop
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  // =====  carousel
  $(".work-slider").each(function () {
    var swiper = new Swiper(this, {
      slidesPerView: "auto",
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        578: {
          slidesPerView: "auto",
        },
        1199: {
          spaceBetween: 30,
        },
        1700: {
          spaceBetween: 70,
        },
      },
    });
  });

  var swiper = document.getElementsByClassName("brand-slider");
  var nx = document.getElementsByClassName("bn");
  var pr = document.getElementsByClassName("bp");
  new Swiper(swiper, {
    // slidesPerView: "auto",
    slidesPerView: 5,
    navigation: {
      nextEl: nx,
      prevEl: pr,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 5,
      },
    },
  });

  // ====== price change
  var price = {
    logo: [110, 210, 310],
    webDesign: [120, 220, 320],
    uiDesign: [130, 230, 330],
    businessCard: [140, 240, 340],
    advertisement: [150, 250, 350],
    brochure: [160, 260, 360],
    srickers: [170, 270, 370],
    packaging: [180, 280, 380],
    socialMedia: [190, 290, 390],
  };
  // ====== popup
  $("#work .content").click(function (e) {
    e.preventDefault();
    var content = $(this).clone();
    $("#workpopup .slide-content").empty().append(content);
    $("#workpopup").fadeIn(500);
  });
  $("#workpopup .close-btn").click(function (e) {
    e.preventDefault();
    $("#workpopup").fadeOut(500);
  });

  $(".all-services button , .all-services a ").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("id");
    for (var i in price) {
      if (i == id) {
        var value = price[i];
        $(".basic .price").text(value[0]);
        $(".standard .price").text(value[1]);
        $(".enterprise .price").text(value[2]);
      }
    }
    $(".arrow-up , .arrow-down").fadeIn(500);
    $(".work-slider .swiper-slide").hide();
    $(".work-slider ." + id).show();
  });
  $(window).scroll(function () {
    if ($(".arrow-down").attr("style") != null) {
      $(".arrow-up , .arrow-down").fadeOut();
    }
  });
  // ======= from
  $(".contact-from input").on("blur", function () {
    if ($(this).val() == "") {
      $(this).siblings().removeClass("active");
    }
    if ($(this).val() != "") {
      $(this).siblings().addClass("active");
    }
  });

  // =====  Parallax
  var scene = document.getElementById("scene");
  var parallaxInstance = new Parallax(scene);

  //=====  WOW active

  new WOW().init();

  //=====  particles

  if (document.getElementById("particles-1"))
    particlesJS("particles-1", {
      particles: {
        number: {
          value: 40,
          density: {
            enable: !0,
            value_area: 4000,
          },
        },
        color: {
          value: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#fff",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 33,
            height: 33,
          },
        },
        opacity: {
          value: 0.15,
          random: !0,
          anim: {
            enable: !0,
            speed: 0.2,
            opacity_min: 0.15,
            sync: !1,
          },
        },
        size: {
          value: 50,
          random: !0,
          anim: {
            enable: !0,
            speed: 2,
            size_min: 5,
            sync: !1,
          },
        },
        line_linked: {
          enable: !1,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: !0,
          speed: 1,
          direction: "top",
          random: !0,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: {
            enable: !1,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: !1,
            mode: "bubble",
          },
          onclick: {
            enable: !1,
            mode: "repulse",
          },
          resize: !0,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: !0,
    });

  if (document.getElementById("particles-2"))
    particlesJS("particles-2", {
      particles: {
        number: {
          value: 40,
          density: {
            enable: !0,
            value_area: 4000,
          },
        },
        color: {
          value: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#fff",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 33,
            height: 33,
          },
        },
        opacity: {
          value: 0.15,
          random: !0,
          anim: {
            enable: !0,
            speed: 0.2,
            opacity_min: 0.15,
            sync: !1,
          },
        },
        size: {
          value: 50,
          random: !0,
          anim: {
            enable: !0,
            speed: 2,
            size_min: 5,
            sync: !1,
          },
        },
        line_linked: {
          enable: !1,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: !0,
          speed: 1,
          direction: "top",
          random: !0,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: {
            enable: !1,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: !1,
            mode: "bubble",
          },
          onclick: {
            enable: !1,
            mode: "repulse",
          },
          resize: !0,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: !0,
    });
});
