module.exports = {
  hash: false,
  proxy: [
    {
      pattern: '', //替换目标url
      responder: '' //用于替换目标文件的本地服务器地址，这个必须填写完整的从http://开始
    }
  ],
  // vendor:["@mfelibs/base-utils"],
  //publicPath:"https://mjs.sinaimg.cn/wap/",//线上amd绝对路径文件夹
  minpic: true,
  resourcePath: [],
  zip: false, //控制 是否打包zip,ci是否上传zip
  zip_config_name: '', //控制发包的json文件名
  ftp: {
    host: '',
    port: 0,
    user: '',
    password: '',
    remotePath: {
      version: true
    }
  }
}
