import star from '../util/star'

export default function sketch(p5: any) {
  // var hue
  var fps

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight)
    p5.colorMode(p5.HSL, 360)
    p5.frameRate(fps)
    p5.background(0)
    // hue = 0
    fps = 10
  }

  p5.draw = () => {
    // hue > 360 ? (hue = 0) : (hue += 20)
    // fps > 90 ? (fps = 10) : fps++
    fps = (1.5 + Math.sin(p5.frameCount / 200)) * 30
    // p5.background(0)
    p5.frameRate(fps)
    p5.translate(p5.width * p5.random(), p5.height * p5.random())
    p5.rotate(p5.frameCount / 90)
    p5.noStroke()
    p5.fill(p5.random(360), 200, 200)
    star(p5, 0, 0, p5.random(20, 100), p5.random(20, 100), 5)
  }
}
