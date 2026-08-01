document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // ✅ Admin check
  if (email === "ahshj359@gamil.com" && password === "mohamed00mh") {
    alert("Welcome Admin 👑");

    localStorage.setItem("isAdmin", "true");
    window.location.href = "admin.html"; // Admin page
    return;
  }

  // ❌ Not admin
  alert("You are not an admin ❌");

  localStorage.setItem("isAdmin", "false");
  window.location.href = "home.html";
});
