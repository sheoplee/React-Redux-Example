import React from "react";

export default class Create extends React.Component {
  render () {
    return (
      <form onSubmit={(e)=>{
        e.preventDefault();
        this.props.onSubmit(e.target.title.value, e.target.desc.value);
      }}>
        <p><input type="text" name="title" placeholder="title"></input></p>
        <p><textarea type="text" name="desc" placeholder="description"></textarea></p>
        <p><input type="submit"></input></p>
      </form>
    )
  }
}