import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'madness-labs-logo',
  styleUrl: 'madness-labs-logo.scss'
})
export class MadnessLabsLogo {
  @Prop() mColor:string = '#0095FF';
  @Prop() lColor:string = '#00E700';

  render() {
      return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='353 136 928 728'>
          <g transform='translate(313 91)'>
            <path fill={this.mColor} d='M-8924,726h168l160-152,144,128h16l136-128,152,152h152l-256-256h-96l-96,104-96-104h-104l-280,256' transform='translate(8964 -425)'/>
            <path fill={this.lColor} d='M-8924,726h168l317,328,291-232h152l-432,376h-24Z' transform='translate(8964 -425)'/>
          </g>
        </svg>
      );
  }
}
