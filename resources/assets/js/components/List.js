import React, { Component } from 'react';
import './App.css';

class List extends Component { 

  constructor(props){

    super(props);
    this.state = {articleName: null, articleText: null};
  }

  renderArticles() {
    return this.props.articles.map(article => {
      let viewArticle = this.viewArticle.bind(this, article);
      let editArticle = this.editArticle.bind(this, article);
      return (
            <li key={article.id} >
                {article.title}
                <button onClick={viewArticle}>View</button>
                <button onClick={editArticle}>Edit</button> 
            </li>
        );
    })
  }

  viewArticle(article, e){
    this.setState({
      articleName: article.title,
      articleText: article.body,
    });
  }

  editArticle(article, e){
    const name = article.title;
    const body = article.body;
    const id = article.id;

    this.props.onChange(name, body, id);
  }
  
  render() {
    return (
      <div className="frame inicio">
        <h2>Artigos Cadastrados:</h2>
        <ul className="lista">
          { this.renderArticles() }
        </ul> 
        <div className="view">
          <h2>{this.state.articleName}</h2>
          <p>{this.state.articleName}</p>
        </div>
      </div> 
    );
  }
}

export default List;