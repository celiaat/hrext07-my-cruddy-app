$(document).ready(function(){
	
	var userList = [];

	function createList() {

		var item = document.getElementById('userInput').value;
		var text = document.createTextNode(item);
		var checkbox = document.createElement('input');
		checkbox.name = "checkbox";
		checkbox.value = "done";
		checkbox.type = "checkbox";
		checkbox.className = "check";
		
		var newItem = document.createElement("li"); 
		newItem.className = "delete"
		newItem.appendChild(checkbox);
		newItem.appendChild(text);
		document.getElementById("todolist").appendChild(newItem);
		
		checkbox.addEventListener('click', delTask);
		
		userList.push(item);
		localStorage.setItem("todolist", JSON.stringify(userList));
		var storeRecyleList = JSON.parse(localStorage.getItem("todolist"))
		
		return clear();
	}
	
	function delTask() {
		var item = $(this).parents("li");
		item.remove();
	}
	
	function clear(){
		userInput.value = "";
	}
	

	$(".btn-add").click(function(event){
		event.preventDefault();
		var input = $('#userInput').val();
		createList(input);
	});
	
	$(".btn-delete").click(function(){
		localStorage.clear();
		$('#todolist').text('');
	});
});