var SearchView = Backbone.View.extend({

  el: '.col-md-6',
  
  events: {
    'click .btn': 'clickSearch',
    'keyup .form-control': 'keyPressEventHandler'
  },
  
  keyPressEventHandler: function(event) {
    if (event.keyCode === 13) {
      var keyword = $('.form-control').val();
      this.collection.search(keyword);
    }
  },
  
  clickSearch: function() {
    var keyword = $('.form-control').val();
    this.collection.search(keyword);
  },

  render: function() {
    this.$el.children().empty();
    this.$el.html(this.template());
  },

  template: templateURL('src/templates/search.html')

});
