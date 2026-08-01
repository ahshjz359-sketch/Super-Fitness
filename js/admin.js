document.addEventListener("DOMContentLoaded", function () {

// USERS TABLE
const usersTable = document.getElementById("usersTable");
let users = JSON.parse(localStorage.getItem("superfitnessUsers")) || [];

usersTable.innerHTML = "";

users.forEach((user, index) => {

let row = document.createElement("tr");

row.innerHTML = `
<td>#${index + 1}</td>
<td>${user.name}</td>
<td>${user.age}</td>
<td>${user.height}</td>
<td>${user.weight}</td>
<td>${user.goal}</td>
<td>${user.program}</td>
<td>${user.trainer}</td>
<td>$${user.price}</td>
`;

usersTable.appendChild(row);

});


// COMMENTS TABLE
const commentsTable = document.getElementById("commentsTable");
let comments = JSON.parse(localStorage.getItem("superfitnessComments")) || [];

commentsTable.innerHTML = "";

comments.forEach((comment, index) => {

let row = document.createElement("tr");

row.innerHTML = `
<td>#${index + 1}</td>
<td>${comment.name}</td>
<td>${comment.email}</td>
<td>${comment.subject}</td>
<td>${comment.message}</td>
`;

commentsTable.appendChild(row);

});

});
