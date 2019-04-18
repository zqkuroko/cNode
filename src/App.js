import React, { Component } from 'react';
import MainHeader from './view/main-header';
import MainFooter from './view/main-footer';
import './view/index.css';
import RouterIndex from './router';

class App extends Component {
  render() {
    return (<div className="pageWrap">
       <MainHeader />
       <main className="main">
          <RouterIndex />
       </main>
       <MainFooter />
    </div>)
  }
}

export default App;
