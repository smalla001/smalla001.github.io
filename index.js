var url = decodeURI(window.location.href);
if (url.indexOf('?tag=') != -1) {
    var tagname = url.substring(url.indexOf('?tag=') + 5, url.length);
    $('.texts .tag_bar span').text(tagname);
    var nt = [];
    for (var i = 0; i < text.length; i++) {
        var a = 0;
        for (var i2 = 0; i2 < text[i].tag.length; i2++) {
            if (text[i].tag[i2] == tagname) {
                a = 1;
            }
        }
        if (a == 1) {
            nt[nt.length] = text[i];
        }
    }
    text = nt;
    for (var i = 0; i < text.length; i++) {
        $('.texts ul').append(`<li class='ripple'>
        <a href="text.html?${i}">
            <h1>${text[i].title}</h1>
            <p>${text[i].main}</p>
            <span>${text[i].date[0]}/${text[i].date[1]}/${text[i].date[2]}</span>
        </a>
    </li>`)
    };
} else {
    $('.texts .tag_bar').hide();
    for (var i = 0; i < text.length; i++) {
        $('.texts ul').append(`<li class='ripple'>
        <a href="text.html?${i}">
            <h1>${text[i].title}</h1>
            <p>${text[i].main}</p>
            <span>${text[i].date[0]}/${text[i].date[1]}/${text[i].date[2]}</span>
        </a>
    </li>`)
    };
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
var rights = false;
$('.topbar .menu').click(function() {
    if (rights) {
        $('.right').css('transform', 'translateX(110%)');
        $('.right_cover').css({
            'opacity': '0',
            'pointer-events': 'none'
        });
        rights = false;
    } else {
        $('.right').css('transform', 'translateX(0)');
        $('.right_cover').css({
            'opacity': '1',
            'pointer-events': 'all'
        });
        rights = true;
    }
});
$('.right_cover').click(function() {
    $('.right').css('transform', 'translateX(110%)');
    $('.right_cover').css({
        'opacity': '0',
        'pointer-events': 'none'
    });
    rights = false;
})
$('.topbar .search_bar').click(function() {
    $('.right').css('transform', 'translateX(110%)');
    $('.right_cover').css({
        'opacity': '0',
        'pointer-events': 'none'
    });
    rights = false;
});
$('.topbar .search_btn').click(function() {
    if ($(this).width() == 50) {
        $('.topbar .search_bar').css({
            'position': 'absolute',
            'width': 'calc(100% - 20px)',
            'height': '40px',
            'margin': '5px 10px',
            'background': '#fff',
            'border-radius': '10px',
        });
        $('.topbar .search_close').css({
            'color': '#000',
            'display': 'block',
            'font-size': '24px',
            'width': '40px',
            'height': '40px',
            'float': 'left'
        });
        $('.topbar .search_bar input').css({
            'color': '#000',
            'display': 'block',
            'font-size': '16px',
            'width': 'calc(100% - 80px)',
            'height': '40px',
            'float': 'left',
            'padding': '0'
        });
        $('.topbar .search_btn').css({
            'color': '#000',
            'display': 'block',
            'font-size': '16px',
            'width': '40px',
            'height': '40px',
            'float': 'left',
            'text-align': 'center',
            'line-height': '40px'
        });
    }
});
$('.search_bar input').on('input', function() {
    var a = $('.search_bar input').val();
    if (a) {
        $('.texts ul').html('');
        for (var i = 0; i < text.length; i++) {
            if (text[i].title.indexOf(a) != -1) {
                $('.texts ul').append(`<li class='ripple'>
    <a href="text.html?${i}">
        <h1>${text[i].title}</h1>
        <p>${text[i].main}</p>
        <span>${text[i].date[0]}/${text[i].date[1]}/${text[i].date[2]}</span>
    </a>
</li>`)
            }
        }
        if ($('.texts ul').html() == '') {
            $('.texts ul').html('<p style="text-align:center">什么也没找到</p>')
        }
    } else {
        $('.texts ul').html('');
        for (var i = 0; i < text.length; i++) {

            $('.texts ul').append(`<li class='ripple'>
    <a href="text.html?${i}">
        <h1>${text[i].title}</h1>
        <p>${text[i].main}</p>
        <span>${text[i].date[0]}/${text[i].date[1]}/${text[i].date[2]}</span>
    </a>
</li>`)

        }
    }
})
$('.search_close').click(function() {
    $('.topbar .search_bar').css({
        'position': 'relative',
        'background-color': 'transparent',
        'width': '50px',
        'height': '50px',
        'float': 'right',
        'margin': 'auto'
    });
    $('.topbar .search_bar>*').css({
        'display': 'none'
    });
    $('.topbar .search_bar .search_btn').css({
        'width': '50px',
        'height': '50px',
        'font-size': '20px',
        'display': 'block',
        'color': '#fff',
        'line-height': '50px'
    });
});