const path = require("path")

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("assets", resolve("src/assets"))
      .set("images", resolve("src/assets/images"))
      .set("content", resolve("content"))
      .set("comp", resolve("src/components"))
      .set("scripts", resolve("src/scripts"))
      .set("variables", resolve("src/styles/variables.styl"))
    config.module
      .rule("pdf")
      .test(/\.pdf/)
      .use("")
      .loader("file-loader")
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      .tap(() => ({
        breaks: true,
        raw: true
      }))
  }
}
