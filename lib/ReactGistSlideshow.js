'use strict';

var React = require('react');
// var brace = require('brace');
var AceEditor = require('react-ace');

var pagedown = require('pagedown');
var safeConverter = pagedown.getSanitizingConverter();

var Progress = require('react-progressbar');
var jQ = require('jquery');

require('brace/mode/javascript');
require('brace/mode/html');
require('brace/mode/objectivec');
require('brace/mode/ruby');
require('brace/mode/java');
require('brace/mode/python');
require('brace/theme/monokai');
require('brace/theme/xcode');

var styles = {
  container: {
    height: '100%',
    margin: '8px'
  },
  buttonBar: {
    width: '50%',
    margin: '0 auto',
    textAlign: 'center',
    marginBottom: '8px'
  },
  buttonNext: {
    fontSize: 15,
    borderRadius: 6,
    borderSize: 1,
    backgroundColor: '#77d42a',
    color: '#306108',
    fontWeight: 'bold',
    padding: '6px 24px',
    width: 150
  },
  buttonPrevious: {
    fontSize: 15,
    borderRadius: 6,
    borderSize: 1,
    backgroundColor: '#fe1a00',
    color: '#ffffff',
    fontWeight: 'bold',
    padding: '6px 24px',
    width: 150
  }
};

