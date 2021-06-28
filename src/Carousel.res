type intervalId
type slide = {image: string, title: string}

module Slide = {
  module Styles = {
    open Emotion
    let carouselSlide = css({
      "width": "100%",
      "display": "flex",
      "flexDirection": "column",
      "alignItems": "center",
      "justifyContent": "center",
      "margin": 100,
      "padding": 40,
      "@media (max-width: 600px)": {
        "margin": "100px 0",
        "padding": 0,
      },
    })
    let container = css({
      "display": "flex",
      "flexDirection": "column",
      "width": "100%",
      "alignItems": "center",
      "justifyContent": "center",
    })
    let image = css({
      "width": 256,
      "height": 256,
      "margin": 30,
      "borderRadius": 24,
    })
    let shadow = css({
      "boxShadow": "0 5px 10px rgba(255, 255, 255, 0.3)",
      "borderRadius": 24,
    })
    let title = css({
      "color": Color.light,
      "fontSize": FontSize.big,
      "marginTop": 20,
    })
    let paragraph = css({
      "color": Color.light,
      "fontSize": FontSize.medium,
    })
  }

  @react.component
  let make = (~slide) => {
    <div className=Styles.carouselSlide>
      <div className=Styles.container>
        <div className=Styles.shadow>
          <img className=Styles.image src=slide.image alt=slide.title />
        </div>
      </div>
      <div className=Styles.container>
        <h2 className=Styles.title> {slide.title->React.string} </h2>
      </div>
    </div>
  }
}

module Styles = {
  open Emotion
  let carouselSlides = css({
    "display": "flex",
  })
}

@react.component
let make = (~slides: array<slide>) => {
  let (activeSlide, setActiveSlide) = React.useState(_ => 0)

  let currentSlide = () => {
    setActiveSlide(_ => mod(activeSlide + 1, slides->Belt.Array.length))
  }

  React.useEffect(() => {
    let interval = Js.Global.setInterval(currentSlide, 5000)

    let clearInterval = () => Js.Global.clearInterval(interval)

    Some(clearInterval)
  })

  <div className=Styles.carouselSlides> <Slide slide={slides[activeSlide]} /> </div>
}