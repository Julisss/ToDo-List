import React from 'react';
import './App.css';
import Listitems from './Listitems';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  } 

  addItem = (e) => {
    e.preventDefault(); 
    
    let newItem = this.state.currentItem;
    if(newItem !== ''){
      let newItems = [...this.state.items, newItem];
    this.setState({
      items: newItems,
      currentItem: {
        text: ''
      }
    });
  }

    console.log(this.state.currentItem);
    console.log(this.state.items);
  }

  deleteItem = (key) => {
    let filteredItems = this.state.items.filter(item => 
    item.key!==key);
    this.setState({
      items: filteredItems
    })
  }

  updateItem = (text, key) => {
    let items = this.state.items;
    items.map(item => {
      if(item.key === key) {
        item.text = text;
        }
    })
    this.setState({
      items: items
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter Text" value={this.state.currentItem.text} onChange={this.handleInput}/>
            <button type="submit">Add</button>
          </form>
        </header>
        <Listitems items={this.state.items} deleteItem={this.deleteItem} updateItem={this.updateItem}/>
      </div>
    );
  }
}

export default App;
