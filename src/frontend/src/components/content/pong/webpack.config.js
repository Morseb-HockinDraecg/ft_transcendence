const path = require('path');

module.exports = {
  entry: './index.ts',
  mode: 'development',
  module: {
	rules: [
		{
		   test: /\.tsx?$/,
		   loader: 'ts-loader',
		   options: {
			  compilerOptions: {
				 "noEmit": false
			  }
		   },
		   exclude: [
			/node_modules/, /Game\.tsx$/
		  ],
		 },
    ],
  },
  plugins: [
    {
       apply: (compiler) => {
         compiler.hooks.done.tap('DonePlugin', (stats) => {
           console.log('Compile is done !')
           setTimeout(() => {
             process.exit(0)
           })
         });
       }
    }
],
performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../../../public'),
  },
};