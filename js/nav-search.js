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
   let closeSearch = () => {
      barSearch.style = barSearch.firstElementChild.style = null
      evNav = false
   }
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
         }else closeSearch()
         barSearch.firstElementChild.value = ''
      }
   })
   /* Evento en bar search para cerrar barra sin hacer click en el input text */
   barSearch.addEventListener('keyup', e => {
      if(e.keyCode == 27){
         closeSearch()
         barSearch.firstElementChild.value = ''
      }
   })
   /* Eventos en input text de bar search */
   barSearch.firstElementChild.addEventListener('click', e =>{
      e.stopPropagation()
      if(innerWidth < 768)
         barSearch.style.boxShadow = '0 0 .2rem .1rem rgba(255,255,255,0.25)'
   })
   barSearch.firstElementChild.addEventListener('keyup', e =>{
      e.stopPropagation()
      console.log(`buscar resultados para ${e.keyCode}: ${e.target.value}`)
      if(e.keyCode == 27){
         closeSearch()
         barSearch.firstElementChild.value = ''
      }
   })
   /* Evento en body para cerrar bar search */
   document.documentElement.lastElementChild.addEventListener('click', e => {
      if(innerWidth >= 768)
         closeSearch()
      else
         barSearch.style.boxShadow = 'none'
      barSearch.firstElementChild.value = ''
   })
}