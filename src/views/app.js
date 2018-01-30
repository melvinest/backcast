var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(fakeVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    
    new SearchView({collection: this.videos}).render();
    
    
    new VideoPlayerView({collection: this.videos}).render(this.videos.models[0]);
    
    var x = new VideoListView({collection: this.videos}).render();
    this.$el.find('.col-md-5').empty().append(x.$el.children());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
