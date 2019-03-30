import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.badgeClasses()}>{this.showCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-info btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2 btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  badgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  showCount() {
    let { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
