let params = new URLSearchParams(location.search)
let id = params.get('id')
let episodes = []

fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
.then(function (response) {
   return response.json()
}).then(function (jsonResponseData) {
   episodes=jsonResponseData
    
    getFilm(jsonResponseData)
    
})

let divRow = document.getElementById('divRow')

function getFilm(episodes) {
    
divRow.innerHTML=''

for (const episode of episodes) {
    
const divCard = document.createElement('div')
divCard.classList.add('card','col-3')  
divCard.style.width = '18rem'  
divCard.style.boxShadow='0 2px 12px rgba(0, 0, 0, 0.15)'

const image = document.createElement('img')
image.src = episode.image.medium
image.classList.add('card-img-top')
image.alt='there is no photos'

const divCardBody = document.createElement('div')
divCardBody.classList.add('card-body')
divCardBody.style.color = 'var(--theme-text-card-color)'

const name = document.createElement('h4')
name.textContent = episode.name
name.classList.add('card-title','pb-2')

const season = document.createElement('p')
season.classList.add('card-text','fs-4')
season.textContent = `Season: ${episode.season}`

const number = document.createElement('p')
number.classList.add('card-text')
number.textContent = `Episode: ${episode.number}`

const airdate = document.createElement('p')
airdate.classList.add('card-text')
airdate.textContent = episode.airdate

const summary = document.createElement('p')
summary.classList.add('card-text')
summary.innerHTML = episode.summary

const runtime = document.createElement('p')
runtime.classList.add('card-text')
runtime.textContent = `Runtime: ${episode.runtime} min`


divCardBody.appendChild(name)
divCardBody.appendChild(season)
divCardBody.appendChild(number)
divCardBody.appendChild(airdate)
divCardBody.appendChild(summary)
divCardBody.appendChild(runtime)


divCard.appendChild(image)
divCard.appendChild(divCardBody)
divRow.appendChild(divCard)

}

}

function search(input) {
    


let result = episodes.filter(function (episode) {

 return  episode.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())    

})

if (result.length===0) {
  divRow.textContent='there is no data'
  divRow.style.color='white'
  
}else{
    getFilm(result)
}







}