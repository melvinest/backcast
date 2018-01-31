var VideoListView = Backbone.View.extend({

  render: function() {
    this.$el.html(this.template());
    this.$el.children().empty();
    
    this.collection.forEach(function(video) {
      var videoEntry = new VideoListEntryView({model: video});
      this.$el.children().append(videoEntry.render());
    }.bind(this));
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
