$(document).ready(function(){

  // Filter products by size
  // --------------------------------------

  $('.size-filter-option').on('click', function(event){
    event.preventDefault();

    // Handle the filter nav buttons -------------->

    // remove not filtering indicator class if present, and add filtering indicator class
    $(this).removeClass('js-not-filtering').addClass('js-current-filter');

    // add not filtering class to rest of buttons
    $(this).siblings('.size-filter-option').removeClass('js-current-filter').addClass('js-not-filtering');

    // Handle the products to filter -------------->

    // grab the variant title and make it the filter value
    var filteringBy = $(this).text();
    filteringBy = "size-" + filteringBy;

    if(filteringBy == 'size-All') {
      $('.js-size-filter').removeClass('hidden');
    } else {
      $('.js-size-filter').each(function() {
        if(!$(this).hasClass(filteringBy)) {
          $(this).addClass('hidden');
        } else {
          $(this).removeClass('hidden');
          $(this).addClass('active-filter');
        }
      });
    }

  });

})
