      $(document).ready(function () {
          // Hide the div
          $("#box").hide();
          // Show the div after 5s
          $("#box").delay(1000).fadeIn(30);  
      });    

$('.list > li a').click(function() {
        $(this).parent().find('ul').toggle();
    });

$(function() {  
  $('.btn-5')
    .on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('span').css({top:relY, left:relX})
    });
  $('[href=#]').click(function(){return false});
});

function Divs() {
    var divs= $('#parent div'),
        now = divs.filter(':visible'),
        next = now.next().length ? now.next() : divs.first(),
        speed = 1000;

    now.fadeOut(speed);
    next.fadeIn(speed);
}

$(function () {
    setInterval(Divs, 1400);
});