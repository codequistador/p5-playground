export default function sketch(p5: any) {
  let yoff = 0 // 2nd dimension of perlin noise

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight)
    p5.background(0)
    p5.colorMode(p5.HSB)
  }

  p5.draw = () => {
    let fill1 = p5.frameCount
    let fill2 = p5.random(255)
    let fill3 = p5.random(255)
    p5.fill(fill1, fill2, fill3)
    // p5.background(0)

    // We are going to draw a polygon out of the wave points
    p5.beginShape()

    let xoff = 0

    // Iterate over horizontal pixels (5.1 for random, 4.0 for noise)
    for (let x = 0; x <= p5.windowWidth; x += 4) {
      // let y = p5.map(p5.random(xoff, yoff), 0, 1, 0, 1000)
      let y = p5.map(p5.noise(xoff, yoff), 0, 1, -500, 1000)

      p5.vertex(x, y + p5.frameCount) // y + p5.frameCount to make it go off the screen
      xoff += 0.005 // keeps line smooth
    }

    yoff += 0.005 // changes drawing type
    p5.vertex(p5.windowWidth, p5.windowHeight)
    p5.vertex(0, p5.windowHeight)
    p5.endShape(close)
  }
}
