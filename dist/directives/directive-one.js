System.register(["../less/directive-one.css!"], function (_export) {
    var DirectiveOne;
    return {
        setters: [function (_lessDirectiveOneCss) {}],
        execute: function () {
            "use strict";

            DirectiveOne = function DirectiveOne($templateCache) {
                return {
                    restrict: "E",
                    replace: true,
                    scope: {},
                    template: $templateCache.get("ui-components/partials/directive-one.html"),
                    link: function link() {
                        console.log("directive-a");
                    }
                };
            };

            DirectiveOne.$inject = ["$templateCache"];

            _export("default", DirectiveOne);
        }
    };
});