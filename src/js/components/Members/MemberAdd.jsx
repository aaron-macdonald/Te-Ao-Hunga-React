import React from 'react'
import { addMember } from '../../client-api'

class MemberAdd extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      errorMessage: null,
      firstName: '',
      surName: '',
      knickName: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  componentDidMount () {
    const {member} = this.props
    if (member) {
      this.setState(Object.assign({}, member)
    )}
  }

  componentWillReceiveProps (nextProps) {
    const {member} = nextProps
    if (member && !this.props.member) {
      this.setState(Object.assign({}, member))
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({ errorMessage: null })
      addMember(this.state)
        .then((id) => {this.props.fetchMembers()
          .then(() => this.props.history.push(`/members/member/${id}`))
          })
        .catch(err => this.setState({ errorMessage: err.message }))
  }
  
  render () {
    return (
      <form className='addMember' onSubmit={this.handleSubmit}>
        <h2 className=''>Add Member</h2>
        <fieldset>
          <div className=''>
           <label htmlFor='firstName'>First name</label>
           <input
             type='text'
             name='firstName'
             value={this.state.firstName}
             onChange={(e) => this.setState({ firstName: e.target.value })}
           />
          </div>
          <div className=''>
           <label htmlFor='surName'>Last name</label>
           <input
             type='text'
             name='surName'
             value={this.state.surName}
             onChange={(e) => this.setState({ surName: e.target.value })}
           />
          </div>
          <div className=''>
           <label htmlFor='knickName'>Knick name</label>
           <input
             type='text'
             name='knickName'
             value={this.state.knickName}
             onChange={(e) => this.setState({ knickName: e.target.value })}
           />
          </div>
          <div className=''>
            <input className='' type='submit' />
          </div>
        </fieldset>

        {this.state.errorMessage &&
          this.state.errorMessage}

      </form>
    )
  }
}

export default MemberAdd
