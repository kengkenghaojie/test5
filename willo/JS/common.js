////////////***********页面没有跳转的时候**********/////////////////////////

/*$(document).ready(function () {
    if ($(window).width() > 767) {
        //   $(document).ready(function () {
        //hover出现产品
        $(".function-button-container div").hover(function () {
            $(this).children("span").animate({ left: "-56px" });
            $(this).children("span").css({ "background-color": "#d85d4b" });
            $(this).children("i").css({ "background-color": "#d85d4b" });
        }, function () {
            $(this).children("span").animate({ left: "37px" });
            $(this).children("span").css({ "background-color": "#7a6e6e" });
            $(this).children("i").css({ "background-color": "#7a6e6e" });
        });
        //滑动时导航变化



        $(".one-nav-container li").hover(function () {
            $(this).children(".nav-hover-scene").show();
            $(this).children("a").addClass("a-hover", "text-willo-hover");
        }, function () {
            $(this).children(".nav-hover-scene").hide();
            $(this).children("a").removeClass("a-hover", "text-willo-hover");
        })

        //点击导航
        for (i = 0; i < $(".nav li").length; i++) {
            var url = $(".nav li").eq(i).children("a").eq(0).text().toLowerCase();
            url = url + ".html";
            // alert(url);
            $(".nav li").eq(i).children("a").attr("href", url);
        }

        //location.href = 'url.html';

        // })
    } else if ($(window).width() <= 767) {
        //点击出现2级导航
        $(".nav li a").click(function () {
            var dis = $(this).next(".nav-hover-scene").css("display");
            if (dis == "block") {
                $(this).next(".nav-hover-scene").hide("slow");
                $(this).next().next(".go-sence").fadeOut();
            }
            else if (dis == "none") {
                $(".nav-hover-scene").hide();
                $(this).next(".nav-hover-scene").show("slow");
                $(".go-sence").hide();
                $(this).next().next(".go-sence").fadeIn();
            }
        })

        //头部分类
        $("header .icon-iconfont-iconfontfenlei").click(function () {
            $(".eject-background").css({ "display": "block" });
            $(".function-button-entrance").hide();
            $(".one-nav-container").animate({ right: "0%" });
            $(".container").css({ "padding-left": "0" });
            $("body,html").css({ "overflow": "hidden", "height": "100%" });
        })
        $(".eject-background").click(function () {
            $(".eject-background").css({ "display": "none" });
            $(".function-button-entrance").show();
            $(".one-nav-container").animate({ right: "-80%" });
            $(".container").css({ "padding-left": "15px" });
            $("body,html").css({ "overflow": "auto", "height": "auto" });
        })


        //功能按钮
        $(".function-button-entrance").click(function () {
            $(".function-button").fadeIn();
            $(".function-button-entrance").fadeOut();
            $(".function-button-eject-background").show();
        })
        $(".function-button-eject-background").click(function () {
            $(".function-button-entrance").fadeIn();
            $(".function-button").fadeOut();
            $(".function-button-eject-background").hide();
        })
        $(window).scroll(function () {
            $("header").animate({ borderColor: "#e7e7e7" })
        })
    }


})*/





