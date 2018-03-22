var cars = [];

var brand_input = document.getElementById("Brand");
var model_input = document.getElementById("Model");
var color_input = document.getElementById("Color");
var milage_input = document.getElementById("Milage");
var year_input = document.getElementById("Year");
var engine_input = document.getElementById("Engine");

function addCar(){
    console.log("pridedam: "+brand_input.value+" "+model_input.value);
    let milege_number = Number(milage_input.value);
    let year_number = Number(year_input.value);
    let engine_number = Number(engine_input.value);
    
    let newcar = {
        brand : brand_input.value,
        model : model_input.value,
        color : color_input.value,
        milage : milege_number,
        year: year_number,
        engine: engine_number

    };
    cars.push(newcar);

    printCars(cars);
}

function removeCar(index){
    console.log(index);
    cars.splice(index,1);
    printCars(cars);
} 

function printCars(cars_array){
    var h = "";
    for(let i = 0; i<cars_array.length;i++){
        h = h + "<li>"+cars_array[i].brand+" "+ cars_array[i].model +" "+ cars_array[i].year +"<button onclick='removeCar("+i+")'>X</button></li>";
    }
    document.getElementById("Result").innerHTML = h;
}