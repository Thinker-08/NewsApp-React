import React, { Component } from 'react'
import loading from "../Loading.gif"

export default class spinner extends Component {
  render() {
    return (
      <div className="text-center"><img src={loading} alt="Loading" height="100px" width="100px"/></div>
    )
  }
}
