import * as React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <Link to="/inc">
                </Link>
            </div>
        )
    }
}

export default Logo
