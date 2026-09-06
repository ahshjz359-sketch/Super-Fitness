function calculateBMI() {
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const activity = document.getElementById('activity').value;

  const bmiValueEl = document.getElementById('bmi-value');
  const bmiStatusEl = document.getElementById('bmi-status');
  const bmiTipEl = document.getElementById('bmi-tip');
  const proteinEl = document.getElementById('protein'); // جديد

  if (!height || !weight) {
    bmiValueEl.textContent = '--';
    bmiStatusEl.textContent = 'Please enter valid numbers';
    bmiTipEl.textContent = '';
    proteinEl.textContent = ''; // جديد
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  bmiValueEl.textContent = bmi;

  let status = '';
  let tip = '';

  if (bmi < 18.5) {
    status = 'Underweight';
    tip = 'Consider a balanced diet with more calories and strength training.';
  } else if (bmi < 25) {
    status = 'Normal';
    tip = 'Maintain your healthy lifestyle with regular exercise and a balanced diet.';
  } else if (bmi < 30) {
    status = 'Overweight';
    tip = 'Incorporate more physical activity and monitor your diet carefully.';
  } else {
    status = 'Obese';
    tip = 'Consult a healthcare provider for personalized guidance and diet plans.';
  }

  bmiStatusEl.textContent = status;
  bmiTipEl.textContent = tip;

  // 🔥 حساب البروتين
  const protein = (weight * activity).toFixed(0);
  proteinEl.textContent = "Protein needed: " + protein + " g/day";
}