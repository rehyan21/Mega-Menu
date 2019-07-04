"use strict";

$.fn.megaMenu = function (options) {
  // All defaualt settings
  var defaults = {
    caret: false,
    textHighlighter: false,
    caretArrows: [{
      up: "caret-up",
      down: "caret-down"
    }]
  };
  var settings = $.extend({
    menuBehaviour: "click",
    stickyHeader: true,
    selector: $(this),
    caret: "",
    caretArrows: [{
      up: "",
      down: "",
      upUrl: "",
      downUrl: ""
    }],
    highlighter: true,
    followingHighlighter: false,
    highlightColor: "",
    textHighlighterColor: "",
    animation: false,
    animationClass: ""
  }, defaults, options);
  var element = settings.selector;
  var mainLinks = $(".main-links ul li a");
  var subMenu = $(".menu-dropdown .menu-item-wrapper");
  var mainLinksDataAttribute = [];
  var iDofSubMenus = [];
  var selectElementwithId = $("#" + subMenu.attr("id"));
  var caretUp = defaults.caretArrows[0].up;
  var caretDown = defaults.caretArrows[0].down; // Sticky Heder

  if (settings.stickyHeader === false) {
    $(".mega-menu").removeClass("sticky-header");
  } else {
    $(".mega-menu").addClass("sticky-header");
  } // If caret: custom then it will exclude default settings mentioned above


  if (settings.caret === true) {
    var caretUp = settings.caretArrows[0].up;
    var caretDown = settings.caretArrows[0].down;
  } // If icon caret (up or down) is not empty image caret should be hidden


  if (settings.caretArrows[0].up || settings.caretArrows[0].down) {
    settings.caretArrows[0].upUrl = null;
    settings.caretArrows[0].downUrl = null;
  } // Creating Caret icon for every link which have data-submenu attribute


  $("a[data-submenu]").append('<span class="caret ' + caretDown + '"></span>'); // Set Initial Image path for carret (Default is down)

  if (settings.caret === true && settings.caretArrows[0].downUrl !== "") {
    $(".mega-menu span.caret").removeClass("undefined");
    $(".mega-menu span.caret").addClass("caret-img down");
    $(".mega-menu span.caret.caret-img.down").css({
      "background-image": "url(" + settings.caretArrows[0].downUrl + ")"
    });
  } // Append Style on DOM


  $("<style>\n      .mega-menu .main-links ul li a:hover{\n        border-color:" + settings.highlightColor + "}\n    </style>").appendTo("head"); // Remove Active link Highlight

  mainLinks.on(settings.menuBehaviour, function () {
    mainLinks.removeClass("highlight");
    mainLinks.css({
      "border-color": ""
    });
  }); // If a user didn't defined menu behaviour

  if (settings.menuBehaviour === "") {
    settings.menuBehaviour = "click";
  } // Menu Toggle Works


  mainLinks.each(function (i) {
    var linkID = $(this).attr("data-submenu");
    mainLinksDataAttribute.push($(this).attr("data-submenu"));
    $(this).on(settings.menuBehaviour, function () {
      // Find Position of Menu ULs to help pass index for perticular ID on each menu links
      var findPositionOfSubmenus = jQuery.inArray(linkID, iDofSubMenus);
      var imageCaret = $(this).find(".caret.caret-img"); // Sets every links default behavour for caret except currently clicked

      mainLinks.find("span").removeClass(caretUp);
      mainLinks.find("span").addClass(caretDown); // $(".caret.caret-img").css("background-image").replace(/\"/g, "") == "url(" +settings.caretArrows[0].downUrl+ ")"
      // Icon Caret toggling

      if (mainLinksDataAttribute[i] == iDofSubMenus[findPositionOfSubmenus] && !$(subMenu[findPositionOfSubmenus]).hasClass("active")) {
        subMenu.removeClass("active");
        $(subMenu[findPositionOfSubmenus]).addClass("active");
        $(this).find("span").removeClass(caretDown);
        $(this).find("span").addClass(caretUp);
      } else {
        $(subMenu[findPositionOfSubmenus]).removeClass("active");
        $(this).find("span").removeClass(caretUp);
        $(this).find("span").addClass(caretDown);
      } // Sets every links default behavour for image caret except currently clicked


      if ($(".menu-dropdown").find(".menu-item-wrapper").hasClass("active")) {
        $(".mega-menu span.caret").addClass("down");
        $(".mega-menu span.caret").css({
          "background-image": "url(" + settings.caretArrows[0].downUrl + ")"
        });
      } // Image caret toggling


      if (imageCaret.hasClass("down")) {
        imageCaret.removeClass("down");
        imageCaret.addClass("up");
        imageCaret.css({
          "background-image": "url(" + settings.caretArrows[0].upUrl + ")"
        }); // console.log(imageCaret[0].className);
      } else {
        imageCaret.removeClass("up");
        imageCaret.addClass("down");
        imageCaret.css({
          "background-image": "url(" + settings.caretArrows[0].downUrl + ")"
        }); // console.log(imageCaret[0].className);
      } // Active link Highlight


      if (mainLinks.find("span").hasClass("caret-up") || $(this).find("span").hasClass("up") && !$(this).hasClass("highlight")) {
        $(this).addClass("highlight"); // Changing Highlight Color

        $(this).css({
          "border-color": settings.highlightColor
        });
      }
    });
  }); // If Follow highlighter set true

  if (settings.followingHighlighter === true) {
    // Add a element with class first
    $(".main-links ul").append('<div class="follow-highlighter"></div>'); // While Mouser Hover

    mainLinks.mouseover(function (e, i) {
      var getCurrentElementMousePos = e.pageX - $(this).offset().left;
      var currentElementHalfWidth = $(this).innerWidth() / 2;
      $(".follow-highlighter").css({
        "display": "block"
      });
      $(".main-links ul").addClass("follow-highlighter-enabled");
      $(".follow-highlighter").css({
        "width": $(this).innerWidth(),
        "left": $(this).offset().left,
        "background-color": settings.highlightColor
      });
    });
  } // While Mouse Unhover


  $(".main-links ul").each(function () {
    $(this).mouseleave(function () {
      $(".main-links ul").removeClass("follow-highlighter-enabled");
      $(".follow-highlighter").css({
        "display": "none",
        "left": $(mainLinks[0]).offset().left
      });
    });
  }); // If no need of highighter

  if (settings.highlighter === false) {
    $(".main-links").addClass("disable-highlighter");
    $(".follow-highlighter").remove();
  } // If Text Highlighter Set to true


  if (settings.textHighlighter === true) {
    $(".main-links").addClass("text-highlighter");
  } // Text Highlighter Color


  if (settings.textHighlighterColor) {
    $("style").append(".mega-menu .text-highlighter.main-links ul li a:hover{\n      color:" + settings.textHighlighterColor + "}");
  } // Get menus IDs


  subMenu.each(function (i) {
    iDofSubMenus.push($(subMenu[i]).attr("id"));
  }); // Add Animations

  if (settings.animation === true) {
    subMenu.addClass(settings.animationClass);
  } // Mobile Nav icon


  $(".mobile-nav-icon a").click(function () {
    $(".follow-highlighter").remove();

    if ($(".main-links").hasClass("active")) {
      $(".main-links").removeClass("active");
      $(".menu-dropdown").hide();
    } else {
      $(".main-links").addClass("active");
      $(".menu-dropdown").show();
    }
  }); // Responsive options

  $(".menu-item-wrapper").prepend('<a href="#" class="back-link">Back</a>');
  $(window).resize(function () {
    if ($(window).width() < 768) {
      // Get main-links marging top as height of mobile-nav-icon
      if ($(".mega-menu").hasClass("sticky-header")) {
        $(".mega-menu").addClass("responsive-menu");
        $(".main-links").css({
          "margin-top": $(".mobile-nav-icon").outerHeight() + "px"
        }); // $(".menu-item-wrapper").prepend('<a href="#" class="back-link">Back</a>');
      }
    } else {
      $(".main-links").css({
        "margin-top": "0px"
      }); // $(".back-link").remove();
      // $(".mega-menu").removeClass("responsive-menu");
    }
  });
  $(document).ready(function () {
    $(".back-link").on('click', function () {
      mainLinks.trigger('click');
      $(mainLinks[mainLinks.length - 1]).trigger('click');
    });
  });
};
