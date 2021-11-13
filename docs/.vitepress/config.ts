import { defineConfig } from "vitepress";
import path from "path";

export default defineConfig({
	base: "/notes/",
	title: "Mintnoii's Site",
	lang: "zh-CN",
	description:
		"I may be lonely but l'm not stupid, l try to live with my mistake.",
	head: [
		["meta", { name: "author", content: "Mintnoii" }],
		[
			"meta",
			{
				name: "keywords",
				content: "Mintnoii, Mintnoii's Site, Mintnoii's Blog",
			},
		],
		// ["link", { rel: "icon", type: "image/png", href: "/images/logo.png" }],
		[
			"meta",
			{
				name: "viewport",
				content:
					"width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
			},
		],
		[
			"link",
			{
				rel: "shortcut icon",
				type: "image/x-icon",
				href: "/images/favicon.ico",
			},
		],
	],
	ignoreDeadLinks: true, // 最好加上，构建时会忽略md中的外链
	srcDir: `${path.resolve(process.cwd())}/src`,
	themeConfig: {
		logo: "/images/logo.png",
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/Mintnoii",
			},
		],
		outline: [2, 3],
		outlineTitle: "本文概述",
		// localeLinks: {
		// 	text: "简体中文",
		// 	items: [],
		// },
		// footer: {
		// 	message: "根据 MIT 许可证发布",
		// 	copyright: "Copyright © 2022-2023 Mintnoii",
		// },
		nav: [
			// { text: "首页", link: "/guide/index", activeMatch: "/guide" },
			// { text: "开发手册", link: "/tutorial/setup", activeMatch: "/tutorial/" },
			// {
			// 	text: "前端基建",
			// 	items: [
			// 		{
			// 			text: "xmov-cli",
			// 			link: "/front-base/xmov-cli/index",
			// 		},
			// 	],
			// },
			// {
			// 	text: "前端框架",
			// 	items: [
			// 		{
			// 			text: "Vue3",
			// 			link: "/frame/vue",
			// 		},
			// 	],
			// },
			{
				text: "读书笔记",
				link: "/read/coder/index",
				activeMatch: "/read/coder",
			},
			{ text: "Rust", link: "/rust/notes/index", activeMatch: "/rust/notes" },
			{
				text: "Blog",
				link: "https://mintnoii.com/",
			},
			// {
			// 	text: "相关链接",
			// 	items: [
			// 		{
			// 			text: "博客",
			// 			link: "https://mintnoii.com/",
			// 		},
			// 	],
			// },
		],
		sidebar: {
			// "/front-base/xmov-cli/": [
			// 	{
			// 		text: "xmov cli",
			// 		items: [
			// 			{
			// 				text: "安装使用",
			// 				link: "/front-base/xmov-cli/",
			// 			},
			// 			{
			// 				text: "参与开发",
			// 				link: "/front-base/xmov-cli/dev",
			// 			},
			// 		],
			// 	},
			// 	{
			// 		text: "模板项目",
			// 		items: [
			// 			{
			// 				text: "Vue 模板",
			// 				link: "/front-base/xmov-cli/tmpls/vue",
			// 			},
			// 			{
			// 				text: "React 模板",
			// 				link: "/front-base/xmov-cli/tmpls/react",
			// 			},
			// 			{
			// 				text: "Electron 模板",
			// 				link: "/front-base/xmov-cli/tmpls/electron",
			// 			},
			// 		],
			// 	},
			// ],
			// "/frame/": [
			// 	{
			// 		// text: "解决方案",
			// 		items: [
			// 			{
			// 				text: "解决方案",
			// 				link: "//notes/struct",
			// 			},
			// 		],
			// 	},
			// ],
			"/read/": [
				{
					text: "编程类",
					items: [
						{
							text: "程序员的思维修炼",
							link: "/read/coder/程序员的思维修炼",
						},
					],
				},
			],
			"/rust/notes/": [
				{
					// text: "结构体",
					items: [
						{
							text: "结构体",
							link: "/rust/notes/struct",
						},
					],
				},
			],
		},
	},
});
