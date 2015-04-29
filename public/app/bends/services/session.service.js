angular
    .module('laravelAndAngular.bends.service')
    .factory('SessionService', SessionService);

SessionService.$inject = ['$http', 'utils'];
function SessionService($http, utils) {
  return{
    get:function(key){
		return sessionStorage.getItem(key);
	},
	set:function(key,val){
		return sessionStorage.setItem(key,val);
	},
	unset:function(key){
		return sessionStorage.removeItem(key);
	}
  }
};
