import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import YSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = 'AIzaSyDJ6TZNvsrxgvil9VQToLOD-xT2IYYCLGk'

class App extends Component {
  state = { videos: [] }

  componentDidMount(){
    YSearch({ key: YOUTUBE_API_KEY, term: 'にじさんじ' }, (data) => {
      this.setState({ videos: data})
    })
  }

  render() {
    console.log(this.state.videos)
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
