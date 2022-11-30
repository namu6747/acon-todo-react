import React from 'react';
import Todo from './Todo';
import AppTodo from './AppTodo';
import './App.css';
import { List, Paper } from '@mui/material';
import { Container } from '@mui/system';
import { call } from './service/ApiService';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }

  add = (item) => {
    call("/todo","POST",item).then((response) =>
    this.setState({ items: response.data })
    );

    /*
    const thisItems = this.state.items;
    item.id = "ID-"+thisItems.length;
    item.done = false;
    thisItems.push(item);
    this.setState({ items: thisItems });
    console.log("items : ", this.state.items);
    */
  }

  delete = (item) => {
    call("/todo","DELETE",item).then((response) => 
      this.setState({ items: response.data })
    )

    /*
    const thisItems = this.state.items;
    console.log("Before Update Items : ", this.state.items);
    const newItems = thisItems.filter(e => {
      let flag = e.id !== item.id;
      console.log('e : ',e);
      console.log('item : ',item);
      console.log(flag);
      return flag;
    });
    console.log(newItems);
    this.setState({ items: newItems }, () => {
      console.log("Update Items : ", this.state.items)
    })
    */
  }

  update = (item) => {
    call("/todo", "PUT", item).then((response) => 
      this.setState({ items: response.data })
    )
  }

  componentDidMount(){

    call("/todo", "GET", null).then((response) =>
      {console.log(response);
      return this.setState({ items: response.data});
      }
    );
    
    /*
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("http://localhost:8080/todo", requestOptions)
      .then((response) => response.json())
      .then(
        (response) => {
          this.setState({
            items: response.data,
          });
        },
        (error) => {
          this.setState({
            error,
          })
        }
      );
    */
  }

  render(){
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo 
              item={item} 
              key={item.id} 
              delete={this.delete} 
              update={this.update}
              />
          ))}
        </List>
      </Paper>
    );

    return <div className='App'>
              <Container maxWidth="md">
                <AppTodo add={this.add} />
                <div className='TodoList'>{todoItems}</div>
              </Container>
          </div>;
    
    /*
    var todoItems = this.state.items.map((item, idx) => (
        <Todo item={item} key={item.id} />
      ));
    */
  }
}

/*
function App() {
  return (
    <div className="App">
      <Todo />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
