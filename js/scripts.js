/*    NOSOTROS    */

let bNosotros = document.getElementById("nosotros");
let bSecundaria = document.getElementById("barra-sencundaria");


bNosotros.onmouseover = () => {
   bSecundaria.style.top = "50px";
};
bNosotros.onmouseleave = () =>{
   bSecundaria.style.top = 0;
};
bSecundaria.onmouseover = () =>{
   bSecundaria.style.top = "50px";
};
bSecundaria.onmouseleave = () =>{
   bSecundaria.style.top = 0;
};


