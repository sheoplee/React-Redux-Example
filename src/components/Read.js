import React from "react";

export default class Read extends React.Component {
  render () {
    return (
      <article><h2>제목: {this.props.title}</h2>
        내용: {this.props.desc}
      </article>
    )
  }
}