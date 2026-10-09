let divRow = document.getElementById('divRow')

fetch('https://api.tvmaze.com/shows')
.then(function (responseData) {
    return responseData.json()
}).then(function (jsonResponseData) {

    getFilm(jsonResponseData)
})


function getFilm(shows) {
    
for (const show of shows) {
    
const divCard = document.createElement('div')
divCard.classList.add('card','col-3')  
divCard.style.width = '18rem'  
divCard.style.boxShadow='0 2px 12px rgba(0, 0, 0, 0.15)'

const image = document.createElement('img')
image.src = show.image.medium
image.classList.add('card-img-top')
image.alt='there is no photos'

const divCardBody = document.createElement('div')
divCardBody.classList.add('card-body')
divCardBody.style.color = 'var(--theme-text-card-color)'

const name = document.createElement('h4')
name.textContent = show.name
name.classList.add('card-title','pb-2')

const rate = document.createElement('p')
rate.classList.add('card-text','fs-4')
rate.textContent = `⭐${show.rating.average}`

const date = document.createElement('p')
date.classList.add('card-text')
date.textContent = show.premiered

const genra = document.createElement('p')
genra.classList.add('card-text')
genra.textContent = show.genres

const anchor = document.createElement('a')
anchor.classList.add('btn', 'button-hero' ,'fs-6','mb-3')
anchor.textContent = 'view Details'
anchor.href=`viewDetails.html?id=${show.id}`

const viewEpisodes = document.createElement('a')
viewEpisodes.classList.add('btn', 'button-hero' ,'fs-6')
viewEpisodes.textContent = 'view episodes'
viewEpisodes.href=`episodes.html?id=${show.id}`

divCardBody.appendChild(name)
divCardBody.appendChild(rate)
divCardBody.appendChild(date)
divCardBody.appendChild(genra)
divCardBody.appendChild(anchor)
divCardBody.appendChild(viewEpisodes)

divCard.appendChild(image)
divCard.appendChild(divCardBody)
divRow.appendChild(divCard)

}



}