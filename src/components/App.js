
import { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import News from './News/News';
import SideNews from './News/SideNews'
import Footer from './Footer/Footer';


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       news1: {
//         type: 'top-headlines',
//         query: 'sources=bbc-news'
//       },
//       news2: {
//         type: 'top-headlines',
//         query: 'sources=techcrunch'
//     }

//   };
// }
//   render() {
//   return (
//     <div className="App">
//       <header className="App-header">
//      <h1 className='App-title'>News Feed</h1>
//      <p className='header-tag-line'>Know the world you live in</p>
//       </header>

//       <News news={this.state.news1} />
//       {/* <News news={this.state.news2} /> */}
//       <Footer year={new Date().getFullYear()} />
//     </div>
//   );
//   }
// }

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
      },
      news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com&language=en'
      }
    };
  }

  render() {
    return (

      <div className="container-grid">
        <div className="header">
          <Header />
        </div>

        <div className='content'>
          <div>
            <News news={this.state.news1} />
            {/* <News news={this.state.news2} /> */}
          </div>
        </div>

        <div className='sidebar' >
          <SideNews news={this.state.news3} />
        </div>

        <div className='footer'>
          <Footer year={new Date().getFullYear()} />
        </div>

      </div>

    );
  }
}


export default App;
