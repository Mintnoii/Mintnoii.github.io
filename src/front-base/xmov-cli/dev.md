# Xmov Cli 开发
## 设计
- [Xmov Cli 的设计与实现](https://rsjqcmnt5p.feishu.cn/docx/I1WddHduho4NXmxc6PvcZ0Kvn2d)

### 关于私有依赖包
- 创建与初始化项目时，可以选择是否需要安装私有 npm 包
- **发布新的 npm 包之后，想在 xmov cli 使用时可以选择安装，需要修改包的 package.json 文件里的 `repository`字段，在其对象中加入`"utils": true`**

```json
"repository": {
    "type": "git",
    "url": "", // gitlab 仓库地址
    "utils": true
}
```

**待补充...**
