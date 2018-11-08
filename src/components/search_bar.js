import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(term) {
    // console.log(event.target.value);
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Enter your Search"
          onChange={event => this.onInputChange(event.target.value)}
          value={this.state.term}
        />
      </div>
    );
  }
}

export default SearchBar;
