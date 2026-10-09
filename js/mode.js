let themeSwitch = document.getElementById('themeSwitch')

themeSwitch.addEventListener('change',function () {
    
let html = document.querySelector('html')

if (this.checked) {
    
html.removeAttribute('theme')
html.setAttribute('theme','light')
localStorage.setItem('theme','light')

}else{

html.removeAttribute('theme')
html.setAttribute('theme','dark')
localStorage.setItem('theme','dark')

}
})

let theme = localStorage.getItem('theme')
let html = document.querySelector('html')

if (theme==='dark') {
    html.removeAttribute('theme')
html.setAttribute('theme','dark')
themeSwitch.checked=false
}else{
     html.removeAttribute('theme')
html.setAttribute('theme','light')
themeSwitch.checked=true
}
