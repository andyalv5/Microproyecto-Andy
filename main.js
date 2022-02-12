window.addEventListener('load',function(){
   var img=[]
   img[0]="images/1.jpg";
   img[1]="images/2.jpg";
   img[2]="images/3.jpg"

   var n=0;

   function Slide(){
       document.slide.src = img[n];

       if(n<2){
           n++;
       }
       else{
           n=0;
       }
   }
   setInterval(Slide,6000);
});

document.getElementById("Enviar").onclick = function(){
    x=true
    x1=true
    x2=true
    const el1=document.getElementById("formula").value;
    const el2=document.getElementById("formula2").value;
    const el3=document.getElementById("mensaje").value;
    document.getElementById("formula").value !== "" ? el1:x=false;
    document.getElementById("formula2").value !== "" ? el2:x1=false;
    document.getElementById("mensaje").value !== "" ? el3:x2=false;
    x === true&& x1 === true && x2 === true ? alert("se ha enviado el mensaje"): alert("Introduzca los datos correctamente por favor")
    x === true&& x1 === true && x2 === true ? console.log(`Nombre: ${el1} correo: ${el2} mensaje:${el3}`): console.log("se introdujeron datos incorrectos");
}


const formulario =document.getElementById("formulario");
formulario.addEventListener("submit", function(event){
    event.preventDefault();

    let arrayLenguajes = new Array();
    let arrayLevel = new Array();

    arrayLenguajes[0]="C#";
    arrayLenguajes[1]="Java";
    arrayLenguajes[2]="Python";
    arrayLenguajes[3]="JavaScript";

    arrayLevel[0]="Excelente";
    arrayLevel[1]="Bueno";
    arrayLevel[2]="Aprendiendo";
    arrayLevel[3]="Bueno";

    let datos = [];
    let objeto = {};


    for(let x=0; x<arrayLenguajes.length; x++){
        datos.push({
            "Lenguajes": arrayLenguajes[x],
            "Nivel" : arrayLevel[x]
        });
    }
    objeto.datos = datos;
    console.log(JSON.stringify(objeto));
    alert(JSON.stringify(objeto))
});