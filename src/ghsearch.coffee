View = require('views/ghsearch')

module.exports = React.createClass
  getInitialState: ->
    searchName: 'cutalion'

  render: ->
    View.render(this)

  onNameChange: (e) ->
    this.setState( searchName: e.target.value )

  onSubmit: (e) ->
    e.preventDefault()
    $.getJSON('https://api.github.com/users/' + this.state.searchName, this.props.onSearch.bind(this))
