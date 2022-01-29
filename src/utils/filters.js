const { DateTime } = require('luxon')
const util = require('util')

module.exports = config => {
	config.addFilter('readableDate', dateObj => {
		return DateTime.fromJSDate(dateObj).toFormat('DDD')
	})
	config.addFilter('shortDate', dateObj => {
		return DateTime.fromJSDate(dateObj).toFormat('MM/dd')
	})
	config.addFilter('htmlDateString', dateObj => {
		return DateTime.fromJSDate(dateObj).toFormat('yyyy-LL-dd')
	})

	config.addFilter('console', data => util.inspect(data))
}
