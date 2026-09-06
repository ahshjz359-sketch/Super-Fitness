const joinForm = document.getElementById('joinForm');
const programSelect = document.getElementById('program');
const priceDisplay = document.getElementById('priceDisplay');




const programPrices = {
  "Basic Plan": 299,
  "Regular Plan": 399,
  "Premium Plan": 599,
  "Advanced Plan": 799,
  "Ultimate Plan": 999,
  "Pro Athlete Plan": 1299
};

// عرض السعر مباشرة عند الاختيار
programSelect.addEventListener('change', () => {
  const selected = programSelect.value;
  const price = programPrices[selected] || 0;
  priceDisplay.textContent = `Price: $${price} / Month`;
});

// عند ارسال الفورم
joinForm.addEventListener('submit', function(e){
  e.preventDefault();

  const userData = {
    name: document.getElementById('name').value.trim(),
    age: document.getElementById('age').value.trim(),
    height: document.getElementById('height').value.trim(),
    weight: document.getElementById('weight').value.trim(),
    goal: document.getElementById('goal').value,
    program: document.getElementById('program').value,
    trainer: document.getElementById('trainer').value,
    price: programPrices[document.getElementById('program').value] || 0
  };

  for (let key in userData) {
    if (!userData[key]) {
      alert("Please fill in all fields!");
      return;
    }
  }

  let users = JSON.parse(localStorage.getItem('superfitnessUsers')) || [];
  users.push(userData);
  localStorage.setItem('superfitnessUsers', JSON.stringify(users));

alert(`Thank you for joining, ${userData.name}!\nYour selected program price: $${userData.price}\nHere is our schedule.`);

  joinForm.reset();

  window.location.href = "Schedule2.html";
});
