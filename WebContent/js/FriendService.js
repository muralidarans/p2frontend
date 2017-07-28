/**
 * 
 */
app.factory('FriendService',function($http){
	var friendService={};
	friendService.suggestedUsers=function(){
		return $http.get("http://localhost:9090/backend/suggesteduserslist")
	}
	friendService.sendFriendRequest=function(toUsername){
		return $http.get("http://localhost:9090/backend/friendrequest/"+toUsername);
		
	}
	friendService.pendingRequest=function(){
		return $http.get("http://localhost:9090/backend/pendingrequests")
	}
	friendService.updatePendingRequest=function(fromId,status){
		return $http.put("http://localhost:9090/backend/updatePendingRequest/"+fromId+"/"+status);
	}
	friendService.listOfFriends=function(){
		return $http.get("http://localhost:9090/backend/listOfFriends")
	}
	return friendService;
})