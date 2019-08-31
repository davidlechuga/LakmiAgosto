let btnSearch = document.getElementById('btn-search'),
    barSearch = document.querySelector('.input-group'),
    evNav = false
/*
.input-group:hover{
   border-color: var(--gray-light-bg);
   width: calc(98vw - 160px - 2*16px);
}
.input-group:hover .form-control{
   visibility: visible;
   width: 95%;
}
*/
if(barSearch && btnSearch){
   /* Evento en boton de bar search */
   btnSearch.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()
      if(innerWidth >= 768){
         if(!evNav){
            barSearch.style.borderColor = 'var(--gray-light-bg)'
            barSearch.style.width = 'calc(98vw - 160px - 2*16px)'
            barSearch.style.boxShadow = '0 0 .2rem .1rem rgba(255,255,255,0.25)'
            barSearch.firstElementChild.style.visibility = 'visible'
            barSearch.firstElementChild.style.width = '95%'
            evNav = true
         }else{
            barSearch.style = barSearch.firstElementChild.style = null
            evNav = false
         }
         barSearch.firstElementChild.value = ''
      }
   })
   /* Eventos en input text de bar search */
   barSearch.firstElementChild.addEventListener('click', e =>{
      e.stopPropagation()
      if(innerWidth < 768){
         barSearch.style.boxShadow = '0 0 .2rem .1rem rgba(255,255,255,0.25)'
      }
   })
   barSearch.firstElementChild.addEventListener('keyup', e =>{
      console.log(`buscar resultados para: ${e.target.value}`)

   })
   /* Evento en html para cerrar bar search */
   document.addEventListener('click', e => {
      if(innerWidth >= 768){
         barSearch.style = barSearch.firstElementChild.style = null
         evNav = false
      }
      else{
         barSearch.style.boxShadow = 'none'
      }
      barSearch.firstElementChild.value = ''
   })
}