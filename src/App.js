import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {tasks} from './tasks.json';

import Formulario from './components/Formulario';

class App extends Component {
constructor(){
  super();
  this.state = {
    tasks
  };
  this.handleAddTodo=this.handleAddTodo.bind(this);
}

handleAddTodo(tasks){
  this.setState(
    {
      tasks:[...this.state.tasks, tasks]
    }
  )
}

removeTodo(index){
  this.setState({
    tasks: this.state.tasks.filter((e, i)=>{
      return i !== index
    })
  });
}

  render() {
    const tasks = this.state.tasks.map((tasks, i)=>{
      return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="Card-title text-center">
              <h3>{tasks.title}</h3>
              <span className="badge badge=pill badge-danger ml-2">
                {tasks.prioridad}
              </span>
            </div>
            <div className="Card-body">
              {tasks.descripcion}

        </div>
          <div className="card-footer">
          <button className="btn btn/danger"
          onClick={this.removeTodo.bind(this, i)}>
          Delete
          </button>
        </div>
        </div>
        </div>
      )
    });


    return (
      <div className="App">

          <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text=while">
              TASKS
              <span className="badge badge-pill badge-light ml-2">
                {this.state.tasks.length}
              </span>
            </a>
          </nav>

          <div className="container">
            <div className="row mt-4">

                <div className="col-md-4 text-center">
                  <img src={logo} className="App-logo" alt="logo" />
                  <Formulario onAddTodo={this.handleAddTodo}></Formulario>
                </div>

                  <div className="col-md-8">
                    <div className="row">
                      {tasks}
                    </div>
                  </div>
               </div>
            </div>
        </div>
        );
    }
  }
  export default App;
