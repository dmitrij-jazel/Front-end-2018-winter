$(function() {

    $("#btn_search").click(function () {
        $("#Brand").removeClass("is-invalid");
        $("#brand-error-message").fadeOut('fast');
        //Nuskaityti kas yra irasyta filtruose        
        let brand_from_input = document.getElementById("Brand").value;
        let model_from_input = document.getElementById("Model").value;

        if(brand_from_input.length){
            // jeigu brand taisingas
            let cars_list = CARS;

            // Filtruoti masinas
            cars_list = findCarsByBrand(cars_list, brand_from_input);
            
            // Surusiuot pagal kilometraza        
            cars_list.sort(function(a, b) {
                return a.mileage - b.mileage;
            });

            // Atvaizduoti filtravimo rezultatus (masinas)
            printCars(cars_list);

            // Rasti naujausia masina is filtravimo rezultatu
            let newestCar = findNewestCar(cars_list);
            // atvaizduoti naujausia masina
            printNewestCar(newestCar);
        }else{            
            $("#Brand").addClass("is-invalid");
            $("#brand-error-message").fadeIn('fast');
        }
                
        
    });
    
});

function printNewestCar(newestCar){
    let img_file_name = newestCar.brand.toLowerCase();
    let h = `

    <div class="car">
        <div class="img-wrap">
            <img src="img/${img_file_name}.png" />
        </div>
        <h4>${newestCar.brand} ${newestCar.model}</h4>
        <table>
            <tr><th>Seats</th><td>${newestCar.seats}</td></tr>
            <tr><th>Color</th><td>${newestCar.color}</td></tr>
            <tr><th>Mileage</th><td>${newestCar.mileage}</td></tr>
            <tr><th>Power</th><td>${newestCar.power}</td></tr>
        </table>
        

    <div>
    `;
    
    document.getElementById("top_result").innerHTML = h;

}

function findNewestCar(array){
    let newest_car = array[0];
    // pereiti per visa masiva
    for(let i = 0; i<array.length; i++){
        // jeigu randam naujausia masina - grazinti ja
        if(newest_car.mileage > array[i].mileage){
            newest_car = array[i];
        }
    }
    return newest_car;
}


function findCarsByBrand(array, brand_from_input){
    let brandArray = [];

    for(let i = 0; i < array.length; i++){
        let car = array[i];
       
        let brand = car.brand.toLowerCase();
        let s = brand_from_input.toLowerCase();

        if(brand.search(s) > -1){
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
            <div class="img-wrap">
                <img src="img/${img_file_name}.png" />
            </div>
            <h4>${car.brand} ${car.model}</h4>
            <table>
                <tr><th>Seats</th><td>${car.seats}</td></tr>
                <tr><th>Color</th><td>${car.color}</td></tr>
                <tr><th>Mileage</th><td>${car.mileage}</td></tr>
                <tr><th>Power</th><td>${car.power}</td></tr>
            </table>
            

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