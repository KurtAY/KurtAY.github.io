let carList = [];

let addCar = function(carInput, carColor) {
    let newCar = {Make:carInput, Color:carColor};
    
    carList.push(newCar);
    
    carList.forEach(function(element) {
        console.log(element.Make + element.Color);
        
    });
}


demoP = document.getElementById("carListDisp");
function displayCars() {
    demoP.innerHTML = "";
    carList.forEach(function(element) {
        console.log(element.Make); 
        demoP.innerHTML += "Car Manufacture: "+element.Make+" \tCar Color: "+element.Color +"<br>";// + cost of car cleaning
    }, this);

}

function removeCar() {
    carList.shift();
}

function isChecked() {
    var yesChecked = document.getElementById("carWashYes").checked;
    var noChecked = document.getElementById("carWashNo").checked;

    if(yesChecked == false && noChecked == false){
        alert("Please select if you want a car wash");
    }
    else if(yesChecked == true) {
        //code to add £20 price to specified/desired car object
    }
    else if (noChecked == true){
        //code to just continue, dont add anythong. could leaveit
    }
}





// function checkboxthing() {
//     if(document.getElementById("carWashCheck").checked){
        
//     }
//     else{
        
//     }   
// }


























