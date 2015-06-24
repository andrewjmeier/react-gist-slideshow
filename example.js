require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactGistSlideshow = require('react-gist-slideshow');
require('brace/theme/katzenmilch');

var styles = {
	container: {
		height: '100%',
		width: '100%',
		margin: '8px'
	}
};

var App = React.createClass({
	displayName: 'App',

	render: function render() {
		return React.createElement(
			'div',
			{ style: styles.container },
			React.createElement(ReactGistSlideshow, { gist: 'https://gist.github.com/andrewjmeier/9486b899f1b2114c267e', theme: 'katzenmilch' })
		);
	}
});

React.render(React.createElement(App, null), document.getElementById('app'));

},{"brace/theme/katzenmilch":2,"react":undefined,"react-gist-slideshow":undefined}],2:[function(require,module,exports){
ace.define("ace/theme/katzenmilch",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-katzenmilch";
exports.cssText = ".ace-katzenmilch .ace_gutter,\
.ace-katzenmilch .ace_gutter {\
background: #e8e8e8;\
color: #333\
}\
.ace-katzenmilch .ace_print-margin {\
width: 1px;\
background: #e8e8e8\
}\
.ace-katzenmilch {\
background-color: #f3f2f3;\
color: rgba(15, 0, 9, 1.0)\
}\
.ace-katzenmilch .ace_cursor {\
border-left: 2px solid #100011\
}\
.ace-katzenmilch .ace_overwrite-cursors .ace_cursor {\
border-left: 0px;\
border-bottom: 1px solid #100011\
}\
.ace-katzenmilch .ace_marker-layer .ace_selection {\
background: rgba(100, 5, 208, 0.27)\
}\
.ace-katzenmilch.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #f3f2f3;\
border-radius: 2px\
}\
.ace-katzenmilch .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174)\
}\
.ace-katzenmilch .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #000000\
}\
.ace-katzenmilch .ace_marker-layer .ace_active-line {\
background: rgb(232, 242, 254)\
}\
.ace-katzenmilch .ace_gutter-active-line {\
background-color: rgb(232, 242, 254)\
}\
.ace-katzenmilch .ace_marker-layer .ace_selected-word {\
border: 1px solid rgba(100, 5, 208, 0.27)\
}\
.ace-katzenmilch .ace_invisible {\
color: #BFBFBF\
}\
.ace-katzenmilch .ace_fold {\
background-color: rgba(2, 95, 73, 0.97);\
border-color: rgba(15, 0, 9, 1.0)\
}\
.ace-katzenmilch .ace_keyword {\
color: #674Aa8;\
rbackground-color: rgba(163, 170, 216, 0.055)\
}\
.ace-katzenmilch .ace_constant.ace_language {\
color: #7D7e52;\
rbackground-color: rgba(189, 190, 130, 0.059)\
}\
.ace-katzenmilch .ace_constant.ace_numeric {\
color: rgba(79, 130, 123, 0.93);\
rbackground-color: rgba(119, 194, 187, 0.059)\
}\
.ace-katzenmilch .ace_constant.ace_character,\
.ace-katzenmilch .ace_constant.ace_other {\
color: rgba(2, 95, 105, 1.0);\
rbackground-color: rgba(127, 34, 153, 0.063)\
}\
.ace-katzenmilch .ace_support.ace_function {\
color: #9D7e62;\
rbackground-color: rgba(189, 190, 130, 0.039)\
}\
.ace-katzenmilch .ace_support.ace_class {\
color: rgba(239, 106, 167, 1.0);\
rbackground-color: rgba(239, 106, 167, 0.063)\
}\
.ace-katzenmilch .ace_storage {\
color: rgba(123, 92, 191, 1.0);\
rbackground-color: rgba(139, 93, 223, 0.051)\
}\
.ace-katzenmilch .ace_invalid {\
color: #DFDFD5;\
rbackground-color: #CC1B27\
}\
.ace-katzenmilch .ace_string {\
color: #5a5f9b;\
rbackground-color: rgba(170, 175, 219, 0.035)\
}\
.ace-katzenmilch .ace_comment {\
font-style: italic;\
color: rgba(64, 79, 80, 0.67);\
rbackground-color: rgba(95, 15, 255, 0.0078)\
}\
.ace-katzenmilch .ace_entity.ace_name.ace_function,\
.ace-katzenmilch .ace_variable {\
color: rgba(2, 95, 73, 0.97);\
rbackground-color: rgba(34, 255, 73, 0.12)\
}\
.ace-katzenmilch .ace_variable.ace_language {\
color: #316fcf;\
rbackground-color: rgba(58, 175, 255, 0.039)\
}\
.ace-katzenmilch .ace_variable.ace_parameter {\
font-style: italic;\
color: rgba(51, 150, 159, 0.87);\
rbackground-color: rgba(5, 214, 249, 0.043)\
}\
.ace-katzenmilch .ace_entity.ace_other.ace_attribute-name {\
color: rgba(73, 70, 194, 0.93);\
rbackground-color: rgba(73, 134, 194, 0.035)\
}\
.ace-katzenmilch .ace_entity.ace_name.ace_tag {\
color: #3976a2;\
rbackground-color: rgba(73, 166, 210, 0.039)\
}";

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});

},{}]},{},[1]);
