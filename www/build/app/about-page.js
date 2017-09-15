/*! Built with http://stenciljs.com */
App.loadComponents(

/**** module id (dev mode) ****/
"about-page",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
var AboutPage = /** @class */ (function () {
    function AboutPage() {
    }
    AboutPage.prototype.render = function () {
        return h("h2", 0, t("I'm the about page"));
    };
    return AboutPage;
}());

var ContactPage = /** @class */ (function () {
    function ContactPage() {
    }
    ContactPage.prototype.render = function () {
        return h("h2", 0, t("I'm the contact page"));
    };
    return ContactPage;
}());

var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.render = function () {
        return h("h2", 0, t("I'm the home page"),
            h("madness-labs-logo", { "a": { "l-color": 'red', "m-color": 'pink' } }));
    };
    return HomePage;
}());

var VrViewer = /** @class */ (function () {
    function VrViewer() {
    }
    VrViewer.prototype.render = function () {
        return (h("iframe", { "a": { "width": "100%", "height": "300px", "allow-fullscreen": "allowfullscreen", "frame-border": "0" }, "p": { "src": this.src } }));
    };
    return VrViewer;
}());

exports['ABOUT-PAGE'] = AboutPage;
exports['CONTACT-PAGE'] = ContactPage;
exports['HOME-PAGE'] = HomePage;
exports['VR-VIEWER'] = VrViewer;
},


/***************** about-page *****************/
[
/** about-page: tag **/
"ABOUT-PAGE",

/** about-page: members **/
0 /* no members */,

/** about-page: host **/
{}

],

/***************** contact-page *****************/
[
/** contact-page: tag **/
"CONTACT-PAGE",

/** contact-page: members **/
0 /* no members */,

/** contact-page: host **/
{}

],

/***************** home-page *****************/
[
/** home-page: tag **/
"HOME-PAGE",

/** home-page: members **/
0 /* no members */,

/** home-page: host **/
{}

],

/***************** vr-viewer *****************/
[
/** vr-viewer: tag **/
"VR-VIEWER",

/** vr-viewer: members **/
[
  [ "src", /** prop **/ 1 ]
],

/** vr-viewer: host **/
{}

]
)