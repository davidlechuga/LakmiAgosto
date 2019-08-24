let count = 0,
            n = 0,
            timeInterval = 9000,
            elemenTitle = document.querySelector('.slide-titles'),
            itemsBG = [... document.querySelectorAll('.slide-item')],
            itemsTitle = [... document.querySelectorAll('.slide-title')],
            itemsArt = [... document.querySelectorAll('.slide-art')],
            itemsInd = [... document.querySelectorAll('.slide-indicator')]
        if(itemsBG && itemsTitle && itemsArt && elemenTitle && itemsInd){
            n = itemsBG.length

            elemenTitle.addEventListener('transitionend',e => {
                if(count == 0 || count == 4)
                    e.target.classList.remove('slide-prev')
            })

            setInterval(()=>{
                if(count == 0){
                    itemsBG[n-1].classList.remove('slide-prev')
                    itemsArt[n-1].classList.remove('slide-prev')
                }
                else{
                    itemsBG[count-1].classList.remove('slide-prev')
                    itemsArt[count-1].classList.remove('slide-prev')
                }
                itemsBG[count].classList.add('slide-prev')
                itemsBG[count].classList.remove('slide-active')
                itemsArt[count].classList.add('slide-prev')
                itemsArt[count].classList.remove('slide-active')
                itemsInd[count].classList.remove('indicator-active')
                if(count == n - 1){
                    count = -1
                    itemsTitle[0].classList.add('slide-active')
                    itemsTitle[1].classList.remove('slide-active')
                    itemsTitle[1].classList.add('slide-prev')
                }
                /* Para el cambio en  los titulos */
                else if(count == 3){
                    itemsTitle[0].classList.add('slide-prev')
                    itemsTitle[0].classList.remove('slide-active')
                    itemsTitle[1].classList.add('slide-active')
                }
                itemsBG[++count].classList.add('slide-active')
                itemsArt[count].classList.add('slide-active')
                itemsInd[count].classList.add('indicator-active')
            },timeInterval)
        }