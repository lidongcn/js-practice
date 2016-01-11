/**
         * 保存规则 Rules
         */

        $scope.saveRules = function () {
            // 验证表单, 成功后保存
            validator.validate('tradeForm', function () {
                Confirm({
                    title       : '确认保存',
                    content     : '请确认是否保存当前设置',
                    clickedClose: true,
                    ok          : function () {
                        Rules.save($scope.param, function (result) {
                            // 如果保存成功, 重新查询
                            if (result.success) {
                                alertMsg.success('保存成功!');
                                //$scope.getRules($stateParams);
                                $scope.getByActionCode(function (queryParams) {
                                    $scope.getRules(queryParams);
                                    $scope.getRelations();
                                });
                            } else {
                                alertMsg.error('保存失败！原因：' + result.msg);
                            }
                        });
                    }
                });
            });
        };