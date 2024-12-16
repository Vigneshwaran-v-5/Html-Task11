function convert(){
let length=Number(document.getElementById("centimeter").value);
let inch=length/2.54;
let result= document.getElementById("result");
result.innerHTML=inch.toFixed(3)+"-inches";
}