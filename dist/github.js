/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var React = __webpack_require__(1);
	var GHBox = __webpack_require__(2);


	React.render(
	  React.createElement(GHBox, null), document.getElementById('example')
	);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var View = __webpack_require__(3)

	var GHBox = React.createClass({displayName: "GHBox",
	  getInitialState: function(){
	    return {
	      user: null
	    }
	  },

	  render: function(){
	    return View.render(this)
	  },

	  searchUser: function(json){
	    this.setState({user: json})
	  }
	})

	module.exports = GHBox


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var GHSearch = __webpack_require__(4)
	var GHUser   = __webpack_require__(5)

	module.exports = {
	  render: function(component){
	    return (
	      React.createElement("div", null, 
	        React.createElement(GHSearch, {onSearch: component.searchUser}), 
	        React.createElement(GHUser, {user: component.state.user})
	      )
	    )
	  }
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var View = __webpack_require__(7)

	var GHSearch = React.createClass({displayName: "GHSearch",
	  getInitialState: function(){
	    return {
	      searchName: 'cutalion'
	    }
	  },

	  render: function(){
	    return View.render(this)
	  },

	  onNameChange: function(e){
	    this.setState({
	      searchName: e.target.value
	    })
	  },

	  onSubmit: function(e){
	    e.preventDefault();

	    $.getJSON('https://api.github.com/users/' + this.state.searchName, this.props.onSearch.bind(this))
	  }
	})

	module.exports = GHSearch;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var View = __webpack_require__(6)

	var GHUser = React.createClass({displayName: "GHUser",
	  render: function(component){
	    return View.render(this);
	  }
	})

	module.exports = GHUser;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */module.exports = {
	  render: function(component){
	    if(!component.props.user) return null;

	    return (
	      React.createElement("div", null, 
	        React.createElement("h1", null, component.props.user.name), 
	        React.createElement("img", {src: component.props.user.avatar_url, width: "200", height: "200"})
	      )
	    )
	  }
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */module.exports = {
	  render: function(component){
	    return (
	      React.createElement("form", {onSubmit: component.onSubmit}, 
	        React.createElement("input", {value: component.state.searchName, onChange: component.onNameChange, autoFocus: true}), 
	        React.createElement("button", null, "Find")
	      )
	    )
	  }
	}


/***/ }
/******/ ]);