import { defineConfigWithTheme } from "vitepress";
import path from "path";

export default defineConfigWithTheme({
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
				href: "/notes/images/logo.png",
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
		posts: ['1','2','3'],
		// localeLinks: {
		// 	text: "简体中文",
		// 	items: [],
		// },
		// footer: {
		// 	message: "根据 MIT 许可证发布",
		// 	copyright: "Copyright © 2022-2023 Mintnoii",
		// },
		nav: [
			{ text: "Rust", link: "/posts/rust/notes/index", activeMatch: "/posts/rust/notes" },
			{
				text: "阅读",
				link: "/posts/read/coder/index",
				activeMatch: "/read/coder",
			},
			{
				text: "标签",
				link: "/tags/index",
			},
			{
				text: "博客",
				link: "https://mintnoii.com/",
			},
		],
		sidebar: {
			"/posts/read/": [
				{
					text: "编程类",
					items: [
						{
							text: "程序员的思维修炼",
							link: "/posts/read/coder/程序员的思维修炼",
						},
					],
				},
			],
			"/posts/rust/notes/": [
				{
					// text: "结构体",
					items: [
						{
							text: "结构体",
							link: "/posts/rust/notes/struct",
						},
					],
				},
			],
		},
	},
});
