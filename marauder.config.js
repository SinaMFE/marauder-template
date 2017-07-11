module.exports = {
    ftpPath: '',
    hash: false,
    proxy: [{
        pattern: "https://mjs.sinaimg.cn/wap/online/home/v8/trunk/js/home-d1c4271053.min.js", //替换目标url
        responder: "http://127.0.0.1:3022/index.js" //用于替换目标文件的本地服务器地址，这个必须填写完整的从http://开始
    }],
    // vendor:["@mfelibs/base-utils"],
    //publicPath:"https://mjs.sinaimg.cn/wap/",//线上amd绝对路径文件夹
    minpic: true,
    resourcePath: [],
    zip: false,//控制 是否打包zip,ci是否上传zip
    zip_config_name: "kandian" //控制发包的json文件名
}
