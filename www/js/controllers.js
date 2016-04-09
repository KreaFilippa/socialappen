angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('chatCtrl', function($scope) {

})
   
.controller('profileCtrl', function($scope) {

})
         
.controller('loginCtrl',  ["AccountService", "$state", "$rootScope", "$ionicLoading", "$ionicPopup", function(AccountService, $state, $rootScope, $ionicLoading, $ionicPopup) {

  var errorHandler = function(options) {
    var errorAlert = $ionicPopup.alert({
      title: options.title,
      okType : 'button-assertive',
      okText : "Try Again"
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
        title : "<h4 class='center-align'>Incorrect Username or Password</h4>"
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
        title : "<h4 class='center-align'>A Valid Email and Password is Required</h4>"
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
 