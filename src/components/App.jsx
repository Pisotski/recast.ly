class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.onVideoTitleClick = this.onVideoTitleClick.bind(this);
    this.onSearch = this.onSearch.bind(this);

    this.state = {
      currentVideo: window.exampleVideoData[0],
      currentVideoList: window.exampleVideoData,
      inputValue: 'default'
    };
  }
  
  onVideoTitleClick(video) {
    this.setState({
      currentVideo: video
      // currentVideoList: window.exampleVideoData
    });
  }
  
  onSearch(value) {
    searchYouTube(data: {
      query: 'default',
      part: 'snippet',
      max: 5,
      key: YOUTUBE_API_KEY
    }, (video) => {this.setState({
        currentVideoList: collection,
        currentVideo: collection[0]
      })}
    );
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSearch={this.onSearch} value={this.state.inputValue}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.currentVideoList} titleClick={this.onVideoTitleClick}/>
          </div>
        </div>
      </div>
    );
  }
}

window.App = App;