////////////***********页面跳转的时候**********/////////////////////////
/*$(window).resize(function () {


    if ($(window).width() > 767) {
         //   $(document).ready(function () {
        //hover出现产品
        $(".function-button-container div").children("span").css({ "background-color": "#7a6e6e" });
        $(".function-button-container div").children("i").css({ "background-color": "#7a6e6e" });

        $(".navbar-nav li .go-sence,.function-button-entrance,.function-button,.nav-hover-scene,.eject-background").hide();
        $(".function-button").show();
                $(".function-button-container div").hover(function () {
                    $(this).children("span").animate({ left: "-56px" });
                    $(this).children("span").css({ "background-color": "#d85d4b" });
                    $(this).children("i").css({ "background-color": "#d85d4b" });
                }, function () {
                    $(this).children("span").animate({ left: "37px" });
                    $(this).children("span").css({ "background-color": "#7a6e6e" });
                    $(this).children("i").css({ "background-color": "#7a6e6e" });
                });
                //滑动时导航变化



                $(".one-nav-container li").hover(function () {
                    $(this).children(".nav-hover-scene").show();
                    $(this).children("a").addClass("a-hover", "text-willo-hover");
                }, function () {
                    $(this).children(".nav-hover-scene").hide();
                    $(this).children("a").removeClass("a-hover", "text-willo-hover");
                })

                //点击导航
                for (i = 0; i < $(".nav li").length; i++) {
                    var url = $(".nav li").eq(i).children("a").eq(0).text().toLowerCase();
                    url = url + ".html";
                    // alert(url);
                    $(".nav li").eq(i).children("a").attr("href", url);
                }


           // })
    } else if ($(window).width() <= 767) {
        $(".function-button,.nav-hover-scene,.one-nav-container,.eject-background").hide();
        //初始化部分影响的样式
        $(".function-button-container div").children("span").css({ "background-color": "rgba(0,0,0,0)" });
        $(".function-button-container div").children("i").css({ "background-color": "rgba(0,0,0,0)" });
        $(".container").css({ "padding": "15px;" });
        $(".function-button-entrance").show();

        //右边功能进口
        $(".function-button-container div").hover(function () {
            $(this).children("span").animate({ left: "auto" });
            $(this).children("span").css({ "background-color": "rgba(0,0,0,0)" });
            $(this).children("i").css({ "background-color": "rgba(0,0,0,0)" });
        }, function () {
            $(this).children("span").animate({ left: "auto" });
            $(this).children("span").css({ "background-color": "rgba(0,0,0,0)" });
            $(this).children("i").css({ "background-color": "rgba(0,0,0,0)" });
        });

        //初始化2级导航
        
            $(".one-nav-container li").unbind("hover");
     
      

            //点击出现2级导航
            $(".nav li a").click(function () {
                var dis = $(this).next(".nav-hover-scene").css("display");
                if (dis == "block") {
                   // $(this).next(".nav-hover-scene").hide("slow");
                    //$(this).next().next(".go-sence").fadeIn();
                    $(".go-sence").hide();
                    $(this).next().next(".go-sence").show();
                }
                else if (dis == "none") {
                    $(".nav-hover-scene").hide();
                  //  $(this).next(".nav-hover-scene").show("slow");
                    $(".go-sence").hide();
                    //$(this).next().next(".go-sence").fadeOut();
                    $(".go-sence").hide();
                  //  $(this).next().next(".go-sence").show();
                }
            })
            //头部分类
            $("header .icon-iconfont-iconfontfenlei").click(function () {
                $(".eject-background,.one-nav-container").css({ "display": "block" });
                        $(".function-button-entrance").hide();
                        $(".one-nav-container").animate({ right: "0%" });
                        $(".container").css({ "padding-left": "0" });
                        $("body,html").css({ "overflow": "hidden", "height": "100%" });
                        $(".navbar-brand").css({ "padding-left": "30px" });
                    })
                    $(".eject-background").click(function () {
                        $(".eject-background").css({ "display": "none" });
                        $(".function-button-entrance").show();
                        $(".one-nav-container").animate({ right: "-80%" });
                        $(".container,.navbar-brand").css({ "padding-left": "15px" });
                        $("body,html").css({ "overflow": "auto", "height": "auto" });
                    })


            //功能按钮
                    $(".function-button-entrance").click(function () {
                                $(".function-button").fadeIn();
                                $(".function-button-entrance").fadeOut();
                                $(".function-button-eject-background").show();
                            })
                            $(".function-button-eject-background").click(function () {
                                $(".function-button-entrance").fadeIn();
                                $(".function-button").fadeOut();
                                $(".function-button-eject-background").hide();
                            })
                            $(window).scroll(function () {
                                $("header").animate({ borderColor: "#e7e7e7" })
                            })

        //点击导航
                            for (i = 0; i < $(".nav li").length; i++) {
                                // alert(url);
                                $(".nav li").eq(i).children("a").removeAttr("href");
                            }

    }

    for (i = 0; i < $(".nav li").length; i++) {
                    var url = $(".nav li").eq(i).children("a").eq(0).text().toLowerCase();
                    url = url + ".html";
                   
                    $(".nav li").eq(i).children(".go-sence").attr("href", url);
                }

       



});*/
$(window).resize(function () {
    if ($(window).width() > 767) {
        $(".function-button").show();
    }
    else if ($(window).width() <= 767) {
        $(".function-button").hide();
    };
})

