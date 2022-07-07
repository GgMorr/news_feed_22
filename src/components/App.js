
import { Component } from 'react';
import './App.css';
import News from './News/News';
import Footer from './Footer/Footer';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'top-headlines',
        query: 'sources=techcrunch'
    }

  };
}
  render() {
  return (
    <div className="App">
      <header className="App-header">
     <h1 className='App-title'>News Feed</h1>
     <p className='header-tag-line'>Know the world you live in</p>
      </header>

      <News news={this.state.news1} />
      {/* <News news={this.state.news2} /> */}
      <Footer year={new Date().getFullYear()} />
    </div>
  );
  }
}


export default App;
