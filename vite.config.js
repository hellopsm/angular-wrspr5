
  import path from 'path'
  import { defineConfig } from 'vite';
  import vue from '@vitejs/plugin-vue';
  import vueJsx from '@vitejs/plugin-vue-jsx';
  import Components from 'unplugin-vue-components/vite';
  import AutoImport from 'unplugin-auto-import/vite';
  import { LayuiVueResolver } from 'unplugin-vue-components/resolvers';

  const pathSrc = path.resolve(process.cwd(), 'src')

  export default defineConfig({
    plugins: [
      vue(), 
      vueJsx(),
      AutoImport({
        // 自动导入 vue 相关函数
        imports: ['vue',],
        // 自动导入 layer-vue 相关函数
        resolvers: [LayuiVueResolver()],
        dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
      }),
      Components({
        // 自动解析 layui-vue 组件
        resolvers: [LayuiVueResolver({ resolveIcons: true })],
      }),
    ],
  });
