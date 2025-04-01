import { Component, h, JSX, Prop } from '@stencil/core';

@Component({
  tag: 'phsj-horizontal-timeline',
  styleUrl: 'horizontal-timeline.scss',
  shadow: true
})
export class HorizontalTimeline {
  @Prop()
  points!: { name: string; active?: boolean }[];

  @Prop()
  position: string | number = 0;

  render(): JSX.Element | null {
    return (
      <section class="horizontal-timeline">
        {this.points.map(point => (
          <div class="horizontal-timeline__lines">
            <span class="horizontal-timeline__lines__line"></span>
            <p class="horizontal-timeline__lines__circle">
              <strong>{point.name}</strong>
              <span class={{ 'horizontal-timeline__lines__circle--active': this.getActivePoint(point.active) }}></span>
            </p>
            <span class="horizontal-timeline__lines__line"></span>
          </div>
        ))}
      </section>
    );
  }

  private getActivePoint(active?: boolean): boolean {
    return active ? true : false;
  }
}
