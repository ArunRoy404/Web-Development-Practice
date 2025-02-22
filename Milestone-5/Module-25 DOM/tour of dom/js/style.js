const sections = document.querySelectorAll('section')
for(const section of sections){
    section.style.backgroundColor = 'lightgray';
    section.style.border = '2px solid';
    section.style.borderRadius = '5px'
    section.style.marginTop = '20px'
    section.style.padding = "30px"
}

const bike = document.getElementById('bike-container')
bike.style.textAlign = 'center'
bike.classList.add('blue-bg')