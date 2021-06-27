import * as React from "../snowpack/pkg/react.js";
import * as Color$Web from "./shared/themes/Color.js";
import * as Belt_Array from "../snowpack/pkg/rescript/lib/es6/belt_Array.js";
import * as Css from "../snowpack/pkg/@emotion/css.js";
import * as FontSize$Web from "./shared/themes/FontSize.js";
var container = Css.css({
  width: "100%",
  height: 70,
  boxShadow: "0 5px 10px rgba(255, 255, 255, 0.03)"
});
var row = Css.css({
  margin: "auto",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "100%"
});
var list = Css.css({
  listStyle: "none",
  display: "inline-block",
  padding: 0,
  margin: 0
});
var item = Css.css({
  marginLeft: 30,
  textDecoration: "none",
  fontSize: FontSize$Web.medium,
  color: Color$Web.light,
  fontWeight: 600
});
var link = Css.css({
  position: "relative"
});
var containerLogo = Css.css({
  display: "flex",
  alignItems: "center"
});
var titleLogo = Css.css({
  color: Color$Web.light,
  fontSize: FontSize$Web.large
});
var logo = Css.css({
  height: 30,
  marginRight: 5
});
var Styles = {
  container,
  row,
  list,
  item,
  link,
  containerLogo,
  titleLogo,
  logo
};
var items = [
  {
    href: "home",
    text: "Home"
  },
  {
    href: "about",
    text: "About"
  }
];
function Header(Props) {
  var content = Belt_Array.map(items, function(item$1) {
    return React.createElement("li", {
      key: item$1.href,
      className: list
    }, React.createElement("a", {
      className: item,
      href: "#" + item$1.href
    }, item$1.text));
  });
  return React.createElement("header", {
    className: container
  }, React.createElement("div", {
    className: row
  }, React.createElement("div", {
    className: containerLogo
  }, React.createElement("img", {
    className: logo,
    src: "../assets/images/lambda.svg"
  }), React.createElement("h1", {
    className: titleLogo
  }, "thiagogre")), React.createElement("nav", void 0, React.createElement("ul", {
    className: list
  }, content))));
}
var make = Header;
export {
  Styles,
  items,
  make
};
