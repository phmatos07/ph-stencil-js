import { Component, h, JSX, Prop } from '@stencil/core';

@Component({
  tag: 'phsj-modal',
  styleUrl: 'modal.scss',
  shadow: true
})
export class Modal {
  @Prop()
  title!: string;

  private isDisplayed = true;

  private close(): void {
    console.log('close');
    this.isDisplayed = !this.isDisplayed;
  }

  render(): JSX.Element | null {
    return (
      <section class="modal">
        <div
          class={{
            modal__shadow: true,
            'modal--visible': this.isDisplayed
          }}
        >
          <div class="modal__content">
            <header class="modal__header">
              <h1>{this.title}</h1>
              <button onClick={() => this.close()}>X</button>
            </header>

            <main class="modal__main">
              <slot></slot>
            </main>
          </div>
        </div>
      </section>
    );
  }
}
