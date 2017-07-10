/**
 * 
 */
app.controller('UserController',function(UserService,$rootscope,$scope,$location){
	$scope.register=function(){
		alert("input " + angular.toJson($scope.user));
		UserService.registerUser($scope.user).then(function(response){
			$scope.message="registered successfully.....please login.. "
				$location.path("/login");
		},function(response){
			alert("errr" + response.data);
			$scope.error=response.data;
			$location.path("/registration");
		});
	}
	$scope.login=function(){
		UserService.login($scope.user).then(function(response){
			$rootscope.currentUser=response.data
			$cookieStore.put("currentUser",response.data)
			$location.path('/home')
		},function(response){
		$scope.error=response.data
		$location.path("/login")
		
		});
}
});