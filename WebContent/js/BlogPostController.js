/**
 * 
 */
app.controller('BlogPostController',function($scope,BlogPostService,$location){
	$scope.message=''
		$scope.saveBlogPost=function(){
		BlogPostService.saveBlog($scope.blogPost).then(function(response){
			$scope.success="blog post inserted successfully and wait for approval"
				alert("success")
				$location.path('/getallblogs')
		},function(response){
			$scope.message=response.data.message
			if(response.status==401){
				$location.path('/login')
			}
			if(response.status==500){
				$location.path('saveblogpost')
			}
		})
	}
	
	$scope.blogsApproved=
		BlogPostService.blogsApproved().then(function(response){
		$scope.blogsApproved=response.data;
		console.log("data" + response.data)
		},function(response){
			console.log("data" + response.statusText)
			console.log("status" + response.status)
		})
	
	$scope.blogsWaitingForApproval=
		BlogPostService.blogsWaitingForApproval().then(function(response){
			$scope.blogsWaitingForApproval=response.data;
			console.log("data" + response.data)
		},function(response){
			console.log("data" + response.statusText)
			console.log("status" + response.status)
		})
	
})
	

