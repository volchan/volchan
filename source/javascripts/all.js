//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(".tab").on("click", function(e){
    $(".tab").removeClass('active');
    $(this).addClass('active');
});
