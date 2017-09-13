import { Component } from '@stencil/core';

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.scss'
})
export class HomePage {
  render() {
    return <h2>I'm the home page<madness-labs-logo></madness-labs-logo></h2>;
  }
}
