import 'app/module/less/directive-one.css!';
import directiveOneTpl from 'app/module/partials/directive-one.tpl';

export default angular.module('directiveOneModule', [directiveOneTpl.name])
	.directive('directiveOne', function ($templateCache) {
		return {
			restrict: 'E',
			replace: true,
			scope: {},
			template: $templateCache.get(directiveOneTpl.name),
			link: function () {
				console.log('directive-one');
			}
		};
	}
);
