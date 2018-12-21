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
    navIndex: undefined
  }

  componentDidMount() {
    const promises = this.state.favoritCategories.map((element) => this.fetchData(element));
    const datas = Promise.all(promises)

    datas.then(res => {
      const data = res.map((el) => el.data.photos.photo);
      console.log(data);
      this.setState({
        favoritsData: [...data]
      })
    })
  }

  fetchData = (searchFor) => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags=${searchFor.toLowerCase()}&media=photos&per_page=24&page=1&format=json&nojsoncallback=1`;

    const request = axios.get(url);
    return request;
  }

  handleNavClick = (target) => {
    const menuIndex = this.state.favoritCategories.indexOf(target.textContent);
    this.setState({
      navIndex: menuIndex
    });
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <SearchForm />
        <Navigation 
          categories={this.state.favoritCategories}
          handleClick={(event) => this.handleNavClick(event.target)}
        />

        {
          this.state.favoritCategories.map((el, index) => (
              <Route path={`/${el}`} 
                key={index} 
                render={() => 
                  <Gallery 
                    data={this.state.favoritsData}
                    menuIndex={this.state.navIndex}
                  />
                }
              />
            )
          )
        }

        <Route exact path={`/search/:${this.state.searchText}`} 
          render={() => <Gallery data={this.state.searchData}/>}
        />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
