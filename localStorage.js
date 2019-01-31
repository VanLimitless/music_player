var Storage;
function statistika(id){
    var pocet;
    console.log(id, "text");
    if(typeof(Storage) !== "undefined"){
        if(localStorage.getItem(id) == "undefined"){
            pocet = 1;
            localStorage.setItem(id, pocet);
        }else{
            console.log(id);
            pocet = localStorage.getItem(id);
            pocet++;
            localStorage.setItem(id, pocet);
        }
    }
}

var prehrani = {

    name: "Picnicka";
    title: "nazev";

}

var jsonPrehrani =  JSON.stringify(prehrani)

window.localStorage.setItem("prehrani", jsonPrehrani);

var getItem = localStorage.getItem("prehrani");

var iten = JSON.parse(getItem);

for(var p in item){

    document.getElementById("output").innerHTML += p + ':'+ item[p] + '<br>'

}