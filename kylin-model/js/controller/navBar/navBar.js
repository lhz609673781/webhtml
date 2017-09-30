"use strict";
angular.module("app").controller("navBarController",function ($rootScope,$scope,$http,config,base) {
    /**
     * 组织架构渲染完成
     */
    $scope.renderFinish = function(){
        base.elementRender();
    };
    /**
     * 初始化组织架构
     */
    $scope.init = function () {
        $http({
            method : 'POST',
            url : config.api_host + 'org/res/api/menu',
            headers : {
                'Content-Type': 'application/json',
                "X-Token": $rootScope.token,
                "X-Request-Type":"ajax"
            }
        }).success(function(data) {
            if (data.success) {
                $scope.menus = data.menus;
            }else{
                layer.msg(data.message);
            }
        });
    };
    //页面加载完成执行定义方法
    $scope.init();
    /**
     * iframe临时模块
     * 对菜单项进行jquery事件绑定
     */
    $(document).on("click","#navBar a",function () {
        var $this = $(this),
            $src = $this.data("src"),
            $uiSref = $this.attr("ui-sref");
        if ($src){
            if (!$this.hasClass("active")){
                var $iframe = $("<iframe frameborder='0' style='width: 100%; height: 100%;'></iframe>");
                $iframe.attr("src",$src);
                $("#content").html($iframe).show();
                $this.addClass("active");
            }
        }else if ($uiSref){
            $("#content").html("").hide();
            $("#baseData").removeClass("active");
        }else{
            return false;
        }
    });
});
