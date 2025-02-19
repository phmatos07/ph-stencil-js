import { Component, h, JSX, Prop, State } from '@stencil/core';

@Component({
  tag: 'phsj-modal',
  styleUrl: 'modal.scss',
  shadow: true
})
export class Modal {
  @Prop()
  title!: string;

  @State()
  private isDisplayed = true;

  @State()
  private isHidden = false;

  private close(): void {
    const TIME_TO_HIDE = 1000;
    this.isHidden = true;

    setTimeout(() => {
      this.isDisplayed = false;
    }, TIME_TO_HIDE);
  }

  render(): JSX.Element | null {
    return this.isDisplayed ? (
      <section class="modal">
        <div
          class={{
            modal__shadow: true,
            'modal__shadow--display': !this.isHidden,
            'modal__shadow--to-hide': this.isHidden
          }}
        >
          <div
            class={{
              modal__content: true,
              'modal__content--invisible': this.isHidden
            }}
          >
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
    ) : null;
  }
}
