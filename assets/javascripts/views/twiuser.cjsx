module.exports =
  render: (component) ->
    return null unless component.props.user

    return (
      <div className="twitter-account">
        <h3>Twitter name: {component.props.user.name}</h3>
        <img src={component.profileImageUrl()} height="200"/>
      </div>
    )
