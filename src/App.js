import logo from "./logo.svg";
import "./App.css";
import React from "react";

import web3 from "./web3";
import lottery from "./lottery";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { manager: "" };
  }

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();

    this.setState({ manager });
  }

  render() {
    // console.log(web3.version);
    // web3.eth.getAccounts().then(console.log);

    return (
      <div>
        <h1>Lottery Contract</h1>
        <p>This contract is managed by {this.state.manager}</p>
      </div>
    );
  }
}
export default App;
