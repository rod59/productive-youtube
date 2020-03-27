import React, { Component } from "react";

class SearchResult extends Component {
  addThumbnail(video) {
    return <img src={this.props.video.snippet.thumbnails.default.url} />;
  }
  oneResult(id) {
    let returnable = "clickable text-center";
    if (id % 2) {
      returnable += " dangerColor";
    }
    return returnable;
  }

  render() {
    return (
      <div
        className={this.oneResult(this.props.id)}
        style={{ width: "100%" }}
        onClick={this.props.onVideoSelect}
      >
        {this.props.children}
        {this.addThumbnail(this.props.video)}
        <br />
        <br />
      </div>
    );
  }
}

export default SearchResult;
