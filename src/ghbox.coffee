View = require('./views/ghbox')

module.exports = React.createClass
  getInitialState: ->
    ghuser: null
    twiuser: null

  render: ->
    View.render(this)

  searchUser: (user, from) ->
    this.setState({ghuser: user}) if from == 'github'
    this.setState({twiuser: user}) if from == 'twitter'
