import React, { Component } from 'react'

export default class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick= this.handleClick.bind(this)
  }
  handleClick = ()=>{
    console.log(this.props.index,"撩拨啦小姐姐");
    this.props.deleteItem(this.props.index)
  }
  render() {
    return (
      <div  className="warps">
        <div className="list" onClick={this.handleClick}>{this.props.content}</div>
      </div>
    )
  }
}
