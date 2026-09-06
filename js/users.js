document.addEventListener("DOMContentLoaded", function () {

const table = document.getElementById("usersTable");

let users = JSON.parse(localStorage.getItem("superfitnessUsers")) || [];

table.innerHTML = "";

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

table.appendChild(row);

});

});
