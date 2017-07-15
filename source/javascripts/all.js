//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).on('ready', function() {
  function scroll_to_anchor(anchor_id){
    var tag = $(anchor_id);
    $('body').animate({scrollTop: tag.offset().top - 70},'slow');
  };

  $(".tab").on("click", function(e){
    $(".tab").removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
    scroll_to_anchor($(this).attr("href"));
  });

  var topMenu = $(".navbar");
  var topMenuHeight = topMenu.outerHeight() + 20;
  var menuItems = topMenu.find("a");
  var scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
  });
  console.log(topMenuHeight);

  $(document).on('scroll',function(){
    var fromTop = $(this).scrollTop() + topMenuHeight;
    var cur = scrollItems.map(function(){
      if ($(this).offset().top <= fromTop)
      return this;
    });

    var cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
    menuItems.removeClass("active");
    $('#' + id + '-tab').addClass("active");
  })
})
