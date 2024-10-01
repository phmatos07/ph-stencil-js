import { Component, h, JSX } from '@stencil/core';

@Component({
  tag: 'my-playground',
  styleUrl: 'my-playground.scss',
  shadow: true
})
export class MyPlayground {
  render(): JSX.Element | null {
    const POINTS = ['Item 01', 'Item 02', 'Item 03'];
    return <horizontal-timeline points={POINTS}></horizontal-timeline>;
  }
}
