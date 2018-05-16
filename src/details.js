import React, { Component } from "react";


const plus={
  marginRight: "10px"
}
const minus = {
  marginLeft: "10px"
}
class Details extends Component {
  constructor(props){
    super(props);
    this.state={total:this.props.count}
    this.increaseValue = this.increaseValue.bind(this);
    this.decreaseValue = this.decreaseValue.bind(this);
  }

  increaseValue(){
    this.setState({total:this.state.total+1})
  }
  decreaseValue(){
    this.setState({total:this.state.total-1})
  }
  render() {
    const mydataelements = this.props.mycourses.map(function(element,index){
      return <li key={index}>{element}</li>
    });
    return (
      <div>
        <h1>React in details</h1>
        <p>{this.props.title}</p>
        <p>{mydataelements}</p>

        <h3>State Introduction</h3>
        <h1 className="plus" onClick={this.increaseValue}>+</h1>
        <p className="total">{this.state.total}</p>
        <h1 className="minus" onClick={this.decreaseValue}>-</h1>
      </div>
    );
  }
}

export default Details;