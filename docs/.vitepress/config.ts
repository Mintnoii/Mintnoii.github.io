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
				content: "Mintnoii, Mintnoii's Site, vite, vue, vue3",
			},
		],
		["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
		[
			"meta",
			{
				name: "viewport",
				content:
					"width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
			},
		],
		["link", { rel: "icon", href: "/favicon.ico" }],
	],
	ignoreDeadLinks: true, // 最好加上，构建时会忽略md中的外链
	srcDir: `${path.resolve(process.cwd())}/src`,
	themeConfig: {
		logo: "/logo.png",
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/Mintnoii",
			},
		],
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
			"/rust/notes/":[
				{
					// text: "结构体",
					items: [
						{
							text: "结构体",
							link: "/rust/notes/struct",
						},
					],
				},
			]
		},
	},
});
