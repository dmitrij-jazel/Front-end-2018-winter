var products = [];

var prodInput = document.getElementById("prodInput");

function addProduct(){
    var prod = prodInput.value;
    //console.log(prod);

    //prideti nauja produkta i arraju    
    products.push(prod);
    
    //atvaizduoti masiva
    printArray(products);
}

function removeProd(index){
    //prideti nauja produkta is arrajaus  
    products.splice(index, 1);
    // atvaizduoti masiva
    printArray(products);
}

function printArray(products){
    var h = "";
    for(let i = 0; i<products.length;i++){
        console.log(products[i]);
        h = h + "<li>"+products[i]+"<button onclick='removeProd("+i+")'>X</button></li>";
    }
    document.getElementById("result").innerHTML = h;
}
