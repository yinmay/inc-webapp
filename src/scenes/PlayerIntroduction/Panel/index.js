import React, { Component } from 'react';
import './index.css'
export default class Panel extends Component {
  render() {
    return (
      <div className='panel'>
          {this.props.children}
      </div>
    )
  }
};
