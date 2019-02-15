$(document).ready(function(){
	var $resultPETE = $("#recycle-1") 
	var $resultHDPE = $("#recycle-2")

	$(".btn-click").click(function(event){
		event.preventDefault();
		$(".search-container").hide();
	});
	
	var $recyclePETElist = ['bottle', 'bottles', 'plastic bottle', 'plastic bottles', 'water', 'water bottle', 'water bottles', 'soda','soda bottle', 'soda bottles', 'soft drink', 'soft drinks', 'soft drink bottle', 'soft drink bottles', 'container', 'containers', 'food container', 'food containers', 'package', 'packaging', 'food packaging'];
	
	var $recycleHDPElist = ['milk', 'milk jug', 'milk jugs', 'jug', 'jugs', 'household cleaner', 'clearn', 'container', 'containers', 'ceral box', 'liners', 'yogurt', 'yogurt container', 'yougurt containers'];
	

	// if user input value matches keyword, show div that's hidden
	$(".btn-click").click(function() {
		var $value = $(".searchTerm").val();

		for (var i = 0; i < $recyclePETElist.length; i++) {
			if ($value === $recyclePETElist[i]) {
				$resultPETE.show();
			}
		}
		for (var j = 0; j < $recycleHDPElist.length; j++) {
			if ($value === $recycleHDPElist[j]) {
				$resultHDPE.show();
			}
		}
		
	});

	
	$(".create-a-list").click(function(event){
		event.preventDefault();
		
		$(".search-container").hide();
		$(".result-container").hide(); 
		$(".recycle-list-container").show(); 
	});		
	
});