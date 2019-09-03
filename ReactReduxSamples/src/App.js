import React, { Component } from "react";

import "./App.css";
import Customer from "./Customer";
import CustomerUI from "./CustomerUI";
import CustomerCond from "./CustomerConditionals";
import CustomerTer from "./CustomerTernery";

class App extends Component {
  state = {
    customers: [
      { name: "sriram", age: 46, email: "sriram@sriraminc.com", id: 1 },
      { name: "srinivasan", age: 36, email: "srini@sriraminc.com", id: 2 },
      { name: "Sadhana", age: 26, email: "sadhana@sriraminc.com", id: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1> My First React App</h1>

        <h2> Display customers using a container component </h2>
        <Customer customers={this.state.customers} />

        <h2> Display customers using a UI component </h2>
        <CustomerUI customers={this.state.customers} />

        <h2> Display customers using a UI component based on a condition </h2>
        <CustomerCond customers={this.state.customers} />

        <h2>
          Display customers using a UI component based on a Ternary operator
        </h2>
        <CustomerTer customers={this.state.customers} />
      </div>
    );
  }
}

export default App;
