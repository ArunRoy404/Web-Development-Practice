const main = document.getElementById('main-content')
const section = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = "This h1 was added by the js"
section.appendChild(h1)
main.appendChild(section)


const section2 = document.createElement('section')
section2.innerHTML = `
    <h1>Section title 4</h1>
    <ul>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
    </ul>
`

main.appendChild(section2)