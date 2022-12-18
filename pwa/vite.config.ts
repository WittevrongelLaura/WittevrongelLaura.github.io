import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import Unocss from 'unocss/vite'
import {VitePluginFonts} from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    headers:{
      'Access-Control-Allow-Origin': '*',
    }
  },
  plugins: [
    vue(),
    Unocss({
      theme: {
        colors: {
          greenPrimary: '#54AB6A',
          green900: '#08110B',
          green700: '#21442B',
          green500: '#3A774B',
          green300: '#87C497',
          green100: '#BADDC4',
          green50: '#EEF7F0',
        },
      },
      rules:[
        ['font-theme', {'font-family': 'Poppins, sans-serif'}],
      ]
    }),
    VitePWA(),
    VitePluginFonts({
      typekit:{
        id: 'smz1qaf',
        defer: true,
        injectTo: 'head'
      }
    })
  ],
})
