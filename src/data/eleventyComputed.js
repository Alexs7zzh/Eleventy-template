module.exports = {
	permalink: data => {
		let slug = data.page.fileSlug
		if (slug === 'pages') return '/'
		return `/${slug}/`
	}
}
