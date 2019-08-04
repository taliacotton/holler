AOS.init({
	duration: 600,
  })
  
let number = 0;
let target = 4.1;
let increaseNumFired = false;


$('#increasingNumber span').text('0');
// var interval = setInterval(function() {
//         $('#increasingNumber span').text(number.toString().substring(0, 3));
//         if (number >= target) clearInterval(interval);
//         number+=0.1;
//     }, 30);

function increaseNum() {
	
		setInterval(function() {
		$('#increasingNumber span').text(number.toString().substring(0, 3));
			if (target >= number){
				number+=0.1;
			};
		}, 40);
	
	increaseNumFired = true;
}

$(window).scroll(function() {
	var $height = $(window).scrollTop();
    if($height > 200) {
		$('.fixed-nav').addClass('showing');
	} else {
		$('.fixed-nav').removeClass('showing');
	}
	
	if (isScrolledIntoView($('#increasingNumber')) == true){
		if (increaseNumFired == false){
			increaseNum();
		}
	}
	
});

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

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