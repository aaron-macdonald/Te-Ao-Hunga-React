import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Members from './Members.jsx'
import Member from './Member.jsx'
import MemberEdit from './MemberEdit.jsx'
import MemberAdd from './MemberAdd.jsx'
import { getMembers } from '../../client-api'

class MemberRoutes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      members: [],
      errorMessage: ''
    }
    this.fetchMembers = this.fetchMembers.bind(this)
  }

  componentDidMount() {
    this.fetchMembers()
  }

  async fetchMembers () {
    try {
      const members = await getMembers();
      this.setState({ members: members });
    }
    catch (err) {
      console.log('fetchMembers error: ',err.message)
      this.setState({ errorMessage: err.message });
    }
  }
  
  render () {
    return (
      <div className="member-routes">
        <Switch>
          <Route exact path='/members' render={ (props) =>
             <Members
               members={this.state.members}
               {...props}
             />
          }/>
          <Route exact path='/members/member/add' render={(props) =>
            <MemberAdd
              fetchMembers={this.fetchMembers}
              {...props}
            />
          }/>
          <Route exact path='/members/member/:id' render={(props) =>
            <Member
              member={this.state.members.find((member) =>
                member.id === Number(props.match.params.id))}
              {...props}
            />
          }/>
          <Route exact path='/members/member/:id/edit' render={(props) =>
            <MemberEdit
              member={this.state.members.find((member) =>
                member.id === Number(props.match.params.id))
              }
              fetchMembers={this.fetchMembers}
              {...props}
            />
          }/>
        </Switch>
        {this.state.errorMessage &&
          <h1>{this.state.errorMessage}</h1>}
      </div>
    )
  }
}

export default MemberRoutes
