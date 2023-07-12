//home
$(function(){
    //introBox click
    $(".introBox .partBox").click(function(){
        $(".home article")
        .fadeOut(300);

        $("header")
        .addClass("display");

        var n = $(this).index();

        if(!$(this).hasClass("forCharater")) {
            setTimeout(function(){
                $(".home section:eq("+ n +")")
                .fadeIn(300);
            },700);
        }
        else if($(this).hasClass("forCharater")) {
            setTimeout(function(){
                $(".home section.charater")
                .fadeIn(300);
            },700);
        }
    });

    //next click
    $(".intro .next").click(function(){
        $(this)
        .fadeOut(300)
        .closest(".textBox").next()
        .addClass("display show")
        .siblings().removeClass("show");

        var target = $(".intro .show").offset().top;

        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.animate({
            scrollTop: target - 220,
        },500)
    })

    $(".charater .next").click(function(){
        $(this)
        .fadeOut(300)
        .closest(".textBox").next()
        .addClass("display show")
        .siblings().removeClass("show");

        var target = $(".charater .show").offset().top;

        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.animate({
            scrollTop: target - 220,
        },500)
    })

    //back
    $(".back").click(function(){
        $(".home section")
        .fadeOut(300);

        $("header")
        .removeClass("display");

        setTimeout(function(){
            $(".home article")
            .fadeIn(300);
        },500);
    })
})

//header
$(function(){
    $(".linkToQstyle").click(function(){
        $(".home section")
        .fadeOut(300);

        setTimeout(function(){
            $(".home section.Qstyle")
            .fadeIn(300);
        },700);
    })

    $(".linkToCard").click(function(){
        $(".home section")
        .fadeOut(300);

        setTimeout(function(){
            $(".home section.card")
            .fadeIn(300);
        },700);
    })

    $(".linkToOther").click(function(){
        $(".home section")
        .fadeOut(300);

        setTimeout(function(){
            $(".home section.other")
            .fadeIn(300);
        },700);
    })

    $(".linkToCharater").click(function(){
        $(".home section")
        .fadeOut(300);

        setTimeout(function(){
            $(".home section.charater")
            .fadeIn(300);
        },700);
    })
})

//enterAnime
$(function(){
    setTimeout(function(){
        $(".enterAnime .loading")
        .fadeOut(1000);
    },1000)

    $(".enterAnime .logoBox button").click(function(){
        $(".enterAnime .trans")
        .addClass("active");

        setTimeout(function(){
            $(".enterAnime")
            .fadeOut(500);
        },500)
    })
})

//swiper
$(function(){
    var swiper = new Swiper('.swiper_charater', {
        loop: true, //循環
        autoHeight: true, //自動高
        autoplay: {  //自動播放
            delay: 3500, //延遲
            disableOnInteraction: false, //互動後停止
            pauseOnMouseEnter: true, //滑鼠滑入時停止
        },
        slidesPerView: 1, //顯示個數
        spaceBetween: 0, //間距
        navigation: { //arrow
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: { //RWD
            768: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });

    var swiper = new Swiper('.swiper_card', {
        loop: true, //循環
        autoHeight: true, //自動高
        autoplay: {  //自動播放
            delay: 3500, //延遲
            disableOnInteraction: false, //互動後停止
            pauseOnMouseEnter: true, //滑鼠滑入時停止
        },
        slidesPerView: 2, //顯示個數
        spaceBetween: 20, //間距
        navigation: { //arrow
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: { //RWD
            768: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        },
    });
})

//justified-gallery
$(function(){
    $('.justified-gallery').justifiedGallery({
        rowHeight : 350,
        lastRow : 'nojustify',
        margins : 10
    });
})

//rwd
$(function(){
    $(".burgerBtn").click(function(){
        $("header")
        .toggleClass("rwd");
    })

    $("header .downList li").click(function(){
        $("header")
        .removeClass("rwd");
    })
})