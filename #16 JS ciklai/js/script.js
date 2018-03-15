
function convert(){
    // nuskaityti Atstumo reiksme
    let d_string = document.getElementById("Distance").value;
    let d = Number(d_string);

    
    // turiu gauti is ko as versiu atsuma
    let fromUnit = document.getElementById("FromUnit").value;

    // padaryti vertima ir gauti rezultata
    let baseDistance = 0; // Metrai
    if(fromUnit == "mm") {
        baseDistance = d / 1000;
    } else if(fromUnit == "cm"){
        baseDistance = d / 100;
    }else if(fromUnit == "km"){
        baseDistance = d * 1000;
    }else {
        baseDistance = d;
    }
    //console.log(baseDistance); // cia rezultatas turi buti metrais

    let res = 0;
    let toUnit = document.getElementById("ToUnit").value;
    if(toUnit == "mm"){
        res = baseDistance * 1000;
    } else if(toUnit == "cm"){
        res = baseDistance * 100;
    } else if(toUnit == "km"){
        res = baseDistance / 1000;
    }else{
        res = baseDistance;
    }
    //console.log(baseDistance+" metrai");
    //console.log(res+" resultatas");

    // turiu atvaizduoti rezultata
    document.getElementById("result").innerText = res;






    
    
    
}