document.addEventListener("DOMContentLoaded", function () {

const table = document.getElementById("commentsTable");

let comments = JSON.parse(localStorage.getItem("superfitnessComments")) || [];

table.innerHTML = "";

comments.forEach((comment, index) => {

let row = document.createElement("tr");

row.innerHTML = `
<td>#${index + 1}</td>
<td>${comment.name}</td>
<td>${comment.email}</td>
<td>${comment.subject}</td>
<td>${comment.message}</td>
`;

table.appendChild(row);

});

});
