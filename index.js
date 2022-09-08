const getHerois = async () =>{
    let getAllHeroes = await fetch('dbHeroes.json')
    let heroy = await getAllHeroes.json()
    let herois = document.querySelector('.herois')
    let key
 
    for(key in heroy){
        herois.innerHTML += `
        <div class="heroy">
        <img src="${heroy[key].photo}" class="photo">
        
        <span class="name">${heroy[key].name}</span>
        <span class="realName">${heroy[key].realName}</span>
        <span class="species">${heroy[key].species}</span>
        <span class="citizenship>${heroy[key].citizenship}</span>
        <span class="gender">${heroy[key].gender}</span>
        <span class="actors">${heroy[key].actors}</span>
    </div>
        `
    }

    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      
     

    const heroyAll = herois.querySelectorAll('.heroy')
      heroyAll.forEach(el =>{
        el.classList.add(getRandomInt(1, 4))
      })


    const buttons = document.querySelectorAll('.button')
         const filter = (category, items) =>{
            items.forEach(item =>{
                const isItemFiltered = !item.classList.contains(category);
                const isShowAll = category.toLowerCase() === "all";
                if (isItemFiltered && !isShowAll) {
                    item.classList.add('hide')
                    
                } else {
                    item.classList.remove('hide')
                    
                }
            });
         }

         buttons.forEach(button =>{
            button.addEventListener('click', ()=>{
                const currentCategory = button.dataset.filter;
                filter(currentCategory, heroyAll)
            })
         })
    
}
getHerois()


