import { extension } from 'esbuild-plugin-extension';
import { defineConfig } from 'tsup';

export default defineConfig({
  bundle: true,
  clean: true,
  dts: true,
  entry: ['src/**/*.ts'],
  env: { NODE_ENV: 'production' },
  esbuildPlugins: [extension()],
  format: ['cjs', 'esm'],
  target: 'node12',
  treeshake: true,
});
