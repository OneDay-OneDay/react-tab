var path=require("path");

module.exports={
	entry:  "./src/js/test.jsx",
	output: {
		// 打包输出的路径
		path: path.join(__dirname,"out"),
		// 打包后的名字
		filename: "bundle.js",
		publicPath: "./out/"
	},
	//在对模块捆绑打包的过程中会对文件的后缀名进行检测，然后进行相应的预处理
	module: {
	          loaders: [
		            {test: /\.js$/, loader: "babel-loader",query: { presets: ['react','es2015'] }},
		            {test: /\.jsx$/,loader: 'babel-loader', query: { presets: ['react', 'es2015'] }},
		            {test: /\.css$/, loader: "style-loader!css-loader"}
	          ]
    	}
};