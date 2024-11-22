import { defineConfig } from 'tsup';
import * as esbuildPluginVue from 'esbuild-plugin-vue';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['vue', 'react', 'react-dom'],
  esbuildPlugins: [esbuildPluginVue.default()],
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
  treeshake: true,
});
