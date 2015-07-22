# key-by-val

tiny fn I seem to find myself needing often

```js
var kByV = require('key-by-val')
var consts = {
  public: 1,
  private: 2,
  happy: 3
}

var blah = {
  type: 3  
}

var typeName = kByV(consts, blah.type) // === 'happy'
```
