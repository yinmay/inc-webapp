import * as React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.css'
import history from '../../history'

class Header extends React.Component {

  
    render() {
        return (
             <div className="header" onClick={()=> history.goBack() }>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps)(Header))
