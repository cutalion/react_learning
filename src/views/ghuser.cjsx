module.exports =
  render: (component) ->
    return null unless component.props.user

    return (
      <div className="github-account">
        <h3>Github name: {component.props.user.name}</h3>
        <img src={component.props.user.avatar_url} width="200" height="200"/>
      </div>
    )
