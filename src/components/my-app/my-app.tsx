import { Component } from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {
  render() {
    return [
      <div class="page-header">
        <h1>Welcome to Stencil Starter</h1>
        <ion-card>wee</ion-card>
      </div>,
      <madness-nav></madness-nav>,
      <stencil-router id="router">
        <stencil-route url="/"  router="#router" component="home-page" exact={true} />
        <stencil-route url="/about" router="#router" component="about-page" />
        <stencil-route url="/contact" router="#router" component="contact-page" />
      </stencil-router>
    ];
  }
}
