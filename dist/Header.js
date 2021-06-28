import * as React from "../snowpack/pkg/react.js";
import * as Color$Web from "./shared/themes/Color.js";
import * as Belt_Array from "../snowpack/pkg/rescript/lib/es6/belt_Array.js";
import * as Css from "../snowpack/pkg/@emotion/css.js";
import * as FontSize$Web from "./shared/themes/FontSize.js";
var container = Css.css({
  width: "100%",
  height: 70,
  boxShadow: "0 5px 10px rgba(255, 255, 255, 0.03)",
  "@media (max-width: 600px)": {
    height: 90
  }
});
var row = Css.css({
  margin: "auto",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
  height: "100%",
  "@media (max-width: 600px)": {
    flexDirection: "column"
  }
});
var list = Css.css({
  listStyle: "none",
  display: "inline-block",
  padding: 0,
  margin: 0
});
var item = Css.css({
  display: "flex",
  alignItems: "center",
  marginLeft: 20,
  textDecoration: "none",
  fontSize: FontSize$Web.medium,
  color: Color$Web.light,
  fontWeight: 600
});
var itemIcon = Css.css({
  width: 30,
  height: 30,
  marginRight: 5
});
var itemName = Css.css({
  color: Color$Web.light
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
  itemIcon,
  itemName,
  link,
  containerLogo,
  titleLogo,
  logo
};
var items = [
  {
    url: "https://www.github.com/thiagogre",
    name: "GitHub",
    icon: "../assets/images/github.svg"
  },
  {
    url: "https://www.linkedin.com/in/thiagogre/",
    name: "LinkedIn",
    icon: "../assets/images/linkedin.svg"
  }
];
function Header(Props) {
  var content = Belt_Array.map(items, function(item$1) {
    return React.createElement("li", {
      key: item$1.url,
      className: list
    }, React.createElement("a", {
      className: item,
      href: item$1.url
    }, React.createElement("img", {
      className: itemIcon,
      src: item$1.icon
    }), React.createElement("p", {
      className: itemName
    }, item$1.name)));
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