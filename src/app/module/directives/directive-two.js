import 'app/module/less/directive-two.css!';
import directiveTwoTpl from 'app/module/partials/directive-two.tpl';

export default angular.module('directiveTwoModule', [directiveTwoTpl.name])
	.directive('directiveTwo', function ($templateCache) {
		return {
			restrict: 'E',
			replace: true,
			scope: {},
			template: $templateCache.get(directiveTwoTpl.name),
			link: function () {
				console.log('directive-two');
			}
		};
	}
);
