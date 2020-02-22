<template>
  <div>
    <div class="container">
      <canvas ref="canvas" :width="canvas.width" :height="canvas.height"></canvas>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: #071a5a;
  width: 100%;
  height: 500px;
}
</style>

<script>
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
    const trianglePath = "M10 4L0.25 7.4641L0.25 0.535898L10 4Z"
    let timestampLast = 0;
    let tick = 0;
    const canvas = this.$refs.canvas
    this.context = canvas.getContext("2d")
    const canvasResize = () => {
      this.canvas.width = this.canvasCalc().width
      this.canvas.height = this.canvasCalc().height
    }
    canvasResize()
    let c = this.context
    let pattern = []
    for (let i=0; i <= this.canvas.width * 2; i++) {
      pattern.push(Math.random() > .2 ? 1 : 0)
    }
    const renderStart = (timestamp) => {
      tick += 1
      if (timestamp - timestampLast > 10) {
        connectionDraw(timestamp)
        timestampLast = timestamp
      }
      this.requestAnimationFrameId = requestAnimationFrame(renderStart)
    }
    const connectionDraw = (timestamp) => {
      let
        current = tick * this.canvas.width / 75,
        width = current <= this.canvas.width
          ? current
          : this.canvas.width,
        y = this.canvas.height/2,
        w = 2,
        h = 2
      c.clearRect(0, 0, this.canvas.width, this.canvas.height)
      c.fillStyle = "rgba(255,255,255,1)"
      c.translate(0, this.canvas.height / 2 - 3)
      c.fill(new Path2D(trianglePath))
      c.translate(0, -this.canvas.height / 2 + 3)
      for (let i=0; i < width; i++) {
        // c.fillStyle = "rgba(255,255,255,.75)"
        // let
        //   p = pattern[i],
        //   x = i + current
        // c.fillRect(x,y,p,h)
        let x = Math.random() * width
        c.fillStyle = "rgba(255,255,255,.75)"
        c.translate(0, 0)
        c.fillRect(x,y,w,h)
      }
    }
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