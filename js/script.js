"use script";

function calculateBmi (){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    let bmi = weight / (Math.pow(height / 100, 2));

    document.getElementById("heading").innerHTML = "Your BMI is: " + bmi.toFixed(2);

    if (bmi < 16){
        document.getElementById("message").innerHTML = "You are severely underweight";
    }else if (bmi >= 16 && bmi < 18.4){
        document.getElementById("message").innerHTML = "You are underweight";
    }else if (bmi >= 18.5 && bmi < 24.9){
        document.getElementById("message").innerHTML = "You are normal weight";
    }else if (bmi >= 25 && bmi < 29.9){
        document.getElementById("message").innerHTML = "You are overweight";
    }else if (bmi >= 30 && bmi < 34.9){
        document.getElementById("message").innerHTML = "You are moderately obese";
     } else if (bmi >= 35 && bmi < 40){
        document.getElementById("message").innerHTML = "You are severely obese";
    } else if (bmi >= 40){
        document.getElementById("message").innerHTML = "You are morbidly obese";
    }

}

function reload() {
    window.location.reload();
}

// - **Severely Underweight:** Below 16 kg/m²
// - **Underweight:** 16.0 to 18.4 kg/m²
// - **Normal Weight:** 18.5 to 24.9 kg/m²
// - **Overweight:** 25.0 to 29.9 kg/m²
// - **Moderately Obese:** 30.0 to 34.9 kg/m²
// - **Severely Obese:** 35.0 to 39.9 kg/m²
// - **Morbidly Obese:** ≥40.0 kg/m²