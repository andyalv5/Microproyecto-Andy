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
    setInterval(Slide,1600);
 });


const formulario =document.getElementById("formulario");
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    alert("se pulso el boton")

});
