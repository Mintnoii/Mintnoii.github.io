# 🔮 Xmov CLI
## 简介
魔珐前端脚手架工具
### 特性

- ✅ 内置默认模板，快速便捷地初始化项目
- ✅ 解耦模板管理，支持自定义模板
- ✅ es6 + ts、友好的交互支持
- ✅ 集成 x-utils 等内置工具库
- ✅ 自定义项目配置，实现插件化扩展
- ✅ 规范项目代码和提交格式

### TODO

- ⚗ 针对不同平台的项目提供不同的推荐插件

## 安装

- `yarn global add @xmov/cli`
- `xmov`

或者：

- `npm i @xmov/cli -g`
- `xmov`

如果无法执行`xmov`，请先确保 yarn/bin 或 npm 路径已被添加到系统环境变量中

## 使用

**打开终端，输入 `xmov`，会提示脚手架可用命令与参数：**

> **Options:**
> - `-v, --version` 查看当前版本
> - `-h, --help `   显示命令帮助
>
> **Commands:**
> - `init|i [options] <project_name>`     使用模板初始化项目
> - `list|ls`                             查看当前所有模板
> - `add-tmpl`                            添加自定义模板
> - `rm-tmpl [options] <template_name>`   删除自定义模板：模板名
> - `create|c [options] <project_name>`   创建一个基于 vite + vue3 + ts 的项目
>

### 项目模板
Xmov CLI 目前提供三套项目初始化模板

1. **[vue-default](https://git.xmov.ai/frontend/template-vue-default)**

2. **[react-default](https://git.xmov.ai/frontend/template-react-default)**

3. **[electron-default](https://git.xmov.ai/frontend/vue3-electron-template)**

- 通过 `xmov ls` 命令可以查看当前所有模板
- 通过 `add-tmpl` 命令可以添加自定义模板
  > 添加自定义模板前，需要在 Gitlab 的 [frontend](https://git.xmov.ai/frontend) 组内创建对应模板仓库
	>
  > 添加自定义模板时，模板名称与仓库地址为必填项，仓库地址的格式必须为 `frontend/xxx.git`** （xxx 为你的仓库名称）
	>
	> 注意，自定义的模板在重装脚手架后需要重新配置添加，如果觉得可复用性很高，可以联系我们将其内置为默认模板，同时需要负责后期维护该模板

- 通过 `rm-tmpl <template_name>` 命令可以删除自定义模板，默认模板不支持删除
