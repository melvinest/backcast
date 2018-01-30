var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({collection: this.videos.models}).render();
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});
