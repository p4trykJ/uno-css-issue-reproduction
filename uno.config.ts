import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}'
      ]
      // exclude files
      // exclude: []
    }
  },
  theme: {
    colors: {
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
      light: {
        dupa: 'blue'
      },
      dark: {
        dupa: 'green'
      }
    }
  },
  shortcuts: {
    'custom-shortcut': 'text-lg text-orange hover:text-teal',
    'custom-text': 'text-primary dark:text-primary',
    'text-custom-primary': 'text-light-dupa dark:text-dark-dupa',
    'bg-custom-primary': 'bg-light-dupa dark:bg-dark-dupa'
  },
  presets: [presetUno()]
})
