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
      e.preventDefault()
      e.stopPropagation()
      console.log('evento boton')
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
            barSearch.firstElementChild.value = ''
            evNav = false
         }
      }
      
   })
   document.addEventListener('click', e => {
      console.log('evento body')
      if(e.target !== barSearch.firstElementChild && innerWidth >= 768){
         barSearch.style = barSearch.firstElementChild.style = null
         barSearch.firstElementChild.value = ''
         evNav = false
      }
      if(innerWidth < 768){
         if(e.target === barSearch.firstElementChild){
            barSearch.style.boxShadow = '0 0 .2rem .1rem rgba(255,255,255,0.25)'
         }
         else{
            barSearch.style.boxShadow = 'none'
         }
      }
      
   })
}