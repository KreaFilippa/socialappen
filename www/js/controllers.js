angular.module('app.controllers', [])

    .controller('homeCtrl', function($scope, ChatService, $ionicLoading) {

        var errorHandler = function(options) {
            var errorAlert = $ionicPopup.alert({
                title: options.title,
                okType: 'button-assertive',
                okText: "Try Again"
            });
        }


        $scope.viewchat = function(chat) {
            console.log(chat)
        }
        $ionicLoading.show();
        ChatService.getUserChats()
            .then(
            function(response) {
                $scope.chats = response.data;
                $ionicLoading.hide();
            }, function(error) {
                $ionicLoading.hide();
                errorHandler({
                    title: "<h4 class='center-align'>Something went wrong</h4>"
                })
            })

    })

    .controller('chatDetailsCtrl', function($scope, $stateParams,  ChatService, $ionicLoading) {
        $scope.send = function (message){
            console.log("New Message",message)
            ChatService.addNewMessage(
                {
                chat: [
    "570d16a0c33fc4e05dae01e5"
  ],
  "owner": "5708f503ea731cc530dd3ac6",
  "text": message
                
        })}

        console.log("stateParams", $stateParams)
        $ionicLoading.show();
        ChatService.getMessages($stateParams.chatid)
            .then(
            function(response) {
                $scope.messages = response.data;
                $ionicLoading.hide();
            }, function(error) {
                $ionicLoading.hide();
            })


    })

    .controller('chatCtrl', function($scope) {

    })

    .controller('profileCtrl', function($scope) {

    })

    .controller('loginCtrl', ["AccountService", "$state", "$rootScope", "$ionicLoading", "$ionicPopup", function(AccountService, $state, $rootScope, $ionicLoading, $ionicPopup) {

        var errorHandler = function(options) {
            var errorAlert = $ionicPopup.alert({
                title: options.title,
                okType: 'button-assertive',
                okText: "Try Again"
            });
        }

        var vm = this;

        vm.login = function() {
            $ionicLoading.show();
            Stamplay.User.login(vm.user)
                .then(function(user) {
                    $ionicLoading.hide();
                    $rootScope.user = user;
                    $state.go("tabsController.home");
                }, function(error) {
                    $ionicLoading.hide();
                    errorHandler({
                        title: "<h4 class='center-align'>Incorrect Username or Password</h4>"
                    })
                })
        }

        vm.signup = function() {
            $ionicLoading.show();
            Stamplay.User.signup(vm.user)
                .then(function(user) {
                    $rootScope.user = user;
                    $state.go("tabsController.home");
                }, function(error) {
                    errorHandler({
                        title: "<h4 class='center-align'>A Valid Email and Password is Required</h4>"
                    })
                    $ionicLoading.hide();
                })
        }

        vm.logout = function() {
            $ionicLoading.show();
            var jwt = window.location.origin + "-jwt";
            window.localStorage.removeItem(jwt);
            AccountService.currentUser()
                .then(function(user) {
                    $rootScope.user = user;
                    $ionicLoading.hide();
                }, function(error) {
                    console.error(error);
                    $ionicLoading.hide();
                })
        }
    }])

    .controller('signUpCtrl', function($scope) {

    })

    .controller('newChatCtrl', function($scope) {

    })

    .controller('friendsCtrl', function($scope) {

    })

    .controller('pageCtrl', function($scope) {

    })

    .controller('friends2Ctrl', function($scope) {

    })

    .controller('hesProfileCtrl', function($scope) {

    })

    .controller('shesProfileCtrl', function($scope) {

    })

    .controller('blogCtrl', function($scope) {

    })

    .controller('blog2Ctrl', function($scope) {

    })

    .controller('blog3Ctrl', function($scope) {

    })

    .controller('page2Ctrl', function($scope) {

    })
