/*eslint-env browser*/
var output = 0;
var tasks = [];

//the object added to tasks - constructor for obj
function Node(text, timestamp) {
    this.text = text;
    this.timestamp = timestamp;
}

//adds the task to the list
function addTask() {
    if (document.getElementById("inp").value === "") {
        alert("please add something to the list...")
    } else {
        //variables
        var list = document.getElementById("list");
        var input = document.getElementById("inp").value;
        var node = document.createElement("LI");
        var lab = document.createElement("LABEL");
        var text = document.createTextNode(input);
        
        var checkbox = document.createElement("INPUT");
        checkbox.setAttribute("class", "ccb");
        checkbox.setAttribute("name", "cb");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("onclick", "update()");

        //node.setAttribute("", input.value);
        lab.appendChild(text);
        node.appendChild(checkbox);
        node.appendChild(lab);

        //run update on tasks completed for output
        checkbox.addEventListener("change", function () {
            update();
        });

        var topNode = list.firstElementChild;

        //adds element on top
        list.insertBefore(node, topNode);
        //stores node in tasks
        var nd = new Node(text, Date.now());
        tasks.push(nd);

        //update the output
        update();
        
        //clean input field
        document.getElementById("inp").value = null;

        //log object list to console
        console.log(tasks);
    }
}

//Part 5 - this will update the x/t completed tasks-printout
function update() {

    output = 0; 
    let checkboxList = document.querySelectorAll("input[type=\"checkbox\"]");

    for (var i of checkboxList) {
        if (i.checked == true) {
            output += 1;
        }
    }
    document.getElementById("output").innerHTML = (output + "/" + checkboxList.length + " Completed.");
    
    //changing the color of the printout when all tasks complete
    if (output === checkboxList.length) {
        document.getElementById("output").style.color = "darkseagreen";
    } else {
        document.getElementById("output").style.color = "dimgrey";
    }
}

//populate tasks with initial objects !!! NOT WORKING !!!
function populate() {
    var li = Array.from(document.querySelectorAll("section>#list>li"));
    for(var i in li) {
        var lab = document.getElementByTagName("LABEL");
        var nd = new Node(lab, Date.now());
        tasks.push(nd);
        console.log(tasks);
    } 
}
