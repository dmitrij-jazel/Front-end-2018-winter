var cars = [];

var brand_input = document.getElementById("Brand");
var model_input = document.getElementById("Model");
var color_input = document.getElementById("Color");
var milage_input = document.getElementById("Milage");
var year_input = document.getElementById("Year");
var engine_input = document.getElementById("Engine");

function addCar(){
    console.log("pridedam: "+brand_input.value+" "+model_input.value);
    let newcar = {
        brand : brand_input.value,
        model : model_input.value
    };

    cars.push(newcar);
}

/*
var car = {
    brand:"Fiat",
    model:"500",
    color:"white",
    milage: 100000,
    year: 2005,
    engine: 1.7,

    print: function () {
        console.log(this.brand + " sako labas");
        //console.log(this.brand + " "+this.model+" pagaminta:"+this.year+" metais");
    }
};*/