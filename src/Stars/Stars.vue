<template>
  <div>
    <div class="container">
      <canvas ref="canvas" :width="canvas.width" :height="canvas.height"></canvas>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: linear-gradient(-110deg, #6944b7, #1c1c40, black);
  height: 500px;
}
</style>

<script>
import { isEqual } from "lodash"

export default {
  data: function() {
    return {
      canvas: {
        width: null,
        height: null,
      },
      context: null,
      requestAnimationFrameId: null,
      canvasResize: null
    }
  },
  mounted() {
    const circlePath = new Path2D("M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z")
    const starPath = new Path2D("M2.5 0C2.5 1.38071 1.38071 2.5 0 2.5C1.38071 2.5 2.5 3.61929 2.5 5C2.5 3.61929 3.61929 2.5 5 2.5C3.61929 2.5 2.5 1.38071 2.5 0Z")
    let timestampSinceLastSecond = 0;
    const renderStart = (timestamp) => {
      let secondElapsed = timestamp - timestampSinceLastSecond > 10
      if (secondElapsed) {
        for (let i=0; i < stars.length; i++) {
          const colorIsGray = isEqual(stars[i].color, [67, 78, 125])
          const xPosDelta = colorIsGray ? .2 : .1
          const xPosNew = stars[i].x < 0 ? this.canvas.width : stars[i].x - xPosDelta
          stars[i] = {
            ...stars[i],
            x: xPosNew
          }
        }
        timestampSinceLastSecond = timestamp
      }
      let c = this.context
      c.clearRect(0, 0, this.canvas.width, this.canvas.height)
      for (let i = 0; i < stars.length; i++) {
        c.fillStyle = `rgba(${[...stars[i].color, Math.sin(timestamp * stars[i].random / 600)].join(",")})`
        c.translate(stars[i].x , stars[i].y)
        c.fill(stars[i].random > .25 ? starPath : circlePath)
        c.translate(-stars[i].x , -stars[i].y)
      }
      this.requestAnimationFrameId = requestAnimationFrame(renderStart)
    }
    const canvasResize = () => {
      stars = starsGenerate()
      this.canvas.width = this.canvasCalc().width
      this.canvas.height = this.canvasCalc().height
    }
    const starsGenerate = () => {
      const colors = [[230, 144, 9], [186, 62, 217], [102, 160, 255], [90, 199, 91] ]
      let result = []
      for (let i=0; i < this.canvasCalc().width; i++) {
        result.push({
          x: Math.floor(Math.random() * this.canvasCalc().width),
          y: Math.floor(Math.random() * this.canvasCalc().height),
          color: Math.random() > 0.5 ? [67, 78, 125] : colors[Math.floor(Math.random() * colors.length)],
          random: Math.random()
        })
      }
      return result
    }
    canvasResize()
    this.canvasResize = canvasResize
    let stars = starsGenerate();
    const canvas = this.$refs.canvas
    this.context = canvas.getContext("2d")
    window.addEventListener("resize", canvasResize, false)
    renderStart()
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.canvasResize, false)
    window.cancelAnimationFrame(this.requestAnimationFrameId)
  },
  methods: {
    canvasCalc() {
      const el = this.$refs.canvas.parentNode
      const style = getComputedStyle(el);
      const height = el.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
      const width = el.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      return {height, width}
    },
  }
}
</script>