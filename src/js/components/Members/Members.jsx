import React from 'react'
import { Link } from 'react-router-dom'

function Members (props) {
  const members = props.members
  
  return (
    <div className='members'>
      <div className='row valign-wrapper'>
        <h4 className="col s12">Members</h4>
          <Link to='/members/member/add'>
            <div className="waves-effect waves-light btn">
              Add Member
            </div>
          </Link>
      </div>
      <table className="striped centered">
        <thead>
          <tr>
            <th><h5>Name</h5></th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => {
            const {id, firstName, surName} = member
            return <tr key={id} className='member'>
              <td><h5>{firstName} {surName}</h5></td>
              <td>
                <Link to={`/members/member/${id}`}>
                  <div className="waves-effect waves-light btn">
                    View Member
                  </div>
                </Link>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

Members.defaultProps = {
  members: []
}

export default Members
