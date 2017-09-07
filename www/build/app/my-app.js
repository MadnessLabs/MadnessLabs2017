/*! Built with http://stenciljs.com */
App.loadComponents(

/**** module id (dev mode) ****/
"my-app",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
var MyApp = /** @class */ (function () {
    function MyApp() {
    }
    MyApp.prototype.render = function () {
        return [
            h("div", { "c": { "page-header": true } },
                h("h1", 0, t("Welcome to Stencil Starter"))),
            h("nav", { "c": { "page-nav": true } },
                h("stencil-route-link", { "a": { "router": "#router", "url": "/" } }, t("Home")),
                h("stencil-route-link", { "a": { "router": "#router", "url": "/about" } }, t("About Us")),
                h("stencil-route-link", { "a": { "router": "#router", "url": "/contact" } }, t("Contact"))),
            h("stencil-router", { "a": { "id": "router" } },
                h("stencil-route", { "a": { "url": "/", "router": "#router", "component": "home-page" }, "p": { "exact": true } }),
                h("stencil-route", { "a": { "url": "/about", "router": "#router", "component": "about-page" } }),
                h("stencil-route", { "a": { "url": "/contact", "router": "#router", "component": "contact-page" } }))
        ];
    };
    return MyApp;
}());

exports['MY-APP'] = MyApp;
},


/***************** my-app *****************/
[
/** my-app: tag **/
"MY-APP",

/** my-app: members **/
0 /* no members */,

/** my-app: host **/
{}

]
)