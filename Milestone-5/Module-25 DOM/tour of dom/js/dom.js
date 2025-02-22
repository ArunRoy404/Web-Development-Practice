console.log("outside html body")
console.log(document)



const h1Elements = document.getElementsByTagName('h1')
console.log(h1Elements)
console.log(h1Elements[0].innerText)
console.log(h1Elements[1].innerText)

for(h1 of h1Elements){
    console.log(h1)
}

const liElements = document.getElementsByTagName('li')
for(li of liElements){
    console.log(li)
}


const fruitTitle = document.getElementById('fruit-title')
console.log(fruitTitle)

const favFruit = document.getElementsByClassName('fav-fruit')
console.log(favFruit)
for(const fruit of favFruit){
    console.log(fruit.innerText)
}

fruitTitle.innerText = "text changeed by the js"

// returns only one child or element 
const fruit = document.querySelector("#fruit-container li");
console.log(fruit)
console.log(fruit.innerText)

//returns all the childs
const allFruit = document.querySelectorAll("#fruit-container li")
console.log(allFruit)
for(const fruit of allFruit){
    console.log(fruit.innerText)
}

console.log(document.getElementById('bike-container').style)
document.getElementById('bike-container').style.backgroundColor = 'lightgray'

const bikeContainer = document.getElementById('bike-container')
bikeContainer.style.textAlign = 'center'

// getAttribute only works with id 
const bikeTitle = document.getElementById('bike-title')
console.log(bikeTitle.getAttribute('id'))
console.log(bikeTitle.getAttribute('class'))


//also get class lists
console.log(bikeTitle.classList)

//remove class
bikeTitle.classList.remove('cycle')
console.log(bikeTitle.classList)

//add class
bikeTitle.classList.add('petrol')
console.log(bikeTitle.classList)


// add another attributes
bikeTitle.setAttribute('title', 'tooltip: this is bike title')
console.log(bikeTitle.getAttribute('title'))


// by class 
const bikeCon = document.getElementsByClassName('bike-con')
console.log(bikeCon)

// by id 
console.log(bikeContainer.innerHTML)
console.log(bikeContainer.innerText)

//by class
console.log(bikeCon[0].innerHTML)
console.log(bikeCon[0].innerText)

bikeCon[0].innerHTML = '<h1> New Heading </h1>'


const fruits2 = document.querySelectorAll('#fruit-container li')
console.log(fruits2)
for(f of fruits2){
    console.log(f.innerText = 'hello')
}