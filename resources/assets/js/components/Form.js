import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      newArticle: {
        id: null,
        name: '',
        article: ''
      }
    };
    this.createArticle = this.createArticle.bind(this);  
      
  }

  createArticle(e){
    e.preventDefault();

    this.setState({
      newArticle: {
        name: this.titleInput.value,
        article: this.textInput.value
      }
    }, () => this.props.onSubmit(this.state.newArticle))
  }

  deleteArticle(){
  	this.props.onDelete(this.state.newArticle.id);
  }

  render() {
    return (
      <div className="frame formulario">
        <h2>Criar/Editar Artigo</h2>
        <form key={this.props.id}>
          <label>Title:</label><br/>
          <input name="title" maxLength="40" type="text" defaultValue={this.props.title} ref={(input) => this.titleInput = input} />
          <label>Article:</label><br/>
          <textarea name="article" maxLength="4000" type="text" defaultValue={this.props.article} ref={(input) => this.textInput = input} />
          <button type="submit" onClick={this.createArticle}>Save</button> 
          <button onClick={this.deleteArticle}>Delete</button> 
        </form>
      </div>
    );
  }
}

export default Form;