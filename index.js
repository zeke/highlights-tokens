var grammars = require("./node_modules/highlights/gen/grammars")
var _ = require("lodash")
var compact = _.compact
var flatten = _.flatten
var uniq = _.uniq
var tokens = []

Object.keys(grammars).forEach(function(key){
  var patterns = grammars[key].patterns
  if (!Array.isArray(patterns)) return
  patterns.forEach(function(pattern){
    if (typeof pattern.name !== "string") return
    tokens.push(pattern.name.split("."))
  })
})

tokens = uniq(compact(flatten(tokens)))
  .filter(function(token) {
    return !~token.indexOf("$")
  })
  .sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase())
  })

module.exports = tokens

console.log(tokens)
