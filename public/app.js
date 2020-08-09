var list = document.getElementById("list");


function addTodo() {
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement('li');
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext)

    var deletebtn = document.createElement("button");
    var deletetext = document.createTextNode("DELETE");
    deletebtn.appendChild(deletetext);
    deletebtn.setAttribute("class","btn");
    deletebtn.setAttribute("onclick", "deleteItem(this)");


    var editbtn = document.createElement("button");
    var edittext = document.createTextNode("EDIT");
    editbtn.appendChild(edittext);
    editbtn.setAttribute("class", "btn");
    editbtn.setAttribute("onclick", "editItem(this)");

    li.appendChild(deletebtn);
    li.appendChild(editbtn);

    list.appendChild(li)
    todo_item.value = "";

    console.log(li)
}

function deleteItem(e){
     e.parentNode.remove()
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editvalue = prompt("Enter edit value", val);

    e.parentNode.firstChild.nodeValue = editvalue;
}

function deleteAll(){
    list.innerHTML = "";
}

