     消费送积分  
	   
	   /**
         * 设置开关
         */
        $scope.settingRelation = function () {

            //- 声明变量info  保存提示语
            var info = {
                title  : '开启确认',
                content: '请确认是否要打开消费积分发放?'
            };

            if ($scope.tradesIsOpen === 'Y') {

                var info = {
                    title  : '关闭确认',
                    content: '请确认是否要关闭消费积分发放?'
                }
            }

            Confirm({
                title: info.title,
                content: info.content,
                clickedClose: true,
                ok: function () {
                    if ($scope.relationId) {
                        Rules.openTrade({relationId: $scope.relationId}, function (open) {
                            if (open.success && open.data) {
                                var param = {relationId: $scope.relationId},
                                    data = {
                                        status: STATUS_MAP[$scope.tradesIsOpen]
                                    };

                                Relations.setting(param, data, function (result) {
                                    if (result.success) {
                                        $scope.getRelations();
                                    } else {
                                        alertMsg.error('设置开关失败！');
                                    }
                                });
                            } else {
                                alertMsg.error('规则不能为空！');
                            }
                        });
                    } else {
                        alertMsg.error('relationId为空！');
                    }
                }
            });
        };
