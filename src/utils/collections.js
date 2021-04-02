module.exports = config => {
  config.addCollection('posts', collectionApi => {
    return collectionApi.getFilteredByGlob('content/posts/*.md')
  })
}
