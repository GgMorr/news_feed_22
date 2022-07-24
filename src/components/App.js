
import { Component } from 'react';
import './App.css';
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
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            {/* <div className='nav-wrapper indigo lighten-1'> */}
            <div className='App-header'>
              <a href='/' className='bran-logo center App-title'>News Feed</a>
              <p className='header-tag-line'>Know the world you live in</p>
            </div>
          </nav>
        </div>

        <div className='row'>
          <div className='col s9'>

            <News news={this.state.news1} />
            {/* <News news={this.state.news2} /> */}
          </div>

          <div className='col s3'>
            <SideNews news={this.state.news3} />
          </div>


        </div>
        <div>
          <Footer year={new Date().getFullYear()} />
        </div>
      </div>
    );
  }
}


export default App;
