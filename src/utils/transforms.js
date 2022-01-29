module.exports = config => {
	if (process.env.ELEVENTY_ENV)
		config.addTransform('transform', (content, outputPath) => {
			if (outputPath && outputPath.endsWith('.html')) {
				const { parseHTML } = require('linkedom')
				let { document } = parseHTML(content)

				require('./picture')(document, {
					sizes: '(max-width: 600px) 100vw, (max-width: 1500px) 52vw, 780px'
				})

				return `<!DOCTYPE html>${document.documentElement.outerHTML}`
			}
			return content
		})

	if (process.env.ELEVENTY_ENV) {
		const minify = require('html-minifier').minify
		config.addTransform('minifyHtml', (content, outputPath) => {
			if (outputPath && outputPath.endsWith('.html'))
				content = minify(content, {
					removeAttributeQuotes: true,
					collapseBooleanAttributes: true,
					collapseWhitespace: true,
					removeComments: true,
					sortClassName: true,
					sortAttributes: true,
					html5: true,
					decodeEntities: true,
					minifyJS: true
				})

			return content
		})
	}
}
