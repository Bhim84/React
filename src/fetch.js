import React, { Component } from "react";

class FetchDemo extends Component {
constructor(props){
  super(props);
  this.state={
    result:[]
  }
  this.fetchDetails=this.fetchDetails.bind(this);
}


fetchDetails(){
  const myurl ="https://api.github.com/repositories";
  fetch(myurl)
  .then(response => response.json())
  .then(response => console.log(response))
  .then(response => this.setState({result:response}))
}

  render() {
    
    const names=this.state.result.map(function(x){
      return <li>{x.name}</li>
    })
    return (
      <div>
        <h1>Fetch Demo</h1>
        <input type="button" value="Get Data" onClick={this.fetchDetails}/>
          {names}
      </div>
    );
  }
}

export default FetchDemo;
