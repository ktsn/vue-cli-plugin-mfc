const path = require('path')

module.exports = api => {
  api.render('./template')

  // Remove all .vue files having corresponding
  // .js file which having the same name.
  const vueRE = /\.vue$/
  api.postProcessFiles(files => {
    for (const file in files) {
      if (vueRE.test(file)) {
        const basename = path.basename(file, '.vue')
        const jsFile = file.replace(vueRE, '.js')
        const jsNested = file.replace(vueRE, `/${basename}.js`)
        if (files[jsFile] || files[jsNested]) {
          delete files[file]
        }
      }
    }
  })
}
