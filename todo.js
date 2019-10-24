var tasks = [];

function Node(text, timestamp) {
    this.text = text;
    this.timestamp = timestamp;
}

function addTask() {
    var list = document.getElementById("list");
    var input = document.getElementById("inp");
    var node = document.createElement("li");
    var text = document.createTextNode(input.value)

    node.setAttribute('id', input.value);
    node.appendChild(text);

    var topNode = list.firstElementChild;

    if (input.value === '') {
        alert("write something to add it...")
    } else {
        list.insertBefore(node, topNode);
        var nd = new Node(text, Date.now());
        tasks.push(nd);
    }
    input.value = "";
}
