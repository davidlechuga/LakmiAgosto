
/*    SERVICIOS    */


let nServicios = document.getElementById("servicios");
let bSencundaria = document.getElementById("barra-sencundaria");


nServicios.onmouseover = () =>{
   bSencundaria.style.top = "50px";
};
nServicios.onmouseleave = () =>{
   bSencundaria.style.top = 0;
};
bSencundaria.onmouseover = () =>{
   bSencundaria.style.top = "50px";
};
bSencundaria.onmouseleave = () =>{
   bSencundaria.style.top = 0;
};



