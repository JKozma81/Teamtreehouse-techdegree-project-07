import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import './css/index.css';


// Component imports
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import ErrorPage from './Components/Error';

// Config import for the api key
import ApiKey from './config';

// Main component
class App extends Component {
  state = {
    favoritCategories: ['Waterfalls', 'Koalas', 'Parrot'],
    favoritsData: [],
    searchText: '',
    searchData: [],
    searching: false
  }
  // Fetching the images for the categories provided
  componentDidMount() {
    const promises = this.state.favoritCategories.map((element) => this.fetchData(element));
    const datas = Promise.all(promises)

    datas.then(res => {
      const data = res.map((el) => el.data.photos.photo);
      this.setState({
        favoritsData: [...data]
      })
    }).catch(err => console.error(err));
  }

  // Main fetch methode
  fetchData = (searchFor) => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags=${searchFor.toLowerCase()}&per_page=24&page=1&format=json&nojsoncallback=1`;
    const request = axios.get(url);
    return request;
  }

  // Fetching images for the search and updating state
  performSearch = (query) => {
    let textToSearch = '';
    this.setState({
      searchText: query,
      searching: true,
      searchData: []
    })

    if (query.includes(' ') > -1) {
      textToSearch = query.split(' ').join('+');
    } else {
      textToSearch = query;
    }

    const fetchedData = this.fetchData(textToSearch);
    fetchedData.then((res) => {
      const data = res.data.photos.photo;
      this.setState({
        searchData: [...data],
        searching: false
      })
    }).catch(err => console.error(err));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Switch>
          {/* Home route */}
          <Route exact path='/' render={
            () => {
              return (
                <>
                  <Header
                    onSearch={this.performSearch}
                    categories={this.state.favoritCategories}
                  />
                </>              
              );
            }
          }/>

          {/* Routes for the categories */}
          {
            this.state.favoritCategories.map((el, index) => {
              return (
                <Route exact path={`/${el}`} key={index} render={
                  () => {
                    return (
                      <>
                        <Header
                          onSearch={this.performSearch}
                          categories={this.state.favoritCategories}
                        />
                        <Gallery data={this.state.favoritsData[index]} text={this.state.favoritCategories[index]} />
                      </>              
                    );
                  }
                }/>            
              ) 
            })       
          }

          {/* Search route */}
          <Route exact path={`/search/:${this.state.searchText.includes(' ') ? this.state.searchText.split(' ').join('-') : this.state.searchText}`} render={
            () => {
              return (
                <>
                  <Header
                    onSearch={this.performSearch}
                    categories={this.state.favoritCategories}
                  />
                  <Gallery data={this.state.searchData} searching={this.state.searching} text={this.state.searchText} />
                </>              
              );
            }
          }/>

          {/* 404 error route */}
          <Route component={ErrorPage} />        
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
