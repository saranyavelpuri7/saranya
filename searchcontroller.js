console.log("entered");

angular.module('myApp')

 .controller("searchController",searchController);
 function searchController($http){
    console.log("entered1");
var ctrl=this;
        ctrl.find='';     
this.search = function() {
      
        $http({
          method  : 'GET',
          url     : 'http://localhost:8080/profiles?q=' +ctrl.find,
           dataType: 'json'
            })
            .then(function success(response) {
               ctrl.message = response.data;
                console.log("Got search result: ", ctrl.message);
            }         );
     }
 };
