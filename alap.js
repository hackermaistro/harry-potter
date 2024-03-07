fetch("https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json")
.then(x => x.json())
.then(y => megjelenit(y));
var tomb=[]



function megjelenit(y){
    console.log(y)
    tomb=y
    var szoveg=""
    var index=0;

    for (const elem of y) {
        szoveg+=`
       
        <div class="col-sm-4 col-12 col-md-3">
        <div class="kepek">
        <h1 class="szincim">${elem.name}</h1>
        <img class="img-fluid kiskep" src="${elem.image}" alt="" >
         <button id="${index}" class="gomb btn btn-primary" onclick="kattintas(this)" data-bs-toggle="modal" data-bs-target="#myModal">
         ${elem.name}
         </button>
         </div>
         </div>`
        index++
    }
document.getElementById("nevek").innerHTML=szoveg
}

function kattintas(gomb){
    //alert(gomb.id)
    document.getElementById("fejlec").innerHTML=tomb[gomb.id].name
    document.getElementById("torzs").innerHTML=`
    <img src="${tomb[gomb.id].image}" alt="">
    <div>
    <b>Születési idő: ${tomb[gomb.id].dateOfBirth}</div>
    <div>
    <b>Háza: ${tomb[gomb.id].house}</div>
    <div>
    <b>Patrónusa: ${tomb[gomb.id].patronus}</div>
    <div>
    <b>Pálca anyaga: ${tomb[gomb.id].wand.wood}</div>
    <div>
    <b>Pálca közepe: ${tomb[gomb.id].wand.core}</div>
    
    `
}


