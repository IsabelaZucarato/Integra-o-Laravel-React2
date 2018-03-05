import React, { Component } from 'react';
import './App.css';
import List from './List';
import Form from './Form';
import CreateButton from './CreateButton';
import ListButton from './ListButton';


var classForm = "displayNone";
var classList = "";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: null,
      article: null,
      id: null,
      articles: []
    };

    this.changeForm = this.changeForm.bind(this);
    this.openForm = this.openForm.bind(this);
    this.openList = this.openList.bind(this);
    this.addToArticles = this.addToArticles.bind(this);
  }
  
  componentDidMount(){

    fetch('/api/articles')
      .then(response => {
          return response.json();
      })
      .then(articles => {
          this.setState({ articles });
      });
    // this.setState({
    //   articles: [  
    //     {id: 1, name: 'Football', article:'asuhdaso aosjda oaishas'},
    //     {id: 2, name: 'Baseball', article:'asuhdaso aosjda oaishas'},
    //     {id: 3, name: 'Basketball', article:'asuhdaso aosjda oaishas'}
    //   ]
    // })
  }

  openForm(){
    this.setState({
      title: null,
      article: null,
      id: null
    });
    classForm = "";
    classList = "displayNone";
  }

  openList(){
    // isso nao deveria estar aqui 
    this.setState({
      title: null,
      article: null,
      id: null
    });

    classForm = "displayNone";
    classList = "";
  }

  changeForm(newTitle, newArticle, newId){
    this.setState({
      title: newTitle,
      article: newArticle,
      id: newId
    });
    classForm = "";
    classList = "displayNone";
  }

  addToArticles(newArticle){
    newArticle.id = (this.state.articles.length + 1);

    this.setState((prevState)=> ({
      articles: [...prevState.articles, newArticle]
    }));
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Primeiro Projeto em React</h1>
          <nav>
            <CreateButton onClick={this.openForm} />
            <ListButton onClick={this.openList} />
          </nav>  
        </header>
        <div className="container">
          <div className={classList}>
            <List articles={this.state.articles} onChange={this.changeForm} />
          </div>
          <div className={classForm}>
            <Form id={this.state.id} title={this.state.title} article={this.state.article} onSubmit={this.addToArticles} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
