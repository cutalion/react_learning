module.exports =
  render: (component) ->
    return null unless component.props.user

    return (
      <div>
        <h1>{component.props.user.name}</h1>
        <img src={component.props.user.avatar_url} width="200" height="200"/>
      </div>
    )
