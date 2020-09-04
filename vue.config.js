module.exports = {
  publicPath: process.env.TARGET === 'github'
    ? '/category'
    : '/'
}