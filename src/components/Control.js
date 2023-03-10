import React, {Component} from "react";

export default class Control extends Component {
  render () {
    return (
        <ul>
          <li><a href="#create" onClick={(e)=>{
            e.preventDefault();
            this.props.onClick('sliceStore/CREATE');
          }}>create</a></li>
          <li><a href="#update" onClick={(e)=>{
            e.preventDefault();
            this.props.onClick('sliceStore/UPDATE');
          }}>update</a></li>
          <li>
            <input type="button" value="delete" onClick={(e)=>{
                e.preventDefault();
                this.props.onClick('sliceStore/DELETE_PROCESS');
          }}></input>
          </li>
        </ul>
    )
  }
}