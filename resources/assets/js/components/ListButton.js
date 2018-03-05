import React, { Component } from 'react';

class ListButton extends Component {
  constructor(props) {
    super(props);
    this.openList = this.openList.bind(this);
  }

  openList(){
    this.props.onClick();
  }

  render() {
    return (
      <button onClick={this.openList}>
        Open List
      </button>
    );
  }
}

export default ListButton