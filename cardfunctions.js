function cardFunc(){
	var ctrl=this;
	this.fav=function(){
		console.log("entered");
	}
}
angular.module('myApp')   
    .component('myCardfunc',  {            
   templateUrl:"cardfunctions.html",
    controller:cardFunc
    

            
});   
