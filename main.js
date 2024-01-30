const app = document.querySelector("#app")
let a = document.querySelector('#f')
let b = document.querySelector('#g')

a.addEventListener('click', ()=>{
  history.replaceState("login", "", 'http://localhost:5173/login')

})


b.addEventListener('click', ()=>{
  history.replaceState("home", "", 'http://localhost:5173/')
})

function createLogin (URL){
  if(URL === 'http://localhost:5173/login'){
    app.innerHTML=`<h1>connectez vous à votre compte</h1>`
  }
}

function createMain(URL){
  if(URL === 'http://localhost:5173/'){
    app.innerHTML='<p>cool</p>'
  }
}



createMain(document.location.href)
createLogin(document.location.href)
console.log(document.location.href)