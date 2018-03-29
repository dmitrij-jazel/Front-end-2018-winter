$(function() {

    $("#btn_search").click(function () {
        //Nuskaityti kas yra irasyta filtruose        
        let brand_from_input = document.getElementById("Brand").value;
        let model_from_input = document.getElementById("Model").value;
                
        let cars_list = CARS;

        // Filtruoti masinas
        cars_list = findCarsByBrand(cars_list, brand_from_input);
                
        // Surusiuot pagal kilometraza
        // Atvaizduoti filtravimo rezultatus (masinas)
        printCars(cars_list);

        // Rasti naujausia masina is filtravimo rezultatu

        //atvaizduoti naujausia masina
    });
    
});


function findCarsByBrand(array, brand_from_input){
    let brandArray = [];

    for(let i = 0; i < array.length; i++){
        let car = array[i];
        if(car.brand.toLowerCase() == brand_from_input.toLowerCase()){
            brandArray.push(car);
        }
    }
    return brandArray;
}

function printCars(array){
    
    let h = '';
    for(let i = 0; i < array.length; i++){
        
        let car = array[i];
        let img_file_name = car.brand.toLowerCase();
        h = h + `

        <div class="car">
        <img src="img/${img_file_name}.png" />
            <p>${car.brand} <p>
            <span>${car.seats}</span>
        <div>
        `;
    }
    
    document.getElementById("result").innerHTML = h;
    //$("#result").html(h); // daro ta pati
}














function findCarsBybrand_withForLoop(array, brand_from_input){
    let brandArray = [];

    for(let i = 0; i < array.length; i++){
        let car = array[i];
        if(car.brand == brand_from_input){
            brandArray.push(car);
        }
    }

    return brandArray;
}


function findCarsBybrand_withFilterFunction(array, brand_from_input){
    let brandArray = array.filter(function (car){
        return car.brand == brand_from_input;
    });
    return brandArray;
}