const addPlugins = require('./src/utils/plugins')
const addFilters = require('./src/utils/filters')
const addTransforms = require('./src/utils/transforms')
const addShortcodes = require('./src/utils/shortcodes')
const addCollections = require('./src/utils/collections')
const markdown = require('./src/utils/markdown')

module.exports = config => {
  addPlugins(config)
  addFilters(config)
  addTransforms(config)
  addShortcodes(config)
  addCollections(config)

  config.setDataDeepMerge(true)
  config.setLibrary('md', markdown)
  config.setTemplateFormats('md,njk')
  
  config.addPassthroughCopy({ 'assets': '/' })
  if (!process.env.ELEVENTY_ENV)
    config.addPassthroughCopy({ 'src/js': '/' })

  config.setBrowserSyncConfig({
    ui: false,
    ghostMode: false
  })
  
  return {
    dir: {
      includes: "src/layouts",
      data: "src/data"
    }
  }
}