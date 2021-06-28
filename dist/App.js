import * as React from "../snowpack/pkg/react.js";
import * as Color$Web from "./shared/themes/Color.js";
import * as Header$Web from "./Header.js";
import * as Css from "../snowpack/pkg/@emotion/css.js";
import * as Carousel$Web from "./Carousel.js";
var container = Css.css({
  width: "100vw",
  height: "100vh",
  backgroundColor: Color$Web.dark
});
var Styles = {
  container
};
function App(Props) {
  return React.createElement("div", {
    className: container
  }, React.createElement(Header$Web.make, {}), React.createElement(Carousel$Web.make, {
    slides: [
      {
        image: "../assets/images/typescript.svg",
        title: "TypeScript"
      },
      {
        image: "../assets/images/react.svg",
        title: "React.js and Native"
      },
      {
        image: "../assets/images/rescript.svg",
        title: "ReScript"
      },
      {
        image: "../assets/images/electron.svg",
        title: "Electron.js"
      },
      {
        image: "../assets/images/javascript.svg",
        title: "JavaScript"
      },
      {
        image: "../assets/images/next.svg",
        title: "Next.js"
      },
      {
        image: "../assets/images/nodejs.svg",
        title: "Node.js"
      }
    ]
  }));
}
var make = App;
export {
  Styles,
  make
};
