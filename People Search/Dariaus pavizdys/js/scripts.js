let nameInput = document.getElementById("Name");
let birthInput = document.getElementById("birth_date");
let OutputEl = document.getElementById("result");
let OutputEl2 = document.getElementById("people");

let nameVal;     // globaly declared values are accessible within all functions (without passing arguments)
let birthVal;
let myZodiac;
let testData = PEOPLE;
let peopleFromLt;
let famousPeople = [];
let myDateObject;
let day;
let month;
let gg;

$(function() {                         // event listener, calls various functions
    $("#my_btn").click(function() {
        getDayAndMonth();
        showResult();
        printPeopleFromLt();
    });    
});

function showResult() {
    nameVal = nameInput.value;  // value pasiimama ON CLICK, negalima rašyt už funkcijos, kurią paleidžia click
    birthVal = birthInput.value;
    
    if(nameVal.length > 0 && birthVal.length > 0) {  // JS validacijos pradžia
        getFamousPeople(); // WILL NOT WORK if called below following output lines

        OutputEl.innerHTML = `<h2>${nameVal}</h2><p>Gimimo diena: ${birthVal}</p>
        <p>Zodiako ženklas: ${myZodiac}</p><p>Žymūs žmonės gimę šią dieną: ${gg}</p>`;
       
    } else if (nameVal.length == 0 && birthVal.length > 0) { 
        $(OutputEl).html("<h3>Neįvestas vardas</h3>");
    } else if (nameVal.length > 0 && birthVal.length == 0) { 
        $(OutputEl).html("<h3>Neįvesta gimimo diena</h3>");
    } else {
        $(OutputEl).html("<h3>Neįvestas vardas ir gimimo diena</h3>"); 
    }   // JS validacijos pabaiga
    // toks metodas pasirinktas pagal sąlygą (nes keista būtų else reikšmę rodyti viename tooltip'e)
}

function getDayAndMonth() {
    let date = document.getElementById("birth_date").value;
    myDateObject = new Date(date);    
    day = myDateObject.getDate();
    month = myDateObject.getMonth() + 1;  // fixing month offset
    myZodiac = getZodiacSign(day, month);
}

function printPeopleFromLt() {
    peopleFromLt = testData.filter(human => human.salis == "Lithuania"); // filtering array by country
    let h = '';

    for(let i = 0; i < peopleFromLt.length; i++){
        let lithuanian = peopleFromLt[i];
        h += `${lithuanian.vardas} ${lithuanian.pavarde} (${lithuanian.salis}), `; 
    }
    h = h.slice(0, -2);
    let hh = `${h}.`;
    OutputEl2.innerHTML = hh;
}

function getFamousPeople() {
    myDateObject.setDate(day);
    myDateObject.setMonth(month - 1);  // restoring bias of month fix
    let stringDate = myDateObject.toISOString();
    stringDate = stringDate.slice(5, 10);   
    famousPeople = testData.filter(human => human.gimimoDiena.slice(5, 10) == stringDate);
    printFamous();
}

function printFamous() {
    let g = '';
    for(let i = 0; i < famousPeople.length; i++) {
        let celebrity = famousPeople[i];
        g += `${celebrity.vardas} ${celebrity.pavarde}, `;
    }
    g = g.slice(0, -2);
    gg = `${g}`;
}