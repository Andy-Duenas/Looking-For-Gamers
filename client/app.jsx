import React from 'react';
import Search from './pages/search';
import Header from './components/header';
import ParseRoute from './lib/parse-route';
import Game from './pages/game';
import Favorites from './pages/favorites';
import Thread from './pages/thread';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: ParseRoute(window.location.hash),
      game: {}
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
    const gameId = route.params.get('gameId');
    if (route.path === '' || route.path === 'search') {
      return <Search />;
    }
    if (route.path === 'game') {
      return <Game gameId={gameId}/>;
    }
    if (route.path === 'favorites') {
      return <Favorites/>;
    }
    if (route.path === 'thread') {
      return <Thread gameId={gameId}/>;
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
