$(function () {
  "use strict";

  // Bottom To Top Scroll Script
  $(window).on("scroll", function () {
    var height = $(window).scrollTop();
    if (height > 100) {
      $("#back2Top").fadeIn();
    } else {
      $("#back2Top").fadeOut();
    }
  });

  //Fixed on scroll
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
      $(".advance-search").addClass("advn-fixed");
    } else {
      $(".advance-search").removeClass("advn-fixed");
    }
  });

  // Extra Service Show
  $("#extra-services").on("click", function () {
    $("#showing").slideToggle("slow");
  });

  // Dropdown
  $(".drp-select a").on("click", function () {
    $(this).parents(".dropdown").find(".selection").text($(this).text());
    $(this).parents(".dropdown").find(".selection").val($(this).text());
  });

  $("#back2Top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // Filter Search Option
  $("#guest").on("click", function () {
    $("#g-showing").slideToggle("slow");
  });

  // Filter Search Option
  $("#hotel-guest").on("click", function () {
    $("#hotelg-showing").slideToggle("slow");
  });

  $("#worktrip").on("click", function () {
    $("#w-showing").slideToggle("slow");
  });

  $("#placetype").on("click", function () {
    $("#p-showing").slideToggle("slow");
  });

  $("#prices").on("click", function () {
    $("#pr-showing").slideToggle("slow");
  });

  $("#instantbook").on("click", function () {
    $("#in-showing").slideToggle("slow");
  });

  $("#tripduration").on("click", function () {
    $("#tr-showing").slideToggle("slow");
  });

  $("#activitylevel").on("click", function () {
    $("#sac-howing").slideToggle("slow");
  });

  $("nav.headnavbar").coreNavigation({
    menuPosition: "right", // left, right, center, bottom
    container: true, // true or false
    animated: true,
    animatedIn: "flipInX",
    animatedOut: "bounceOut",
    dropdownEvent: "click", // Hover, Click & Accordion
    onOpenDropdown: function () {
      console.log("open");
    },
    onCloseDropdown: function () {
      console.log("close");
    },
    onOpenMegaMenu: function () {
      console.log("Open Megamenu");
    },
    onCloseMegaMenu: function () {
      console.log("Close Megamenu");
    },
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $(".header").addClass("header-fixed");
    } else {
      $(".header").removeClass("header-fixed");
    }
  });

  // Range Slider
  $(".range-slider-ui").each(function () {
    var minRangeValue = $(this).attr("data-min");
    var maxRangeValue = $(this).attr("data-max");
    var minName = $(this).attr("data-min-name");
    var maxName = $(this).attr("data-max-name");
    var unit = $(this).attr("data-unit");

    $(this).append(
      "" +
        "<span class='min-value'></span> " +
        "<span class='max-value'></span>" +
        "<input class='current-min' type='hidden' name='" +
        minName +
        "'>" +
        "<input class='current-max' type='hidden' name='" +
        maxName +
        "'>"
    );
    $(this).slider({
      range: true,
      min: minRangeValue,
      max: maxRangeValue,
      values: [minRangeValue, maxRangeValue],
      slide: function (event, ui) {
        event = event;
        var currentMin = parseInt(ui.values[0], 10);
        var currentMax = parseInt(ui.values[1], 10);
        $(this)
          .children(".min-value")
          .text(currentMin + " " + unit);
        $(this)
          .children(".max-value")
          .text(currentMax + " " + unit);
        $(this).children(".current-min").val(currentMin);
        $(this).children(".current-max").val(currentMax);
      },
    });

    var currentMin = parseInt($(this).slider("values", 0), 10);
    var currentMax = parseInt($(this).slider("values", 1), 10);
    $(this)
      .children(".min-value")
      .text(currentMin + " " + unit);
    $(this)
      .children(".max-value")
      .text(currentMax + " " + unit);
    $(this).children(".current-min").val(currentMin);
    $(this).children(".current-max").val(currentMax);
  });

  // Guest Count Js
  $(".children").prop("disabled", true);

  $(document).on("click", ".cplus", function () {
    $(".children").val(parseInt($(".children").val()) + 1);
  });

  $(document).on("click", ".cminus", function () {
    $(".children").val(parseInt($(".children").val()) - 1);
    if ($(".children").val() == 0) {
      $(".children").val(0);
    }
  });

  $(".guest").prop("disabled", true);
  $(document).on("click", ".gplus", function () {
    $(".guest").val(parseInt($(".guest").val()) + 1);
  });
  $(document).on("click", ".gminus", function () {
    $(".guest").val(parseInt($(".guest").val()) - 1);
    if ($(".guest").val() == 0) {
      $(".guest").val(0);
    }
  });

  // Select Category
  $("#list-category").select2({
    placeholder: "Choose Category",
    allowClear: true,
  });

  // Event Select Category
  $("#event-list-category").select2({
    placeholder: "Choose Category",
    allowClear: true,
  });

  // Select Rooms
  $("#rooms").select2({
    placeholder: "Choose Rooms",
    allowClear: true,
  });

  // Select Cities
  $("#choose-city").select2({
    placeholder: "Select City",
    allowClear: true,
  });

  // Add Pricing
  function newMenuItem() {
    var newElem = $("tr.pricing-list-item.pattern").first().clone();
    newElem.find("input").val("");
    newElem.appendTo("table#price-list-wrap");
  }
  if ($("table#price-list-wrap").is("*")) {
    $(".add-pr-item-btn").on("click", function (e) {
      e.preventDefault();
      newMenuItem();
    });
    $(document).on("click", "#price-list-wrap .delete", function (e) {
      e.preventDefault();
      $(this).parent().parent().remove();
    });
    $(".add-cat-btn").on("click", function (e) {
      e.preventDefault();
      var newElem = $(
        "" +
          '<tr class="pricing-list-item pricing-submenu">' +
          "<td>" +
          '<div class="box-move"><i class="ti-move"></i></div>' +
          '<div class="box-input"><input type="text" class="frm-control" placeholder="Category Title" /></div>' +
          '<div class="box-close"><a class="delete" href="#"><i class="ti-close"></i></a></div>' +
          "</td>" +
          "</tr>"
      );
      newElem.appendTo("table#price-list-wrap");
    });
    $("table#price-list-wrap tbody").sortable({
      forcePlaceholderSize: true,
      forceHelperSize: false,
      placeholder: "sortableHelper",
      zIndex: 999990,
      opacity: 0.6,
      tolerance: "pointer",
      start: function (e, ui) {
        ui.placeholder.height(ui.helper.outerHeight());
      },
    });
  }
  var fieldUnit = $(".pr-price").children("input").attr("data-unit");
  $(".pr-price")
    .children("input")
    .before('<i class="data-unit">' + fieldUnit + "</i>");
  $("a.close")
    .removeAttr("href")
    .on("click", function () {
      function slideFade(elem) {
        var fadeOut = {
          opacity: 0,
          transition: "opacity 0.5s",
        };
        elem.css(fadeOut).slideUp();
      }
      slideFade($(this).parent());
    });
  $(".price-add-wrapper").each(function () {
    var switcherSection = $(this);
    var switcherInput = $(this).find(".switch input");
    if (switcherInput.is(":checked")) {
      $(switcherSection).addClass("switch-on");
    }
    switcherInput.change(function () {
      if (this.checked === true) {
        $(switcherSection).addClass("switch-on");
      } else {
        $(switcherSection).removeClass("switch-on");
      }
    });
  });
});
