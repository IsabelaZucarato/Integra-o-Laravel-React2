import React, { Component } from 'react';

class CreateButton extends Component {
  constructor(props) {
    super(props);
    this.newArticle = this.newArticle.bind(this);
  }

  newArticle(){
    this.props.onClick();
  }

  render() {
    return (
      <a href="/create" onClick={this.newArticle}>
        Create
      </a>
    );
  }
}

export default CreateButton