//= require jquery
//= require materialize
//= require jquery-validation
//= require_tree .

$(document).on('ready', function() {
  function scroll_to_anchor(anchor_id){
    var tag = $(anchor_id);
    console.log(anchor_id);
    $('html, body').animate({scrollTop: tag.offset().top - 70},'slow');
  };

  $(".nav-tab").on("click", function(e){
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
  });

  $("#contact-form").validate({
    errorElement : 'div',
    errorPlacement: function(error, element) {
      var placement = $(element).data('error');
      console.log(placement);
      if (placement) {
        $(placement).append(error)
      } else {
        error.insertAfter(element);
      }
    }
  });

  $("#submit-btn").click(function(e){
    e.preventDefault();
    if ($('#contact-form').valid()) {
      $.ajax({
        type: "post",
        url: "//formspree.io/contact@volchan.fr",
        dataType: 'json',
        data: $('#contact-form').serialize(),
        beforeSend: function() {
          $('.submit-container-sending').remove();
          $('.progress').remove();
    			$('.submit-container').append('<div class="submit-container-sending"><p>Sending your message...</p></div>');
    			$('.submit-container').append('<div class="progress"><div class="indeterminate"></div></div>');
    		},
    		success: function(data) {
    			$('.submit-container-sending').remove();
          $('.progress').remove();
          $('.submit-container').append('<div class="submit-container-sending"><p>Message sent, Thank You !</p></div>');
          $('.submit-container').append('<div class="progress"><div class="determinate" style="width: 100%"></div></div>');
          $('#submit-btn').css('background-color', '#4CAF50').text('Sent');
          $('.determinate').css('background-color', '#4CAF50').text('Sent');
    		},
    		error: function(err) {
    		}
      })
    }
  });
})
