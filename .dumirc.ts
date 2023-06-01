import { defineConfig } from 'dumi';

const repo = 'webSite-52lkk'

export default defineConfig({
  title: 'webSite-52lkk',
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  themeConfig: {
    name: '52lkk',
  },
});
