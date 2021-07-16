let input = document.querySelector("#add");
let btn = document.querySelector("#btn");
const list = document.querySelector("#list");
var el = document.getElementsByTagName('li');
var del= document.getElementsByClassName("delete");


// function for adding elements when we click the button
btn.onclick = function(){
    var txt = input.value.capitalize();
    if(txt == '')
        alert('you must write something!');
    
    else{
        li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li,list.childNodes[0]);
        var delbutt=document.createElement("button");
 	    delbutt.appendChild(document.createTextNode("Delete"));
 	    li.appendChild(delbutt);
        input.value='';

        // Register action on newly added elements
        delbutt.addEventListener("click", deleteListElement);
    }
};

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

for( var i=0;i<del.length;i++){
	del[i].addEventListener("click", deleteListElement);
}

// function for checking the clicked elements
list.onclick = function(e){
    if(e.target.tagName == 'LI')
        e.target.classList.toggle('checked');
        console.log(e.target.tagName);
};



function deleteListElement(){
    this.parentElement.remove(); // remove parent, since button is child
  
  }
