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
      const gameTitle = route.params.get('guid');
      return <Game game={gameTitle}/>;
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
