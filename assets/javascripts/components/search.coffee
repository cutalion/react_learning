View = require('views/search')

module.exports = React.createClass
  getInitialState: ->
    searchName: 'cutalion'

  render: ->
    View.render(this)

  onNameChange: (e) ->
    this.setState( searchName: e.target.value )

  onSubmit: (e) ->
    e.preventDefault()
    $.getJSON('https://api.github.com/users/' + this.state.searchName, this.githubUserFound)
    $.getJSON('http://twitter-api-v1-1.herokuapp.com/users/show?screen_name=' + this.state.searchName, this.twitterUserFound)

  githubUserFound: (json) ->
    this.props.onSearch(json, 'github')

  twitterUserFound: (json) ->
    this.props.onSearch(json, 'twitter')
