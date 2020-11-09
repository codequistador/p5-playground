export default function sketch(p5: any) {
  let yoff = 0 // 2nd dimension of perlin noise

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight)
    p5.background(0)
  }

  p5.draw = () => {
    p5.fill(255)
    // p5.background(0)

    // We are going to draw a polygon out of the wave points
    p5.beginShape()

    let xoff = 0

    // Iterate over horizontal pixels
    for (let x = 0; x <= p5.windowWidth; x += 4) {
      // let y = p5.map(p5.random(xoff, yoff), 0, 1, 0, 1000)
      let y = p5.map(p5.noise(xoff, yoff), 0, 1, 0, 1000)

      p5.vertex(x, y)
      xoff += 0.005 // keeps line smooth
    }

    yoff += 0.005 // changes drawing type
    p5.vertex(p5.windowWidth, p5.windowHeight)
    p5.vertex(0, p5.windowHeight)
    p5.endShape(close)
  }
}
