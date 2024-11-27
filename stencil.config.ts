import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ph-stencil-js',
  taskQueue: 'async',
  plugins: [sass()],
  extras: {
    appendChildSlotFix: true,
    cloneNodeFix: true
  },
  outputTargets: [
    {
      type: 'dist',
      copy: [{ src: 'core-css' }]
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
