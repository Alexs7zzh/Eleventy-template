const addFilters = require('./src/utils/filters')
const addTransforms = require('./src/utils/transforms')
const addRender = require('./src/utils/render')
const markdown = require('./src/utils/markdown')

module.exports = config => {
	addFilters(config)
	addTransforms(config)
	addRender(config)

	config.setLibrary('md', markdown)
	config.setTemplateFormats('md,njk')
	config.addPassthroughCopy({ assets: '/' })

	return {
		dir: {
			includes: 'src/layouts',
			data: 'src/data'
		}
	}
}
