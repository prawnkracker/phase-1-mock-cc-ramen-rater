// write your code here


function buildRamenMenu(ramen){
    const menu = document.createElement('img')
    menu.src = ramen.image
    document.querySelector('#ramen-menu').appendChild(menu)
    menu.addEventListener('click', () => ramenDetails(ramen))
}

function getRamen(){
    fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(ramenObj => ramenObj.forEach(ramen => buildRamenMenu(ramen)))
}

getRamen()

function ramenDetails(ramen){
    const detailImage = document.querySelector('#detail-image')
    const ramenName = document.querySelector('#name')
    const restaurant = document.querySelector('#restaurant')
    const rating = document.querySelector('#rating-display')
    const comment = document.querySelector('#comment-display')

    detailImage.src = ramen.image
    ramenName.textContent = ramen.name
    restaurant.textContent = ramen.restaurant
    rating.textContent = ramen.rating
    comment.textContent = ramen.comment
}

function handleSubmit(e){
    e.preventDefault()
    const ramenObj = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value
    }
    buildRamenMenu(ramenObj)
}

document.querySelector('#new-ramen').addEventListener('submit', handleSubmit)