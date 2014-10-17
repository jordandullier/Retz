function GameCtrl($scope){
	var solution = ["C","R","E","U","T","E","S"];

	$scope.checkAnswer=function(){
		var goodAnswer= true;
	    $('.jeu_input').each(function(index){
			if($(this).val().toLowerCase()!=solution[index].toLowerCase()){
				goodAnswer =false;
				return false;
			}
		});

		if(goodAnswer==true){
			$('#jeu_result').html("<p style='color:green'>Bonne réponse.</p>");
		}else{
			 $('#jeu_result').html("<p style='color:red'>Mauvaise réponse.</p>");
		}
	}


	function hideKeyboard(element) {
	    element.attr('readonly', 'readonly'); // Force keyboard to hide on input field.
	    element.attr('disabled', 'true'); // Force keyboard to hide on textarea field.
	    setTimeout(function() {
	        element.blur();  //actually close the keyboard
	        // Remove readonly attribute after keyboard is hidden.
	        element.removeAttr('readonly');
	        element.removeAttr('disabled');
	    }, 100);
	}

	$('.jeu_input').keyup(function(){
		hideKeyboard($(this));
	});

	document.addEventListener("hidekeyboard", 
		function(){
		 $('.nav').show();
		}, false);

	document.addEventListener("showkeyboard", 
		function(){
		 $('.nav').hide();
		}, false);

	$('.jeu_input').focus(function(){
		$(this).val('');
	});

}
