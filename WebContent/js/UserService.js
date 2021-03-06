/**
 * UserService
 */
app.factory('UserService',function($http){
	var userService={}
	userService.registerUser=function(user){
		return $http.post("http://localhost:9090/backend/saveuser",user)
	}
	userService.login=function(user){
		return $http.post("http://localhost:9090/backend/login",user)
	}
	userService.logout=function(){
		return $http.get("http://localhost:9090/backend/logout")
	}
	return userService;
})