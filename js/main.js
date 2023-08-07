/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

"use strict";

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");

    /*------------------
            Portfolio filter
        --------------------*/
    $(".portfolio__filter li").on("click", function () {
      $(".portfolio__filter li").removeClass("active");
      $(this).addClass("active");
    });
    if ($(".portfolio__gallery").length > 0) {
      var containerEl = document.querySelector(".portfolio__gallery");
      var mixer = mixitup(containerEl);
    }
  });

  /*------------------
        Background Set
    --------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  //Masonary
  $(".work__gallery").masonry({
    itemSelector: ".work__item",
    columnWidth: ".grid-sizer",
    gutter: 10,
  });

  /*------------------
		Navigation
	--------------------*/
  $(".mobile-menu").slicknav({
    prependTo: "#mobile-menu-wrap",
    allowParentLinks: true,
  });

  /*------------------
		Hero Slider
	--------------------*/
  $(".hero__slider").owlCarousel({
    loop: true,
    dots: true,
    mouseDrag: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
    margin: 0,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
  });

  var dot = $(".hero__slider .owl-dot");
  dot.each(function () {
    var index = $(this).index() + 1;
    if (index < 10) {
      $(this).html("0").append(index);
    } else {
      $(this).html(index);
    }
  });

  /*------------------
        Testimonial Slider
    --------------------*/
  $(".testimonial__slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 3,
    dots: true,
    dotsEach: 2,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
      992: {
        items: 3,
      },
      768: {
        items: 2,
      },
      320: {
        items: 1,
      },
    },
  });

  /*------------------
        Latest Slider
    --------------------*/
  $(".latest__slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 3,
    dots: true,
    dotsEach: 2,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
      992: {
        items: 3,
      },
      768: {
        items: 2,
      },
      320: {
        items: 1,
      },
    },
  });

  /*------------------
        Logo Slider
    --------------------*/
  $(".logo__carousel").owlCarousel({
    loop: true,
    margin: 100,
    items: 6,
    dots: false,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
      992: {
        items: 5,
      },
      768: {
        items: 4,
      },
      480: {
        items: 3,
      },
      320: {
        items: 2,
      },
    },
  });

  /*------------------
        Video Popup
    --------------------*/
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  /*------------------
        Counter
    --------------------*/
  $(".counter_num3").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
})(jQuery);

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let birthday = "Sep 10, 2021 17:00:00 UTC",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is reached
      if (distance < 0) {
        let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

        headline.innerText = "It's my birthday!";
        countdown.style.display = "none";
        content.style.display = "block";

        clearInterval(x);
      }
      //seconds
    }, 0);
})();
