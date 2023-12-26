import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'
import typography from '@tailwindcss/typography'


const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/tailwind/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [nextui(), typography()],
}

export default config
