define(["require", "exports"], function (require, exports) {
    var Home = (function () {
        function Home() {
            this.heading = 'Welcome to the Aurelia Navigation App!';
            this.firstName = 'John';
            this.lastName = 'Doe';
        }
        Object.defineProperty(Home.prototype, "fullName", {
            //Getters can't be observed with Object.observe, so they must be dirty checked.
            //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
            //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
            //@computedFrom('firstName', 'lastName')
            get: function () {
                return this.firstName + " " + this.lastName;
            },
            enumerable: true,
            configurable: true
        });
        Home.prototype.welcome = function () {
            alert("Welcome, " + this.fullName + "!");
        };
        return Home;
    })();
    exports.Home = Home;
    var UpperValueConverter = (function () {
        function UpperValueConverter() {
        }
        UpperValueConverter.prototype.toView = function (value) {
            return value && value.toUpperCase();
        };
        return UpperValueConverter;
    })();
    exports.UpperValueConverter = UpperValueConverter;
});
