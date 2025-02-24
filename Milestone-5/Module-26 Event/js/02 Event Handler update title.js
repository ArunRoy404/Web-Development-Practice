// const title = document.getElementById('title')
// const titleButton = document.getElementById('title-button')

// titleButton.addEventListener('click',
// function(){
//     title.innerText = "YOOO....!!!" 
// })



document.getElementById('title-button').addEventListener('click',
function(){
    document.getElementById('title').innerText = "YOOO...!!!"
})


document.getElementById('login-button').addEventListener('click',
function(){
    const userNameTitle = document.getElementById('username-title')
    const userNameInput = document.getElementById('username-input')
    let userName = userNameInput.value
    if(userName == ""){
        userName = "No Input"
    }
    userNameTitle.innerText = userName
})