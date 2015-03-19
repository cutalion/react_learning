View = require('views/twiuser')

module.exports = React.createClass
  render: ->
    View.render(this)

  profileImageUrl: ->
    return unless this.props.user
    console.log this.props.user.profile_image_url.replace(/_normal/, '')
    this.props.user.profile_image_url.replace(/_normal/, '')
