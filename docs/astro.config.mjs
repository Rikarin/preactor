// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://preactor.rikarin.app/',
	base: '/',
	integrations: [
		starlight({
			title: 'Preactor',
			favicon: '/favicon.ico',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/rikarin/preactor' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/pgnTGv3GbH' },
			],
			customCss: [
				'@fontsource-variable/montserrat',
				'@fontsource-variable/unbounded',
				'./src/styles.css'
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'What is this?', slug: 'getting-started/what-is-this' },
						{ label: 'Installation', slug: 'getting-started/installation' },
					],
				},
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				{
					label: 'Examples',
					autogenerate: { directory: 'examples' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
