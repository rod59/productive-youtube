import React, { Component } from "react";
import Search from "./search";
import Searchresult from "./searchResult";
import "bootstrap/dist/css/bootstrap.css";

//Function to keep track of screen resize
const ytURLBegining = "https://www.youtube.com/embed/";
let looping = false;
class Container extends Component {
  state = {
    nowPlaying: "",
    videoId: "",
    resultList: [],
    settingsShowing: false
  };

  updateResultList(resultList) {
    this.setState({ resultList });
  }
  clearResultList() {
    this.setState({ resultList: [] });
  }
  showHideSettings() {
    const settingsShowing = !this.state.settingsShowing;
    this.setState({ settingsShowing });
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <right id="settings" style={this.slideSettings()}>
          <input type="checkbox" onClick={this.loopCheck.bind(this)} />
          Loop
          <input type="checkbox" onClick={this.hideVideo.bind(this)} />
          Only Audio
          <setting-warning>
            ⚠️<b>Warning:</b>
            Changing settings will reload the current video
          </setting-warning>
        </right>
        <right className="websiteName">
          <h1>Productive YT</h1>
        </right>

        <left>
          <Search
            onSearch={this.updateResultList.bind(this)}
            onClear={this.clearResultList.bind(this)}
            onSettings={this.showHideSettings.bind(this)}
          />
        </left>

        <right>
          <iframe
            id="myFrame"
            style={this.doesVideoExist()}
            width="100%"
            height="auto"
            src={this.state.nowPlaying}
            frameBorder="1"
            allowFullScreen={true}
          ></iframe>
        </right>

        <left>
          {this.state.resultList.map(video => (
            <Searchresult
              onVideoSelect={this.updateNowPlaying.bind(this, video.id.videoId)}
              key={this.state.resultList.indexOf(video)}
              id={this.state.resultList.indexOf(video)}
              video={video}
            >
              <p>{this.videoTitleFix(video)}</p>
            </Searchresult>
          ))}
        </left>
      </div>
    );
  }

  updateNowPlaying(video) {
    let nowPlaying = ytURLBegining;
    let videoId = video;
    nowPlaying += videoId;
    nowPlaying += "?modestbranding=1&rel=0 ";
    //loop should be last check
    if (looping) {
      nowPlaying += "&playlist=" + videoId + "&loop=1";
    }
    //check new settings before setting new video
    this.setState({ nowPlaying });
    this.setState({ videoId });
  }
  slideSettings() {
    if (this.state.settingsShowing) {
      return { marginTop: 0 };
    } else {
      return { marginTop: -90 };
    }
  }
  loopCheck() {
    looping = !looping;
    if (this.state.nowPlaying != "") {
      this.updateNowPlaying(this.state.videoId);
    }
  }
  hideVideo() {
    //TODO
    }
  //youtube vids have wierd string of chars to represent "&" quotes etc.
  //this function fixes that
  videoTitleFix(video) {
    var parser = new DOMParser();
    let finalResult = parser.parseFromString(video.snippet.title, "text/html");
    return finalResult.body.innerText;
  }
  //helps mobile version look better
  doesVideoExist() {
    if (this.state.nowPlaying == "") {
      return { display: "none" };
    } else {
      return { display: "inherit" };
    }
  }
}

export default Container;
