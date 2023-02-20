import './App.css';
import Header from './components/Header';
import NavContainer from './containers/Nav';
import Read from './containers/Read';
import Control from './containers/Control';
import { connect} from 'react-redux';
import { Component } from 'react';
import Create from './containers/Create';
import Update from './containers/Update';

class App extends Component {
  render(){
    var article = null;
    if(this.props.mode === 'WELCOME' || this.props.mode === 'READ' ){
      article = <Read></Read>;
    }
    else if(this.props.mode === 'CREATE'){
      article = <Create></Create>;
    }
    else if(this.props.mode === 'UPDATE'){
      article = <Update></Update>;
    }
    return (
      <div className="App">
        <Header></Header>
        <NavContainer></NavContainer>
        <Control></Control>
        {article}
      </div>
    );

  }
}

export default connect(
  function(state){
    //debugger;
    // const mode = useSelector(state=>{
    //   return state.slice.mode;
    // });
    // console.log(mode);
    
    return {mode:state.slice.mode}
  }
)(App);
