import React, { Component } from 'react';
import axios from 'axios';
import './css/index.css';
import ApiKey from './Config';

// Component imports
import SearchForm from './Components/SearchForm';
import Navigation from './Components/Nav';
import Gallery from './Components/Gallery';


class App extends Component {
  state = {
    favoritCategories: ['Tiger', 'Nature', 'Cacadu'],
    favoritsData: [],
    searchText: '',
    searchData: []
  }

  componentDidMount() {
    const promises = this.state.favoritCategories.map((element) => this.fetchData(element));
    const datas = Promise.all(promises)

    datas.then(res => {
      console.log(res);
      const data = res.map((el) => el.data.photos.photo);
      this.setState({
        favoritsData: [...data]
      })
    })
  }

  fetchData = async (searchFor) => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&text=${searchFor}&media=photos&per_page=24&page=1&format=json&nojsoncallback=1`;
    const request = await axios.get(url);
    return request;
  }

  createUrlForImage = (dataForUrl) => {
    // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    const url = ''
  }


  render() {
    return (
      <div className="App">

        <SearchForm />

        <Navigation categories={this.state.favoritCategories}/>

        <Gallery 
          data={this.state.favoritsData}
        />
      </div>
    );
  }
}

export default App;
