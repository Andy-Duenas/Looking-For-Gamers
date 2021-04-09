import React from 'react';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { game: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ game: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit({ game: this.state.game });
    event.target.reset();
  }

  render() {
    return (
      <div className="search-box">
        <form onSubmit={this.handleSubmit}>
          <div className ="row">
            <input type="text" onChange={this.handleChange} className="textbox" />
          </div>
          <div className="row search-container">
            <input type="submit" value="Search" className="search-button"/>
          </div>
        </form>
      </div>
    );
  }
}
