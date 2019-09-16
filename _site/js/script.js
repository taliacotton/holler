AOS.init({
	duration: 600,
  })
  
let number = 0;
let target = 5.1;
let increaseNumFired = false;


$('.carousel').carousel()

// let strArray1 = [];let strArray2 = [];let strArray3 = [];
// let strArray = [];

// let phrase1 = document.getElementById("loop1").getElementsByClassName("spanForAnimation");
// let phrase2 = document.getElementById("loop2").getElementsByClassName("spanForAnimation");
// let phrase3 = document.getElementById("loop3").getElementsByClassName("spanForAnimation");

// console.log($('.rw-span-container').text());

// for(var i=0;i<phrase1.length;i++){strArray1.push(phrase1[i].innerHTML);}
// for(var i=0;i<phrase2.length;i++){strArray2.push(phrase2[i].innerHTML);}
// for(var i=0;i<phrase3.length;i++){strArray3.push(phrase3[i].innerHTML);}
// strArray.push(strArray1);
// strArray.push(strArray2);
// strArray.push(strArray3);
// console.log(strArray);

// function longest_string(str_ara) {
//   var max = str_ara[0].length;
//   str_ara.map(v => max = Math.max(max, v.length));
//   result = str_ara.filter(v => v.length == max);
//   return result;
// }

//   setTimeout(function(){ 
// 	  $('.middle-phrase').css('color','white');
// 	  $('.middle-phrase').attr('data-before', " " + strArray1[1] + " ");
// 	}, 4000);
// 	setTimeout(function(){ 
// 	  $('.middle-phrase').attr('data-before', " " + strArray1[2] + " ");
// 	}, 5000);
// setTimeout(function(){ 
// 		$('.middle-phrase').css('color','white');
// 	  $('.middle-phrase').attr('data-before', " " + strArray2[1] + " ");
// 	}, 11000);
// 	setTimeout(function(){ 
// 	  $('.middle-phrase').attr('data-before', " " + strArray2[2] + " ");
// 	}, 12000);
// setTimeout(function(){ 
// 	$('.middle-phrase').css('color','white');
// 	  $('.middle-phrase').html(" " + strArray3[1] + " ");
// 	}, 17000);
// 	setTimeout(function(){ 
// 	  $('.middle-phrase').html(" " + strArray3[2] + " ");
// 	}, 18000);


// let longestString1 = longest_string(strArray1)[0].length;

// console.log($('.rw-span-container').css("width", longestString1*40 + 'px'));


// function normalizeSlideHeights() {
//     $('.carousel').each(function(){
//       var items = $('.carousel-item', this);
//       // reset the height
//       items.css('min-height', 0);
//       // set the height
//       var maxHeight = Math.max.apply(null, 
//           items.map(function(){
//               return $(this).outerHeight()}).get() );
//       items.css('height', maxHeight + 'px');
//     })
// 	$('.carousel-item a').css('height','100%');
// 	$('.carousel-item .row').css('height','100%');
// 	$('.featured-image').css('height','100%');
// 	// console.log("normalized");
// }


// $('#exampleModal').on('hidden.bs.modal', function () {
// 	callPlayer('yt-player', 'stopVideo');
// 	console.log("2")
// });

let vidsrc="https://player.vimeo.com/video/351397471?autoplay=1?color=96A3EE";

jQuery('#exampleModal').on('hidden.bs.modal', function (e) {
	stopVideo();
});

jQuery('#exampleModal').on('shown.bs.modal', function (e) {
	startVideo();
});

function stopVideo() {
  var $frame = $('iframe#iframeSp');
  $frame.attr('src', '');
}

function startVideo() {
  var $frame = $('iframe#iframeSp');
  $frame.attr('src', vidsrc);
}

$('#increasingNumber span').text('0');

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
	
	if ($('#increasingNumber').length > 0 && isScrolledIntoView($('#increasingNumber')) == true){
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

	var video = document.getElementById('homepageVidSm'); 
	video.play();

	let orbWidth = 50 + 24.7;

	$('.marquee').css("width", $('.orb').length * orbWidth + "px");



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