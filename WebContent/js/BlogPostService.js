/**
 * 
 */
app.factory('BlogPostService',function($http){
	var blogPostService={}
blogPostService.saveBlog=function(blogPost){
		alert("service called");
	return $http.post("http://localhost:9090/backend/saveblogpost",blogPost)
}

blogPostService.blogsApproved=function(){
	//return $http.get("http://locahost:9090/backend/listofblogs")
	return $http.get("http://localhost:9090/backend/listofblogs/1")
}
blogPostService.blogsWaitingForApproval=function(){
	return $http.get("http://localhost:9090/backend/listofblogs/0")
}
blogPostService.getBlogPost=function(id){
	return $http.get("http://localhost:9090/backend/getblogpost/"+id)
}
blogPostService.updateBlogPost=function(blogpost){
	return $http.put("http://localhost:9090/backend/updateblogpost/",blogpost)
}
blogPostService.addComment=function(blogComment){
	return $http.get("http://localhost:9090/backend/addblogcomment/",blogComment)
}
blogPostService.getBlogComments=function(blogId){
	return $http.get("http://localhost:9090/backend/getblogcomments/"+blogId);
}
return blogPostService;
})