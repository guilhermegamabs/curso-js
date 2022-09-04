const path = require('path'); // CommonJS

module.exports = {
    mode: 'development', // development
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'), // dirname é o repositório atual
        filename: 'bundle.js'
    },
    module: {},
    devtool: 'source-map'
};


