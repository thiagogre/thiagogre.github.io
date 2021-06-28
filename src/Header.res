type item = {url: string, name: string, icon: string}

module Styles = {
  open Emotion
  let container = css({
    "width": "100%",
    "height": 70,
    "boxShadow": "0 5px 10px rgba(255, 255, 255, 0.03)",
    "@media (max-width: 600px)": {
      "height": 90,
    },
  })
  let row = css({
    "margin": "auto",
    "display": "flex",
    "flexWrap": "wrap",
    "justifyContent": "space-around",
    "alignItems": "center",
    "height": "100%",
    "@media (max-width: 600px)": {
      "flexDirection": "column",
    },
  })
  let list = css({
    "listStyle": "none",
    "display": "inline-block",
    "padding": 0,
    "margin": 0,
  })
  let item = css({
    "display": "flex",
    "alignItems": "center",
    "marginLeft": 20,
    "textDecoration": "none",
    "fontSize": FontSize.medium,
    "color": Color.light,
    "fontWeight": 600,
  })
  let itemIcon = css({
    "width": 30,
    "height": 30,
    "marginRight": 5,
  })
  let itemName = css({
    "color": Color.light,
  })
  let link = css({
    "position": "relative",
  })
  let containerLogo = css({
    "display": "flex",
    "alignItems": "center",
  })
  let titleLogo = css({
    "color": Color.light,
    "fontSize": FontSize.large,
  })
  let logo = css({
    "height": 30,
    "marginRight": 5,
  })
}

let items = [
  {
    url: "https://www.github.com/thiagogre",
    name: "GitHub",
    icon: "../assets/images/github.svg",
  },
  {
    url: "https://www.linkedin.com/in/thiagogre/",
    name: "LinkedIn",
    icon: "../assets/images/linkedin.svg",
  },
]

@react.component
let make = () => {
  let content = items->Belt.Array.map(item => {
    <li className=Styles.list key={item.url}>
      <a className=Styles.item href=item.url>
        <img className=Styles.itemIcon src=item.icon />
        <p className=Styles.itemName> {item.name->React.string} </p>
      </a>
    </li>
  })

  <header className=Styles.container>
    <div className=Styles.row>
      <div className=Styles.containerLogo>
        <img className=Styles.logo src="../assets/images/lambda.svg" />
        <h1 className=Styles.titleLogo> {"thiagogre"->React.string} </h1>
      </div>
      <nav> <ul className=Styles.list> {React.array(content)} </ul> </nav>
    </div>
  </header>
}
