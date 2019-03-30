var nav = {
    init: function() {
        $("nav .menu_btn").click(function() {
            $("body").hasClass("nav-open") ? nav.close() : nav.open()
        }),
        $("#nav_overlayer").click(nav.close),
        $("nav .has_sub").each(function() {
            function e(e) {
                $("nav").addClass("open_sub"),
                n.addClass("open"),
                $(e).addClass("show"),
                $(window).unbind("click").bind("click", function(e) {
                    $(e.target).closest(".subnav").length || $(e.target).closest(".submenu_btn").length || $(e.target).closest(".subnav .back_btn").length || a()
                }),
                pop.close(),
                console.log(e)
            }
            function a() {
                $("nav").removeClass("open_sub"),
                $(".subnav").removeClass("show"),
                n.removeClass("open"),
                $(window).unbind("click"),
                console.log("close")
            }
            var n = $(this);
            n.find(".submenu_btn").click(function(n) {
                var o = $(this).attr("href");
                n.preventDefault(),
                $("nav").hasClass("open_sub") ? a() : e(o)
            }),
            n.find(".back_btn").click(a)
        })
    },
    open: function() {
        $("#nav_overlayer").fadeTo(400, .6),
        $("body").addClass("nav-open")
    },
    close: function() {
        $("body").removeClass("nav-open"),
        $("nav").removeClass("open_sub"),
        $("nav .open").removeClass("open"),
        $("#nav_overlayer").fadeTo(400, 0, function() {
            $("#nav_overlayer").hide()
        })
    },
    closeSubmenu: function() {
        $("body").css("overflow", "auto"),
        $("nav").removeClass("open_sub"),
        $("nav .has_sub").removeClass("open")
    },

}

window.headSwiper;
var swiper = {
    init: function() {
        $(".swiper-container").each(function(e, a) {
            var n = $(this)
              , o = n.is(".head-swiper") ? 1600 : 800
              , t = n.is(".head-swiper") ? !1 : !0
              , i = n.is(".autoplay") ? 5e3 : 0
              , s = n.is(".loop") ? !0 : !1
              , l = new Swiper(n,{
                pagination: n.find(".pagination"),
                prevButton: n.find(".btn-prev"),
                nextButton: n.find(".btn-next"),
                paginationClickable: !0,
                speed: o,
                autoplay: i,
                loop: s,
                grabCursor: t,
                longSwipesRatio: .1,
                threshold: 20,
                parallax: !0,
                lazyLoading: !0,
                lazyLoadingInPrevNext: !0,
                paginationBulletRender: function(e, a) {
                    var n = " trans";
                    return '<span class="' + a + n + '"></span>'
                },
                onLazyImageLoad: function(e, a, n) {
                    var o = '<div class="loader-icon"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke="#999" stroke-width="2" stroke-miterlimit="10"/></svg></div>';
                    $(a).append(o)
                },
                onLazyImageReady: function(e, a, n) {
                    $(a).find(".loader-icon").remove(),
                    $(n).addClass("showin")
                },
                onSliderMove: function(e) {
                    n.find(".slide_transition").removeClass("slide_transition")
                },
                onTransitionStart: function(e) {
                    n.find(".trans_alpha, .headbg").addClass("slide_transition"),
                    n.find(".autoplay").removeClass("autoplay")
                },
                onSetTranslate: function(e, a) {
                    for (var n = 0; n < e.slides.length; n++) {
                        var o = e.slides[n]
                          , t = o.progress
                          , i = 1 - Math.min(Math.abs(t), 1)
                          , s = 1 + Math.min(Math.abs(.2 * t), .2)
                          , l = 50
                          , r = t * l;
                        r > l && (r = l),
                        -l > r && (r = -l),
                        $(o).find(".trans_alpha").css("opacity", i),
                        $(o).find(".headbg[data-swiper-parallax]").css("transform", "scale(" + s + ") translate3d(" + r + "%, 0px, 0px)")
                    }
                },
                onTransitionEnd: function(e) {
                    $(".will-change").removeClass("will-change"),
                    e.autoplaying && n.find(".line").addClass("autoplay")
                }
            });
            n.is(".head-swiper") && (headSwiper = l,
            headSwiper.stopAutoplay())
        })
    }
}
, proloader = {
    init: function() {
        function e() {
            i == t ? a() : i++
        }
        function a() {
            $("body").removeClass("loading"),
            $("#pageloader").addClass("hide"),
            ics && animElements.init(),
            setTimeout(function() {
                if ($("#pageloader").remove(),
                $(".loop").length && $('.loop [data-swiper-slide-index="0"]').each(function(e) {
                    e > 0 && $(this).find(".anim_emt").removeClass("anim_emt")
                }),
                $(".head-swiper.autoplay").length && (headSwiper.startAutoplay(),
                $(".head-swiper.autoplay .line").addClass("autoplay")),
                $("#icon-path").length && ics) {
                    var e = $("#icon-path");
                    e.find("path").each(function() {
                        var e = $(this)[0]
                          , a = $(this)
                          , n = a.data("delay") > 0 ? a.data("delay") : 0;
                        segment = new Segment(e),
                        segment.draw("0%", "0%", 0),
                        segment.draw("0%", "100%", 2, {
                            delay: n,
                            easing: ease.ease("circle-in-out")
                        }),
                        setTimeout(function() {
                            a.css("opacity", 1)
                        }, 1e3 * n)
                    })
                }
            }, 1500)
        }
        var n = $("img:not(.swiper-lazy)").length
          , o = $("[data-proload]").length
          , t = n + o
          , i = 1
          , s = 1;
        0 == t && a(),
        $("img").each(function() {
            var a = new Image;
            a.src = $(this).attr("src"),
            a.complete ? e() : a.onload = e
        }),
        $("[data-proload]").each(function() {
            function a() {
                s += 1,
                n.css("background-image", "url(" + t + ")"),
                n.removeAttr("data-proload"),
                console.log(t)
                e()
            }
            var n = $(this)
              , o = new Image
              , t = n.data("proload");
            o.src = t,
            o.complete ? a() : o.onload = a
        })
    }
}
  , fixSize = {
    init: function() {
        function e(e, a) {
            if (e.parent().removeAttr("style"),
            e.removeAttr("style"),
            $(window).width() >= 768) {
                var n = parseInt(e.css("padding-left"))
                  , o = Math.round(e.parent().width() * a - 2 * n);
                e.each(function() {
                    var e = $(this);
                    e.width(o),
                    e.parent().width(Math.ceil(1 / a * (o + 2 * n)))
                })
            }
        }
        function a() {
            $(".home #head .fixed-head").css("height", $(window).height())
        }
        function n() {
            e($(".col-2 li"), .5),
            e($(".col-3 li"), .3333),
            Modernizr.touch && a()
        }
        n(),
        $(window).resize(function() {
            n()
        })
    }
}
  , home = {
    init: function() {
        $("#head .swiper-slide").each(function() {
            function e() {
                n.addClass("btn-hover")
            }
            function a() {
                n.removeClass("btn-hover")
            }
            var n = $(this);
            n.find("a").hover(e, a)
        })
    }
};
$(document).ready(function() {
    browsers.init(),
    prevent.init(),
    nav.init(),
    fixSize.init(),
    // !Modernizr.touch && $("#head").length && maxheader.init(),
    $(".swiper-container").length && ics && swiper.init(),
    $(".modal").length && ics && modal.init(),
    proloader.init()
});
