var Videos = Backbone.Collection.extend({

  model: Video,
  
  url: 'https://www.googleapis.com/youtube/v3/search',
  
  search: function(keyword) {
    this.fetch({data:       
      {
        part: 'snippet',
        order: 'relevance',
        maxResults: 5,
        q: keyword,
        key: window.YOUTUBE_API_KEY
      }
    });
  },
  
  parse: function(result) {
    return result.items;
  }
  
});