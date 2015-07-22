var test = require('tape')
var kByV = require('../')
var obj = { a: 1, b: 2 }

test('basic', function (t) {
  for (var p in obj) {
    t.equal(kByV(obj, obj[p]), p)
  }

  t.equal(typeof kByV(obj, 3), 'undefined')
  t.end()
})
