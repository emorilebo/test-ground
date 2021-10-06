import React, { Component } from "react";
//import { Navbar } from "./Navbar";
//import { TodoRows } from "./TodoRows";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Godfrey",
      todoItems: [],
      newTodo: "",
    };
  }

  updateValue = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  newTodo = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newTodo, done: false },
      ],
      
    });
    
  };

  todoRows = () =>
    this.state.todoItems.map((item) => (
      <TodoRows key={item.action} item={item} callback={this.toggleDone} />
    ));

  toggleDone = (todo) =>
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    });

  render = () => (
    <div className="container">
      <div className="row">
        <Navbar name={this.state.userName} />
        <div className="col-12">
          <input
            className="form-control"
            value={this.state.newToDo}
            onChange={this.updateValue}
          />
          <button className="btn btn-primary" onClick={this.newTodo}>
            Add
          </button>
        </div>
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Complete</th>
              </tr>
            </thead>
            <tbody>{this.todoRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

class TodoRows extends Component {
	render = () => (
		<tr>
			<td>{this.props.item.action}</td>
			<td>
				<input
					type="checkbox"
					checked={this.props.item.done}
					onChange={() => this.props.callback(this.props.item)}
				/>
			</td>
		</tr>
	);
}

class Navbar extends Component {
	render = () => (
		<div className="col-12">
			<h2 className="bg-primary text-white text-center p2">
				{this.props.name}'s To do list
			</h2>
		</div>
	);
}