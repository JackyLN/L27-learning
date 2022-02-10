var body = document.getElementsByTagName("body")[0];


var ourTable = document.createElement("table");
ourTable.classList.add("centertx");
var ourTableBody = document.createElement("tbody");

url = "http://api.l27.lazychord.com/api/sale"
const data = fetch(url, {
  headers: {
    'Content-Type': 'application/json',
  }
}).then(res => {
  const status = res.status;
  if (status != 200) {
    console.log("Internal error", res);
  }
  return res.json();
}).then(res => {
  drawData(res);
})


const drawData = (data) => {
  
  data.forEach(e => {
    var row = document.createElement("tr"); //draw tr
    var cell1 = document.createElement("td"); //draw td
    var cellText1 = document.createTextNode(e.title);
    cell1.appendChild(cellText1);
    row.appendChild(cell1);

    var cell2 = document.createElement("td"); //draw td
    var cellText2 = document.createTextNode(e.first);
    cell2.appendChild(cellText2);
    row.appendChild(cell2);

    var cell3 = document.createElement("td"); //draw td
    var cellText3 = document.createTextNode(e.last);
    cell3.appendChild(cellText3);
    row.appendChild(cell3);

    var cell4 = document.createElement("td"); //draw td
    var cellText4 = document.createTextNode(e.email);
    cell4.appendChild(cellText4);
    row.appendChild(cell4);

    var cell5 = document.createElement("td"); //draw td
    var cellText5 = document.createTextNode(e.birthday);
    cell5.appendChild(cellText5);
    row.appendChild(cell5);

    var cell6 = document.createElement("td"); //draw td
    var cellText6 = document.createTextNode(e.interestedin);
    cell6.appendChild(cellText6);
    row.appendChild(cell6);

    var cell7 = document.createElement("td"); //draw td
    var cellText7 = document.createTextNode(e.shoppingsection);
    cell7.appendChild(cellText7);
    row.appendChild(cell7);

    var cell8 = document.createElement("td"); //draw td
    var cellText8 = document.createTextNode(e.contact_upcoming_event);
    cell8.appendChild(cellText8);
    row.appendChild(cell8);

    var cell9 = document.createElement("td"); //draw td
    var cellText9 = document.createTextNode(e.contact_exclusive_deals);
    cell9.appendChild(cellText9);
    row.appendChild(cell9);

    var cell10 = document.createElement("td"); //draw td
    var cellText10 = document.createTextNode(e.contact_newsletter);
    cell10.appendChild(cellText10);
    row.appendChild(cell10);

    ourTableBody.appendChild(row);

  });
  ourTable.appendChild(ourTableBody);
  body.appendChild(ourTable);
  ourTable.setAttribute("border", "2");
}


// } 

// // for (var i = 0; i < 10; i++) {

// //     var row = document.createElement("tr");

// //     for (var j = 0; j < 5; j++) {


// //         var cell = document.createElement("td");
// //         var cellText = document.createTextNode("cell in row " + i + ", column " + j);
// //         cell.appendChild(cellText);
// //         row.appendChild(cell);
// //     }


// //     ourTableBody.appendChild(row);
// // }


// ourTable.appendChild(ourTableBody);

// body.appendChild(ourTable);

// ourTable.setAttribute("border", "2");