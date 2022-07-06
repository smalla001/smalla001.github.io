var a = parseInt(window.location.href.substring(window.location.href.indexOf('?') + 1, window.location.href.length));
if (!isNaN(a)) {
    $('.text').html(`<h1>${text[a].title}</h1>
    <h3>By 陈思全</h3>${text[a].text}
    <div class="end">
            <div class="end-text"> - - T h e &nbsp; E n d - - </div>
            <div class="bqs">
                <ul>
                </ul>
            </div>
            <div class="last-text">上一篇：<a href="?${a-1}">欢迎使用Simple Writer，它是一个简洁的写作工具</a></div>
            <div class="next-text">下一篇：<a href="?${a+1}">欢迎使用Simple Writer，它是一个简洁的写作工具</a></div>

        </div>`);
    if (a <= 0 && a < text.length - 1) {
        $('.text .last-text').remove();
        $('.text .next-text a').html(text[a + 1].title);
    } else if (a > 0 && a >= text.length - 1) {
        $('.text .next-text').remove();
        $('.text .last-text a').html(text[a - 1].title);
    } else if (a <= 0 && a >= text.length - 1) {
        $('.text .next-text').remove();
        $('.text .last-text').remove();
    } else {
        $('.text .next-text a').html(text[a + 1].title);
        $('.text .last-text a').html(text[a - 1].title);
    }
    for (var i = 0; i < text[a].tag.length; i++) {
        $('.text .bqs ul').append(`<li><a href="./?tag=${text[a].tag[i]}">${text[a].tag[i]}</a></li>`)
    }
}
$('.ripple').mousedown(function(e) {
    var nspan = document.createElement('section');
    // 将新元素添加到按钮里
    this.appendChild(nspan);
    // 获取点击位置，来确定span位置
    nspan.style.top = e.offsetY + 'px';
    nspan.style.left = e.offsetX + 'px';
    setTimeout(function() {
        nspan.remove();
    }, 1200);
});
$('.right').css('right', (-$('.right').width() - 30) + 'px');
$('.right').css('transition', 'all .3s');
$('.topbar .menu').click(function() {
    if ($('.right').css('right') == '0px') {
        $('.right').css('right', (-$('.right').width() - 30) + 'px');
        $('.right_cover').css({
            'opacity': '0',
            'pointer-events': 'none'
        })
    } else {
        $('.right').css('right', '0px');
        $('.right_cover').css({
            'opacity': '1',
            'pointer-events': 'all'
        })
    }
});
$('.right_cover').click(function() {
    $('.right').css('right', (-$('.right').width() - 30) + 'px');
    $('.right_cover').css({
        'opacity': '0',
        'pointer-events': 'none'
    })
})