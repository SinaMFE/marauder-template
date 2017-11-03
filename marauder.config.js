module.exports = {
  hash: false, // 文件 md5 后缀
  proxy: [
    {
      pattern: '', //替换目标url
      responder: '' //用于替换目标文件的本地服务器地址，这个必须填写完整的从http://开始
    }
  ],
  // vendor:["@mfelibs/base-utils"],
  publicPath: '/', // 线上 CDN 路径
  minpic: false,
  resourcePath: [],
  zip: false, // 控制是否打包 zip, ci 是否上传 zip
  zip_config_name: '', // 控制发包的 json 文件名
  ftp: {
    host: '',
    port: 0,
    user: '',
    password: '',
    openBrowser: true, // 上传完毕后是否自动打开浏览器
    // 远程路径配置
    remotePath: {
      version: true // 路径中是否包含版本号
    }
  }
}
