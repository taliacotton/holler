AOS.init({
	duration: 600,
  })
  

$(window).scroll(function() {
	var $height = $(window).scrollTop();
    if($height > 200) {
		$('.fixed-nav').addClass('showing');
	} else {
		$('.fixed-nav').removeClass('showing');
	}
});

$(document).ready(function(e) {

	let teamPos = 0;

	$("#team").on('mousemove', function(e) {
		var mouseSide;
		if (e.pageX < $(window).width() / 2) {
			teamPos++;
		} else {
			teamPos--;
		}
		if ($(window).width() < 991.98){
			$('#team').css("left", teamPos);
		}

	});

	$("#slideshow > span").hide();
	$("#slideshow > span:first").show();

		setInterval(function() {
		$('#slideshow > span:first')
			.fadeOut(500)
			setTimeout(function(){
				$('#slideshow > span:first').next()
				.fadeIn(500)
				.end()
				.appendTo('#slideshow');
			}, 500);
			
			
		}, 2000);

  });