# XMOV 前端 vue3-electron-template 项目模板

## 简介

vue3-electron-template 是一个基于 Vue3、Vite3、TypeScript、Pinia、Element Plus 和 Windi CSS 的 Electron 模版。它拥有自动注册路由、自动注册全局组件、IPC 通信及白名单、全局窗口管理、版本自动更新等功能。开箱即用，可根据项目实际情况进行二次拆装。
## 开始

1. `git clone git@git.xmov.ai:frontend/vue3-electron-template.git`
2. `cd vue3-electron-template`
3. `yarn i`
4. `yarn dev`

## 目录
```
├── .vscode                    // vscode 插件和设置
│   ├── extensions.json        // vscode 推荐的插件
│   └── settings.json          // vscode 配置（在该项目中生效，可以复制到用户配置文件中）
├── dist
├── release                    // 打包后安装包所在目录
├── electron                   // electron 相关配置
│   ├── main                   // 主进程代码
│   │   ├── ipc-event          // ipc 通信事件监听模块
│   │   ├── check-update       // 版本更新模块
│   │   ├── electron-windows   // 全局窗口管理模块
│   │   └── index.ts           // 主进程入口文件
│   └── preload                // 预加载模块代码
│       ├── white-channel.ts   // ipc 通信白名单
│       └── index.ts           // 预加载模块入口文件
├── public                     // 公共目录（文件夹里面的资源打包后会在 dist 目录下）
│   └── tray-icon.png          // 系统托盘图标
├── src
│   ├── api                    // 请求接口相关
│   ├── assets                 // 静态资源
│   │   ├── imgs               // 图片
│   │   └── svg-icon           // 本地 svg 图标
│   ├── biz-components         // 全局业务组件
│   ├── components             // 全局 ui 组件
│   ├── hooks                  // 组合式的函数
│   ├── layouts                // 布局组件
│   ├── plugins                // 插件
│   │   ├── auto-register      // 自动注册路由和全局组件
│   │   ├── axios              // 网络请求
│   │   └── renderer-ipc       // ipc 通信
│   ├── router                 // vue 路由
│   │   ├── index              // 路由守卫
│   │   └── routes             // 声明的固定路由
│   ├── store                  // pinia 状态管理
│   │   └── app                // 整个 app 共享
│   ├── styles                 // 全局样式
│   │   └── scss               // scss
│   ├── typings                // TS 类型声明文件 (*.d.ts)
│   │   ├── api.d.ts           // 请求接口返回的数据的类型声明
│   │   ├── env.d.ts           // vue 路由描述和请求环境相关的类型声明
│   │   ├── global.d.ts        // 全局通用类型
│   ├── views                  // 页面，目录下 vue 文件自动生成路由
│   ├── App.vue                // vue 文件入口
│   └── main.ts                // 项目入口
├── .eslintrc.js               // eslint 配置文件
├── .gitignore                 // 忽略 git 提交的配置文件
├── electron-builder.json5     // electron 打包配置文件
├── auto-imports.d.ts          // 动态引用的组件的类型声明
├── components.d.ts            // 自动引入的组件的类型声明
├── index.html
├── package-env.ts             // electron 打包后环境变量读取文件
├── package.json               // npm 依赖描述文件
├── set-package-env.js         // 打包后环境变量配置文件
├── README.md                  // 项目介绍文档
├── tsconfig.json              // TS 配置
├── windi.config.js            // 原子 css 框架 windicss 配置
├── vite.config.ts             // vite 配置
└── yarn.lock                  // npm 包管理器 yarn 依赖锁定文件
```
## 功能模块

### 自动注册组件/路由
- 自动注册 src/components，src/biz-components 目录下 vue 文件为全局组件，自动引入。
- 自动注册 src/view 目录下 vue 文件中 defineOptions 声明了 isRouter: true 的组件为路由。

```ts
defineOptions({
  name: 'Home',
  isRouter: true,
  // layout: 'MainLayout'
})
```
<br/>

### IPC 通信
```ts
// 渲染进程 -> 主进程
import { ipcSend } from "@/plugins/renderer-ipc";
ipcSend('white-channel', params)
ipcMain.on("white-channel", (event, params) => {
  console.log(params)
})

// 渲染进程 -> 主进程 -> 渲染进程
import { ipcInvoke } from "@/plugins/renderer-ipc";
ipcInvoke('white-channel', params).then((data) => {
  console.log(data)
})
ipcMain.handle("white-channel", (event, params) => {
  console.log(params)
  return data
})

// 主进程 -> 渲染进程
win.webContent.send("white-channel", data)
import { ipcReceive } from "@/plugins/renderer-ipc"
ipcReceive('white-channel', (data) => {
  console.log(data)
})
```

> 说明：1. 示例中 ipc 通信的 white-channel 需要在目录：electron/preload/white-channel.ts 中进行类型声明。<br/>2. 示例中 ipcMain 需要在目录：electron/main/ipc-event 内挂载。

<br/>

### 窗口管理

- 全局窗口集合

```ts
import ElecWindows from "./electron-windows"
const elecWindows = ElecWindows.getElecWindows()
console.log(`windows group: ${elecWindows.group}`)
// windows group: { '1': { route: '', isMultiWindow: false, isMainWin: true } }
```

- 创建窗口

```ts
// 渲染进程创建
ipcSend('window-new', windowParams)

// 主进程创建
import ElecWindows from "./electron-windows"
const elecWindows = ElecWindows.getElecWindows()
elecWindows.createWindow(windowParams)
```

> 说明：通过 ElecWindows 类统一管理应用窗口，系统托盘等；更方便的查找，关闭，配置窗口。

<br/>

### 环境变量

```ts
// 打一个开发包
yarn build:dev

// 打一个测试包
yarn build:test

// 打一个生产包
yarn build
```

> 说明：打包时通过重写 package-env.ts 文件，设置打包后环境变量；打包后读取 packageEnv 环境变量，进行差异化操作。

<br/>

### 版本更新
```ts
// 1.check-update 文件中配置更新包的服务器资源地址
const serverMap = {
  dev: 'devServerUrl',
  test: 'testServerUrl',
  production: 'productionServerUrl',
}
// 2.electron-build.json5 文件中配置相应的服务器资源域名
publish: [
  {
    provider: "generic",
    url: "https://xxx.com/",
  },
]
// 3. 渲染进程展示对应的更新进度
import { ipcReceive } from "@/plugins/rendererIpc";
ipcReceive('update-start', () => {
  console.log('版本检测中。..')
})
ipcReceive('update-progress', (data: any) => {
  console.log(`版本更新中。..(${data.percent.toFixed(2)}%)，请勿关闭系统`)
})
ipcReceive('update-end', (data: any) => {
  console.log('版本更新完成', data)
})
ipcReceive('update-err', (data: any) => {
  console.log('版本更新失败', data)
})
```
> 说明：版本自动更新需要提供线上 oss 资源地址存放最新版本打包资源，以供访问。