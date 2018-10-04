import * as React from 'react'

import './index.css'


class Modal extends React.Component {
    render() {
        return (

            <div className="modal">
                <div className="modal-overlay" onClick={() => this.props.closeModal(false)} />
                {this.props.modal}
            </div>

        )
    }
}

export default Modal
