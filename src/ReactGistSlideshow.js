
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
  getInitialState: function() {
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
  propTypes: {
    fontSize: React.PropTypes.number,
    gist: React.PropTypes.string,
    highlightActiveLine: React.PropTypes.string,
    readOnly: React.PropTypes.string,
    showGutter: React.PropTypes.string,
    theme: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      theme: 'monokai',
      fontSize: 18,
      readOnly: 'true',
      showGutter: 'false',
      highlightActiveLine: 'false',
      gist: ''
    };
  },

  componentWillUnMount: function() {
    jQ(document.body).off('keydown', this.handleKeyDown);
  },

  componentWillMount: function() {
    jQ(document.body).on('keydown', this.handleKeyDown);

    var baseURL = 'https://api.github.com/gists/';
    var givenURL = this.props.gist.split('/');

    var url = baseURL + givenURL[4];
    jQ.get(url, function(result) {
      var gists = result.files;
      var gistsArray = [];
      for (var key in gists) {
        gistsArray.push(gists[key]);
      }
      gists = gistsArray;
      var gist = gists[this.state.currentIndex];
      var type = gist.language;

      if (this.isMounted()) {
        this.setState({
          gistArray: gists,
          currentIndex: 0,
          codeType: type,
          codeText: gist.content + '\n\n\n'
        });
      }
    }.bind(this));
  },

  handleLeft: function(){

    var index = this.state.currentIndex;
    index--;
    if (index < 0) {
      index = 0;
    }

    var gist = this.state.gistArray[index];
    var type = gist.language;

    var perc = 100 * index / (this.state.gistArray.length - 1);

    this.setState({
      currentIndex: index,
      codeType: type,
      completedPercent: perc,
      codeText: gist.content + '\n\n\n'
    });
  },

  handleRight: function(){
    var index = this.state.currentIndex;
    index++;
    if (index > this.state.gistArray.length - 1) {
      index = this.state.gistArray.length - 1;
    }

    var gist = this.state.gistArray[index];
    var type = gist.language;

    var perc = 100 * index / (this.state.gistArray.length - 1);

    this.setState({
      currentIndex: index,
      codeType: type,
      completedPercent: perc,
      codeText: gist.content + '\n\n\n'
    });
  },

  handleKeyDown: function(e) {
    var LEFT = 37;
    var RIGHT = 39;
    if( e.keyCode === LEFT) {
      this.handleLeft();
    }
    else if( e.keyCode === RIGHT ) {
        this.handleRight();
    }
  },

  editorForType: function(lang) {
    lang = lang.toLowerCase();
    if (lang === 'objective-c') {
      lang = 'objectivec';
    }
    if (lang === 'markdown') {
      return (
        <div dangerouslySetInnerHTML={createMarkup(safeConverter.makeHtml(this.state.codeText))} />
      );
    } else {
      return (
        <AceEditor
          mode={lang}
          theme={this.props.theme}
          name='thename'
          readOnly={this.props.readOnly === 'true'}
          showGutter={this.props.showGutter === 'true'}
          highlightActiveLine={this.props.highlightActiveLine === 'true'}
          width='100%'
          height='100%'
          fontSize={Number(this.props.fontSize)}
          value={this.state.codeText} />
      );
    }
  },

  render: function() {
    if (!this.state.gistArray || !this.state.gistArray[this.state.currentIndex]){
      return (<div>Unable to load gists from: {this.props.gist}. Check your URL and try again.</div>);
    }
    return (
      <div style={styles.container}>
        <div style={styles.buttonBar}>
          <button style={styles.buttonPrevious} onClick={this.handleLeft} className='button prev'>Previous</button>
          <button style={styles.buttonNext} onClick={this.handleRight} className='button next'>Next</button>
        </div>

        <Progress completed={this.state.completedPercent} />
        {this.editorForType(this.state.codeType)}

      </div>
      );
  }
});

function createMarkup(e) { return {__html: e}; }

module.exports = ReactGistSlideshow;


