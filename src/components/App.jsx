var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search/>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer/>
      </div>
      <div className="col-md-5">
        <VideoList videos = {window.exampleVideoData}/>
      </div>
    </div>
  </div>
);

window.App = App;