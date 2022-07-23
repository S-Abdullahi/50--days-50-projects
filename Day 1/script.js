panels = document.querySelectorAll('.panel')

for(let item of panels){
    item.addEventListener('click', ()=>{
        removeActive()
        item.classList.add('active')

    })
}

function removeActive(){
    for(let item of panels){
        item.classList.remove('active')
    }
}