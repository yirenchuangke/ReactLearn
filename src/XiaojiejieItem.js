import React, { Component } from "react";
import PropTypes from "prop-types";

export default class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    console.log(this.props.index, "撩拨啦小姐姐");
    this.props.deleteItem(this.props.index);
  };
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
}
  render() {
    console.log("33render---组件挂载中.......");
    return (
      <div className="warps">
        <div className="list" onClick={this.handleClick}>
    {this.props.index}號{this.props.avname}為您{this.props.content}
        </div>
      </div>
    );
  }
}

XiaojiejieItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
};
XiaojiejieItem.defaultProps={
  avname:"蒼井空"
}
