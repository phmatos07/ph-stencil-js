import { Component, h, JSX } from '@stencil/core';

@Component({
  tag: 'my-playground',
  styleUrl: 'my-playground.scss',
  shadow: true
})
export class MyPlayground {
  render(): JSX.Element | null {
    /* let POINTS = [
      {
        name: '2018',
        active: true
      },
      {
        name: '2019',
        active: true
      },
      {
        name: '2020',
        active: false
      },
      {
        name: '2021',
        active: false
      },
      {
        name: '2022',
        active: false
      },
      {
        name: '2023',
        active: false
      }
    ];

    setTimeout(() => {
      POINTS = { ...POINTS, 10: { name: '2020', active: true } };
      console.log('POINTS', POINTS);
    }, 5000); 

    return <phsj-horizontal-timeline points={POINTS}></phsj-horizontal-timeline>;
    */

    return (
      <phsj-modal
        title="My Modal"
        onIsClose={ev => this.isClose(ev)}
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eaque asperiores ipsa repellat rem voluptatibus eveniet dolores numquam dolor, harum ipsum et expedita illo deleniti odit,
          laudantium eius modi fuga.
        </p>
      </phsj-modal>
    );
  }

  isClose(event: CustomEvent): void {
    console.log('Evento recebido:', event.detail);
  }
}
