// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'KameyUI',
      logo: {
        light: './src/assets/calva-light.webp',
        dark: './src/assets/calva-dark.webp',
      },
			social: {
				github: 'https://github.com/RKamey/kamey-ui',
			},
			sidebar: [
				{
					label: '',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installation', slug: 'installation/example' },
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
