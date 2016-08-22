var willoApp = angular.module('willoApp', ['ui.router', 'ngGrid', 'headerModule', 'functionModule', 'productListModule', 'sceneDetailModule', 'productDetailModule']);
/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */
willoApp.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

/**
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 */
willoApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
       .state('index', {    //主页
           url: '/index',
           views: {
               '': {       //''表示主模版   带@的地方被嵌套在主模版里面
                   templateUrl: 'tpls/index/indexTpls.html'
               },
               'header@index': {
                   templateUrl: 'tpls/commonTpls/header.html'
               },
               'banner@index': {
                   templateUrl: 'tpls/index/banner.html'
               },
               'footer@index': {
                   templateUrl: 'tpls/commonTpls/footer.html'
               },
               'function@index': {
                   templateUrl: 'tpls/commonTpls/function.html'
               }
           }
       })
        .state('scene', {
            url: '/scene?t',
            views: { 
                '': {
                    templateUrl: 'tpls/scene/sceneMain.html'
                },
                'header@scene': {
                    templateUrl: 'tpls/commonTpls/header.html'
                },
                'sceneDetail@scene': {
                    templateUrl: 'tpls/scene/sceneDetail.html'
                },
                'footer@scene': {
                    templateUrl: 'tpls/commonTpls/footer.html'
                },
                'function@scene': {
                    templateUrl: 'tpls/commonTpls/function.html'
                }
            }
        })
        .state('addbook', {
            url: '/addbook',
            templateUrl: 'tpls/addBookForm.html'
        })
        .state('productList', {                 //产品列表
            url: '/productList/:productId&:Id&:productLN', //注意这里在路由中传参数的方式
            views: {
                '': {       //''表示主模版   带@的地方被嵌套在主模版里面
                    templateUrl: 'tpls/productList/productListMain.html'
                },
                'header@productList': {
                    templateUrl: 'tpls/commonTpls/header.html'
                },
                'productListDetail@productList': {
                    templateUrl: 'tpls/productList/productListDetail.html'
                },
                'footer@productList': {
                    templateUrl: 'tpls/commonTpls/footer.html'
                },
                'function@productList': {
                    templateUrl: 'tpls/commonTpls/function.html'
                }
            }
        })
        .state('product', {                 //产品详情
            url: '/product/:pdetail', //注意这里在路由中传参数的方式
          views: {
            '': {       //''表示主模版   带@的地方被嵌套在主模版里面
                templateUrl: 'tpls/product/productDetailMain.html'
            },
            'header@product': {
                templateUrl: 'tpls/commonTpls/header.html'
            },
            'productDetail@product': {
                templateUrl: 'tpls/product/productDetail.html'
            },
            'footer@product': {
                templateUrl: 'tpls/commonTpls/footer.html'
            },
            'function@product': {
                templateUrl: 'tpls/commonTpls/function.html'
            }
        }
    })
});
