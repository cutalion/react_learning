View = require('./views/ghbox')

module.exports = React.createClass
  getInitialState: ->
    user: null

  render: ->
    View.render(this)

  searchUser: (json) ->
    this.setState({user: json})
