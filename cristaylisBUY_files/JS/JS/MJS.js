var CKB=document.getElementById("ckb");
var Cbtx=document.getElementById("cbtx");
CKB.checked=false;Cbtx.style.display="none";
function CKge(){
	cekVLV();
	if(CKB.checked){Cbtx.style.display="block";Cbtx.value="z.B. Hallo X, ich mochte gerne mit etwas neue zum probiren , Aus MEE "}
	else{Cbtx.style.display="none";Cbtx.value="";};
}
var KPNB=document.getElementById("kpn");
var KPNTX=document.getElementById("cpntx");
KPNB.checked=false;KPNTX.style.display="none";
function KPNge(){
	cekVLV();
	if(KPNB.checked){KPNTX.style.display="block";KPNTX.placeholder="z.B. ABC-123"}
	else{KPNTX.style.display="none";KPNTX.placeholder="";};
}
var DTE=document.getElementById("dbe");
var DTX=document.getElementById("dte");
DTE.checked=false;DTX.style.display="none";
function DTge(){
	cekVLV();
	if(DTE.checked){DTX.style.display="block";}
	else{DTX.style.display="none";};
}

function cekVLV(){
	if(CKB.checked){CKB.value="JA";}else{CKB.value="";}
	if(KPNB.checked){KPNB.value="JA";}else{KPNB.value="";}
	if(DTE.checked){DTE.value="JA";}else{DTE.value="";}
}

function OPMD(){
	document.getElementById('contact').style.display='block';
	document.getElementById('gform').style.display='block';
	
//var FNLbest=document.getElementById("MOEbst");
var FNLbest=document.getElementById("ESU");
//FNLbest.value="";
FNLbest.innerHTML=null;
var a=" ";
var LL=1;
 
 racunka();
	for(i=1;i<myLISTE.length;i++){if(myLISTE[i]!=null){
	
	if ((LL%3)==0){if(a!="<br><br>"){a="<br><br>";};}else{if(a!=" "){a=" ";};}

	/// ova da se stavi u style na slikata  top: 22px; position: relative; i element u toa kade se naogja spored  Oo[][] od eksel
	FNLbest.innerHTML=FNLbest.innerHTML+"<div id='daada'><span style='color:brown;'> ("  
	+"<span style='color:black;font-weight:bold;'>"
	+myLISTE[i][2][3].replace("Menge"," ")+"</span></span>"
	//// 195 h so 80w px
	+" <img  style='scale:90%;position:relative;top:10px;border-radius:40%;' width='111px' height='50px' src="+myLISTE[i][3]+">"
	
	+"<span style='color:brown;'>[<span style='color:blue;'> "+"<span style='font-weight:bold;'>"
	+myLISTE[i][1]+" </span>"+"<span  style='color:green;'>(<span style='font-weight:bold;'> "
	+" "+myLISTE[i][2][0]+" "+myLISTE[i][2][1]+" "+myLISTE[i][2][2]+" "
	+"</span> )</span>  "
    +"</span>] <a id='a"+[i]+"' style='font-weight:bold;'  onclick='DELova(this);mestiGIidi();racunka();'> [X]</a></span> <br></div>  "+a;LL=LL+1;}}

	
	

		 mestiGIidi();
	
	FNLbest.style.height=100*LL+"px";
	FNLbest.style.width=100+"%";
	LL=1;a=" ";
}
var pareTOTAL;function racunka(){pareTOTAL=0;for(i=1;i<myLISTE.length;i++){if(myLISTE[i]!=null){
pareTOTAL=pareTOTAL+parseInt((myLISTE[i][2][3].replace("Menge ","")).replace("stuck","-"))*(myLISTE[i][4]);}
document.getElementById("MOEbst").value=(pareTOTAL.toFixed(2));}}

var epp;
function DELova(element){
	epp=element.id;
	
	myLISTE[epp.slice(1,(epp.length))]=null;
	element.parentElement.parentElement.remove();
	


}
//sndBTN
var zz;
function mestiGIidi(){
	if(document.getElementById("ESU").textContent.includes("[X]")){
     if(document.getElementById("sndBTN").style!="display:block;"){document.getElementById("sndBTN").style="display:block;"}
   }else{
	if(document.getElementById("sndBTN").style!="display:none;"){document.getElementById("sndBTN").style="display:none;"}
        /// tuka da see stavi sminkata iner  na esu
		}
		
	zz=[document.getElementsByClassName("IDI")];
	for(i=1;i<zz[0].length;i++){
		if(myLISTE[i]!=null){
	zz[0][i-1].value=(myLISTE[i][2][3].replace("Menge ","")).replace("stuck","-")
			 +"["+myLISTE[i][2][0]+"]["+myLISTE[i][2][1]+"]["+myLISTE[i][2][2]+"]";
    }else {zz[0][i-1].value=null;}
	

		}
		
		
		
		}



















