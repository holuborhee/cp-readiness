import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './List'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        term: '',
        items: []
      };
    }

    onChange = (event) => {
        this.setState({term: event.target.value});
      }

      onSubmit = (event) => {
          event.preventDefault()
          this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
          });
        }


    render() {
      return (
        <div>
          <form onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>Submit</button>
          </form>
          <ListItems items={this.state.items} />
        </div>
        
      );
    }
}

export default App;