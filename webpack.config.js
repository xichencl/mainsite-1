var path = require('path');


module.exports = {
  entry: './client/assets/js/main.js',
  output: { path: __dirname, filename: './client/assets/js/dist/bundle.js' },
  
  resolve: {
    alias: {
      Utils: path.resolve(__dirname, './common/utils')
    }
  },

  
	
  module: {
    
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react', 'es2015-ie']
        }
      }
    ]
	
	
  },
  
  		
		
  
};