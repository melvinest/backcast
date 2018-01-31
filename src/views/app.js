var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.search('dog');
    this.videos.on('sync', this.render, this);
  }, 


  render: function() {
    this.$el.html(this.template());

    new SearchView({collection: this.videos}).render();
    
    new VideoPlayerView({collection: this.videos}).render(this.videos.models[0]);
    
    var videoList = new VideoListView({collection: this.videos}).render();
    this.$el.find('.col-md-5').empty().append(videoList.$el.children());
  },

  template: templateURL('src/templates/app.html')

});
