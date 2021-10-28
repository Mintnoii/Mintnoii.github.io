# Vue 项目默认模板

## 技术栈

- ✨ [构建工具：高效、快速的 Vite](https://cn.vitejs.dev/guide/)

- 🔥 [前端框架：最时髦的 Vue3，使用新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 🏆 [开发语言：政治正确 TypeScript](https://www.typescriptlang.org/)

- 🍍 [状态管理器：Vue3 新秀 Pinia](https://pinia.esm.dev/)

- 🎨 [样式：原子化 Windi CSS](https://cn.windicss.org/guide/)

- 🚏  [路由管理：Vue Router](https://github.com/vuejs/vue-router)

- 🎉 [UI 组件库：Ant Design Vue](https://www.antdv.com/components/overview-cn/)

- 🚀 [工具库：VueUse 实用的 Composition API 工具合集 ](https://github.com/antfu/vueuse)

## 开箱即用

- 📥 [组合式 Composition API 自动加载：unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)

- 📦 [组件自动化加载：unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)

- 📡 [统一封装的网络请求：Axios + Hooks](https://git.xmov.ai/frontend/template-vue-default/blob/master/src/service/index.ts)

- 🍀 [图标组件：Svg Icon](https://git.xmov.ai/frontend/template-vue-default/tree/master/src/components/SvgIcon.vue)

- 🗂 [基于文件的路由：vite-plugin-pages](https://git.xmov.ai/frontend/template-vue-default/tree/master/src/pages)

- 🗺 [布局系统：vite-plugin-vue-layouts](https://git.xmov.ai/frontend/template-vue-default/tree/master/src/layout)

- 📐 [编码风格规范：ESLint、Prettier、VSCode Settings](https://git.xmov.ai/frontend/template-vue-default/blob/master/.eslintrc.js)

- 🚦  [代码提交规范：husky、Commitlint、lint-staged](https://git.xmov.ai/frontend/template-vue-default/blob/master/.commitlintrc.json)

## 安装使用

1. `git clone git@git.xmov.ai:frontend/template-vue-default.git my-app`
2. `cd my-app`
3. `yarn`
4. `yarn run dev`

## 项目目录
```
├── .husky                              // husky git hooks 配置目录
    ├── _                               // husky 脚本生成的目录文件
    ├── commit-msg                      // commit-msg 钩子，用于验证 message 格式
    ├── pre-commit                      // pre-commit 钩子，主要是和 eslint 配合
├── env                                 // 环境变量文件夹
├── public                              // vite 项目下的静态目录
    ├── config.js                     	// 项目配置，私有化部署时使用
├── dist                                // 默认的 build 输出目录
└── src                                 // 源码目录
    ├── api                             // 接口相关
    ├── assets                          // 公共的文件（如 image、css、font 等）
    ├── components                      // 项目全局组件
    ├── hooks                           // 自定义的全局 hooks
    ├── layouts                         // 项目页面布局
    ├── pages                           // 页面模块目录
        ├── login                       // login 页面模块
        ├── [...all].vue                // 404 页面
        ├── ...
    ├── router                          // 路由
    ├── service                         // 网络请求
    ├── store                           // 状态管理
    ├── typings                         // 项目 type 类型定义文件夹
        ├── auto-imports.d.ts           // unplugin-auto-import 插件生成
        ├── components.d.d.ts           // unplugin-vue-components 插件生成
    ├── utils                           // 工具库
    ├── App.vue                         // vue 顶层文件
    ├── main.ts                         // 项目入口文件
    ├── env.d.ts                        // 用户自定义环境变量的 ts 智能提示
├── .commitlintrc.json                  // commitlint 配置
├── .editorconfig                       // IDE 格式规范
├── .eslintignore                       // eslint 忽略
├── .eslintrc.js                        // eslint 配置文件
├── .gitignore                          // git 忽略
├── .prettierrc                         // prettierc 配置文件
├── index.html                          // 入口文件
├── package.json                        // package
├── README.md                           // README
├── stats.html                          // 包可视化分析文件
├── tsconfig.json                       // typescript 配置文件
├── vite.config.ts                      // vite 配置文件
└── windi.config.ts                     // windi css 配置文件
```
## 开发建议

**👍 推荐使用 Composition API 的 [`<script setup>` SFC 语法](https://github.com/vuejs/rfcs/pull/227)**

本项目统一采用 Composition API 的开发模式，弱化 vue 模板式编程体验，使单文件组件写法更接近函数式编程。

`setup` 的 SFC 语法相比于普通的 `<script>` 语法，vue 官方肯定了它的优势：
- 更少的样板内容，更简洁的代码
- 能够使用纯 Typescript 声明 props 和抛出事件
- 更好的运行时性能 （其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理）
- 更好的 IDE 类型推断性能 （减少语言服务器从代码中抽离类型的工作）

**👍 推荐安装 VScode 插件 Volar**

 在 Vue2.x 项目中普遍使用的 `Vetur` 对 TS 的支持不太友好，因此 Vue3.x 开发推荐另外一个插件 `Volar`。

 注意：`Volar` 和 `Vetur` 同时使用会有冲突，使用 `Volar` 时要记得禁用 `Vetur`。

 **👍 推荐优先使用原子化 Windi CSS 实现样式开发**

 项目中页面与组件的样式，尽量全部用 `Windi CSS` 实现，同时推荐搭配安装 WindiCSS IntelliSense 插件，提高开发效率。

 注意：项目安装了 `SCSS` 的预处理器，但请在原子化 CSS 很难实现的场景，再考虑使用 `SCSS` 语法。

## 注意事项

 **📌 使用 `SvgIcon` 组件时，单色图标需要设计同学导出不带 `fill` 属性的 `svg` 图片才能实现自定义颜色**

 - 多色、渐变、毛玻璃等 `svg` 图片暂不支持自定义颜色，直接使用设计稿原图
