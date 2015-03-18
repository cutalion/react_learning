GHSearch = require('ghsearch')
GHUser   = require('ghuser')

module.exports =
  render: (component) ->
    return (
      <div>
        <GHSearch onSearch={component.searchUser} />
        <GHUser user={component.state.user} />
      </div>
    )
