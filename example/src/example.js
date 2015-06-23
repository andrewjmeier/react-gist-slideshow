var React = require('react');
var ReactGistSlideshow = require('react-gist-slideshow');


var styles = {
  container: {
    height: '100%',
    width: '100%',
    margin: '8px',
  },
};

var App = React.createClass({
	render () {
		return (
			<div style={styles.container}>
				<ReactGistSlideshow gist="https://gist.github.com/alexmcpherson/4ebc65db31cd2a2ce0e2" />
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
