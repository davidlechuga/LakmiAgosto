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
   btnSearch.addEventListener('click', e => {
      e.preventDefault();
      console.log('evento boton')
      if(innerWidth > 768){
         if(!evNav){
            barSearch.style.borderColor = 'var(--gray-light-bg)'
            barSearch.style.width = 'calc(98vw - 160px - 2*16px)'
            barSearch.firstElementChild.style.visibility = 'visible'
            barSearch.firstElementChild.style.width = '95%'
            evNav = true
         }else{
            barSearch.style = barSearch.firstElementChild.style = null
            evNav = false
         }
      }
      
   })
   document.addEventListener('click', e => {
      console.log('evento body')
      if((e.target !== btnSearch.firstElementChild) && (e.target !== barSearch.firstElementChild)){
         barSearch.style = barSearch.firstElementChild.style = null
         evNav = false
      }
   })
}