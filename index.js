'use strict'
var memPath

class Pfade {
    constructor(rootPath) {
        if (!memPath && !rootPath) {
            throw new Error('Path not given')
        }

        this.rootPath = memPath || rootPath
        this.rootPath = this.rootPath + '/'
        memPath = this.rootPath
    }

    require(relativePath) {
        return require(this.rootPath + relativePath)
    }

}

module.exports = Pfade
