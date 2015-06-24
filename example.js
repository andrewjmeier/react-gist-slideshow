require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactGistSlideshow = require('react-gist-slideshow');
require('brace/theme/vibrant_ink');

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
			React.createElement(ReactGistSlideshow, { gist: 'https://gist.github.com/andrewjmeier/9486b899f1b2114c267e', highlightActiveLine: 'true', theme: 'vibrant_ink' })
		);
	}
});

React.render(React.createElement(App, null), document.getElementById('app'));

},{"brace/theme/vibrant_ink":2,"react":undefined,"react-gist-slideshow":undefined}],2:[function(require,module,exports){
ace.define("ace/theme/vibrant_ink",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-vibrant-ink";
exports.cssText = ".ace-vibrant-ink .ace_gutter {\
background: #1a1a1a;\
color: #BEBEBE\
}\
.ace-vibrant-ink .ace_print-margin {\
width: 1px;\
background: #1a1a1a\
}\
.ace-vibrant-ink {\
background-color: #0F0F0F;\
color: #FFFFFF\
}\
.ace-vibrant-ink .ace_cursor {\
color: #FFFFFF\
}\
.ace-vibrant-ink .ace_marker-layer .ace_selection {\
background: #6699CC\
}\
.ace-vibrant-ink.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #0F0F0F;\
border-radius: 2px\
}\
.ace-vibrant-ink .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-vibrant-ink .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #404040\
}\
.ace-vibrant-ink .ace_marker-layer .ace_active-line {\
background: #333333\
}\
.ace-vibrant-ink .ace_gutter-active-line {\
background-color: #333333\
}\
.ace-vibrant-ink .ace_marker-layer .ace_selected-word {\
border: 1px solid #6699CC\
}\
.ace-vibrant-ink .ace_invisible {\
color: #404040\
}\
.ace-vibrant-ink .ace_keyword,\
.ace-vibrant-ink .ace_meta {\
color: #FF6600\
}\
.ace-vibrant-ink .ace_constant,\
.ace-vibrant-ink .ace_constant.ace_character,\
.ace-vibrant-ink .ace_constant.ace_character.ace_escape,\
.ace-vibrant-ink .ace_constant.ace_other {\
color: #339999\
}\
.ace-vibrant-ink .ace_constant.ace_numeric {\
color: #99CC99\
}\
.ace-vibrant-ink .ace_invalid,\
.ace-vibrant-ink .ace_invalid.ace_deprecated {\
color: #CCFF33;\
background-color: #000000\
}\
.ace-vibrant-ink .ace_fold {\
background-color: #FFCC00;\
border-color: #FFFFFF\
}\
.ace-vibrant-ink .ace_entity.ace_name.ace_function,\
.ace-vibrant-ink .ace_support.ace_function,\
.ace-vibrant-ink .ace_variable {\
color: #FFCC00\
}\
.ace-vibrant-ink .ace_variable.ace_parameter {\
font-style: italic\
}\
.ace-vibrant-ink .ace_string {\
color: #66FF00\
}\
.ace-vibrant-ink .ace_string.ace_regexp {\
color: #44B4CC\
}\
.ace-vibrant-ink .ace_comment {\
color: #9933CC\
}\
.ace-vibrant-ink .ace_entity.ace_other.ace_attribute-name {\
font-style: italic;\
color: #99CC99\
}\
.ace-vibrant-ink .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYNDTc/oPAALPAZ7hxlbYAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});

},{}]},{},[1]);
