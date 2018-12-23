import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import './css/index.css';
import ApiKey from './Config';


// Component imports
import SearchForm from './Components/SearchForm';
import Navigation from './Components/Nav';
import Gallery from './Components/Gallery';
import ErrorPage from './Components/Error';


class App extends Component {
  state = {
    favoritCategories: ['Mustang', 'Koalas', 'Parrot'],
    favoritsData: [],
    searchText: '',
    searchData: [],
    menuIndex: undefined,
    searching: false,

  }

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

  fetchData = (searchFor) => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags=${searchFor.toLowerCase()}&per_page=24&page=1&format=json&nojsoncallback=1`;
    const request = axios.get(url);
    return request;
  }

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
        <Route exact path='/' render={
          () => {
            return (
              <>
              <SearchForm onSearch={this.performSearch} />
              <Navigation 
                categories={this.state.favoritCategories}
              />
              </>              
            );
          }
        }/>

        {
          this.state.favoritCategories.map((el, index) => {
            return (
              <Route exact path={`/${el}`} key={index} render={
                () => {
                  return (
                    <>
                    <SearchForm onSearch={this.performSearch} />
                    <Navigation 
                      categories={this.state.favoritCategories}
                    />
                    <Gallery data={this.state.favoritsData[index]} />
                    </>              
                  );
                }
              }/>            
            ) 
          })       
        }

        <Route exact path={`/search/:${this.state.searchText.includes(' ') ? this.state.searchText.split(' ').join('-') : this.state.searchText}`} render={
          () => {
            return (
              <>
              <SearchForm onSearch={this.performSearch} />
              <Navigation 
                categories={this.state.favoritCategories}
              />
              <Gallery data={this.state.searchData} searching={this.state.searching} />
              </>              
            );
          }
        }/>

        <Route component={ErrorPage} />        
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
