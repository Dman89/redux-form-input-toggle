import React, {Component} from 'react';
const hidden = {
  display: "none",
  "zIndex":-1,
  position: "absolute",
  left: -99999
}
const notHidden = {};
export default class InputToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false,
      showLabel: true,
    }
  }
  onClickToggle() {
    this.setState({
      showInput: !this.state.showInput,
      showLabel: !this.state.showLabel,
    })
  }
  render() {
    return (
      <div>
        <label style={this.state.showInput ? hidden : notHidden} onClick={this.onClickToggle.bind(this)} className={this.props.labelClassName}>{this.props.label == "" ? this.props.placeholder : this.props.label}</label>
        <span style={this.state.showLabel ? hidden : notHidden} onBlur={this.onClickToggle.bind(this)}>{this.props.children}</span>
      </div>
    )
  }
}
