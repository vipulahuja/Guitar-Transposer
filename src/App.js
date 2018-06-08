import React, { Component } from 'react';
import './App.css';
import Content from './components/Content';
import Transposer from './components/transposer';

class App extends Component { 
  constructor(props)
  {
    super(props);
    this.state = {
      componentToShow:0 
    };
    this.styles = {
      optionContainer:{
        width:"70%",
        margin:"0 auto",
        marginTop:"5%",
        minHeight:350,
        height:350,
      },
    }
  }
  handleRouting = (pageToBeShowed) =>{
    this.setState({
      componentToShow:pageToBeShowed
    });
  }
  render(){
    let {componentToShow} = this.state;
    switch(componentToShow)
    {
      case 0:
        return (
        <div className="appContainer">
          <div className="retro">Guitar Transposer</div>
          <div className="row" style={this.styles.optionContainer}>
            <Content pageToBeShowed={1} clickHandler={this.handleRouting}/>
            <Content pageToBeShowed={2} clickHandler={this.handleRouting}/>
          </div>
        </div>
        );
        break;
      case 1:
        return (
        <Transposer/>
        );
        break;
      case 3:
        return (
          {/*<Transposerhelper/>*/}
        );
        break;
    }
  }
}
export default App;
