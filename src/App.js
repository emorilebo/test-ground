import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Emori",
      todoItems: [
        {action: "Buy Milk", done: false},
        {action: 'Dentist at 5pm', done: false},
        {action: 'Go to the Gym', done: false},
      ]
    };
  }

  

  render() {
    return (
      <div>
        <div>
          <div className="flex-row items-center justify-center">
            <h2 className="flex-grow-0  bg-blue-800 text-white text-2xl">
              {this.state.userName} Todo List
            </h2>
            
          </div>
        </div>
      </div>
    );
  }
}
