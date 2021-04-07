import React from 'react';
// import Home from './pages/home';
import Search from './pages/search';
import Header from './components/header';
export default class App extends React.Component {

  render() {
    return (
      <div className="container">
      <Header />
      <Search />
      </div>
    );
  }
}
