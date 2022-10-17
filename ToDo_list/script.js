function addtolist()
{
    var taskname = document.getElementById('taskname').value
    var tododiv = document.getElementById('mytodo')
 
    var newtodoitem = document.createElement('div')

    var todoname = document.createElement('li')
    todoname.innerText = taskname
    
    var deletebtn = document.createElement('i')
    deletebtn.classList.add('far')
    deletebtn.classList.add('fa-trash-alt')

    newtodoitem.appendChild(todoname)
    newtodoitem.appendChild(deletebtn)

    var hrLine = document.createElement('hr')

    tododiv.appendChild(newtodoitem)
    tododiv.appendChild(hrLine)
}

var tododiv = document.getElementById('mytodo')
tododiv.addEventListener('click', deleteitem)

function deleteitem(e)
{
    const element = e.target
    if(element.classList[0]=='far')
    {
        element.parentElement.remove()
    }
}

// Adding the todo item using the Enter key

var input = document.getElementById("taskname");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btnclick").click();
  }
});