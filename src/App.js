import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Form from './Form';

/*class App extends Component {
  constructor(props){
    super(props);
    this.state = { liked : false };
    //------------------------------------------------Start
    // this.state = {count: 0};
    // var timesViewed = 0;
    // if(localStorage.timesView){
    //     timesViewed = localStorage.timesViewed;
    // }
    // timesViewed++;
    // this.state = { numViews: timesViewed };
    // localStorage.timesViewed = timesViewed;
}
// incrementCount(){ //callback function
//   this.setState( { count: this.state.count + 1 } );
// }----------------------------------------------------End

/*toggle() {  //callback function
  this.setState( {liked : !this.state.liked} );
}

  render() {
        var name = this.props.name;
        var txt = this.state.liked ? 'Unlike' : 'Like';
        var myColor = this.state.liked ? 'red' : 'black';
        var weight = this.state.liked ? 'bold' : 'normal';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World! Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p><span style={ {color : myColor, fontWeight : weight} } >Java</span>
                <span onClick={this.toggle.bind(this)}>  
                    { '\ud83d\udc4d' + txt }
                </span>
        </p>
      </div>
    );    
  }
}*/

/**
 * !Below code use props to handle data in React using Table.js example 
 * Props are an effective way to pass existing data to 
 * a React component, however the component cannot change 
 * the props – they’re read-only.()
 
class App extends Component {
  render() {
    const characters = [
      {
        'name': 'Charlie',
        'job': 'Janitor'
      },
      {
        'name': 'Mac',
        'job': 'Bouncer'
      },
      {
        'name': 'Dee',
        'job': 'Aspring Actress'
      },
      {
        'name': 'Dennis',
        'job': 'Bartender'
      }
    ];

    return (
      <div className="container">
        <Table characterData={characters} ""/>
      </div>
    );
  }
}*/
 /**
  * Using state to handle React Data
  * With props, we have a one way data flow, but with state 
  * we can update private data from a component.
  * You can think of state as any data that should be saved 
  * and modified without necessarily being added to a 
  * database – for example, adding and removing items from a 
  * shopping cart before confirming your purchase.
  */
/*class App extends Component {
  state = {
    characters: [
        {
        'name': 'Charlie',
          'job': 'Janitor'
        },
        {
          'name': 'Mac',
          'job': 'Bouncer'
        },
        {
          'name': 'Dee',
          'job': 'Aspring Actress'
        },
        {
          'name': 'Dennis',
          'job': 'Bartender'
        },
        {
          'name': 'Jimoh',
          'job': 'Developer'
        }
    ]
  };
    
    removeCharacter = index => {
      const { characters } = this.state;

      this.setState({
        characters: characters.filter((character, i) => {
          return i !== index;
        })
      });
    }

    render() {
      const { characters } = this.state;
      return (
        <div className="container">
            <Table
              characterData=  {characters}
              removeCharacter={this.removeCharacter} 
            />
        </div>
      );
    }
}*/
/**
 * Submitting form data using React example of todo list or shopping cart app
*/
class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
}

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
          <Table
            characterData =  {characters}
            removeCharacter = {this.removeCharacter} 
          />
          <Form handleSubmit = {this.handleSubmit} />
      </div>
    );
  }

}

export default App;