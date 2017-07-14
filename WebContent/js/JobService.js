/**
 * 
 */
app.factory('JobService',function($http){
	var jobService={}
	jobService.savejob=function(job){
		return $http.post("http://localhost:9090/backend/saveAllJob",job)
	}
	jobService.getAllJobs=function(){
		return $http.get("http://localhost:9090/backend/getAllJobs")
	}
	return jobService;
})
