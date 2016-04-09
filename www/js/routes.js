angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.chat', {
    url: '/newchat',
    views: {
      'tab2': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.profile'
      2) Using $state.go programatically:
        $state.go('tabsController.profile');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab4/profile
      /page1/tab3/profile
  */
  .state('tabsController.profile', {
    url: '/profile',
    views: {
      'tab4': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      },
      'tab3': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signUp', {
    url: '/signup',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('tabsController.newChat', {
    url: '/newchat',
    views: {
      'tab2': {
        templateUrl: 'templates/newChat.html',
        controller: 'newChatCtrl'
      }
    }
  })

  .state('tabsController.friends', {
    url: '/friends',
    views: {
      'tab4': {
        templateUrl: 'templates/friends.html',
        controller: 'friendsCtrl'
      }
    }
  })

  .state('page', {
    url: '/page9',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('tabsController.friends2', {
    url: '/friend',
    views: {
      'tab4': {
        templateUrl: 'templates/friends2.html',
        controller: 'friends2Ctrl'
      }
    }
  })

  .state('tabsController.hesProfile', {
    url: '/page11',
    views: {
      'tab4': {
        templateUrl: 'templates/hesProfile.html',
        controller: 'hesProfileCtrl'
      }
    }
  })

  .state('tabsController.shesProfile', {
    url: '/shesprofile',
    views: {
      'tab4': {
        templateUrl: 'templates/shesProfile.html',
        controller: 'shesProfileCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.blog'
      2) Using $state.go programatically:
        $state.go('tabsController.blog');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab4/blog
      /page1/tab3/blog
  */
  .state('tabsController.blog', {
    url: '/blog',
    views: {
      'tab4': {
        templateUrl: 'templates/blog.html',
        controller: 'blogCtrl'
      },
      'tab3': {
        templateUrl: 'templates/blog.html',
        controller: 'blogCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.blog2'
      2) Using $state.go programatically:
        $state.go('tabsController.blog2');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab4/blog
      /page1/tab3/blog
  */
  .state('tabsController.blog2', {
    url: '/blog',
    views: {
      'tab4': {
        templateUrl: 'templates/blog2.html',
        controller: 'blog2Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/blog2.html',
        controller: 'blog2Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.blog3'
      2) Using $state.go programatically:
        $state.go('tabsController.blog3');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab4/page16
      /page1/tab3/page16
  */
  .state('tabsController.blog3', {
    url: '/page16',
    views: {
      'tab4': {
        templateUrl: 'templates/blog3.html',
        controller: 'blog3Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/blog3.html',
        controller: 'blog3Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.page2'
      2) Using $state.go programatically:
        $state.go('tabsController.page2');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab4/page15
      /page1/tab3/page15
  */
  .state('tabsController.page2', {
    url: '/page15',
    views: {
      'tab4': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      },
      'tab3': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')

  

});