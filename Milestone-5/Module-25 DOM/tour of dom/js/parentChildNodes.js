const bikeContainer = document.getElementById('bike-container')
console.log(bikeContainer.childNodes)

// child node 
console.log(bikeContainer.firstChild)
console.log(bikeContainer.lastChild)

console.log(bikeContainer.childNodes[3])

// sibling 
console.log(bikeContainer.childNodes[3].childNodes[1].nextSibling.nextSibling.innerText)

// parent node 
console.log(bikeContainer.parentNode)


// add child node 
const ul = document.getElementById('bike-list')
const li = document.createElement('li')
li.innerText = 'Honda'
ul.appendChild(li)

