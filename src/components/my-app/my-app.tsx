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
      </div>,
      <nav class="page-nav">
        <stencil-route-link router="#router" url="/">Home</stencil-route-link>
        <stencil-route-link router="#router" url="/about">About Us</stencil-route-link>
        <stencil-route-link router="#router" url="/contact">Contact</stencil-route-link>
      </nav>,
      <stencil-router id="router">
        <stencil-route url="/"  router="#router" component="home-page" exact={true} />
        <stencil-route url="/about" router="#router" component="about-page" />
        <stencil-route url="/contact" router="#router" component="contact-page" />
      </stencil-router>
    ];
  }
}