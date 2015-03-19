Search  = require('components/search')
GHUser  = require('components/ghuser')
TWIUser = require('components/twiuser')

module.exports =
  render: (component) ->
    return (
      <div>
        <Search onSearch={component.searchUser} />
        <GHUser user={component.state.ghuser} />
        <TWIUser user={component.state.twiuser} />
      </div>
    )
