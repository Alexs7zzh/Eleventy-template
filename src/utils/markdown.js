const uslug = require('uslug')

module.exports = require('markdown-it')({
  html: true,
  typographer: true,
})
  .use(require('markdown-it-anchor'), {
    slugify: s => uslug(s)
  })
  .use(require('markdown-it-attrs'))
  .use(require('./markdown/emphasis'))
  .use(require('./markdown/figure'))