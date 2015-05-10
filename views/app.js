define(["require", "exports"], function (require, exports) {
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Linda Graham';
            config.map([
                { route: ['', 'home'], moduleId: './home', nav: true, title: 'Home' },
                { route: 'flickr', moduleId: './flickr', nav: true, title: 'Images' },
                { route: 'you-tube', moduleId: './you-tube', nav: true, title: 'Videos' },
                { route: 'ice-cube-map', moduleId: './ice-cube-map', nav: true, title: 'Ice Cube Gallery' },
                { route: 'working-with-clay', moduleId: './working-with-clay', nav: true, title: 'Working With Clay' },
                { route: 'bio-resume', moduleId: './bio-resume', nav: true, title: 'Bio & Resume' },
                { route: 'contact', moduleId: './contact', nav: true, title: 'Contact' }
            ]);
            this.router = router;
        };
        return App;
    })();
    exports.App = App;
});
