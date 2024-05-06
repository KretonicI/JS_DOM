
console.log("Visina je: " + window.innerHeight);
console.log("Širina je: " + window.innerWidth);
console.log("Domena je: " + window.location.hostname);
console.log("Window location: " + window.location);


var x =window.confirm("Ovime prihvaćate našu politiku o kolačićima");
console.log("respone = " + x);
if (x== true) {
    console.log("korisnik odgovorio OK");   
}
else {
    console.log("korisnik odgovorio NOK");
    window.location = "onama.html";
}
//window.alert("test alert");
window.setTimeout(function(){
    console.log("Ispis sa odgodom od 2 sec");
}, 2000);