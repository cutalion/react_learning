var GHSearch = require('ghsearch')
var GHUser   = require('ghuser')

module.exports = {
  render: function(component){
    return (
      <div>
        <GHSearch onSearch={component.searchUser} />
        <GHUser user={component.state.user} />
      </div>
    )
  }
}
