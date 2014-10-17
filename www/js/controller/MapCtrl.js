function MapCtrl($scope){

	window.addEventListener("orientationchange", function() {
		$('.nav').show();
		//alert(window.orientation);
	});

   	$scope.menu = 'map';
   	window.plugins.orientationLock.lock("landscape");


  	$scope.lancerMap=function(){
    	$scope.menu='map';
    	//alert($scope.menu);
    }

    $scope.paysage=function(){
    	$scope.menu='contenuMap';
    	window.plugins.orientationLock.lock("landscape");
    }

      $scope.$on('$routeChangeStart', function(next, current) { 
		//alert("changement de route");
		//alert("evevt route " + $scope.menu);

		if($scope.menu=="scan"){
			//window.plugins.orientationLock.unlock();
			//$location.path("/home");
			window.location.replace("index.html");
			//$orientation = "portrait";
			//alert($orientation);	
		}else{

			/*if($scope.menu=='map' && $orientation=="paysage"){
				//window.location.replace("index.html");

			else*/ if($scope.menu=='map'){
				window.plugins.orientationLock.lock("landscape");
	    		$orientation="paysage";
	    		//alert($orientation);
	    		//window.location.replace("index.html");
			}
			
			else if($scope.menu!="map" && $scope.menu!=undefined && $scope.menu!="scan" && $orientation=="paysage"){
				$orientation = "portrait";
				//alert($orientation);
				window.plugins.orientationLock.unlock();
			}

			else if($scope.menu!="map" && $scope.menu==undefined && $orientation=="paysage"){
				$orientation = "portrait";
				//alert($orientation);
				window.plugins.orientationLock.unlock();
			}
		}

		

		//alert(window.plugins.orientationLock);
		//console.log(next);
		//console.log(current);
	});


}