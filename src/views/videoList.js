var VideoListView = Backbone.View.extend({

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    
    this.collection.forEach(function(video) {
      x = new VideoListEntryView({model: video}).render().$el;
      //this.$el.append();
    });
    

    
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
