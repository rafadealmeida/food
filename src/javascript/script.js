$(document).ready(() => {
  $("#mobile_btn").on("click", () => {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });

  const sections = $("section");
  const navItems = $(".nav-item");

  $(window).on("scroll", () => {
    const header = $("header");
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
      header.css("box-shadow", "none");
    } else {
      header.css("box-shadow", `5px 1px 5px rgba(0, 0, 0, 0.1)`);
    }

    sections.each(function (index) {
      const section = $(this);
      const sectionTop = section.offset().top - 96;
      const sectionBottom = sectionTop + section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = index;
        return false;
      }
    });
    navItems.removeClass("active");
    $(navItems[activeSectionIndex]).addClass("active");
  });

  ScrollReveal().reveal("#cta", {
    origin: "left",
    duration: 2000,
    distance: "20%",
    reset: true,
  });

  ScrollReveal().reveal(".social-media-buttons", {
    delay: 1000,
    scale: 0.85,
    duration: 1500,
    reset: true,
  });
  ScrollReveal().reveal(".dish", {
    origin: "right",
    duration: 2000,
    distance: "20%",
    reset: true,
  });

  ScrollReveal().reveal("#testimonial_chef", {
    origin: "left",
    duration: 1000,
    distance: "20%",
    reset: true,
  });

  ScrollReveal().reveal(".feedback", {
    origin: "right",
    duration: 1000,
    distance: "20%",
    reset: true,
  });
});
