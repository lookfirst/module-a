import angular from 'angular';

import appModule from 'app/app';

import indexTpl from 'app/module/partials/index.tpl';

import directiveOne from 'app/module/directives/directive-one';
import directiveTwo from 'app/module/directives/directive-two';

var uiModule = angular.module('ui-components', [appModule.name, indexTpl.name, directiveOne.name, directiveTwo.name]);

uiModule.config(function ($stateProvider) {
	$stateProvider
		.state('module', {
			url: '/module',
			templateUrl: indexTpl.name
		});
});

export default uiModule;
