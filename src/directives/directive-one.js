import '../less/directive-one.css!';

var DirectiveOne = function ($templateCache) {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        template: $templateCache.get('ui-components/partials/directive-one.html'),
        link: function () {
            console.log('directive-a');
        }
    }
};

DirectiveOne.$inject = ['$templateCache'];

export default DirectiveOne;