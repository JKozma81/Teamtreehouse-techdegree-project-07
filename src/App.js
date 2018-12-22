import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';
import './css/index.css';
import ApiKey from './Config';


// Component imports
import SearchForm from './Components/SearchForm';
import Navigation from './Components/Nav';
import Gallery from './Components/Gallery';


class App extends Component {
  state = {
    favoritCategories: ['Mustang', 'Koalas', 'Parrot'],
    favoritsData: [],
    searchText: '',
    searchData: [],
    menuIndex: undefined,
    searching: false
  }

  componentDidMount() {
    const promises = this.state.favoritCategories.map((element) => this.fetchData(element));
    const datas = Promise.all(promises)

    datas.then(res => {
      const data = res.map((el) => el.data.photos.photo);
      this.setState({
        favoritsData: [...data],
        searching: false
      })
    }).catch(err => console.error(err));
  }

  fetchData = (searchFor) => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags=${searchFor.toLowerCase()}&per_page=24&page=1&format=json&nojsoncallback=1`;
    const request = axios.get(url);
    return request;
  }

  handleNavClick = (target) => {
    const menuIndex = this.state.favoritCategories.indexOf(target.textContent);
    this.setState({
      menuIndex
    });
  }

  performSearch = (query) => {
    let textToSearch = '';
    this.setState({
      searching: true
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
        searchText: query,
        searchData: [...data]
      })
    }).catch(err => console.error(err));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Route path='/' render={() => <SearchForm onSearch={this.performSearch} />} />

        <Navigation 
          categories={this.state.favoritCategories}
          handleClick={(event) => this.handleNavClick(event.target)}
        />

        {
          this.state.favoritCategories.map((el, index) => (
              <Route path={`/${el}`} 
                key={index} 
                render={() => <Gallery data={this.state.favoritsData[this.state.menuIndex]} />}
              />
          ))
        }

        <Route exact path={`/search/:searchFor`} render={() => <Gallery data={this.state.searchData} searching={this.state.searching} />}
        />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
