/**
 * 
 */
var app=angular.module("app",["ngRoute",'ngcookies'])
app.config(function($routeProvider){
$routeProvider
.when('/aboutus',{
	templateUrl:'views/aboutus.html',
	controller:'UserController'
})
.when('/login',{
	templateUrl:'views/login.html',
	controller:'UserController'
})
.when('/register',{
	templateUrl:'views/register.html',
controller:'UserController'
})
.otherwise({
templateUrl:'views/home.html',
controller:'UserController'
});
});
app.run(function($rootScope,$location,$cookieStore,UserService){
	if($rootScope.currentUser==undefined)
		$rootScope.currentUser=$cookieStore.get("currentUser")
		
		$rootscope.logout=function(){
		UserService.logout().then(function(response){
			$rootScope.message="loggedout successfuly"
				delete $rootScope.currentUser;
			$cookieStore.remove("currentUser")
			$location.path('/login')
		},function(response){
			console.log(response.status)
			$rootScope.message=response.data.message
			$location.path('/login')
		}
		})
	}
}