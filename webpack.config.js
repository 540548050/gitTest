const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/app.js',
		publicPath:'/dist/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env','react']
					}
				}
			},
			{
		        test: /\.css$/,
		        use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: "css-loader"
		        })
		   },
		   {
		        test: /\.scss$/,
		        use: ExtractTextPlugin.extract({
		          fallback: 'style-loader',
		          use: ['css-loader', 'sass-loader']
		        })
	     	},
	     	{
		        test: /\.(png|jpg|gif)$/,
		        use: [
		          {
		            loader: 'url-loader',
		            options: {
		              limit: 8192,
		              name:'resource/[name].[ext]'
		            }
		          }
		        ]
		    },
		    {
		        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
		        use: [
		          {
		            loader: 'url-loader',
		            options: {
		              limit: 8192,
		              name:'resource/[name].[ext]'
		            }
		          }
		        ]
		    }
		    
		]
	},
	devServer: {
     	port:8088
    },
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new ExtractTextPlugin("css/[name].css"),
		//提出公共模块
		new webpack.optimize.CommonsChunkPlugin({
			name:'common',
			filename:'js/base.js'
		})
	]
};