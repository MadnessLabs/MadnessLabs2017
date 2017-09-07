import { Component } from '@stencil/core';

@Component({
  tag: 'about-page',
  styleUrl: 'about-page.scss'
})
export class AboutPage {
  render() {
    return <h2>I'm the about page</h2>;
  }
}