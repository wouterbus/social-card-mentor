const body = document.getElementsByTagName('body')
document.body.style.backgroundColor = '#141414'
document.body.style.display = 'flex'
document.body.style.textAlign = 'center'
document.body.style.justifyContent = 'center'
document.body.style.alignItems = 'center'
document.body.style.height = '100vh'
document.body.style.paddingTop = '20px'
document.body.style.paddingBottom = '20px'
document.body.style.fontFamily = 'Inter'
document.body.style.margin = '0 20px'

var container = document.createElement('div') 

container.style.display = 'flex'
container.style.flexDirection = 'column'
container.style.justifyContent = 'center'
container.style.alignItems = 'center'
container.style.backgroundColor = '#1F1F1F'
container.style.color = 'white'
container.style.width = '100%'
container.style.maxWidth = '400px'
container.style.margin = '0 auto'
container.style.padding = '30px'
container.style.borderRadius = '15px'

var image = document.createElement('img')
image.src = 'https://randomuser.me/api/portraits/med/women/18.jpg'
image.width = 75
image.height = 75
image.style.borderRadius = '50%'

var heading = document.createElement('h1')
heading.textContent = 'Jessica Randal'
heading.style.padding = '10px 0'

var para = document.createElement('p')
para.textContent = 'London, United Kingdom'
para.style.color = '#BDF626'
para.style.fontWeight = '600'
para.style.paddingBottom = '10px'

var quote = document.createElement('small')
quote.textContent = '"Front-end developer and avid reader."'
quote.style.padding = '25px 0 25px 0'
quote.style.fontSize = '14px'
quote.style.fontWeight = '300'

var btn1 = document.createElement('button')
btn1.textContent = 'GitHub'
btn1.classList.add('button-styles')

var btn2 = document.createElement('button')
btn2.textContent = 'Frontend Mentor'
btn2.classList.add('button-styles')

var btn3 = document.createElement('button')
btn3.textContent = 'LinkedIn'
btn3.classList.add('button-styles')

var btn4 = document.createElement('button')
btn4.textContent = 'Twitter'
btn4.classList.add('button-styles')

var btn5 = document.createElement('button')
btn5.textContent = 'Instagram'
btn5.classList.add('button-styles')

container.appendChild(image)
container.appendChild(heading)
container.appendChild(para)
container.appendChild(quote)
container.appendChild(btn1)
container.appendChild(btn2)
container.appendChild(btn3)
container.appendChild(btn4)
container.appendChild(btn5)

document.body.appendChild(container)