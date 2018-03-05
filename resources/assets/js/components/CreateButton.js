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
      <button onClick={this.newArticle}>
        Create
      </button>
    );
  }
}

export default CreateButton