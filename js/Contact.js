const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(e){

  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value;
  const message = form.message.value.trim();

  const commentData = {
    name: name,
    email: email,
    subject: subject,
    message: message
  };

  let comments = JSON.parse(localStorage.getItem("superfitnessComments")) || [];

  comments.push(commentData);

  localStorage.setItem("superfitnessComments", JSON.stringify(comments));

  successMessage.textContent = `Your message has been received (${subject}). We will contact you soon!`;
  successMessage.style.display = 'block';

  form.reset();

});
