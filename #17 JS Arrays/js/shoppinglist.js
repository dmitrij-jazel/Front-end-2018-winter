var array = [];

var prodInput = document.getElementById("prodInput");

function addProduct(){
    var prod = prodInput.value;
    //console.log(prod);

    //prideti nauja produkta i arraju    
    array.push(prod);
    
    //atvaizduoti masiva
    printArray(array);
}

function printArray(array){
    var h = "";
    for(let i = 0; i<array.length;i++){
        console.log(array[i]);
        h = h + "<li>"+array[i]+"</li>";
    } 
    document.getElementById("result").innerHTML = h;
}
