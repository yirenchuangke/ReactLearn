import React, { Component } from "react";
import './style.css'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }
  toToggole = () => {
    this.setState({
      isShow: this.state.isShow ? false : true,
    });
    console.log(this.state.isShow);
  };
  render() {
    return (
      <>
        <div className={this.state.isShow ? "show" : "hide"}>Boss级人物一人创客</div>
        <div>
          <button onClick={this.toToggole}>召唤Boss</button>
        </div>
      </>
    );
  }
}
