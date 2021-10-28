# 项目架构设计

“架构设计没有银弹”，不存在所有业务领域都通用的最佳实践。

所以在项目架构方面，大多数团队都会构建自己的“东西”。采用统一的项目架构可以帮助我们快速理解项目，减少沟通成本，快速适应公司不同产品应用的开发工作。

下面提到的内容，是根据魔珐前端团队成员的技术栈提出的一套实践准则，也是开发新项目的基本要求，在此基础上再根据业务场景进行拓展开发。（使用 xmov cli 创建的项目都已默认实现）

## 基本的技术栈

- ✨ [构建工具：高效、快速的 Vite](https://cn.vitejs.dev/guide/)

- 🔥 [前端框架：最时髦的 Vue3，使用新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 🏆 [开发语言：政治正确 TypeScript](https://www.typescriptlang.org/)

- 🍍 [状态管理器：Vue3 新秀 Pinia](https://pinia.esm.dev/)

- 🎨 [样式：原子化 Windi CSS](https://cn.windicss.org/guide/)

- 🚏 [路由管理：Vue Router](https://github.com/vuejs/vue-router)

- 🚀 [工具库：VueUse 实用的 Composition API 工具合集 ](https://github.com/antfu/vueuse)

## 开箱即用的特性

- 📥 [组合式 Composition API 自动加载：unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)

- 📦 [组件自动化加载：unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)

## 项目文件结构

虽然很难说某一种项目文件结构的组织方式一定比另外一种更好，但是领域驱动模型，各自只管各自的模块，顶层再来进行组装和分配。坚持根据特性区分命名目录。能提供限界上下文，将某些功能牢牢地锁在一个地方，开发某个功能时，只需要关心这个模块就够了

一般项目的`src` 文件夹都包括类似下面的结构：

- `api` 全局的 api
- `assets` 资源文件夹可以包含所有静态文件，如图片资源、字体文件等
- `components` 整个应用程序中使用的公共组件
- `config` 全局配置
- `features` 基于不同业务功能特性的模块(可选)
- `hooks` 在整个应用程序中使用的公共 Hooks
- `lib` 二次导出的第三方库
- `pages` 页面视图
- `routes` 路由配置
- `services` 网络请求
- `stores` 全局状态 stores
- `test` ~~测试文件和 mock 服务~~
- `types` 全局类型定义文件
- `utils` 通用的工具函数

同时，`pages` 文件夹下的代码，应该根据模块或领域进行分组，建立子文件夹。比如

```
├── pages                        // 页面文件夹
    ├── visual-human             // 虚拟人功能页面
        ├── index.vue            // 首页入口文件，组织不同模块
        ├── action-panel         // 特性-动作面板模块
        ├── takeover             // 特性-接管数字人模块
        ├── components           // 组件文件夹
            ├── action-card      // 动作卡片组件
            ├── control-bar      // 接管数字人的控制条组件
        ├── hooks                // 虚拟人功能相关 hooks
        ├── store                // 可能用于不同模块状态管理的 store
├── ...                          // 其他页面
```
这种结构支持项目的变化和增长。其关键是不要让应用的发展使其架构失效。基于模块的结构非常易于扩展，你只需在上面添加模块，而不会增加复杂性。

## 网络请求

很多开发者都喜欢基于 axios 封装一层自己的网络请求层，但注意在设计网络请求层的过程中，一定要考虑减少团队内其他人的学习成本。

**⛑ 不要对 axios 进行过度的封装！**

目前魔珐的项目开发中，绝大部分情况下只需要实现这 3 点即可：

1. 根据项目的实际需求，增加`请求拦截器`与`响应拦截器`
	- 请求拦截器：实现添加 `accessToken` 等
	- 响应拦截器：实现统一提示；格式化返回数据，过期退出应用等
2. 设计统一的异常拦截处理器 `errorHandler`
3. 使用 `vueuse` 的 `useAxios` 的异步请求 hook，优雅管理请求状态

🧑🏻‍💻 关于异步请求 Hook 的技术选项说明:

- vueuse 中的 `useFetch` 和 `useAxios` 是两个处理网络请求的 hook。`useFetch` 功能比较单一，只有请求体的一些基本功能。而 `useAxios` 有更多基于 `axios` 内置功能的封装。

- 其实 react 生态中知名的 Hooks 工具库 —— `ahooks` 里的 `useRequest`，相比 `useAxios` 有着更加丰富的功能，比如依赖刷新，防抖，节流，缓存等，可惜它没有 Vue 版本。

- 不过，在项目的绝大部分场景中使用`watch` API 以及节流防抖等方法配合 `useAxios` 就足以满足业务需求。如果有特殊需求，可以考虑自己添加`TanStack Query`等更强大的异步请求状态管理库。

## 待补充...




