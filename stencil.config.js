exports.config = {
  bundles: [
    { components: ['my-app', 'madness-labs-logo'] },
    { components: ['home-page', 'about-page', 'contact-page', 'vr-viewer'] }
  ],
  collections: [
    { name: '@stencil/router' },
    { name: '@ionic/core' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
