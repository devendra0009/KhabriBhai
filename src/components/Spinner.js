import React, { Component } from 'react';
import loader from './loader.gif'

export class spinner extends Component {
  render() {
    return <div>
             <img src={loader} alt="loading.." />
    </div>;
  }
}

export default spinner 