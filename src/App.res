module Styles = {
  open Emotion
  let container = css({
    "width": "100vw",
    "height": "100vh",
    "backgroundColor": Color.dark,
  })
}

@react.component
let make = () => {
  <>
    <div className=Styles.container>
      <Header />
      <Carousel
        slides=[
          {
            image: "../assets/images/typescript.svg",
            title: "TypeScript",
            paragraph: "Typescript experience description",
          },
          {
            image: "../assets/images/react.svg",
            title: "React",
            paragraph: "React experience description",
          },
          {
            image: "../assets/images/rescript.svg",
            title: "ReScript",
            paragraph: "Rescript experience description",
          },
          {
            image: "../assets/images/electron.svg",
            title: "Electron",
            paragraph: "Electron experience description",
          },
          {
            image: "../assets/images/javascript.svg",
            title: "JavaScript",
            paragraph: "Javascript experience description",
          },
          {
            image: "../assets/images/next.svg",
            title: "Next",
            paragraph: "Next experience description",
          },
          {
            image: "../assets/images/nodejs.svg",
            title: "Node",
            paragraph: "Node experience description",
          },
        ]
      />
    </div>
  </>
}
