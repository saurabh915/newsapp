import React, { Component } from 'react'
import loading from "./Loading.gif"
//rce
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="Loading" srcset="" />
      </div>
    )
  }
}

export default Spinner
