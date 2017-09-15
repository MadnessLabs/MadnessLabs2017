import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vr-viewer',
  styleUrl: 'vr-viewer.scss'
})
export class VrViewer {
  @Prop() src:string;

  render() {
    return (
      <iframe width="100%" height="300px" allow-fullscreen="allowfullscreen" frame-border="0" src={this.src}></iframe>
    );
  }
}