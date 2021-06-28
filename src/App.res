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
    <div className=Styles.container>
      <Header />
      <Carousel
        slides=[
          {
            image: "../assets/images/typescript.svg",
            title: "TypeScript",
          },
          {
            image: "../assets/images/react.svg",
            title: "React.js and Native",
          },
          {
            image: "../assets/images/rescript.svg",
            title: "ReScript",
          },
          {
            image: "../assets/images/electron.svg",
            title: "Electron.js",
          },
          {
            image: "../assets/images/javascript.svg",
            title: "JavaScript",
          },
          {
            image: "../assets/images/next.svg",
            title: "Next.js",
          },
          {
            image: "../assets/images/nodejs.svg",
            title: "Node.js",
          },
        ]
      />
    </div>
}
