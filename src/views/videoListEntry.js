var VideoListEntryView = Backbone.View.extend({
  
  events: {
    'click .video-list-entry-title': 'titleClick',
  },
  
  titleClick: function() {
    this.model.select();
  },
  
  render: function() {
    this.$el.html(this.template({snippet: this.model.attributes.snippet}));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
