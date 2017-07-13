
var app=angular.module("app",["ngRoute",'ngCookies']);
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
.when('/saveAllJob',{
	templateUrl:'views/saveAllJob.html',
	controller:'jobController'
})
.when('/getAlljobs',{
	templateUrl:'views/jobTitles',
		controller:'jobController'
})
.otherwise({
templateUrl:'views/home.html',
controller:'UserController'
});
});

app.run(function($rootScope,$location,$cookieStore,UserService){
	if($rootScope.currentUser==undefined){
		$rootScope.currentUser=$cookieStore.get("currentUser");
	}
	$rootScope.logout=function(){
		
			$rootScope.message="loggedout successfuly"
			delete $rootScope.currentUser;
			$cookieStore.remove("currentUser")
			$location.path('/login')
	
		}
	});
	
