module Styles = {
  open Emotion
  let container = css({
    "width": "100%",
    "height": 70,
    "boxShadow": "0 5px 10px rgba(255, 255, 255, 0.03)",
  })
  let row = css({
    "margin": "auto",
    "display": "flex",
    "justifyContent": "space-around",
    "alignItems": "center",
    "height": "100%",
  })
  let list = css({
    "listStyle": "none",
    "display": "inline-block",
    "padding": 0,
    "margin": 0,
  })
  let item = css({
    "marginLeft": 30,
    "textDecoration": "none",
    "fontSize": FontSize.medium,
    "color": Color.light,
    "fontWeight": 600,
  })
  let link = css({
    "position": "relative",
  })
  let logo = css({
    "color": Color.light,
    "fontSize": FontSize.large,
  })
}

type item = {href: string, text: string}

let items = [{href: "home", text: "Home"}, {href: "about", text: "About"}]

@react.component
let make = () => {
  let content = items->Belt.Array.map(item => {
    <li className=Styles.list key={item.href}>
      <a className=Styles.item href={`#${item.href}`}> {React.string(item.text)} </a>
    </li>
  })

  <header className=Styles.container>
    <div className=Styles.row>
      <h1 className=Styles.logo> {`thiagogre`->React.string} </h1>
      <nav> <ul className=Styles.list> {React.array(content)} </ul> </nav>
    </div>
  </header>
}
