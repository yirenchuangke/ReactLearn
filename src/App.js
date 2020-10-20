import React, { Component } from "react";
import "./style.css";
import { CSSTransition } from "react-transition-group";
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
        <CSSTransition
          in={this.state.isShow} //用于判断是否出现的状态
          timeout={2000} //动画持续时间
          classNames="boss-text" //className值，防止重复
          unmountOnExit
        >
          <div>Boss级人物一人创客</div>
        </CSSTransition>

        <div>
          <button onClick={this.toToggole}>召唤Boss</button>
        </div>
      </>
    );
  }
}
