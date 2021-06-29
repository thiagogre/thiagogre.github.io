import * as Curry from "../snowpack/pkg/rescript/lib/es6/curry.js";
import * as React from "../snowpack/pkg/react.js";
import * as Color$Web from "./shared/themes/Color.js";
import * as Caml_array from "../snowpack/pkg/rescript/lib/es6/caml_array.js";
import * as Caml_int32 from "../snowpack/pkg/rescript/lib/es6/caml_int32.js";
import * as Css from "../snowpack/pkg/@emotion/css.js";
import * as FontSize$Web from "./shared/themes/FontSize.js";
var carouselSlide = Css.css({
  width: "100%",
  height: "calc(100vh - 70px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 2s ease",
  ":hover": {
    transform: "scale(0.9)"
  },
  "@media (max-width: 600px)": {
    height: "calc(100vh - 90px)"
  }
});
var container = Css.css({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  justifyContent: "center"
});
var image = Css.css({
  width: 256,
  height: 256,
  margin: 30,
  borderRadius: 24
});
var shadow = Css.css({
  boxShadow: "0 5px 10px rgba(255, 255, 255, 0.3)",
  borderRadius: 24
});
var title = Css.css({
  color: Color$Web.light,
  fontSize: FontSize$Web.big,
  marginTop: 20
});
var paragraph = Css.css({
  color: Color$Web.light,
  fontSize: FontSize$Web.medium
});
var Styles = {
  carouselSlide,
  container,
  image,
  shadow,
  title,
  paragraph
};
function Carousel$Slide(Props) {
  var slide = Props.slide;
  return React.createElement("div", {
    className: carouselSlide
  }, React.createElement("div", {
    className: container
  }, React.createElement("div", {
    className: shadow
  }, React.createElement("img", {
    className: image,
    alt: slide.title,
    src: slide.image
  }))), React.createElement("div", {
    className: container
  }, React.createElement("h2", {
    className: title
  }, slide.title)));
}
var Slide = {
  Styles,
  make: Carousel$Slide
};
var carouselSlides = Css.css({
  display: "flex"
});
var Styles$1 = {
  carouselSlides
};
function Carousel(Props) {
  var slides = Props.slides;
  var match = React.useState(function() {
    return 0;
  });
  var setActiveSlide = match[1];
  var activeSlide = match[0];
  var currentSlide = function(param) {
    return Curry._1(setActiveSlide, function(param2) {
      return Caml_int32.mod_(activeSlide + 1 | 0, slides.length);
    });
  };
  React.useEffect(function() {
    var interval = setInterval(currentSlide, 5e3);
    return function(param) {
      clearInterval(interval);
    };
  });
  return React.createElement("div", {
    className: carouselSlides
  }, React.createElement(Carousel$Slide, {
    slide: Caml_array.get(slides, activeSlide)
  }));
}
var make = Carousel;
export {
  Slide,
  Styles$1 as Styles,
  make
};
