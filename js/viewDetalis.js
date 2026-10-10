let params = new URLSearchParams(location.search)
let id = params.get('id')

fetch(`https://api.tvmaze.com/shows/${id}`)
.then(function (response) {
   return response.json()
}).then(function (jsonResponseData) {
    getFilm(jsonResponseData)
})



let divRow = document.getElementById('divRow')

function getFilm(show) {
    
divRow.innerHTML=''
 
    const divImage = document.createElement('div')
divImage.classList.add('col-lg-6','col-12')

const image = document.createElement('img')
image.src = show.image.original
image.style.width = '700px'
image.style.height = '720px'

const divElements = document.createElement('div')
divElements.classList.add('col-lg-6','col-12','text-light','fs-3','row')

const name = document.createElement('p')
name.classList.add('col-4','pb-3','fw-bolder')
name.textContent = show.name

const rating = document.createElement('p')
rating.classList.add('col-4','pb-3','fw-bolder')
rating.textContent = ` ${show.rating.average} ⭐`

const geners = document.createElement('p')
geners.classList.add('col-4','pb-3','fw-bolder')
geners.textContent = show.genres

const primered = document.createElement('p')
primered.classList.add('col-4','pb-3','fw-bolder')
primered.textContent = show.premiered

const language = document.createElement('p')
language.classList.add('col-4','pb-3','fw-bolder')
language.textContent = show.language

const network = document.createElement('p')
network.classList.add('col-4','pb-3','fw-bolder')
network.textContent = show.network.name

const summary = document.createElement('p')
summary.classList.add('col-12','pb-3')
summary.innerHTML = `summary : ${show.summary}`

divImage.appendChild(image)

divElements.appendChild(name)
divElements.appendChild(rating)
divElements.appendChild(geners)
divElements.appendChild(primered)
divElements.appendChild(language)
divElements.appendChild(network)
divElements.appendChild(summary)

divRow.appendChild(divImage)
divRow.appendChild(divElements)

}
