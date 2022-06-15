const bmiBtn = document.querySelector("#bmi-btn");
bmiBtn.addEventListener("click", bmiCalc);

const bmiResult = document.getElementById("bmi-result");

function bmiCalc() {
  const gewicht = document.getElementById("gewicht").value;
  const höhe = document.getElementById("höhe").value;
  const bmi = Math.round(gewicht / Math.pow(höhe * 0.01, 2));
  bmiResult.innerHTML = `Sie haben einen BMI von ${bmi}`;
  console.log(bmi);
}
