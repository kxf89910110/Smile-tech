/**
 * Created by bad_swizer on 2017/9/24.
 */
//$('footer').css('top',+$('.swiper-container').height()-70)
var bgArr = ['static/img/img-index-bg.jpg','static/img/img-product-bg.jpg','static/img/img-occupy-bg.jpg']
var swiper = new Swiper('.swiper-container', {
    // pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    loop: true,
    slidesPerView: 'auto',
    speed:500,
});
$('.swiper-button-prev').on({
    mouseover:function () {
        $('.swiper-button-prev').css('backgroundImage','url('+'static/img/btn-previous-hover.png'+')')
    },
    mouseout:function () {
        $('.swiper-button-prev').css('backgroundImage','url('+'static/img/btn-previous.png'+')')
    },
    click:function () {
//      $('.bgImg').fadeOut(50).fadeIn(950)
    }
})
$('.swiper-button-next').on({
    mouseover:function () {
        $('.swiper-button-next').css('backgroundImage','url('+'static/img/btn-next-hover.png'+')')
    },
    mouseout:function () {
        $('.swiper-button-next').css('backgroundImage','url('+'static/img/btn-next.png'+')')
    },
    click:function () {
//      $(".bgImg").fadeOut(50).fadeIn(950)
    }
})
console.log('思考思考思考思考')