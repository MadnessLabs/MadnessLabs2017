/*! Built with http://stenciljs.com */
(function (window, document, appNamespace, appCore, appCorePolyfilled, components, x) {
    'use strict';
    // create global namespace if it doesn't already exist

    (window[appNamespace] = window[appNamespace] || {}).components = components = components || [];
    // auto hide components until they been fully hydrated
    // reusing the "x" variable from the args for funzies
    x = document.createElement('style');
    x.setAttribute('data-styles', '');
    x.innerHTML = (components.map(function (c) {
        return c[0];
    }).join(',') + '{visibility:hidden}.💎{visibility:inherit}').toLowerCase();
    document.head.insertBefore(x, document.head.firstChild);
    // request the core this browser needs
    // test for native support of custom elements and fetch
    // if either of those are not supported, then use the core w/ polyfills
    x = document.createElement('script');
    x.src = window.customElements && window.fetch ? appCore : appCorePolyfilled;
    document.head.appendChild(x);
})(window, document, "App","/build/app/app.core.js","/build/app/app.core.pf.js",[["ABOUT-PAGE","about-page",{"$":"about-page"}],["CONTACT-PAGE","about-page",{"$":"about-page"}],["HOME-PAGE","about-page",{"$":"about-page"}],["MY-APP","my-app",{"$":"my-app"}],["STENCIL-ROUTE","stencil-route",{}],["STENCIL-ROUTE-LINK","stencil-route",{},0,0,1],["STENCIL-ROUTER","stencil-route",{},0,0,1],["STENCIL-ROUTER-REDIRECT","stencil-route",{}]]);