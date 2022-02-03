var body = document.getElementsByTagName("body")[0];


var ourTable = document.createElement("table");
var ourTableBody = document.createElement("tbody");


for (var i = 0; i < 1000; i++) {

    var row = document.createElement("tr");

    for (var j = 0; j < 10; j++) {


        var cell = document.createElement("td");
        var cellText = document.createTextNode("cell in row " + i + ", column " + j);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }


    ourTableBody.appendChild(row);
}


ourTable.appendChild(ourTableBody);

body.appendChild(ourTable);

ourTable.setAttribute("border", "2");