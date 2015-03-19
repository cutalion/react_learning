Search  = require('search')
GHUser  = require('ghuser')
TWIUser = require('twiuser')

module.exports =
  render: (component) ->
    return (
      <div>
        <Search onSearch={component.searchUser} />
        <GHUser user={component.state.ghuser} />
        <TWIUser user={component.state.twiuser} />
      </div>
    )
