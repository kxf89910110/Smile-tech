function footer_style() {
    if ($('.wanted').children().length == 0) {
        $('footer').css('top', $('.wrap').height() - 12)
    } else {
        $('footer').css('top', $('.wrap').height() - 170)
    }
}
footer_style()
var category = []
var career = new Array()
$.ajax({
    type: 'POST',
    url:'http://localhost:11939/WebSite1/Handler2.ashx',
    success: function (res) {
        var e = res,
            flag = 0
        category.push(e.data)

        for (var i = 0; i < e.data.length - 1; i++) {
            for (var j = 0; j < e.data.length - 1 - i; j++) {
                if (category[0][j].order > category[0][j + 1].order) {
                    var temp = category[0][j]
                    category[0][j] = category[0][j + 1]
                    category[0][j + 1] = temp
                }
            }
            flag++
        }
        if (flag >= e.data.length - 1) {
            for (var i = 0; i < e.data.length; i++) {
                $('.jobList .box').append('<li id="' + category[0][i].id + '">' + category[0][i].title + '</li>')
            }
        }
        if ($('.jobList .box').children().length == e.data.length + 1) {
            $.ajax({
                type: 'POST',
                url: 'http://localhost:11939/WebSite1/Handler.ashx',
                data: {
                    'category_id': null
                },
                success: function (res) {
                    var e = res,
                        flag = 0;
                    career.push(e.data)
                    for (var i = 0; i < e.data.length - 1; i++) {
                        for (var j = 0; j < e.data.length - 1 - i; j++) {
                            if (career[0][j].status < career[0][j + 1].status) {
                                var temp = career[0][j]
                                career[0][j] = career[0][j + 1]
                                career[0][j + 1] = temp
                            }
                        }
                        flag++
                    }
                    if (flag >= e.data.length - 1) {
                        for (var i = 0; i < e.data.length; i++) {
                            $('.wanted').append('<div class="job-info"><div class="content"><div class="position">' + career[0][i].title + '</div><div class="detail">' + career[0][i].content + '</div><div class="post"><img src="static/img/btn-sendemail.png" alt=""></div></div><div class="triangle"></div></div>')
                        }
                    }
                    if ($('.wanted').children().length == 0) {
                        $('footer').css('top', $('.wrap').height() - 12)
                    } else {
                        $('footer').css('top', $('.wrap').height() - 170)
                    }
                    $('.post').click(function () {
                        $('.popWindow').css('display', 'block')
                    })
                    $('.close').click(function () {
                        $('.popWindow').css('display', 'none')
                    })
                }
            })
        }
    },
    error: function (err) {

    }
})
$('.jobList .box').on('click', 'li', function () {
    var no_info = []
    $('.jobList .box li').eq($(this).index()).css({
        "background-image": "url('static/img/btn-filter-hover.png')",
        "color": "#fff"
    }).siblings().css({
        "background-image": "url('static/img/btn-filter.png')",
        "color": "#000"
    })
    $('.wanted .job-info').remove();
    var article = $('.jobList .box li').eq($(this).index()).attr('id')
    if (article == 'null') {
        for (var i = 0; i < career[0].length - 1; i++) {
            $('.wanted').append('<div class="job-info"><div class="content"><div class="position">' + career[0][i].title + '</div><div class="detail">' + career[0][i].content + '</div><div class="post"><img src="static/img/btn-sendemail.png" alt=""></div></div><div class="triangle"></div></div>')
            if ($('.wanted').children().length == 0) {
                $('footer').css('top', $('.wrap').height() - 12)
            } else {
                $('footer').css('top', $('.wrap').height() - 170)
            }
        }
    } else if (article != 'null') {
        for (var i = 0; i < career[0].length; i++) {
            if (article == career[0][i].category_id) {
                no_info.push(i)
            }
        }
        if (no_info.length == 0) {
            $('.wanted').append('<div class="job-info"><div class="content"><div class="no_need">该类目职位暂无招聘需求，敬请期待！</div></div></div>')
            if ($('.wanted').children().length == 0) {
                $('footer').css('top', $('.wrap').height() - 12)
            } else {
                $('footer').css('top', $('.wrap').height() - 170)
            }
        } else {
            for (var j = 0; j < no_info.length; j++) {
                $('.wanted').append('<div class="job-info"><div class="content"><div class="position">' + career[0][no_info[j]].title + '</div><div class="detail">' + career[0][no_info[j]].content + '</div><div class="post"><img src="static/img/btn-sendemail.png" alt=""></div></div><div class="triangle"></div></div>')
                if ($('.wanted').children().length == 0) {
                    $('footer').css('top', $('.wrap').height() - 12)
                } else {
                    $('footer').css('top', $('.wrap').height() - 170)
                }
            }
        }
    }
})
$('.post').click(function () {
    $('.popWindow').css('display', 'block')
})
$('.close').click(function () {
    $('.popWindow').css('display', 'none')
})