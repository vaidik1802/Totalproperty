// ===== MOBILE DRAWER =====
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("drawerOverlay");

// OPEN
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    if (overlay) overlay.classList.add("active");
  });
}

// CLOSE BUTTON
if (closeMenu) {
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    if (overlay) overlay.classList.remove("active");
  });
}

// CLICK OUTSIDE
if (overlay) {
  overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    overlay.classList.remove("active");
  });
}


// ===== OWL CAROUSEL =====
$(document).ready(function () {
$(".hero-carousel").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 1200,
  dots: true,
  nav: false,
  dotsClass: 'custom-dots',   // 👈 custom class
  dotClass: 'custom-dot'      // 👈 each dot class
});

  var owl = $(".division-carousel");

  owl.owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      992: { items: 3 },
      1200: { items: 4 }
    }
  });

  // CUSTOM BUTTONS
  $(".nextBtn").click(function () {
    owl.trigger("next.owl.carousel");
  });

  $(".prevBtn").click(function () {
    owl.trigger("prev.owl.carousel");
  });

 var $carousel = $("#services-carousel");
        $carousel.owlCarousel({
          loop: true,
          margin: 16,
          nav: false,
          dots: true,
          autoplay: true,
          autoplayTimeout: 4000,
          autoplayHoverPause: true,
          responsive: {
            0: { items: 1 },
            576: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 },
          },
        });

        $(".services-prev").on("click", function () {
          $carousel.trigger("prev.owl.carousel");
        });
        $(".services-next").on("click", function () {
          $carousel.trigger("next.owl.carousel");
        });

        // Testimonials carousel — custom dots
        var $testimonials = $("#testimonials-carousel");
        $testimonials.owlCarousel({
          items: 1,
          loop: true,
          margin: 0,
          nav: false,
          dots: false,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          animateOut: "fadeOut",
        });

        // Generate one dot per actual slide
        var $dotsContainer = $(".testimonials-custom-dots");
        var slideCount = $testimonials.find(".owl-item:not(.cloned)").length;
        for (var i = 0; i < slideCount; i++) {
          $dotsContainer.append('<div class="custom-dot"></div>');
        }
        var $tDots = $dotsContainer.children();

        function updateTestimonialDots(idx) {
          $tDots.removeClass("dot-active");
          $tDots.eq(idx).addClass("dot-active");
        }
        updateTestimonialDots(0); // activate first dot on load

        // Sync dots on slide change
        $testimonials.on("translated.owl.carousel", function () {
          var owl = $testimonials.data("owl.carousel");
          updateTestimonialDots(owl.relative(owl.current()));
        });

        // Click dot to navigate
        $tDots.each(function (i) {
          $(this).on("click", function () {
            $testimonials.trigger("to.owl.carousel", [i, 300]);
          });
        });
});