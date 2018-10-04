import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {login} from '../../actions/auth'

class Login extends Component {
    componentDidMount() {
      const searchParams = new URLSearchParams(this.props.location.search)

      this.props.login({
        code: searchParams.get("code")
      })
    }

    render() {
        return (
            <div className="login" />
        )
    }
}

const mapStateToProps = (state) => {
  return {
  }
}
  
const mapDispatchToProps = (dispatch) => {
  return {
      login: (data) => dispatch(login(data)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
