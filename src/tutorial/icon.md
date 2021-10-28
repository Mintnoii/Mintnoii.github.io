# 统一处理项目中的图标

## Why ? 🤔
为什么使用 SVG 而不是 IconFont
### IconFont主要的几点劣势：
1. 浏览器将其视为文字进行抗锯齿优化，有时得到的效果并没有想象中那么锐利。 尤其是在不同系统下对文字进行抗锯齿的算法不同，可能会导致显示效果不同
2. IconFont 作为一种字体，Icon 显示的大小和位置可能要受到 font-size、line-height、word-spacing 等等 CSS 属性的影响。 Icon 所在容器的 CSS 样式可能对 Icon 的位置产生影响，调整起来很不方便
3. 使用上存在不便。首先，加载一个包含数百图标的 IconFont，却只使用其中几个图标，非常浪费加载时间。 自己制作 IconFont 以及把多个 IconFont 中用到的图标整合成一个 Font 也非常不方便
4. 如果想实现最大程度的浏览器支持，可能要提供至少四种不同类型的字体文件。包括 TTF、WOFF、EOT以及一个使用 SVG 格式定义的字体
5. 网络延时会导致 Icon 会先加载出来一个 string
---
### Svg Icon 的优劣势：
1. 完全离线化使用，不需要从 CDN 下载字体文件，图标不会因为网络问题呈现方块，也无需字体文件本地部署
2. 在低端设备上 SVG 有更好的清晰度
3. 支持多色图标
4. 对于内建图标的更换可以提供更多 API，而不需要进行样式覆盖
劣势：兼容性（其实目前浏览器兼容性已经不错 查看兼容性）
## What ? 🧐
实现原理
- svg 图标比较小，而且都是可读的 xml 文本，我们把它直接放在项目中即可，通过 vite-plugin-svg-icons 插件生成 svg 雪碧图，实现自动引入
- 插件会自动将所有 svg 图片加载到 HTML 中。并且每一个 svg 将会被过滤去无用的信息数据。让 svg 达到最小的值。之后使用 svg 图片就只需要操作 DOM 即可，而不需要发送 http 请求
- 利用 svg 的 symbol 元素，将每个 icon 包括在 symbol 中
- 再通过
```bash
  <use xlink:href="symbolId"/>
```
来使用所需的 icon

### 优点：
- 解决各种版本 iconfont 私有图标库问题
- 每个 SVG 图标都可以更改大小颜色
- 在页面中使用时代码清爽
```bash
  <svgIcon name="home" />
```
## How ? 😉
1. 配置 vite.config.ts 文件
安装 vite-plugin-svg-icons 插件后编辑 Vite 配置文件：
```bash
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// 省略其他部分代码
plugins: [
    createSvgIconsPlugin({
        // 项目 svg 图片路径
       iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
       // 图标 ID 样式
       symbolId: 'svg-icon-[name]',
    }),
]
```

1. 封装 SvgIcon 图标组件
```bash
<script setup lang="ts" name="SvgIcon">
interface Props {
    prefix?: string
    name?: string
    color?: string
    size?: number
    className?: string
}

const props = withDefaults(defineProps<Props>(), {
    prefix: 'svg-icon',
    name: '',
    color: '#fff',
    size: 16,
    className: 'svg-icon'
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg aria-hidden="true" :width="size" :height="size" :class="className">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>
<style lang="scss" scoped>
.svg-icon {
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
```
3. 使用说明
```bash
<svg-icon name="user" color="#2395f1" />
```
- name 就是放置在 @/assets/icons 文件夹里的图标文件名
- color 颜色填充，使用此项会默认覆盖图标颜色
注意事项： 🚨
- 单色图标需要设计同学导出不带 fill 属性的 svg 图片才能实现自定义颜色
- 如果没有提供，可以手动删除，或者安装使用 Figma 的插件 Svg Export 导出
