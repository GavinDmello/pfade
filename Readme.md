# Pfade

This is a basic route normalizing library. It helps in avoiding relative paths.

## Installation

```
    npm install pfade
```


## Usage
Instead of using the relative paths

```js
    require('../../something.js')
```
you can use
```js
    var Pfade = require('pfade')
    var pfade = new Pfade(__dirname) // specify the absolute path to your project
    var index = pfade.require('index.js')
    var handle = pfade.require('modules/handle.js')
    console.log(handle)
```

This reduces the ugly relative path requires.
After the first instantiation, you won't have to provide the absolute address of the project.

You can just instantiate

```js
    var Pfade = require('pfade')
    var pfade = new Pfade()
```

-------------------
## License
MIT

