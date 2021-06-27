import * as __SNOWPACK_ENV__ from '../snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import * as React from "../snowpack/pkg/react.js";
import * as App$Web from "./App.js";
import * as ReactDom from "../snowpack/pkg/react-dom.js";
import * as Belt_Option from "../snowpack/pkg/rescript/lib/es6/belt_Option.js";
import * as Caml_option from "../snowpack/pkg/rescript/lib/es6/caml_option.js";
import * as Css from "../snowpack/pkg/@emotion/css.js";
Css.injectGlobal("\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\nbody {\n  font-family: 'Inconsolata', monospace;\n  display: flex;\n  flex-direction: column;\n}");
ReactDom.render(React.createElement(React.StrictMode, {
  children: React.createElement(App$Web.make, {})
}), Belt_Option.getExn(Caml_option.nullable_to_opt(document.querySelector("#root"))));
if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}
export {
};
