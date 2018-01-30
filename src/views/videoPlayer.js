var VideoPlayerView = Backbone.View.extend({
  
  el: '.col-md-7',
  
  initialize: function() {
    this.collection.on('select', this.render, this);
  },

  render: function(video) {
    this.$el.html(this.template({video: video.attributes, snippet: video.attributes.snippet}));
  },

  template: templateURL('src/templates/videoPlayer.html')

});
