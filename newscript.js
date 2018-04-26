var item = document.getElementById("shoppingitem");
var btn = document.getElementById("addtolistbtn");
var ul = document.querySelector("ul");

function inputLength(){
	return item.value.length;
}

function deleteItem(){

	this.parentNode.parentNode.removeChild(this.parentNode);
}

function addToList(){

	if(inputLength()>0){
		var li = document.createElement("li");
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(item.value));
		var itembutton = document.createElement("button");
		itembutton.innerHTML = "Delete";
		li.appendChild(itembutton);
		itembutton.setAttribute("id",item.value);
		ul.appendChild(li);
		var btnvariable = document.getElementById(item.value);
		btnvariable.addEventListener("click",deleteItem);

		item.value="";
	}
}

function addToListOnKeyPress(event){

	if(inputLength()>0 && event.which === 13){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(item.value));
		var itembutton = document.createElement("button");
		itembutton.innerHTML = "Delete";
		li.appendChild(itembutton);
		itembutton.setAttribute("id",item.value);
		ul.appendChild(li);
		var btnvariable = document.getElementById(item.value);
		btnvariable.addEventListener("click",deleteItem);

		item.value="";
			
	}
}

btn.addEventListener("click",addToList);

item.addEventListener("keypress",addToListOnKeyPress);