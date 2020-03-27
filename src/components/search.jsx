import React, { Component } from "react";
import settingGear from "./images/setting-gear.png";

class Search extends Component {
  state = {
    searchIn: "",
    settingsMarginTop: ""
  };

  update(event) {
    const searchIn = event.target.value;
    this.setState({ searchIn });
  }

  checkEnter(event) {
    if (event.keyCode == 13) {
      this.search();
    }
  }

  search() {
    const apiKey = "AIzaSyA4yxU7ZfYFMuTlJ4Wgl97LeO3Z6wthZLg";
    const apiCall = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=9&q=${this.state.searchIn}&key=${apiKey}`;
    fetch(apiCall)
      .then(result => result.json())
      .then(data => {
        this.props.onSearch(data.items);
      });
  }

  fixSlightButtonOffset() {
    return { marginTop: -5 };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.searchIn}
          onChange={this.update.bind(this)}
          onKeyDown={this.checkEnter.bind(this)}
        ></input>
        <button
          className="btn btn-danger btn-sm"
          style={this.fixSlightButtonOffset()}
          onClick={this.search.bind(this)}
        >
          Search
        </button>
        <button
          className="btn btn-light btn-sm"
          style={this.fixSlightButtonOffset()}
          onClick={this.props.onClear}
        >
          Clear
        </button>
        <div className="float-right clickable" onClick={this.props.onSettings}>
          <img src={settingGear} width="20" />
        </div>
      </div>
    );
  }
}

export default Search;
