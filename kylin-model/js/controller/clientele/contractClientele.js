"use strict";
angular.module("app").controller("contractClienteleController",function ($rootScope,$scope,$http,$uibModal,config,base) {
    $scope.pageSize = 15; //列表分页使用，定义每页显示的数量
    $scope.tabArr = []; //选项卡数组
    $scope.addressCitys = {}; //市级地址对象，用户接收动态绑定的地址信息
    $scope.isDisabled = {}; //是否禁用表单对象，用于控制合同信息是否可编辑以及相关操作控件的显示与隐藏
    // $scope.oldData = {}; //原始数据对象，点击编辑按钮时，保存原始数据，为点击取消按钮回滚数据使用
    /**
     * 客户级别渲染完成
     * 客户类型渲染完成
     */
    $scope.formRenderFinish = function(){
        base.formRender();
    };
    /**
     * 省市列表渲染完成
     */
    $scope.addressProvinceRenderFinish = function(code,index,type){
        base.formRender();
        $scope.initAddressCity(code,index,type);
    };
    /**
     * 选项卡渲染
     */
    $scope.tabRenderFinish = function () {
        base.elementRender();
        $("#layui-tab-title li:last").click();
    };
    /**
     * 初始化客户级别
     */
    $scope.initClienteleLevel = function () {
        $http({
            method : 'POST',
            url : config.api_host + 'limit/api/limitList',
            headers : {
                'Content-Type': 'application/json',
                "X-Token": $rootScope.token,
                "X-Request-Type":"ajax"
            }
        }).success(function(data) {
            if (data.success) {
                $scope.clienteleLevels = data.clienteleLevels;
            }else{
                layer.msg(data.message);
            }
        });
    };
    /**
     * 初始化客户类型
     */
    $scope.initClienteleType = function () {
        $http({
            method : 'POST',
            url : config.api_host + 'limit/api/limitList',
            headers : {
                'Content-Type': 'application/json',
                "X-Token": $rootScope.token,
                "X-Request-Type":"ajax"
            }
        }).success(function(data) {
            if (data.success) {
                $scope.clienteleTypes = data.clienteleTypes;
            }else{
                layer.msg(data.message);
            }
        });
    };
    /**
     * 初始化客户状态
     */
    $scope.initClienteleStatus = function () {
        $http({
            method : 'POST',
            url : config.api_host + 'limit/api/limitList',
            headers : {
                'Content-Type': 'application/json',
                "X-Token": $rootScope.token,
                "X-Request-Type":"ajax"
            }
        }).success(function(data) {
            if (data.success) {
                $scope.clienteleStatuss = data.clienteleStatuss;
            }else{
                layer.msg(data.message);
            }
        });
    };
    /**
     * 初始化行业类别
     */
    $scope.initBusinessType = function () {
        $http({
            method : 'POST',
            url : config.api_host + 'limit/api/limitList',
            headers : {
                'Content-Type': 'application/json',
                "X-Token": $rootScope.token,
                "X-Request-Type":"ajax"
            }
        }).success(function(data) {
            if (data.success) {
                $scope.businessTypes = data.businessTypes;
            }else{
                layer.msg(data.message);
            }
        });
    };
    /**
     * 初始化结款方式
     */
    $scope.initSettlementMethod = function () {
        $http({
            method : 'POST',
            url : config.api_host + 'limit/api/limitList',
            headers : {
                'Content-Type': 'application/json',
                "X-Token": $rootScope.token,
                "X-Request-Type":"ajax"
            }
        }).success(function(data) {
            if (data.success) {
                $scope.settlementMethods = data.settlementMethods;
            }else{
                layer.msg(data.message);
            }
        });
    };
    /**
     * 初始化支付方式
     */
    $scope.initPayMethod = function () {
        $http({
            method : 'POST',
            url : config.api_host + 'limit/api/limitList',
            headers : {
                'Content-Type': 'application/json',
                "X-Token": $rootScope.token,
                "X-Request-Type":"ajax"
            }
        }).success(function(data) {
            if (data.success) {
                $scope.payMethods = data.payMethods;
            }else{
                layer.msg(data.message);
            }
        });
    };
    /**
     * 初始化运输方式
     */
    $scope.initTransportMethod = function () {
        $http({
            method : 'POST',
            url : config.api_host + 'limit/api/limitList',
            headers : {
                'Content-Type': 'application/json',
                "X-Token": $rootScope.token,
                "X-Request-Type":"ajax"
            }
        }).success(function(data) {
            if (data.success) {
                $scope.transportMethods = data.transportMethods;
            }else{
                layer.msg(data.message);
            }
        });
    };
    /**
     * 初始化签约公司
     */
    $scope.initSignedCompany = function () {
        $http({
            method : 'POST',
            url : config.api_host + 'limit/api/limitList',
            headers : {
                'Content-Type': 'application/json',
                "X-Token": $rootScope.token,
                "X-Request-Type":"ajax"
            }
        }).success(function(data) {
            if (data.success) {
                $scope.signedCompanys = data.signedCompanys;
            }else{
                layer.msg(data.message);
            }
        });
    };
    /**
     * 初始化运营分公司
     */
    $scope.initOperationSonCompany = function () {
        $http({
            method : 'POST',
            url : config.api_host + 'limit/api/limitList',
            headers : {
                'Content-Type': 'application/json',
                "X-Token": $rootScope.token,
                "X-Request-Type":"ajax"
            }
        }).success(function(data) {
            if (data.success) {
                $scope.operationSonCompanys = data.operationSonCompanys;
            }else{
                layer.msg(data.message);
            }
        });
    };
    /**
     * 初始化合作业务
     */
    $scope.initPartnerBusiness = function () {
        $http({
            method : 'POST',
            url : config.api_host + 'limit/api/limitList',
            headers : {
                'Content-Type': 'application/json',
                "X-Token": $rootScope.token,
                "X-Request-Type":"ajax"
            }
        }).success(function(data) {
            if (data.success) {
                $scope.partnerBusinesss = data.partnerBusinesss;
            }else{
                layer.msg(data.message);
            }
        });
    };
    /**
     * 初始化省级列表
     */
    $scope.initAddressProvince = function () {
        $http({
            method : 'POST',
            url : config.api_host + 'limit/api/limitList',
            headers : {
                'Content-Type': 'application/json',
                "X-Token": $rootScope.token,
                "X-Request-Type":"ajax"
            }
        }).success(function(data) {
            if (data.success) {
                $scope.addressProvinces = data.addressProvinces;
            }else{
                layer.msg(data.message);
            }
        });
    };
    /**
     * 初始化市级列表
     */
    $scope.initAddressCity = function (code,index,type) {
        if (code != "" && code != null){
            var para = {};
            para.code = code;
            $http({
                method : 'POST',
                url : config.api_host + 'limit/api/limitList',
                data : JSON.stringify(para),
                headers : {
                    'Content-Type': 'application/json',
                    "X-Token": $rootScope.token,
                    "X-Request-Type":"ajax"
                }
            }).success(function(data) {
                if (data.success) {
                    $scope.addressCitys[type + index] = data.addressCitys;
                }else{
                    layer.msg(data.message);
                }
            });
        }else{
            $scope.addressCitys[type + index] = [];
        }
    };
    /**
     * 监听省级列表切换事件
     * 根据code获取市区地址列表
     */
    $rootScope.form.on('select(addressProvince)', function(data){
        $scope.initAddressCity(data.value,$(data.elem).data("index"),$(data.elem).data("type"));
    });
    /**
     * 监听所有下拉列表切换事件
     * 动态改变相应数据属性值，为提交数据做准备
     */
    $rootScope.form.on('select', function(data){
        var $select = $(data.elem),
            index = $select.data("index"),
            key = $select.data("key");
        for (var i in $scope.tabArr){
            if ($scope.tabArr[i].index == index){
                $scope.tabArr[i].data[key] = data.value;
                return false;
            }
        }
    });
    /**
     * 监听所有复选框切换事件
     * 动态改变相应数据属性值，为提交数据做准备
     */
    $rootScope.form.on('checkbox', function(data){
        var $select = $(data.elem),
            index = $select.data("index"),
            key = $select.data("key"),
            id = $select.data("id"),
            isChecked = data.elem.checked;
        for (var i in $scope.tabArr){
            if ($scope.tabArr[i].index == index){
                if (isChecked){
                    $scope.tabArr[i].data[key].push(id);
                }else{
                    for (var j in $scope.tabArr[i].data[key]){
                        if ($scope.tabArr[i].data[key][j] == id){
                            $scope.tabArr[i].data[key].splice(j,1); //从数组中移除匹配到的数组元素
                            break;
                        }
                    }
                }
                return false;
            }
        }
    });
    /**
     * 监听客户类型列表切换事件
     * 根据clienteleType切换DOM
     */
    $rootScope.form.on('select(clienteleType)', function(data){
        var $select = $(data.elem),
            index = $select.data("index");
        for (var i in $scope.tabArr){
            if ($scope.tabArr[i].index == index){
                $scope.tabArr[i].clienteleType = data.value;
                $scope.$apply(); //调用$apply方法手动触发双向数据绑定
                return false;
            }
        }
    });
    /**
     * 初始化合同客户列表
     */
    $scope.init = function (pageNum) {
        var para = {};
        para.data = {};
        para.pageSize = $scope.pageSize;
        para.pageNum = pageNum;
        para.data.clienteleNameSearch = $scope.clienteleNameSearch;
        para.data.operationSonCompanySearch = $scope.operationSonCompanySearch;
        para.data.clienteleLevelSearch = $("#clienteleLevelSearch").find(".layui-this").attr("lay-value");
        para.data.clienteleNoSearch = $scope.clienteleNoSearch;
        para.data.clienteleTypeSearch = $("#clienteleTypeSearch").find(".layui-this").attr("lay-value");
        para.data.clienteleStatusSearch = []; //客户状态以数组的形式提交给后台
        $("#clienteleStatusSearch input").each(function (index,ele) {
            if ($(this).next().hasClass("layui-form-checked")){
                para.data.clienteleStatusSearch.push($(this).data("id"));
            }
        });
        $http({
            method : 'POST',
            url : config.api_host + 'limit/api/limitList',
            data : JSON.stringify(para),
            headers : {
                'Content-Type': 'application/json',
                "X-Token": $rootScope.token,
                "X-Request-Type":"ajax"
            }
        }).success(function(data) {
            if (data.success) {
                $scope.clienteles = data.clienteles;
                $scope.clienteleLength = data.clienteleLength;
                //数据加载完成进行分页组件渲染
                $rootScope.laypage({
                    cont: 'page'
                    ,pages: data.pages
                    ,curr: pageNum
                    ,skip: true
                    ,jump: function(obj, first) {
                        if (!first) {
                            $scope.init(obj.curr);
                        }
                    }
                });
            }else{
                layer.msg(data.message);
            }
        });
    };
    /**
     * 常用收货信息
     */
    $scope.openReceiptMsg = function (clientele) {
        var modalInstance = $uibModal.open({
            size: 'lg',
            animation: true,
            templateUrl: 'view/content/clientele/receiptMsg.html',
            controller: 'receiptMsgController',
            resolve: {
                clientele: function () {
                    return clientele;
                },
                addressProvinces: function () {
                    return $scope.addressProvinces;
                }
            }
        });
    };
    /**
     * 常用货品信息
     */
    $scope.openGoodsMsg = function (clientele) {
        var modalInstance = $uibModal.open({
            size: 'lg',
            animation: true,
            templateUrl: 'view/content/clientele/goodsMsg.html',
            controller: 'goodsMsgController',
            resolve: {
                clientele: function () {
                    return clientele;
                }
            }
        });
    };
    /**
     * 新增选项卡
     * 点击新增按钮/客户名称，增加一个选项卡
     */
    $scope.addTab = function (title,data,index,type,clienteleType) {
        if (index != -1){
            for (var i in $scope.tabArr){
                if ($scope.tabArr[i].index == index){
                    $("#tab"+index).click();
                    return false;
                }
            }
            $scope.isDisabled["dis" + index] = true; //控制表单是否禁用以及相关操作控件的显示与隐藏
        }else{
            data.clienteleNo = index = base.getTimeStamp(); //新增按钮，获取当前系统时间戳，作为客户编码使用，同时赋值给index作为新增选项卡唯一ID
            data.createTime = base.dateFormat(new Date()); //新增按钮，获取当前系统标准时间格式，作为创建时间使用
            data.settlementMsg = []; //新增合同页面初始化一个账户组件
            data.settlementMsg.push({});
            $scope.isDisabled["dis" + index] = false; //控制表单是否禁用以及相关操作控件的显示与隐藏
        }
        $scope.tabArr.push({
            title : title,
            data : data,
            index : index,
            type : type,
            clienteleType : clienteleType
        });
    };
    /**
     * 删除选项卡
     * 点击选项卡的删除按钮，删除一个选项卡
     */
    $(document).on("click",".layui-tab-close",function(){
        var index = $(this).parent("li").data("index");
        for (var i in $scope.tabArr){
            if ($scope.tabArr[i].index == index){
                $scope.tabArr.splice(i,1); //从数组中移除匹配到的数组元素
                delete $scope.addressCitys["arr" + index]; //删除指定元素后，删除相应市级对象属性
                delete $scope.addressCitys["ori" + index]; //删除指定元素后，删除相应市级对象属性
                delete $scope.addressCitys["des" + index]; //删除指定元素后，删除相应市级对象属性
                delete $scope.isDisabled["dis" + index]; //删除指定元素后，删除相应是否禁用对象属性
                // delete $scope.oldData["old" + index]; //删除指定元素后，删除相应原始数据对象属性
                break;
            }
        }
    });
    /**
     * 添加结款信息
     * 点击添加结款信息按钮，增加一个账户组件
     */
    $scope.addSettlementMsg = function (arr) {
        arr.push({
            openBankName : "",
            invoiceName : "",
            bankNum : "",
            taxNum : "",
            dynamic : true //用户控制点击添加结款信息按钮时，新增组件是否有动画效果以及是否有删除按钮
        });
    };
    /**
     * 删除结款信息
     * 点击删除结款信息按钮，删除相应的账户组件
     */
    $scope.delSettlementMsg = function (arr,index) {
        arr.splice(index,1); //从数组中移除指定索引位置的数组元素
    };
    /**
     * 点击编辑按钮
     */
    $scope.editBtn = function (arr) {
        // $scope.oldData['old' + arr.index] = angular.copy(arr.data); //调用copy方法保存静态变量，阻止双向数据绑定
        $scope.isDisabled['dis' + arr.index] = !$scope.isDisabled['dis' + arr.index];
        base.formRender();
    };
    /**
     * 点击取消按钮
     */
    // $scope.cancelBtn = function (arr) {
    //     arr.data = $scope.oldData['old' + arr.index];
    //     $scope.isDisabled['dis' + arr.index] = !$scope.isDisabled['dis' + arr.index];
    //     base.formRender();
    // };
    //页面加载完成执行定义方法
    base.elementRender();
    // $scope.initClienteleLevel();
    // $scope.initClienteleType();
    // $scope.initClienteleStatus();
    // $scope.init(1);
    // $scope.initAddressProvince();
    // $scope.initBusinessType();
    // $scope.initSettlementMethod();
    // $scope.initPayMethod();
    // $scope.initTransportMethod();
    // $scope.initSignedCompany();
    // $scope.initOperationSonCompany();
    // $scope.initPartnerBusiness();
    /**
     * 测试数据
     */
    //客户级别
    $scope.clienteleLevels = [
        {
            id : "0",
            comment : "战略客户"
        },
        {
            id : "1",
            comment : "VIP客户"
        },
        {
            id : "2",
            comment : "项目客户"
        },
        {
            id : "3",
            comment : "大客户"
        },
        {
            id : "4",
            comment : "普通客户"
        }
    ];
    //客户类型
    $scope.clienteleTypes = [
        {
            id : "0",
            comment : "临时客户"
        },
        {
            id : "1",
            comment : "合同客户"
        }
    ];
    //客户状态
    $scope.clienteleStatuss = [
        {
            id : "0",
            comment : "正在合作"
        },
        {
            id : "1",
            comment : "停止业务"
        },
        {
            id : "2",
            comment : "停止合作"
        }
    ];
    //行业类别
    $scope.businessTypes = [
        {
            id : "0",
            comment : "农林牧渔"
        },
        {
            id : "1",
            comment : "医药卫生"
        },
        {
            id : "2",
            comment : "建筑建材"
        },
        {
            id : "3",
            comment : "治金矿产"
        },
        {
            id : "4",
            comment : "石油化工"
        }
    ];
    //结款方式
    $scope.settlementMethods = [
        {
            id : "0",
            comment : "月结付款"
        },
        {
            id : "1",
            comment : "日结付款"
        },
        {
            id : "2",
            comment : "返单付款"
        },
        {
            id : "3",
            comment : "货到付款"
        }
    ];
    //支付方式
    $scope.payMethods = [
        {
            id : "0",
            comment : "现金"
        },
        {
            id : "1",
            comment : "银行卡"
        },
        {
            id : "2",
            comment : "支票"
        },
        {
            id : "3",
            comment : "承兑"
        },
        {
            id : "4",
            comment : "电子支付"
        }
    ];
    //运输方式
    $scope.transportMethods = [
        {
            id : "0",
            comment : "汽车"
        },
        {
            id : "1",
            comment : "铁路"
        },
        {
            id : "2",
            comment : "航空"
        },
        {
            id : "3",
            comment : "船舶"
        }
    ];
    //签约公司
    $scope.signedCompanys = [
        {
            id : "0",
            comment : "华谊兄弟"
        },
        {
            id : "1",
            comment : "新潮传媒"
        }
    ];
    //运营分公司
    $scope.operationSonCompanys = [
        {
            id : "0",
            comment : "物流部"
        },
        {
            id : "1",
            comment : "快运部"
        }
    ];
    //合作业务
    $scope.partnerBusinesss = [
        {
            id : "0",
            comment : "干线"
        },
        {
            id : "1",
            comment : "提货"
        },
        {
            id : "2",
            comment : "配送"
        },
        {
            id : "3",
            comment : "仓储"
        }
    ];
    //省市
    $scope.addressProvinces = [
        {
            id : "0",
            comment : "北京市"
        },
        {
            id : "1",
            comment : "安徽省"
        },
        {
            id : "2",
            comment : "江苏省"
        },
        {
            id : "3",
            comment : "山东省"
        },
        {
            id : "4",
            comment : "辽宁省"
        }
    ];
    //市区
    $scope.addressCitys["arr1"] = [
        {
            id : "0",
            comment : "六安市"
        },
        {
            id : "1",
            comment : "滁州市"
        },
        {
            id : "2",
            comment : "合肥市"
        },
        {
            id : "3",
            comment : "淮南市"
        },
        {
            id : "4",
            comment : "蚌埠市"
        }
    ];
    //合同客户列表
    $scope.clienteles = [
        {
            index : 1,
            type : 1,
            clienteleName : "上海九阳有限公司",
            clienteleNo : "001",
            clienteleTypeComment : "合同客户",
            clienteleTypeId : "1",
            clienteleLevelComment : "战略客户",
            clienteleLevelId : "0",
            operationSonCompanyComment : "物流部",
            operationSonCompanyId : "0",
            createTime : "2017-10-02 10:20",
            contactPerson : "赵长永",
            clienteleStatusComment : "正在合作",
            clienteleStatusId : "0",
            businessTypeComment : "医药卫生",
            businessTypeId : "1",
            receiptMsg : "2",
            goodsMsg : "1",
            addressProvinceComment : "安徽省",
            addressProvinceId : "1",
            addressCityComment : "滁州市",
            addressCityId : "1",
            addressDetail : "上海市嘉定区江桥镇嘉海雅苑",
            legalPerson : "黄远程",
            legalPersonPhone : "13888888888",
            contactPersonPosition : "web前端工程师",
            contactPersonPhone : "18317122176",
            contactPositionTelephone : "021-57245211",
            transportMethod : ["0"],
            clienteleShortName : "上海九阳",
            oldSystemCode : "007",
            signedCompanyComment : "华谊兄弟",
            signedCompanyId : "0",
            creditQuota : "3000",
            mainProduct : "养猪",
            partnerBusiness : ["0","1"],
            businessLicense : "62545854652",
            reconciliationContactPerson : "张会计",
            reconciliationPhone : "02157245233",
            settlementMethodComment : "返单付款",
            settlementMethodId : "2",
            payMethodComment : "电子支付",
            payMethodId : "4",
            settlementMsg : [
                {
                    openBankName : "中国建设银行",
                    invoiceName : "阿里巴巴股份有限公司",
                    bankNum : "6228482590870878210",
                    taxNum : "663525"
                },
                {
                    openBankName : "中国交通银行",
                    invoiceName : "微软华创科技有限公司",
                    bankNum : "6212521545458585623",
                    taxNum : "332389"
                }
            ],
            originAddressProvinceComment : "安徽省",
            originAddressProvinceId : "1",
            originAddressCityComment : "淮南市",
            originAddressCityId : "3",
            originAddressDetail : "丰乐大道503号",
            receiverName : "蒙牛加工厂",
            destinationAddressProvinceComment : "安徽省",
            destinationAddressProvinceId : "1",
            destinationAddressCityComment : "淮南市",
            destinationAddressCityId : "3",
            destinationAddressDetail : "丰乐大道503号",
            receiverContactPersonPhone : "13512195862",
            receiverContactPositionTelephone : "02156962906"
        },
        {
            index : 2,
            type : 0,
            clienteleName : "杭州九阳有限公司",
            clienteleNo : "002",
            clienteleTypeComment : "临时客户",
            clienteleTypeId : "0",
            clienteleLevelComment : "项目客户",
            clienteleLevelId : "2",
            operationSonCompanyComment : "物流部",
            operationSonCompanyId : "0",
            createTime : "2017-10-02 10:20",
            contactPerson : "李嘉欣",
            clienteleStatusComment : "停止合作",
            clienteleStatusId : "2",
            businessTypeComment : "医药卫生",
            businessTypeId : "1",
            receiptMsg : "0",
            goodsMsg : "0",
            addressProvinceComment : "江苏省",
            addressProvinceId : "2",
            addressCityComment : "滁州市",
            addressCityId : "1",
            addressDetail : "上海市嘉定区江桥镇嘉海雅苑",
            legalPerson : "黄远程",
            legalPersonPhone : "13888888888",
            contactPersonPosition : "web前端工程师",
            contactPersonPhone : "18317122176",
            contactPositionTelephone : "021-57245211",
            transportMethod : ["0","2"],
            clienteleShortName : "杭州九阳",
            oldSystemCode : "007",
            signedCompanyComment : "华谊兄弟",
            signedCompanyId : "0",
            creditQuota : "3000",
            mainProduct : "养猪",
            partnerBusiness : ["0","1","2"],
            businessLicense : "62545854652",
            reconciliationContactPerson : "张会计",
            reconciliationPhone : "02157245233",
            settlementMethodComment : "返单付款",
            settlementMethodId : "2",
            payMethodComment : "电子支付",
            payMethodId : "4",
            settlementMsg : [
                {
                    openBankName : "中国建设银行",
                    invoiceName : "阿里巴巴股份有限公司",
                    bankNum : "6228482590870878210",
                    taxNum : "663525"
                },
                {
                    openBankName : "中国交通银行",
                    invoiceName : "微软华创科技有限公司",
                    bankNum : "6212521545458585623",
                    taxNum : "332389"
                }
            ],
            originAddressProvinceComment : "安徽省",
            originAddressProvinceId : "1",
            originAddressCityComment : "淮南市",
            originAddressCityId : "3",
            originAddressDetail : "丰乐大道503号",
            receiverName : "蒙牛加工厂",
            destinationAddressProvinceComment : "安徽省",
            destinationAddressProvinceId : "1",
            destinationAddressCityComment : "淮南市",
            destinationAddressCityId : "3",
            destinationAddressDetail : "丰乐大道503号",
            receiverContactPersonPhone : "13512195862",
            receiverContactPositionTelephone : "02156962906"
        }
    ];
    $scope.clienteleLength = 2;
    $rootScope.laypage({
        cont: 'page'
        ,pages: 100
        ,curr: 1
        ,skip: true
        ,jump: function(obj, first) {
            if (!first) {
                layer.msg('第 ' + obj.curr + ' 页');
            }
        }
    });
});
