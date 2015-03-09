import angular from 'angular';
import './templates';
import directiveOne from './directives/directive-one';
import directiveTwo from './directives/directive-two';

export default angular.module('ui-components', ['ui-components-templates'])
    .directive('directiveOne', directiveOne)
    .directive('directiveTwo', directiveTwo);