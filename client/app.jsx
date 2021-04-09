import React from 'react';
import Search from './pages/search';
import Header from './components/header';
import Game from './pages/game';
import ParseRoute from './lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: ParseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const parsed = ParseRoute(window.location.hash);
      this.setState({ route: parsed });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '' || route.path === 'search') {
      return <Search />;
    }
    if (route.path === 'game') {
      return <Game />;
    }
  }

  render() {
    return (
      <div className="container">
      <Header currentPage={this.state.route}/>
        { this.renderPage()}
      </div>
    );
  }
}
