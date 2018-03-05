import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      newArticle: {
        id: null,
        name: 'o erro ta aqui?',
        article: 'e aqui?'
      }
    };
    this.createArticle = this.createArticle.bind(this);  
      
  }

  createArticle(e){
    e.preventDefault();

    this.setState({
      newArticle: {
        id: 0,
        name: this.titleInput.value,
        article: this.textInput.value
      }
    }, () => this.props.onSubmit(this.state.newArticle))
  }

  render() {
    return (
      <div className="frame formulario">
        <h2>Criar/Editar Artigo</h2>
        <form key={this.props.id}>
          <label>Title:</label>
          <input name="title" maxLength="40" type="text" defaultValue={this.props.title} ref={(input) => this.titleInput = input} />
          <p>{this.props.title}</p>
          <label>Article:</label>
          <textarea name="article" maxLength="4000" type="text" defaultValue={this.props.article} ref={(input) => this.textInput = input} />
          <p>{this.props.article}</p>
          <button type="submit" onClick={this.createArticle}>Save</button> 
        </form>
      </div>
    );
  }
}

export default Form;