//= require jquery
//= require materialize
//= require_tree .

$(document).on('ready', function() {
  function scroll_to_anchor(anchor_id){
    var tag = $(anchor_id);
    console.log(anchor_id);
    $('html, body').animate({scrollTop: tag.offset().top - 70},'slow');
  };

  $(".nav-tab").on("click", function(e){
    // $(".nav-tab").removeClass('active');
    // $(this).addClass('active');
    e.preventDefault();
    scroll_to_anchor($(this).attr("href"));
  });

  var topMenu = $(".site-navbar");
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
