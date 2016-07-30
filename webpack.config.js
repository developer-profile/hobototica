module.exports = {
  context: __dirname + "/app",
  entry: {
  	javascript: "./app.js",
  	html: "./index.html",
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  
  module: {
  loaders: [
    
    { 
    test: /\.js?$/,         // Match both .js and .jsx files
    exclude: /node_modules/,
    loader: "react-hot", 
    loader: "babel", 
    query:
      {
        presets:['react']
      },
    
	},
    {
  	   test: /\.html$/,
  	   loader: "file?name=[name].[ext]",
    },
    
  ],
},
}