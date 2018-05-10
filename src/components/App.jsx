class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.onVideoTitleClick = this.onVideoTitleClick.bind(this);

    this.state = {
      currentVideo: window.exampleVideoData[0],
      currentVideoList: window.exampleVideoData
    };

  }
  
  onVideoTitleClick() {
    // this.setState({
    //   // currentVideo: props.video.title,
    //   // currentVideoList: window.exampleVideoData
    // });
    console.log('from videoList');
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search/>
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