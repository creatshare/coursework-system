/**
 * Created by hanyile on 2017/8/17.
 */

var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var STUDENT_PATH = path.resolve(ROOT_PATH, 'src/student'); // __dirname 中的src目录，以此类推
var STUDENT_INDEX = path.resolve(STUDENT_PATH, 'index.js'); // 根目录文件 oneMiddleware.js 地址
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist'); // 发布文件所存放的目录

module.exports = {
  // 页面入口文件配置
  entry: {
    index : STUDENT_INDEX
  },
  // 入口文件输出配置
  output: {
    path: BUILD_PATH, // 编译到当前目录
    filename: '[name].bundle.js'// 编译后的文件名字
  },
  // 插件项
  plugins: [
    new CleanWebpackPlugin(['dist']), // 每次打包时清除旧的打包文件
    // 这个 HtmlWebpackPlugin 使用自己的 index.html 模板
    new HtmlWebpackPlugin({ // 自动生成打包后的 index.html 入口模板
      title: 'C Language System', // 用来生成页面的 title 元素
      template: 'public/index.html', // 使用自己写的 index.html 模板, 通过 inject 注入相关链接
      filename: 'index.html', // 输出的 HTML 文件名
      inject: 'body', // 注入所有的资源到特定的 template 中,这里所有的 javascript 资源将被放置到 body 元素的底部
      showErrors: 'false', // 如果为 true, 这是默认值，错误信息会写入到 HTML 页面中
      minify:{ // 压缩HTML文件
        removeComments: false, // 移除HTML中的注释
        collapseWhitespace: false // 删除空白符与换行符
      }
    }),
    // // 这个 HtmlWebpackPlugin 自动生成全新的 index.html 模板
    // new HtmlWebpackPlugin({ // 自动生成打包后的 index.html 入口模板
    //   title: 'C Language System', // 用来生成页面的 title 元素
    //   filename: 'index.html', // 输出的 HTML 文件名
    //   inject: 'body', // 注入所有的资源到特定的 template 中,这里所有的 javascript 资源将被放置到 body 元素的底部
    //   favicon: './public/favicon.ico', // 添加特定的 favicon 路径到输出的 HTML 文件中
    //   showErrors: 'true', // 如果为 true, 这是默认值，错误信息会写入到 HTML 页面中
    //   minify:{ // 压缩HTML文件
    //     removeComments: true, // 移除HTML中的注释
    //     collapseWhitespace: true // 删除空白符与换行符
    //   }
    // })
  ],
  // 加载器配置,告知 webpack 每一种文件都需要使用什么加载器来处理
  module: {
    // 以下 "-loader" 可以省略不写的，多个 loader 之间用 “!” 连接起来。
    loaders: [{
      // .css 文件使用 style-loader 和 css-loader 来处理
      test: /\.css$/,
      exclude: /^node_modules$/,
      loader: 'style-loader!css-loader',
      include: [STUDENT_PATH]
    }, {
      // .js 文件使用 babel for React 来编译处理
      test: /\.js$/,
      exclude: /^node_modules$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      },
      include: [STUDENT_PATH]
    }, {
      // .scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
      test: /\.scss$/,
      exclude: /^node_modules$/,
      loader: 'style!css!sass?sourceMap',
      include: [STUDENT_PATH]
    }, {
      // 图片文件使用 url-loader 来处理，小于8kb的直接转为base64
      test: /\.(png|jpg)$/,
      exclude: /^node_modules$/,
      loader: 'url-loader?limit=8192',
      include: [STUDENT_PATH]
    }
    ]
  },
  // // 其它解决方案配置
  // resolve: {
  //   // 查找 module 的话从这里开始查找
  //   root: '/Users/hanyile/WorkSpace/Couple-Us/C-Language-System/src', // 绝对路径
  //   // 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
  //   extensions: ['', '.js', '.json', '.scss'],
  //   // 模块别名定义，方便后续直接引用别名，无须多写长长的地址
  //   alias: {
  //     AppStore : 'js/stores/AppStores.js', // 后续直接 require('AppStore') 即可
  //     ActionType : 'js/actions/ActionType.js',
  //     AppAction : 'js/actions/AppAction.js'
  //   }
  // }
};