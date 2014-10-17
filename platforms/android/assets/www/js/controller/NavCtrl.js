function NavCtrl($scope){
	if(window.orientation==90){
		window.plugins.orientationLock.unlock();
	}
	
		//window.plugins.orientationLock.unlock();
	
		$scope.menu = 'map';
   		$scope.menu = 'home';
   		var page = "";
  	

      $scope.lancerScan= function(){
    	$scope.menu='scan';

			cordova.plugins.barcodeScanner.scan(
		      function (result) {
		      	if(result.text!=""){
		      		    page = result.text;
	    				var redirect = window.open(result.text, '_blank','location=yes');
	    				redirect.addEventListener("exit", function(){
	    						  $location.path("/home");
	      						  $scope.$apply();
	    				});
	    		}
	    		//alert(window.orientation);
		      }, 
		      function (error) {
		          alert("Scanning failed: " + error);
		           $location.path("/home");
      				$scope.$apply();
		      }
   		);
			if(mailUser==""){
	      		mailUser=prompt('Saisir une adresse mail ','mail@mail.fr');
	      		//alert("01");
	      		ajouterLigneStat(page);
	      	}else{
	      		ajouterLigneStat(page);
	      	}
	      	
    }



      /*  $scope.$on('$routeChangeStart', function(next, current) { 
		//alert("changement de route");
		alert("evevt route " + $scope.menu);

		if($scope.menu=="scan"){
			//window.plugins.orientationLock.unlock();
			//$location.path("/home");
			window.location.replace("index.html");
			//$orientation = "portrait";
			//alert($orientation);	
		}else{

			if($scope.menu=='map'){
				window.plugins.orientationLock.lock("landscape");
	    		$orientation="paysage";
	    		alert($orientation);
			}
			
			else if($scope.menu!="map" && $scope.menu!=undefined && $scope.menu!="scan" && $orientation=="paysage"){
				$orientation = "portrait";
				alert($orientation);
				window.plugins.orientationLock.unlock();
			}

			else if($scope.menu!="map" && $scope.menu==undefined && $orientation=="paysage"){
				$orientation = "portrait";
				alert($orientation);
				window.plugins.orientationLock.unlock();
			}
		}

		

		//alert(window.plugins.orientationLock);
		//console.log(next);
		//console.log(current);
	});*/
}