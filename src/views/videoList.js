var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    // this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.children().empty();
    
    this.collection.forEach(function(video) {
      var x = new VideoListEntryView({model: video}).render();
      this.$el.children().append(x);
    }.bind(this));
    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
