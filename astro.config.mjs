// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://kameyui-web-starlight.netlify.app/',
	integrations: [
		starlight({
			title: 'KameyUI',
      logo: {
        light: './src/assets/calva-light.webp',
        dark: './src/assets/calva-dark.webp',
      },
			social: {
				github: 'https://github.com/RKamey/kamey-ui',
        linkedin: 'https://www.linkedin.com/in/rkamey/',
			},
			sidebar: [
				{
					label: 'Instalación',
					autogenerate: { directory: 'installation' },
				},
				{
					label: 'Componentes',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
