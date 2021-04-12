import React from 'react';
import Search from './pages/search';
import Header from './components/header';
import ParseRoute from './lib/parse-route';
import Game from './pages/game';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: ParseRoute(window.location.hash),
      game: {}
    };
    this.getGame = this.getGame.bind(this);
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
      return <Search getGame={this.getGame}/>;
    }

    if (route.path === 'game') {
      return <Game game={this.state.game}/>;
    }
  }

  getGame(id, title, img, deck, description) {
    const game = { id, title, img, deck, description };
    this.setState({ game });
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
