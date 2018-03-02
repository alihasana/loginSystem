var app = angular.module('app', [
  'ui.router',
]);

// CONFIG
app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');

  var login = {
    name: 'login',
    url: '/login',
    component: 'login'
  };
  var register = {
    name: 'register',
    url: '/register',
    component: 'register'
  };
  var users = {
    name: 'users',
    url: '/users',
    component: 'users'
  };
  var profile = {
    name: 'profile',
    url: '/users/{userId}',
    component: 'profile'
  };

  $stateProvider.state(login);
  $stateProvider.state(register);
  $stateProvider.state(users);
  $stateProvider.state(profile);
});

// COMPONENTS
app.component('login', {
  templateUrl: 'components/login/login.html',
  controller: 'loginController',
});
app.component('register', {
  templateUrl: 'components/register/register.html',
  controller: 'registerController',
});
app.component('user', {
  templateUrl: 'components/users/users.html',
  controller: 'usersController',
});
app.component('user', {
  templateUrl: 'components/users/user.html',
  controller: 'userController',
});

// CONTROLLERS
app.controller('loginController', function ($scope) {

 });

app.controller('registerController', function ($scope) {
  $scope.addNewApp = addNewApp;

  function addNewApp() {
    var data = {
      'email': $scope.email,
      'password': $scope.password,
    };
    $http.post('http://localhost:8000/auth/register', data)
      .then(
      function (res) {
        alert(res.data.message);
      },
      function (res) {
        alert(res.data.message);
      }
      );
  };
 });

app.controller('usersController', function ($scope) {
  $scope.users = [];
  function updateListAppMod() {
    $http.get('http://localhost:8000/users')
      .then(
      function (res) {
        $scope.users = res.data.data;
      }
      );
 });
 
app.controller('userController', function ($scope) { });
