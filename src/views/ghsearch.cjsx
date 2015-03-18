module.exports =
  render: (component) ->
    return (
      <form onSubmit={component.onSubmit}>
        <input value={component.state.searchName} onChange={component.onNameChange} autoFocus />
        <button>Find</button>
      </form>
    )
