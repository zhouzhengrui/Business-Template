jQuery(document).ready(function ($) {

    // menu

    $("ul.menu").superfish({
        hoverClass: "sfHover",          // li hover class命名
        delay: 800,                // 鼠标移开关闭子菜单延时
        animation: {opacity: "show"},   // 子菜单显示动效，opacity / height
        animationOut: {opacity: "hide"},   // 子菜单关闭动效，opacity / height
        speed: "normal",           // 子菜单显示过渡时长
        speedOut: "fast",             // 子菜单隐藏过渡时长
        cssArrows: true                // 箭头开启
    });

    // slider

    $(".sliderBox > div").responsiveSlides({
        namespace: "slider",                // 默认命名空间
        auto: true,                         // 自动播放
        speed: 800,                         // 过渡的速度，以毫秒为单位
        timeout: 5000,                      // 幻灯片之间的时间间隔，以毫秒为单位
        pager: true,                        // 显示分页
        nav: true,                          // 显示左右导航
        random: false,                      // 随机化的幻灯片的顺序
        pause: false,                       // 鼠标停留是是否暂停
        pauseControls: true,                // 悬停控制
        prevText: "&#xe8eb;",               // 字符串：文本为“上一个”按钮
        nextText: "&#xe8ec;",               // 字符串：文本的“下一步”按钮
        maxwidth: ""                        // 最大宽度
    });
    $(".slider a").attr("href","javascript:;");
    $(".slider_nav.prev").addClass("fontIcon icon-angle-left");
    $(".slider_nav.next").addClass("fontIcon icon-angle-right");
    var sliderImageLoad = [];   //图片加载完成后移除loading图标
    $(".sliderBox img").each(function () {
        var sliderImage = $.Deferred();
        $(this).load(sliderImage.resolve);
        sliderImageLoad.push(sliderImage);
    });
    $.when.apply(null, sliderImageLoad).done(function () {
        $(".fontIconLoading").remove();
    });

    // layout

    $(".rowBox-2").each(function () {
        $(".group:last", this).addClass("rowFix");
    });
    $(".rowBox-3").each(function () {
        $(".group:eq(1)", this).addClass("rowFix");
    });
    $(".arrayBox-3").each(function () {
        $(".group:nth-child(3n)", this).addClass("arrayFix");
    });
    $(".arrayBox-4").each(function () {
        $(".group:nth-child(4n)", this).addClass("arrayFix");
    });
    $(".pageArrayBox-3").each(function () {
        $(".group:nth-child(3n)", this).addClass("arrayFix");
        $(".group:nth-child(3n)", this).after("<div class='wrap'></div>");
    });
    $(".imageArray").each(function () {
        var imageArrayOffset = $(".imageArray").height();
        $(this).css("height", imageArrayOffset - 20);
    });

    // cover

    $(".cover01").each(function () {
        $(this).hover(function () {
            $(".coverBackground", this).stop().animate({opacity: '.75'}, {queue: false, duration: 200});
            $(".coverTitle", this).stop().animate({bottom: '55%'}, {queue: false, duration: 300});
            $(".coverButton", this).stop().animate({top: '55%'}, {queue: false, duration: 300});
        }, function () {
            $(".coverBackground", this).stop().animate({opacity: '0'}, {queue: false, duration: 200});
            $(".coverTitle", this).stop().animate({bottom: '100%'}, {queue: false, duration: 300});
            $(".coverButton", this).stop().animate({top: '100%'}, {queue: false, duration: 300});
        });
    });

    $(".cover02").each(function () {
        var cover02Offset01 = $(this).height();
        var cover02Offset02 = $(".coverBox", this).innerHeight();
        $(this).css("height", cover02Offset01);
        $(this).hover(function () {
            $(".imgBox img", this).stop().animate({marginTop: -cover02Offset02 / 2}, {queue: false, duration: 300});
            $(".coverBox", this).stop().animate({top: cover02Offset01 - cover02Offset02}, {queue: false, duration: 300});
        }, function () {
            $(".imgBox img", this).stop().animate({marginTop: '0'}, {queue: false, duration: 300});
            $(".coverBox", this).stop().animate({top: '100%'}, {queue: false, duration: 300});
        });
    });

    // fancy box

    $(".fancybox").fancybox({
        helpers: {
            padding: 10,        // Default value: 15
            margin: 15,         // Default value: 20
            title : {
                type : 'outside'
            }
        }
    });

    // parallax

    $(".parallaxText").each(function () {
        var parallaxTextOffset = $(".parallaxText").height();
        $(this).css("margin-top", -parallaxTextOffset / 2);
    });

    // images scroll

    $('.imageScrollBox-X').cxScroll({
        direction: 'right',     // 滚动方向
        step: 1,                // 滚动步长
        accel: 400,             // 手动滚动速度 (ms)
        speed: 800,             // 自动滚动速度 (ms)
        time: 4000,             // 自动滚动间隔时间 (ms)
        auto: true,             // 是否自动滚动
        hoverLock: true,        // 鼠标移入锁定
        prevBtn: true,          // 是否使用 prev 按钮
        nextBtn: true           // 是否使用 next 按钮
    });

    // anchor

    $(".anchor").click(function () {
        var id = '#' + $(this).attr("rel");
        $("html, body").animate({scrollTop: $(id).offset().top}, 600);
    });

    // form

    var formFix = $(".table_form").width();
    $(".table_form .input-text").css("width", formFix - 22);
    $(".table_form tr:last td:first").css("display", "none");


});


