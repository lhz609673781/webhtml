"use strict";
angular.module("app").controller("menuManagerController",function ($rootScope,$scope,$http,config,base) {
    /**
     * 初始化菜单
     */
    $scope.init = function () {
        $http({
            method : 'POST',
            url : config.api_host + 'menu/api/menuList',
            headers : {
                'Content-Type': 'application/json',
                "X-Token": $rootScope.token,
                "X-Request-Type":"ajax"
            }
        }).success(function(data) {
            if (data.success) {
                $rootScope.tree({
                    elem: '#menu-tree'
                    ,click: function(item){
                        layer.msg(JSON.stringify(item));
                    }
                    ,nodes: data.menus
                });
            }else{
                layer.msg(data.message);
            }
        });
    };
    /**
     * 根据关键字检索菜单
     */
    $scope.search = function () {

    };
    //页面加载完成执行定义方法
    // $scope.init();
    /**
     * 测试数据
     */
    $rootScope.tree({
        elem: '#menu-tree'
        ,click: function(item){
            layer.msg(JSON.stringify(item));
        }
        ,nodes: [
            {
                name: '常用文件夹'
                ,id: 1
                ,children: [
                {
                    name: '所有未读'
                    ,id: 11
                }, {
                    name: '置顶邮件'
                    ,id: 12
                }, {
                    name: '标签邮件'
                    ,id: 13
                }
            ]
            }, {
                name: '我的邮箱'
                ,id: 2
                ,children: [
                    {
                        name: 'QQ邮箱'
                        ,id: 21
                        ,children: [
                        {
                            name: '收件箱'
                            ,id: 211
                            ,children: [
                            {
                                name: '所有未读'
                                ,id: 2111
                            }, {
                                name: '置顶邮件'
                                ,id: 2112
                            }, {
                                name: '标签邮件'
                                ,id: 2113
                            }
                        ]
                        }, {
                            name: '已发出的邮件'
                            ,id: 212
                        }, {
                            name: '垃圾邮件'
                            ,id: 213
                        }
                    ]
                    }, {
                        name: '阿里云邮'
                        ,id: 22
                        ,children: [
                            {
                                name: '收件箱'
                                ,id: 221
                            }, {
                                name: '已发出的邮件'
                                ,id: 222
                            }, {
                                name: '垃圾邮件'
                                ,id: 223
                            }
                        ]
                    }
                ]
            }
            ,{
                name: '收藏夹'
                ,id: 3
                ,children: [
                    {
                        name: '爱情动作片'
                        ,id: 31
                    }, {
                        name: '技术栈'
                        ,id: 32
                        ,children: [
                            {
                                name: '前端'
                                ,id: 321
                            }
                            ,{
                                name: '全端'
                                ,id: 322
                            }
                        ]
                    }
                ]
            }
        ]
    });
});
