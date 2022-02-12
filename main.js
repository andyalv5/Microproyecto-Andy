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