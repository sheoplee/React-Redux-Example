import React, {Component} from "react";
import {connect} from 'react-redux'
import counterSlice, {WELCOME, down, set, step} from '../sliceStore';
import {useDispatch, useSelector} from 'react-redux';

class Header extends Component {
  render () {
    return (
      <header>
        <h1><a href="#welcome" onClick={() => {
          this.props.onClick();
        }}>Web</a></h1>
        World Wide Web
      </header>
      );
  }
}

// Redux 연결
export default connect(null, function(dispatch){
  return {
    onClick: function(){
      dispatch({type:'sliceStore/WELCOME'})
    }
  }
})(Header);