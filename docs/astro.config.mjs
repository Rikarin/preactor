// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://preactor.rikarin.app/',
	base: '/',
	integrations: [
		starlight({
			title: 'Preactor',
			social: {
				github: 'https://github.com/rikarin/preactor',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'What is this?', slug: 'getting-started/what-is-this' },
						{ label: 'Installation', slug: 'getting-started/installation' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
