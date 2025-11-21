import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rslib/core';
import { pluginVue } from "@rsbuild/plugin-vue";

export default defineConfig({
  lib: [
    // ...
    {
      format: 'mf',
      output: {
        distPath: {
          root: './dist/mf',
        },
        assetPrefix: 'http://localhost:3000/mf/',
      },
      plugins: [
        pluginVue(),
        pluginModuleFederation({
          name: 'rslib_provider',
          exposes: {
            '.': './src/components/Demo.vue',
            './DemoOptions': './src/components/DemoOptions.vue',
          },
          shared: {
            vue: {
              singleton: true,
            },
          },
          dts: {
            generateTypes: {
              compilerInstance: 'vue-tsc'
            }
          }
        }),
      ],
    },
  ],
});