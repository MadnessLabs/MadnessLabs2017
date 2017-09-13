/*! Built with http://stenciljs.com */
App.loadComponents(

/**** module id (dev mode) ****/
"madness-labs-logo",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
var MadnessLabsLogo = /** @class */ (function () {
    function MadnessLabsLogo() {
        this.mColor = '#0095FF';
        this.lColor = '#00E700';
    }
    MadnessLabsLogo.prototype.render = function () {
        return (h("svg", { "n": "http://www.w3.org/2000/svg", "a": { "xmlns": 'http://www.w3.org/2000/svg', "viewBox": '353 136 928 728' } },
            h("g", { "n": "http://www.w3.org/2000/svg", "a": { "transform": 'translate(313 91)' } },
                h("path", { "n": "http://www.w3.org/2000/svg", "a": { "fill": this.mColor, "d": 'M-8924,726h168l160-152,144,128h16l136-128,152,152h152l-256-256h-96l-96,104-96-104h-104l-280,256', "transform": 'translate(8964 -425)' } }),
                h("path", { "n": "http://www.w3.org/2000/svg", "a": { "fill": this.lColor, "d": 'M-8924,726h168l317,328,291-232h152l-432,376h-24Z', "transform": 'translate(8964 -425)' } }))));
    };
    return MadnessLabsLogo;
}());

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

exports['MADNESS-LABS-LOGO'] = MadnessLabsLogo;
exports['MY-APP'] = MyApp;
},


/***************** madness-labs-logo *****************/
[
/** madness-labs-logo: tag **/
"MADNESS-LABS-LOGO",

/** madness-labs-logo: members **/
[
  [ "lColor", /** prop **/ 1 ],
  [ "mColor", /** prop **/ 1 ]
],

/** madness-labs-logo: host **/
{}

],

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