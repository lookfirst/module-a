System.register(["angular", "./templates", "./directives/directive-one", "./directives/directive-two"], function (_export) {
    var angular, directiveOne, directiveTwo;
    return {
        setters: [function (_angular) {
            angular = _angular["default"];
        }, function (_templates) {}, function (_directivesDirectiveOne) {
            directiveOne = _directivesDirectiveOne["default"];
        }, function (_directivesDirectiveTwo) {
            directiveTwo = _directivesDirectiveTwo["default"];
        }],
        execute: function () {
            "use strict";

            _export("default", angular.module("ui-components", ["ui-components-templates"]).directive("directiveOne", directiveOne).directive("directiveTwo", directiveTwo));
        }
    };
});