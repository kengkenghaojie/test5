/**
 * 这里是头部导航模块
 * @type {[type]}
 */
var headerModule = angular.module("headerModule", []);
headerModule.controller('headerCtrl', function ($scope, $http, $state, $stateParams, $element) {
    $http.get("json/index.json").success(function (data) {
        $scope.navs = data;
    });
    $scope.mouseenter = function (ev) {
        if ($(window).width() >= 768) {
            var target = ev.target;
            //添加事件
            $(target).next(".nav-hover-scene").show();
            $(target).next(".go-sence").hide();
            $(target).addClass("a-hover text-willo-hover");
            //添加路径
            var scenes = $(".nav-li").index($(target).parent())+1;
            // var url = "/#/scene?scene={{" + scenes + "}}";
            var navnum = scenes;
            $scope.navnum = navnum;
            var url = "#/scene?t=" + scenes;
            $scope.scene = url;
            //console.log(url);
            $(target).attr("href" , url);
        } else if ($(window).width() < 768) {
            console.log("你麻痹")
        }
    };

    $scope.mouseleave = function (ev) {
        if ($(window).width() >= 768) {
            var target = ev.target;
            //添加事件
            $(target).next(".nav-hover-scene").hide();
            $(target).removeClass("a-hover text-willo-hover");
            //移除路径
            $(target).removeAttr("href");
        } else if ($(window).width() <768) {
            console.log("你麻痹")
        }
     }

    $scope.sceneleave = function (ev) {
        if ($(window).width() >= 768) {
            var target = ev.target;
            $(target).hide();
            $(target).prev().removeClass("a-hover text-willo-hover");
        } else if ($(window).width() <768) {
            console.log("你麻痹")
        }
    }

    $scope.rightNavShow = function () {
        $(".eject-background").css({ "display": "block" });
        $(".function-button-entrance").hide();
        $(".one-nav-container").animate({ right: "0%" });
        $(".container").css({ "padding-left": "0" });
        $("body,html").css({ "overflow": "hidden", "height": "100%" });
    }

    $scope.rightNavHide = function () {
        $(".eject-background").css({ "display": "none" });
        $(".function-button-entrance").show();
        $(".one-nav-container").animate({ right: "-80%" });
        $(".container").css({ "padding-left": "15px" });
        $("body,html").css({ "overflow": "auto", "height": "auto" });
    }

    $scope.clickShowNav = function (ev) {
        if ($(window).width() >= 768) {
            //console.log("你麻痹")
        } else if ($(window).width() < 768) {
            var target = ev.target;
            var dis = $(target).next(".nav-hover-scene").css("display");
            //alert(dis)
            if (dis == "block") {
                $(target).next(".nav-hover-scene").hide("slow");
                $(target).next().next(".go-sence").fadeOut();
            }
            else if (dis == "none") {
                $(".nav-hover-scene").hide();
                $(target).next(".nav-hover-scene").show("slow");
                $(".go-sence").hide();
                $(target).next().next(".go-sence").fadeIn();
            }
        }
    }
});


/**
 * 这里是右边功能模块
 * @type {[type]}
 */
