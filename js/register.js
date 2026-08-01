document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match ❌");
    return;
  }

  const userData = {
    name: name,
    dob: dob,
    email: email,
    password: password
  };

  localStorage.setItem("userData", JSON.stringify(userData));

  alert("Registration successful ✅");

  // تحويل لصفحة اللوجين
  window.location.href = "index.html";
});
