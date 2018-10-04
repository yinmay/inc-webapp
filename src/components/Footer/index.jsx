import * as React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter,Link } from 'react-router-dom'
import './index.css'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer" id="footer">
                <Link to={'/inc'} className={'icon ' + (this.props.location.pathname === '/inc' ? 'icon-1-active' : 'icon-1')} />
                <Link to={'/inc/player'} className={'icon ' + (this.props.location.pathname === '/inc/player' ? 'icon-2-active' : 'icon-2')} />
                <Link to={'/inc/me'} className={'icon ' + (this.props.location.pathname === '/inc/me' ? 'icon-3-active' : 'icon-3')} />
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}
export default withRouter(connect(mapStateToProps)(Footer))
