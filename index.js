const transformAssetUrls = {
  video: ['src', 'poster'],
  source: 'src',
  img: 'src',
  image: 'xlink:href'
}

module.exports = function(api) {
  api.chainWebpack(webpackConfig => {
    // prettier-ignore
    webpackConfig.module
      .rule('template')
        .test(/\.html$/)
        .use('template')
          .loader('vue-template-loader')
          .options({
            scoped: true,
            transformAssetUrls
          })

    // prettier-ignore
    webpackConfig.module
      .rule('functional')
        .test(/\.functional\.html$/)
        .use('functional')
          .loader('vue-template-loader')
          .options({
            scoped: true,
            functional: true,
            transformAssetUrls
          })
  })
}
