const sass = require('sass')
const path = require('path')
const csso = require('csso')
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')

module.exports = config => {
	config.addTemplateFormats('scss')
	config.addExtension('scss', {
		outputFileExtension: 'css',
		compile: async function (inputContent, inputPath) {
			const parsed = path.parse(inputPath)
			if (parsed.name.startsWith('_')) return
			let { css } = sass.compileString(inputContent, {
				loadPaths: [parsed.dir]
			})
			if (!process.env.DEV) {
				css = postcss([autoprefixer]).process(css).css
				css = csso.minify(css, {
					sourceMap: false,
					restructure: true,
					forceMediaMerge: false
				}).css
			}
			return () => css
		},
		compileOptions: {
			permalink: (_, inputPath) => {
				const parsed = path.parse(inputPath)
				if (parsed.name.startsWith('_')) return false
				return `/${parsed.name}.css`
			}
		}
	})
}
