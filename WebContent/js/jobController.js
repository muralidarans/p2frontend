/**
 * jobcontroller
 */
app.controller('jobController',function($scope,$location,JobService){

	$scope.jobs=JobService.getAllJobs().then(function(response){
		$scope.jobs=response.data;
	},function(response){
		$scope.message=response.data.message
		$location.path('/login')
	
	})
	
	$scope.saveJob=function(){
	JobService.savejob($scope.job).then(function(response){
		$location.path('/getAllJobs')
	},function(response){
	$scope.message=response.data.message
	if (response.status==401)
		$location.path('/login')
		if(response.status==500)
			$location.path('/saveAllJob')
	})
	}
})