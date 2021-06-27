// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "../snowpack/pkg/react.js";
import * as Color$Web from "./shared/themes/Color.bs.js";
import * as Header$Web from "./Header.bs.js";
import * as Css from "../snowpack/pkg/@emotion/css.js";
import * as Carousel$Web from "./Carousel.bs.js";

var container = Css.css({
      width: "100vw",
      height: "100vh",
      backgroundColor: Color$Web.dark
    });

var Styles = {
  container: container
};

function App(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  className: container
                }, React.createElement(Header$Web.make, {}), React.createElement(Carousel$Web.make, {
                      slides: [
                        {
                          image: "../assets/images/typescript.svg",
                          title: "TypeScript",
                          paragraph: "Typescript experience description"
                        },
                        {
                          image: "../assets/images/react.svg",
                          title: "React",
                          paragraph: "React experience description"
                        },
                        {
                          image: "../assets/images/rescript.svg",
                          title: "ReScript",
                          paragraph: "Rescript experience description"
                        },
                        {
                          image: "../assets/images/electron.svg",
                          title: "Electron",
                          paragraph: "Electron experience description"
                        },
                        {
                          image: "../assets/images/javascript.svg",
                          title: "JavaScript",
                          paragraph: "Javascript experience description"
                        },
                        {
                          image: "../assets/images/next.svg",
                          title: "Next",
                          paragraph: "Next experience description"
                        },
                        {
                          image: "../assets/images/nodejs.svg",
                          title: "Node",
                          paragraph: "Node experience description"
                        }
                      ]
                    })));
}

var make = App;

export {
  Styles ,
  make ,
  
}
/* container Not a pure module */
