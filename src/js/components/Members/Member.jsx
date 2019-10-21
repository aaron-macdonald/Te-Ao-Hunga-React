import React from 'react'
import { Link } from 'react-router-dom'

class Member extends React.Component {
  
  render() {
    console.log('this.props: ', this.props)
    const {id, firstName, surName, knickName} = this.props.member
    return (
      <div className="row">
        <div className="col s12 m10 offset-m1">
          <div className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <table className="striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>{firstName} {surName}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=''>
                      <td>Knickname</td>
                      <td>{knickName}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card-action">
                <Link to={`/members/member/${id}/edit/`}>
                  <div className="center">
                    <div className="waves-effect waves-light btn">
                      Edit Member Details
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Member