var ReactGistSlideshow = React.createClass({
  displayName: 'ReactGistSlideshow',

  getInitialState: function getInitialState() {
    return {
      username: '',
      lastGistUrl: '',
      gistArray: [],
      currentIndex: 0,
      html: '',
      codeText: '',
      codeType: '',
      completedPercent: 0
    };
  },

  componentWillUnMount: function componentWillUnMount() {
    jQ(document.body).off('keydown', this.handleKeyDown);
  },

  componentDidMount: function componentDidMount() {
    jQ(document.body).on('keydown', this.handleKeyDown);

    var baseURL = 'https://api.github.com/gists/';
    var givenURL = this.props.gist.split('/');

    var url = baseURL + givenURL[4];
    jQ.get(url, (function (result) {
      var gists = result.files;
      var gistsArray = [];
      for (var key in gists) {
        gistsArray.push(gists[key]);
      }
      gists = gistsArray;
      var gist = gists[this.state.currentIndex];
      var theurl = gist.raw_url;
      var type = gist.language;

      jQ.get(theurl, (function (result2) {
        this.setState({
          codeText: result2 + '\n\n\n'
        });
      }).bind(this));
      if (this.isMounted()) {
        this.setState({
          gistArray: gists,
          currentIndex: 0,
          codeType: type
        });
      }
    }).bind(this));
  },

  handleLeft: function handleLeft() {

    var index = this.state.currentIndex;
    index--;
    if (index < 0) {
      index = 0;
    }

    var gist = this.state.gistArray[index];
    var theurl = gist.raw_url;
    var type = gist.language;

    jQ.get(theurl, (function (result2) {
      this.setState({
        codeText: result2 + '\n\n\n'
      });
    }).bind(this));

    var perc = 100 * index / (this.state.gistArray.length - 1);

    this.setState({
      currentIndex: index,
      codeType: type,
      completedPercent: perc
    });
  },

  handleRight: function handleRight() {
    var index = this.state.currentIndex;
    index++;
    if (index > this.state.gistArray.length - 1) {
      index = this.state.gistArray.length - 1;
    }

    var gist = this.state.gistArray[index];
    var theurl = gist.raw_url;
    var type = gist.language;

    jQ.get(theurl, (function (result2) {
      this.setState({
        codeText: result2 + '\n\n\n'
      });
    }).bind(this));

    var perc = 100 * index / (this.state.gistArray.length - 1);

    this.setState({
      currentIndex: index,
      codeType: type,
      completedPercent: perc
    });
  },

  handleKeyDown: function handleKeyDown(e) {
    var LEFT = 37;
    var RIGHT = 39;
    if (e.keyCode === LEFT) {
      this.handleLeft();
    } else if (e.keyCode === RIGHT) {
      this.handleRight();
    }
  },

  editorForType: function editorForType(lang) {
    if (lang === 'JavaScript') {
      return React.createElement(AceEditor, {
        mode: 'javascript',
        theme: 'monokai',
        name: 'thename',
        readOnly: true,
        showGutter: false,
        highlightActiveLine: false,
        width: '100%',
        height: '100%',
        fontSize: 18,
        value: this.state.codeText });
    } else if (lang === 'Markdown') {
      return React.createElement('div', { dangerouslySetInnerHTML: createMarkup(safeConverter.makeHtml(this.state.codeText)) });
    } else if (lang === 'HTML') {
      return React.createElement(AceEditor, {
        mode: 'html',
        theme: 'monokai',
        name: 'thename',
        readOnly: true,
        showGutter: false,
        highlightActiveLine: false,
        width: '100%',
        height: '100%',
        fontSize: 18,
        value: this.state.codeText });
    } else if (lang === 'Ruby') {
      return React.createElement(AceEditor, {
        mode: 'ruby',
        theme: 'monokai',
        name: 'thename',
        readOnly: true,
        showGutter: false,
        highlightActiveLine: false,
        width: '100%',
        height: '100%',
        fontSize: 18,
        value: this.state.codeText });
    } else if (lang === 'Objective-C') {
      return React.createElement(AceEditor, {
        mode: 'objectivec',
        theme: 'monokai',
        name: 'thename',
        readOnly: true,
        showGutter: false,
        highlightActiveLine: false,
        width: '100%',
        height: '100%',
        fontSize: 18,
        value: this.state.codeText });
    } else if (lang === 'Java') {
      return React.createElement(AceEditor, {
        mode: 'java',
        theme: 'monokai',
        name: 'thename',
        readOnly: true,
        showGutter: false,
        highlightActiveLine: false,
        width: '100%',
        height: '100%',
        fontSize: 18,
        value: this.state.codeText });
    } else if (lang === 'Python') {
      return React.createElement(AceEditor, {
        mode: 'python',
        theme: 'monokai',
        name: 'thename',
        readOnly: true,
        showGutter: false,
        highlightActiveLine: false,
        width: '100%',
        height: '100%',
        fontSize: 18,
        value: this.state.codeText });
    } else {
      return React.createElement(AceEditor, {
        mode: 'objectivec',
        theme: 'monokai',
        name: 'thename',
        readOnly: true,
        showGutter: false,
        highlightActiveLine: false,
        height: '100%',
        width: '100%',
        fontSize: 18,
        value: this.state.codeText });
    }
  },

  render: function render() {
    if (!this.state.gistArray || !this.state.gistArray[this.state.currentIndex]) {
      return React.createElement(
        'div',
        null,
        'loading...'
      );
    }
    return React.createElement(
      'div',
      { style: styles.container },
      React.createElement(
        'div',
        { style: styles.buttonBar },
        React.createElement(
          'button',
          { style: styles.buttonPrevious, onClick: this.handleLeft, className: 'button prev' },
          'Previous'
        ),
        React.createElement(
          'button',
          { style: styles.buttonNext, onClick: this.handleRight, className: 'button next' },
          'Next'
        )
      ),
      React.createElement(Progress, { completed: this.state.completedPercent }),
      this.editorForType(this.state.codeType)
    );
  }
});

function createMarkup(e) {
  return { __html: e };
};

// React.render(
//   <Slideshow gist="https://gist.github.com/alexmcpherson/4ebc65db31cd2a2ce0e2" />,
//   document.getElementById('app')
// );

// React.render(
//   <Slideshow gist="https://gist.github.com/robolson/1492306" />,
//   document.getElementById('app')
// );

module.exports = ReactGistSlideshow;

// React.render(
//   <Slideshow gist="https://gist.github.com/robolson/d12e6d4027c09a5b341c" />,
//   document.getElementById('app')
// );

// export default ReactGistSlideshow;