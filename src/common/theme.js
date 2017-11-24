const fs = require('fs')
const path = require('path')
const lessToJs = require('less-vars-to-js')

module.exports = () => {
  const themePath = path.join(__dirname, './constant.less')
  return lessToJs(fs.readFileSync(themePath, 'utf8'))
}