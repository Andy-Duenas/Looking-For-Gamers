import React from 'react';
import SearchBox from '../components/searchbox';
import List from '../components/game-list';
import ParseRoute from '../lib/parse-route';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFor: [],
      tryAgain: false,
      isConnected: true,
      isLoading: false,
      route: ParseRoute(window.location.hash),
      gameName: null
    };
    this.makeGameList = this.makeGameList.bind(this);
  }

  makeGameList(data) {
    this.setState({ isLoading: true, gameName: data });
    fetch(`/api/search/${data.game}`)
      .then(res => res.json())
      .then(data => {
        if (data.length === 0) {
          this.setState({ tryAgain: true, isLoading: false });
        } else {
          this.setState({ searchFor: data, tryAgain: false, isConnected: true, isLoading: false });
        }
      })
      .catch(err => {
        console.error(err);
        this.setState({ isConnected: false });
      });
  }

  componentDidMount() {
    const { route } = this.state;
    let search = route.params.get('game');
    if (search !== null) {
      search = search.replace(/[^a-zA-Z0-9]/g, ' ');
      search = search.split(' ');
      const game = { game: search[0] };
      this.makeGameList(game);
    }
  }

  render() {
    const { searchFor, tryAgain, isConnected, isLoading } = this.state;
    if (isLoading) {
      return (
        <>
        <SearchBox onSubmit={this.makeGameList} />
        <div className="background">
           <h1 className="row"><i className="fas fa-dragon loading-icon"></i></h1>;
        </div>
        </>
      );
    }
    if (tryAgain && isConnected) {
      return (
        <>
        <SearchBox onSubmit={this.makeGameList} />
        <div className="background">
          <h1 className="search-for-games">Search Failed. Please enter another name.</h1>
        </div>
        </>
      );
    }
    if (!isConnected) {
      return (
        <>
        <SearchBox onSubmit={this.makeGameList} />
        <div className="background">
          <h1 className="search-for-games">Lost Connection. Please try again.</h1>
        </div>
        </>
      );
    }
    if (searchFor.length === 0) {
      return (
        <>
        <SearchBox onSubmit={this.makeGameList} />
        <div className="background">
          <h1 className="search-for-games">Enter a title of a game to start searching.</h1>
        </div>
        </>
      );
    } else {
      return (
      <>
        <SearchBox onSubmit={this.makeGameList}/>
        <div className="background">
        <List games={this.state.searchFor} currentGame={this.state.gameName}></List>
        </div>
      </>
      );
    }
  }
}
