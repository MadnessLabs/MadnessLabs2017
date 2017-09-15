import { Component } from '@stencil/core';

@Component({
  tag: 'madness-nav',
  styleUrl: 'madness-nav.scss'
})
export class MadnessNav {

  render() {
    return (
      <nav class="page-nav">
        <stencil-route-link router="#router" url="/">Home</stencil-route-link>
        <stencil-route-link router="#router" url="/about">About Us</stencil-route-link>
        <stencil-route-link router="#router" url="/contact">Contact</stencil-route-link>
      </nav>
    );
  }
}