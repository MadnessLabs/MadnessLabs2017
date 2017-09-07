import { Component } from '@stencil/core';

@Component({
  tag: 'contact-page',
  styleUrl: 'contact-page.scss'
})
export class ContactPage {
  render() {
    return <h2>I'm the contact page</h2>;
  }
}