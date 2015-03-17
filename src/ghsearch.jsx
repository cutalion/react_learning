var View = require('views/ghsearch')

var GHSearch = React.createClass({
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
