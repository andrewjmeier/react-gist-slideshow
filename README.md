# react-gist-slideshow

__A React component to show your gists in a slideshow__


## Demo & Examples

Live demo: [andrewjmeier.github.io/react-gist-slideshow](http://andrewjmeier.github.io/react-gist-slideshow/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-gist-slideshow is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-gist-slideshow.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-gist-slideshow --save
```


## Usage

Set the url for the gist that you would like to use as a slideshow. If the slideshow is not appearing, make sure that you have the height set for your `<div>`.  

```
var ReactGistSlideshow = require('react-gist-slideshow');

<ReactGistSlideshow gist="https://gist.github.com/andrewjmeier/9486b899f1b2114c267e" />
```

### Notes

__Supported File Types__

* JavaScript
* HTML
* Markdown
* Objective-C
* Ruby
* Java
* Python

(other files types will still render in the text editor, but they will be lacking the proper syntax highlighting)

### Text Editor Style Options

#### Theme

The default theme is Monokai. Other themes can be added from [Brace](https://github.com/thlorenz/brace/tree/master/theme).  

```
require('brace/themes/xcode');
...
<ReactGistSlideshow gist="https://gist.github.com/example/1234" theme="xcode" />
```

#### Read-Only

Set readOnly to false to allow editing of the code in the slides. 

```
<ReactGistSlideshow gist="https://gist.github.com/example/1234" readOnly="false" />
```

#### Show Gutter

Show line numbers on the left side of the editor. 

```
<ReactGistSlideshow gist="https://gist.github.com/example/1234" showGutter="true" />
```

#### Highlight Active Line

```
<ReactGistSlideshow gist="https://gist.github.com/example/1234" highlightActiveLine="true" />
```

### Highlight Bug

There's a small "bug" where all of the text in the editor is highlighted for each slide. There's an open pull request for the editor [here](https://github.com/securingsincity/react-ace/pull/23). If the request hasn't been merged you can fix it yourself. It's only two lines of code. 

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

Copyright (c) 2015 Andrew Meier.