var functionModule = angular.module("functionModule", []);
functionModule.controller('functionCtrl', function ($scope, $http, $state, $stateParams) {
    /*下面3个是主页*/
    $scope.mouseenterindex = function (ev) {
        if ($(window).width() >= 768) {
            var target = ev.target;
            console.log(target);
            $(target).children("span").animate({ left: "-56px" });
            $(target).children("span").css({ "background-color": "#d85d4b" });
            $(target).css({ "background-color": "#d85d4b" });
        } else if ($(window).width() < 768) {
            console.log("你麻痹")
        }
    };  
    $scope.mouseleaveindex = function (ev) {
        if ($(window).width() >= 768) {
            var target = ev.target;
            console.log(target);
            $(target).children("span").animate({ left: "37px" });
            $(target).parent().children("span").css({ "background-color": "#7a6e6e" });
            $(target).css({ "background-color": "#7a6e6e" });
        } else if ($(window).width() < 768) {
            console.log("你麻痹")
        }
    };
    $scope.mouseleaveindexspan = function (ev) {
        if ($(window).width() >= 768) {
            var target = ev.target;
            console.log(target);
            $(target).animate({ left: "37px" });
            $(target).parent().css({ "background-color": "#7a6e6e" });
        } else if ($(window).width() < 768) {
            console.log("你麻痹")
        }
    };

    /*下面3个是购物车*/
    $scope.mouseentercar = function (ev) {
        if ($(window).width() >= 768) {
            var target = ev.target;
            console.log(target);
            $(target).children("span").animate({ left: "-56px" });
            $(target).children("span").css({ "background-color": "#d85d4b" });
            $(target).css({ "background-color": "#d85d4b" });
        } else if ($(window).width() < 768) {
            console.log("你麻痹")
        }
    };
    $scope.mouseleavecar = function (ev) {
        if ($(window).width() >= 768) {
            var target = ev.target;
            console.log(target);
            $(target).children("span").animate({ left: "37px" });
            $(target).parent().children("span").css({ "background-color": "#7a6e6e" });
            $(target).css({ "background-color": "#7a6e6e" });
        } else if ($(window).width() < 768) {
            console.log("你麻痹")
        }
    };
    $scope.mouseleavecarspan = function (ev) {
        if ($(window).width() >= 768) {
            var target = ev.target;
            console.log(target);
            $(target).animate({ left: "37px" });
            $(target).parent().css({ "background-color": "#7a6e6e" });
        } else if ($(window).width() < 768) {
            console.log("你麻痹")
        }
    };

    /*下面3个是我的*/
    $scope.mouseentermy = function (ev) {
        if ($(window).width() >= 768) {
            var target = ev.target;
            console.log(target);
            $(target).children("span").animate({ left: "-56px" });
            $(target).children("span").css({ "background-color": "#d85d4b" });
            $(target).css({ "background-color": "#d85d4b" });
        } else if ($(window).width() < 768) {
            console.log("你麻痹")
        }
    };
    $scope.mouseleavemy = function (ev) {
        if ($(window).width() >= 768) {
            var target = ev.target;
            console.log(target);
            $(target).children("span").animate({ left: "37px" });
            $(target).parent().children("span").css({ "background-color": "#7a6e6e" });
            $(target).css({ "background-color": "#7a6e6e" });
        } else if ($(window).width() < 768) {
            console.log("你麻痹")
        }
    };
    $scope.mouseleavemyspan = function (ev) {
        if ($(window).width() >= 768) {
            var target = ev.target;
            console.log(target);
            $(target).animate({ left: "37px" });
            $(target).parent().css({ "background-color": "#7a6e6e" });
        } else if ($(window).width() < 768) {
            console.log("你麻痹")
        }
    };

    /*下面3个是搜索*/
    $scope.mouseentersearch = function (ev) {
        if ($(window).width() >= 768) {
            var target = ev.target;
            console.log(target);
            $(target).children("span").animate({ left: "-56px" });
            $(target).children("span").css({ "background-color": "#d85d4b" });
            $(target).css({ "background-color": "#d85d4b" });
        } else if ($(window).width() < 768) {
            console.log("你麻痹")
        }
    };
    $scope.mouseleavesearch = function (ev) {
        if ($(window).width() >= 768) {
            var target = ev.target;
            console.log(target);
            $(target).children("span").animate({ left: "37px" });
            $(target).parent().children("span").css({ "background-color": "#7a6e6e" });
            $(target).css({ "background-color": "#7a6e6e" });
        } else if ($(window).width() < 768) {
            console.log("你麻痹")
        }
    };
    $scope.mouseleavesearchspan = function (ev) {
        if ($(window).width() >= 768) {
            var target = ev.target;
            console.log(target);
            $(target).animate({ left: "37px" });
            $(target).parent().css({ "background-color": "#7a6e6e" });
        } else if ($(window).width() < 768) {
            console.log("你麻痹")
        }
    };
   
    /*下面是小屏时候功能按钮的打开关闭*/
    $scope.showFunctions = function () {
        if ($(window).width() >= 768) {
            $(".function-button,.function-button-eject-background").hide();
        } else if ($(window).width() < 768) {
            $(".function-button,.function-button-eject-background").show("fast");
        }
    }
    $scope.hideFunctions = function () {
        if ($(window).width() >= 768) {
            $(".function-button,.function-button-eject-background").hide();
        } else if ($(window).width() < 768) {
            $(".function-button,.function-button-eject-background").hide("fast");
        }
    }
});


/**
 * 这里是产品列表模块
 * @type {[type]}
 */
var productListModule = angular.module("productListModule", []);
productListModule.controller('productListCtrl', function ($scope, $http, $state, $stateParams) {
    //用$http到后台获取数据
    $scope.productlistId = $stateParams.productId;  //接受参数
    $scope.productLN = $stateParams.productLN;
    $scope.navId = $stateParams.Id;
    console.log($scope.productLN);
    //console.log($scope.navId);
    $http.get("json/productlist" + $scope.navId + ".json").success(function (r) {
        $scope.productList = r;
    })
});


/**
 * 这里是场景模块
 * @type {[type]}
 */
var sceneDetailModule = angular.module("sceneDetailModule", []);
sceneDetailModule.controller('sceneDetailCtrl', function ($scope, $http, $state, $stateParams) {
    $scope.navId = $stateParams.t;
    console.log($scope.navId);
    $http.get("json/index.json").success(function (nav) {
        for (var i = 0; i < nav.length; i++) {
            if (nav[i].navId == $scope.navId) {
                $scope.nav = nav[$scope.navId-1];
            }
        }
    })
})


/**
 * 这里是产品详情模块
 * @type {[type]}
 */
var productDetailModule = angular.module("productDetailModule", []);
productDetailModule.controller('productDetailCtrl', function ($scope, $http, $state, $stateParams) {
    //用$http到后台获取数据
    $scope.productDetail = parseInt($stateParams.pdetail);  //接受参数
    console.log($scope.productDetail);
    $http.get("json/productlist1.json").success(function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].productId == $scope.productDetail) {
                $scope.products = data[$scope.productDetail];
            }
        }
    })
});