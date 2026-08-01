function openDetails(type) {
  const title = document.getElementById("popupTitle");
  const text = document.getElementById("popupText");

  switch(type) {
    case "basic":
      title.innerText = "Basic Plan Details";
      text.innerHTML = `
        <ul>
          <li>2 sessions per week guided by experienced trainers</li>
          <li>Full gym access</li>
          <li>General workout plans</li>
          <li>Basic support</li>
          <li>Access to group classes</li>
          <li>Monthly fitness assessment</li>
          <li>Helps build a solid foundation for long-term health</li>
        </ul>`;
      break;

    case "regular":
      title.innerText = "Regular Plan Details";
      text.innerHTML = `
        <ul>
          <li>4 training sessions per week</li>
          <li>Personalized workouts tailored to your goals</li>
          <li>Nutrition guidance</li>
          <li>Trainer follow-ups</li>
          <li>Access to premium classes</li>
          <li>Bi-weekly progress reports</li>
          <li>Flexibility & mobility sessions</li>
          <li>Structured improvement and motivation</li>
        </ul>`;
      break;

    case "premium":
      title.innerText = "Premium Plan Details";
      text.innerHTML = `
        <ul>
          <li>6 sessions per week</li>
          <li>Personal coach monitoring your performance</li>
          <li>Full nutrition plan</li>
          <li>Priority support</li>
          <li>1-on-1 training sessions</li>
          <li>Monthly body analysis & adjustments</li>
          <li>Mental coaching & motivation support</li>
        </ul>`;
      break;

    case "advanced":
      title.innerText = "Advanced Plan Details";
      text.innerHTML = `
        <ul>
          <li>8 sessions per week</li>
          <li>Elite personal coach</li>
          <li>Advanced nutrition & supplement plan</li>
          <li>Weekly progress reports</li>
          <li>Exclusive VIP class access</li>
          <li>Mental & recovery coaching</li>
          <li>Body composition tracking</li>
          <li>High-level program for measurable results</li>
        </ul>`;
      break;

    case "ultimate":
      title.innerText = "Ultimate Plan Details";
      text.innerHTML = `
        <ul>
          <li>Unlimited sessions</li>
          <li>Dedicated elite coach</li>
          <li>Custom nutrition & supplement guidance</li>
          <li>Weekly performance review</li>
          <li>VIP class access & guest passes</li>
          <li>Mindset & stress management coaching</li>
          <li>Exclusive gym merchandise</li>
          <li>Full immersion for top-tier results</li>
        </ul>`;
      break;

    case "proathlete":
      title.innerText = "Pro Athlete Plan Details";
      text.innerHTML = `
        <ul>
          <li>Unlimited 1-on-1 sessions</li>
          <li>Dedicated performance coach</li>
          <li>Custom nutrition, supplement & recovery plan</li>
          <li>Daily progress tracking & analytics</li>
          <li>VIP class access & guest passes</li>
          <li>Mindset, focus & stress management coaching</li>
          <li>Personalized sleep & recovery guidance</li>
          <li>Exclusive gym merchandise & VIP lounge access</li>
        </ul>`;
      break;

    default:
      title.innerText = "Plan Details";
      text.innerHTML = `<ul><li>No details available for this plan.</li></ul>`;
      break;
  }

  document.getElementById("packagePopup").style.display = "flex";
}

function closeDetails() {
  document.getElementById("packagePopup").style.display = "none";
}
