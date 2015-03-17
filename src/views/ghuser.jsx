module.exports = {
  render: function(component){
    if(!component.props.user) return null;

    return (
      <div>
        <h1>{component.props.user.name}</h1>
        <img src={component.props.user.avatar_url} width="200" height="200"/>
      </div>
    )
  }
}
