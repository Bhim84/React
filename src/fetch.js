import React, { Component } from "react";

class FetchDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      loading: false
    };
    this.fetchDetails = this.fetchDetails.bind(this); 
  }

  fetchDetails() {
    const myurl = "https://api.github.com/repositories";
    this.setState({ loading: true });
    fetch(myurl)
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(response => this.setState({ result: response, loading:false }));
  }

  render() {
  
    const names =
      this.state.loading === true ? (
        <Loading />
      ) : (
        
          this.state.result.map(function(x,index) {
          return <li>{x.name}</li>;
        }) 
      );
    return (
      <div>
        <h1>Fetch Demo</h1>
        <input type="button" value="Get Data" onClick={this.fetchDetails} />
        {names}
      </div>
    );
  }
}
const Loading = () => {
  return (
    <img alt="dfdsfdsf" src="https://api.optimum7.com/sylvester/deguns/assets/loading.gif" />
  );
};
export default FetchDemo;
