window.onload = function(){

    var img = document.createElement('img')
    img.src = "city.jpg"
    img.height="400"
    var button = document.createElement('button');
    var text = document.createTextNode("Close it")
    button.appendChild(text)

    button.style.position='absolute'
    button.style.height="50px"
    
    
    document.body.appendChild(img)
    document.body.appendChild(button)
    
    button.addEventListener('click',()=>{
        img.remove()
        window.open('page.html')
    })
}