var SearchView = Backbone.View.extend({

  el: '.col-md-6',

  render: function() {
    this.$el.children().empty();
    this.$el.html(this.template());
  },

  template: templateURL('src/templates/search.html')

});
