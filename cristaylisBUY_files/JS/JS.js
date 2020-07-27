
// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}



// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


///ova zafotochange
var MMR;
var  NVimg;
var SPOJKA;

function MST_FOTOTO(N,a){ MMR=a.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].src;
 NVimg=MMR.slice(0,MMR.length-5);
 SPOJKA=NVimg+N+".jpg";
a.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].src=SPOJKA;}

// ova e za bestelungsoko kopce
function ofON(a){
	if(a.innerHTML=="ofen bestelung"){
		a.innerHTML="schlisen bestelung";	OFon(true);}else{
		a.innerHTML="ofen bestelung";		OFon(false);}
	
}
var SLIKICITE = document.getElementById("FTKI");
var KUPE = document.getElementById("KUPEC");
var KUPE_2 = document.getElementById("smartcart");
SLIKICITE.style	="display:block";
KUPE.style		="display:none";
KUPE_2.style		="display:none";
function OFon(a){
	if(a){
	SLIKICITE.style	="display:none";
	KUPE.style		="display:block";
	KUPE_2.style	="display:block";}else{
	SLIKICITE.style	="display:block";
	KUPE.style		="display:none";
	KUPE_2.style	="display:none";}
}




//ova e event listner


function DKMT_RDY(){
document.getElementsByClassName("btn btn-info sc-cart-checkout")[0].addEventListener("click", OPMD); 
document.getElementsByClassName("btn btn-info sc-cart-checkout")[0].addEventListener("click", openModal); 

 }









