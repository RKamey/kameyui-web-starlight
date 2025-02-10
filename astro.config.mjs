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
        light: './src/assets/calvito.png',
        dark: './src/assets/calvito.png',
      },
			social: {
				github: 'https://github.com/RKamey/kamey-ui',
        linkedin: 'https://www.linkedin.com/in/rkamey/',
			},
      customCss: ['./src/styles/style.css'],
			sidebar: [
				{
					label: 'Instalación',
					autogenerate: { directory: 'installation' },
				},
				{
					label: 'Componentes',
          badge: 'New',
					autogenerate: { 
            directory: 'components', 
            collapsed: true
          },
				},
        {
          label: 'Hooks',
          autogenerate: { directory: 'hooks' },
        },
        {
          label: 'Utils',
          autogenerate: { directory: 'utils' },
        },
			],
		}),
	],
});
