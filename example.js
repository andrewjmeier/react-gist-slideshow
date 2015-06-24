require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactGistSlideshow = require('react-gist-slideshow');
require('brace/theme/tomorrow_night_eighties');

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
			React.createElement(ReactGistSlideshow, { gist: 'https://gist.github.com/alexmcpherson/4ebc65db31cd2a2ce0e2', highlightActiveLine: 'true', theme: 'tomorrow_night_eighties', fontSize: '40', readOnly: 'false' })
		);
	}
});

React.render(React.createElement(App, null), document.getElementById('app'));

},{"brace/theme/tomorrow_night_eighties":2,"react":undefined,"react-gist-slideshow":undefined}],2:[function(require,module,exports){
ace.define("ace/theme/tomorrow_night_eighties",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-tomorrow-night-eighties";
exports.cssText = ".ace-tomorrow-night-eighties .ace_gutter {\
background: #272727;\
color: #CCC\
}\
.ace-tomorrow-night-eighties .ace_print-margin {\
width: 1px;\
background: #272727\
}\
.ace-tomorrow-night-eighties {\
background-color: #2D2D2D;\
color: #CCCCCC\
}\
.ace-tomorrow-night-eighties .ace_constant.ace_other,\
.ace-tomorrow-night-eighties .ace_cursor {\
color: #CCCCCC\
}\
.ace-tomorrow-night-eighties .ace_marker-layer .ace_selection {\
background: #515151\
}\
.ace-tomorrow-night-eighties.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #2D2D2D;\
border-radius: 2px\
}\
.ace-tomorrow-night-eighties .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-tomorrow-night-eighties .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #6A6A6A\
}\
.ace-tomorrow-night-bright .ace_stack {\
background: rgb(66, 90, 44)\
}\
.ace-tomorrow-night-eighties .ace_marker-layer .ace_active-line {\
background: #393939\
}\
.ace-tomorrow-night-eighties .ace_gutter-active-line {\
background-color: #393939\
}\
.ace-tomorrow-night-eighties .ace_marker-layer .ace_selected-word {\
border: 1px solid #515151\
}\
.ace-tomorrow-night-eighties .ace_invisible {\
color: #6A6A6A\
}\
.ace-tomorrow-night-eighties .ace_keyword,\
.ace-tomorrow-night-eighties .ace_meta,\
.ace-tomorrow-night-eighties .ace_storage,\
.ace-tomorrow-night-eighties .ace_storage.ace_type,\
.ace-tomorrow-night-eighties .ace_support.ace_type {\
color: #CC99CC\
}\
.ace-tomorrow-night-eighties .ace_keyword.ace_operator {\
color: #66CCCC\
}\
.ace-tomorrow-night-eighties .ace_constant.ace_character,\
.ace-tomorrow-night-eighties .ace_constant.ace_language,\
.ace-tomorrow-night-eighties .ace_constant.ace_numeric,\
.ace-tomorrow-night-eighties .ace_keyword.ace_other.ace_unit,\
.ace-tomorrow-night-eighties .ace_support.ace_constant,\
.ace-tomorrow-night-eighties .ace_variable.ace_parameter {\
color: #F99157\
}\
.ace-tomorrow-night-eighties .ace_invalid {\
color: #CDCDCD;\
background-color: #F2777A\
}\
.ace-tomorrow-night-eighties .ace_invalid.ace_deprecated {\
color: #CDCDCD;\
background-color: #CC99CC\
}\
.ace-tomorrow-night-eighties .ace_fold {\
background-color: #6699CC;\
border-color: #CCCCCC\
}\
.ace-tomorrow-night-eighties .ace_entity.ace_name.ace_function,\
.ace-tomorrow-night-eighties .ace_support.ace_function,\
.ace-tomorrow-night-eighties .ace_variable {\
color: #6699CC\
}\
.ace-tomorrow-night-eighties .ace_support.ace_class,\
.ace-tomorrow-night-eighties .ace_support.ace_type {\
color: #FFCC66\
}\
.ace-tomorrow-night-eighties .ace_heading,\
.ace-tomorrow-night-eighties .ace_markup.ace_heading,\
.ace-tomorrow-night-eighties .ace_string {\
color: #99CC99\
}\
.ace-tomorrow-night-eighties .ace_comment {\
color: #999999\
}\
.ace-tomorrow-night-eighties .ace_entity.ace_name.ace_tag,\
.ace-tomorrow-night-eighties .ace_entity.ace_other.ace_attribute-name,\
.ace-tomorrow-night-eighties .ace_meta.ace_tag,\
.ace-tomorrow-night-eighties .ace_variable {\
color: #F2777A\
}\
.ace-tomorrow-night-eighties .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ09NrYAgMjP4PAAtGAwchHMyAAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});

},{}]},{},[1]);
