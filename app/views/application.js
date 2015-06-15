import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function(){
    let self = this;
    this.$('.place-list').isotope({layoutMode: 'masonry'});
    $('.filter-button-group').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      self.$('.place-list').isotope({ filter: filterValue });
    });

  }
});
