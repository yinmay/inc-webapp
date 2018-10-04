import React, { Component } from 'react';
import './index.css'

export default class PlayerCard extends Component {
    constructor(props){
        super(props)
   
    }
  render() {
     
    return (
      <div className='playerCard-panel'>
        
        {this.props.children}
        <div className="border-bottom"></div>
      </div>
    )
  }
};
