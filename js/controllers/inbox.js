var app = angular.module('myApp');

app.controller("InboxCtrl", function(InboxFactory){
	var ctrl = this;

	ctrl.header = { 
		title: "hello inbox" 
	};
	
	console.log("inboxctrl", InboxFactory);
	
});