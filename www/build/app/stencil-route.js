/*! Built with http://stenciljs.com */
App.loadComponents(

/**** module id (dev mode) ****/
"stencil-route",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
var Route = (function () {
    function Route() {
        this.componentProps = {};
        this.exact = false;
        //@Prop() match: any;
        this.match = {};
    }
    Route.prototype.componentWillLoad = function () {
        var _this = this;
        setTimeout(function () {
            var routerElement = document.querySelector(_this.router);
            if (routerElement) {
                setTimeout(function () {
                    _this.routerInstance = routerElement;
                });
            }
            routerElement.addEventListener('stencilRouterLoaded', function (_event) {
            });
            routerElement.addEventListener('stencilRouterNavigation', function (e) {
                _this.match = e.detail;
            });
        });
    };
    Route.prototype.render = function () {
        if (!this.routerInstance) {
            return null;
        }
        this.match.url = this.routerInstance.match().url;
        var match = this.match;
        var ChildComponent = this.component;
        var cleanedUrl = this.url.split('/').join().replace(/ /g, '');
        var cleanedMatchUrl = match.url.split('/').join().replace(/ /g, '');
        // Check if this route is in the matching URL (for example, a parent route)
        var isInPath = cleanedMatchUrl.indexOf(cleanedUrl) === 0;
        var matches = this.exact ? cleanedMatchUrl === cleanedUrl : isInPath;
        if (matches) {
            return (h(ChildComponent, { "p": this.componentProps }));
        }
        else {
            return h("span", 0);
        }
    };
    return Route;
}());

var RouteLink = (function () {
    function RouteLink() {
        this.custom = false;
    }
    RouteLink.prototype.handleClick = function (e) {
        e.preventDefault();
        var router = document.querySelector(this.router);
        if (!router) {
            console.warn('<stencil-route-link> wasn\'t passed an instance of the router as the "router" prop!');
            return;
        }
        router.navigateTo(this.url);
    };
    RouteLink.prototype.render = function () {
        if (this.custom) {
            return (h("span", { "o": { "click": this.handleClick.bind(this) } },
                h(0, 0)));
        }
        else {
            return (h("a", { "o": { "click": this.handleClick.bind(this) }, "p": { "href": this.url } },
                h(0, 0)));
        }
    };
    return RouteLink;
}());

var Router = (function () {
    function Router() {
        this.root = '/';
        this.routeMatch = {};
    }
    Router.prototype.match = function () {
        return this.routeMatch;
    };
    Router.prototype.navigateTo = function (url, _data) {
        if (_data === void 0) { _data = {}; }
        window.history.pushState(null, null, url || '/');
        this.routeMatch = {
            url: url
        };
        this.el.dispatchEvent(new window.CustomEvent('stencilRouterNavigation', { detail: this.routeMatch }));
    };
    Router.prototype.componentWillLoad = function () {
        window.addEventListener('popstate', this.handlePopState.bind(this));
        window.onhashchange = this.handleHashChange.bind(this);
        var initialPath = window.location.pathname;
        //const withoutBase = '';
        var withoutBase = initialPath.replace(this.root, '');
        this.routeMatch = {
            url: "/" + withoutBase
        };
    };
    Router.prototype.componentDidLoad = function () {
        this.el.dispatchEvent(new window.CustomEvent('stencilRouterLoaded'));
    };
    Router.prototype.handlePopState = function () {
        if (window.location.pathname !== oldPathName) {
            this.routeMatch = {
                url: window.location.pathname
            };
            this.el.dispatchEvent(new window.CustomEvent('stencilRouterNavigation', { detail: this.routeMatch }));
        }
        else {
            this.navigateTo(window.location.pathname);
        }
        var oldPathName = window.location.pathname;
    };
    Router.prototype.handleHashChange = function (_event) {
    };
    Router.prototype.render = function () {
        return (h(0, 0));
    };
    return Router;
}());

var Redirect = (function () {
    function Redirect() {
    }
    Redirect.prototype.componentWillLoad = function () {
        var router = document.querySelector(this.router);
        router.navigateTo(this.url);
    };
    return Redirect;
}());

exports['STENCIL-ROUTE'] = Route;
exports['STENCIL-ROUTE-LINK'] = RouteLink;
exports['STENCIL-ROUTER'] = Router;
exports['STENCIL-ROUTER-REDIRECT'] = Redirect;
},


/***************** stencil-route *****************/
[
/** stencil-route: tag **/
"STENCIL-ROUTE",

/** stencil-route: members **/
[
  [ "component", /** prop **/ 1 ],
  [ "componentProps", /** prop **/ 1 ],
  [ "el", /** element ref **/ 7 ],
  [ "exact", /** prop **/ 1, /** type boolean **/ 1 ],
  [ "match", /** state **/ 5 ],
  [ "router", /** prop **/ 1 ],
  [ "routerInstance", /** state **/ 5 ],
  [ "url", /** prop **/ 1 ]
]

],

/***************** stencil-route-link *****************/
[
/** stencil-route-link: tag **/
"STENCIL-ROUTE-LINK",

/** stencil-route-link: members **/
[
  [ "custom", /** prop **/ 1, /** type boolean **/ 1 ],
  [ "el", /** element ref **/ 7 ],
  [ "router", /** prop **/ 1 ],
  [ "url", /** prop **/ 1 ]
]

],

/***************** stencil-router *****************/
[
/** stencil-router: tag **/
"STENCIL-ROUTER",

/** stencil-router: members **/
[
  [ "el", /** element ref **/ 7 ],
  [ "match", /** method **/ 6 ],
  [ "navigateTo", /** method **/ 6 ],
  [ "root", /** prop **/ 1 ],
  [ "routeMatch", /** state **/ 5 ]
]

],

/***************** stencil-router-redirect *****************/
[
/** stencil-router-redirect: tag **/
"STENCIL-ROUTER-REDIRECT",

/** stencil-router-redirect: members **/
[
  [ "router", /** prop **/ 1 ],
  [ "url", /** prop **/ 1 ]
]

]
)