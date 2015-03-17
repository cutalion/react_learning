var View = require('./views/ghbox')

var GHBox = React.createClass({
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
