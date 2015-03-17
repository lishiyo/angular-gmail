'use strict';

var app = angular.module('myApp.services');

app.factory('InboxFactory', function InboxFactory ($q, $http, $location) {
	'use strict';
	var exports = {};
	exports.messages = [];
	
	// goToMessage
	exports.goToMessage = function(id) {
		if ( angular.isNumber(id) ) {
			$location.path('inbox/email/' + id);
		}
	};
	
	// this refers to the controller
	exports.deleteMessage = function(id, index) {
		this.messages.splice(index, 1);
	};

 	exports.getMessages = function () {
		var deferred = $q.defer();
		$http.get('json/emails.json')
			.success(function(data){
				exports.messages = data;
				console.log("success", exports.messages);
				deferred.resolve(data);
			}).error(function (data) {
				deferred.reject(data);
				console.log('There was an error!', data);
			});
		
		return deferred.promise;
   };

   return exports;
});
