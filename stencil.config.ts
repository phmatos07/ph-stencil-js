import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ph-stencil-js',
  taskQueue: 'async',
  globalStyle: 'src/styles/global.css',
  plugins: [sass()],
  extras: {
    appendChildSlotFix: true,
    cloneNodeFix: true
  },
  outputTargets: [
    {
      type: 'dist',
      copy: [{ src: 'files' }]
    },
    {
      type: 'dist-custom-elements'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  testing: {
    browserHeadless: 'new'
  }
};
