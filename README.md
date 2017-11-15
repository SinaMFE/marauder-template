# marauder-template

为了保证多人开发时依赖安装的一致性，推荐使用 [yarn](https://yarnpkg.com/zh-Hans/) 作为包管理工具

## 命令

``` bash
# 安装依赖
yarn

# 启动测试环境，默认端口 `3022`，其中 `index` 为要调试的页面名称
npm run dev index

# 生产环境打包,打包后的代码在dist目录下，其中 `index` 为要打包的页面名称
npm run build index

# ftp 上传，需在 `marauder.config.js` 配置 ftp 服务器信息
npm run build index --ftp
```

## 配置文件

项目根目录下的 `marauder.config.js` 为脚手架配置文件

- **svnPath**		线上环境项目目录,非必填
- **ftpPath**  	测试环境项目目录,非必填
- **hash**  		打包后的js，css，image是否加hash，默认true
- **resourcePath** : ['config.js','config2.js'] 相对路径，会把此类文件copy到dist/resource目录下


## 开发目录结构

```
src
├── css	静态资源
│   ├── index.css
│   └── list.css
├── images 静态资源
│   ├── add_icon.jpg
│   └── align_Hcenter.png
├── js	静态资源
└── view  多页面开发目录
    ├── index  index页面
    │   ├── index.html     index页面首页
    │   └── index.js  		index页面入口js
    └── list   list页面
        ├── index.html     list页面首页
        └── index.js	list页面入口js
```


多页面开发时，多页面名称由view下的文件夹名称确定
入口文件必须为 index.html
入口js必须为 index.js
当启动测试环境后，index 页面的测试地址为 localhost:3022 或 localhost:3022/index.html,
list 页面的测试地址为 localhost:3022/list.html

