var React = require('react');
var ReactGistSlideshow = require('react-gist-slideshow');
require('brace/theme/terminal');

var styles = {
  container: {
    height: '100%',
    width: '100%',
    margin: '8px'
  }
};

var App = React.createClass({
	render () {
		return (
			<div style={styles.container}>
				<ReactGistSlideshow gist="https://gist.github.com/andrewjmeier/9486b899f1b2114c267e" theme="terminal"  />
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
