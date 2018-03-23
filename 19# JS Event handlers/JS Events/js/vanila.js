// Vanilla JS

document.getElementById("Test").addEventListener("click", test);

for(let i = 0; i< document.getElementsByClassName("btn").length;i++ ){
    document.getElementsByClassName("btn")[i].addEventListener("click", btn_click);
}

function test(){
    alert("Event listener test");
}

function btn_click(){
    alert("paspaudem migtuka");
}


function PridetiPapildomaMygtuka(){
    let h = "";
    for(let i = 0; i < 5;i++){
        h = h + "<p><button class='btn' >Naujas mygtukas</button></p>";
    }    

    document.getElementById("result").innerHTML = h;
    for(let i = 0; i< document.getElementsByClassName("btn").length;i++ ){
        document.getElementsByClassName("btn")[i].addEventListener("click", btn_click);
    }
}

//JQuery


