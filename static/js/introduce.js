document.body.addEventListener('touchstart', function() {});

$('footer').css('top', $('.wrap').height() + $('.content').height() - 355)
var swiper = new Swiper('.swiper-container', {
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	speed: 500
});
$('.swiper-button-prev').on({
	mouseover: function() {
		$('.swiper-button-prev').css('backgroundImage', 'url(' + 'static/img/btn-previous-hover.png' + ')')
	},
	mouseout: function() {
		$('.swiper-button-prev').css('backgroundImage', 'url(' + 'static/img/btn-previous.png' + ')')
	}
})
$('.swiper-button-next').on({
	mouseover: function() {
		$('.swiper-button-next').css('backgroundImage', 'url(' + 'static/img/btn-next-hover.png' + ')')
	},
	mouseout: function() {
		$('.swiper-button-next').css('backgroundImage', 'url(' + 'static/img/btn-next.png' + ')')
	}
})

var timer = null
var frontArr = ['albumslide_01.jpg', 'albumslide_02.jpg', 'albumslide_03.jpg', 'albumslide_04.jpg', 'albumslide_05.jpg', 'albumslide_06.jpg', 'albumslide_07.jpg', 'albumslide_08.jpg', 'albumslide_09.jpg', 'albumslide_10.jpg', 'albumslide_11.jpg', 'albumslide_12.jpg', 'albumslide_13.jpg', 'albumslide_14.jpg', 'albumslide_15.jpg']
var backArr = ['First','Second','Third','Fourth','Fifth','Sixth','Seventh','Eighth','Ninth','Tenth','Eleventh','Twelfth','Thirteenth','Fourteenth','Fifteenth']

var x = getRandomArrayElements(backArr, 15)
for(var i = 0; i < 15; i++) {
	$('.photos').append('<div class="pic_box"><div class="pics"><div class="front"><img src="static/img/' + frontArr[i] + '" /></div><div class="back" style="background-image:url(' + 'static/img/' + x[i] + '.jpg' + ');"><div class="mask"><p>' + x[i] + '</p></div></div></div></div>')
}
var pics = document.querySelectorAll(".pics img")
var back = document.querySelectorAll(".back")
var mask = document.querySelectorAll(".mask p")

function getRandomArrayElements(arr, count) {
	var shuffled = arr.slice(0),
		i = arr.length,
		min = i - count,
		temp, index;
	while(i-- > min) {
		index = Math.floor((i + 1) * Math.random());
		temp = shuffled[index];
		shuffled[index] = shuffled[i];
		shuffled[i] = temp;
	}
	return shuffled.slice(min);
}

var delayArr = [0, 0.3, 0.6, 0.9, 0.5, 0.8, 1.1, 1.2, 0.2, 0.9, 1.2, 1.5, 1.4, 0.3, 0.6]
$(window).on('scroll', function() {
	//	console.log($('.photos').offset().top - $(window).scrollTop())
	if($('.photos').offset().top - $(window).scrollTop() < 1000) {
		for(var i = 0; i < pics.length; i++) {
			var delay = delayArr[i] + 's';
			pics[i].style.animation = "wave 2s linear " + delay + " forwards"
		}
	} else if($(window).scrollTop() == 0) {
		var r = getRandomArrayElements(backArr, 15)
		for(var i = 0; i < pics.length; i++) {
			pics[i].style.animation = ""
			back[i].style.backgroundImage = 'url(static/img/' + r[i] + '.jpg' + ')'
			mask[i].innerText = r[i]
		}
	}
})