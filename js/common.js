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

$(document).ready(function() {
    //导航
    nav.init();
    //底部位置
    setFoot();
    function setFoot(){
        var windowH = $(window).height();
        var bodyH = $(document.body).height();
        if(windowH > bodyH){
            $('body,html').height(windowH)
            $('.foot').addClass('fix_foot')
        }
    }
    window.onresize = function(){
        setFoot();
    }
    
});
