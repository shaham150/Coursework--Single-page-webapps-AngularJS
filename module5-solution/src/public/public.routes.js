(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state("public.signup", {
      url: "/signup",
      templateUrl: "src/public/signup/sign-up.html",
      controller: "signupController",
      controllerAs: "signupCtrl",
      // resolve: {
      //   faveItem: ['SignupService', function (SignupService) {
      //     return SignupService.getFaveItem();
      //   }]
      // }
    })
    // .state("public.myinfo", {
    //   url: "/myinfo",
    //   templateUrl: "src/public/myinfo/my-info.html",
    //   controller: "myinfoController",
    //   controllerAs: "myinfoCtrl",
    //   resolve: {
    //     info: ['SignupService', function (SignupService) {
    //       console.log("in resolve:",SignupService.retrieveUserInfo());
    //       return SignupService.retrieveUserInfo();
    //     }]
    //   }
    // })
    .state("public.myinfo", {
      url: "/myinfo",
      controller: "myinfoController",
      controllerAs: "myinfoCtrl",
      template: `
      <div class="container" ng-if="myinfoCtrl.SignupService.userInfo == undefined">
        <h2>Not Signed Up Yet. <a ui-sref="public.signup">Sign up Now!</a></h2>
      </div>
      
      <div class="container" ng-if="!(myinfoCtrl.SignupService.userInfo == undefined)">
        <h2>Welcome, {{myinfoCtrl.SignupService.userInfo.fname}}!</h2>
        <h3>Your info:</h3>
        <strong>Full Name:</strong> {{myinfoCtrl.SignupService.userInfo.fname}} {{myinfoCtrl.SignupService.userInfo.lname}}<br/>
        <strong>Email:</strong> {{myinfoCtrl.SignupService.userInfo.email}}<br/>
        <strong>Phone:</strong> {{myinfoCtrl.SignupService.userInfo.phone}}<br/>
        <strong>Favorite Menu Item:</strong><br/>
        <img src="images/menu/{{myinfoCtrl.SignupService.parseMenuCode(myinfoCtrl.SignupService.faveMenuItem.short_name).menu}}/{{myinfoCtrl.SignupService.faveMenuItem.short_name}}.jpg" />
        <span width="50%">{{myinfoCtrl.SignupService.faveMenuItem.name}} - {{myinfoCtrl.SignupService.faveMenuItem.description}}</span>
      </div>`
    });
}
})();
