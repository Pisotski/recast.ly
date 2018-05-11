var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    success: function(data) {
      callback(data.items);
      console.log(data.items);
    },
    error: function() {
      console.log('ERROR');
    }
  }); 
};

window.searchYouTube = searchYouTube;
