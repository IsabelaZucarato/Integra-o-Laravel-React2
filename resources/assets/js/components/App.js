import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import List from './List';
import Form from './Form';
import CreateButton from './CreateButton';
import ListButton from './ListButton';

// var classForm = "displayNone";
// var classList = "";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: null,
      article: null,
      id: null,
      articles: [],
      isEdit: false
    };

    this.viewForm = this.viewForm.bind(this);
    this.openForm = this.openForm.bind(this);
    this.openList = this.openList.bind(this);
    this.addToArticles = this.addToArticles.bind(this);
    this.editArticles = this.editArticles.bind(this);
    this.removeFromArticles = this.removeFromArticles.bind(this);
  }
  
  componentDidMount(){
    fetch('/api/article')
      .then(response => {
          return response.json();
      })
      .then(articles => {
          this.setState({ articles });
      });
  }

  openForm(){
    // this.setState({
    //   title: null,
    //   article: null,
    //   id: null,
    //   isEdit: false
    // });
    // classForm = "";
    // classList = "displayNone";
  }

  openList(){
    // // isso nao deveria estar aqui 
    // this.setState({
    //   title: null,
    //   article: null,
    //   id: null
    // });

    // classForm = "displayNone";
    // classList = "";
  }

  viewForm(newTitle, newArticle, newId){
    this.setState({
      title: newTitle,
      article: newArticle,
      id: newId,
      isEdit: true,   
    }, function(){
    	console.log(this.state.title);
    });
    // window.location.href = '/create';
    // classForm = "";
    // classList = "displayNone";
  }

  addToArticles(newArticle){
    newArticle.id = (this.state.articles.length + 1);
    fetch( 'api/article', {
       method:'post',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
        
       body: JSON.stringify(newArticle)
   })
   .then(response => {
       return response.json();
   })
   .then( data => {
       this.setState((prevState)=> ({
      articles: [...prevState.articles, newArticle]
       }))
   })  
  }

  editArticles(newArticle){
    fetch( 'api/article', {
       method:'put',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
        
       body: JSON.stringify(newArticle)
     })
     .then(response => {
         return response.json();
     })
     .then( data => {
        this.setState((prevState)=> ({
        articles: [...prevState.articles, newArticle]
     }))
   })
  }

  removeFromArticles(id){

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Primeiro Projeto em React</h1>
          <nav>
            <Link to="/create" onClick={this.openForm}>Create</Link>
            <Link to="/">List</Link>
          </nav>  
        </header>
        <div className="container">
          <Switch>
            <Route exact path="/" render={()=><List articles={this.state.articles} onChange={this.viewForm} />} />
            <Route path="/create" render={()=><Form id={this.state.id} title={this.state.title} article={this.state.article} onDelete={this.removeFromArticles} onSubmit={this.state.isEdit ? this.editArticles : this.addToArticles} />} />
          </Switch> 
        </div>
      </div>
    );
  }
}

export default App;
