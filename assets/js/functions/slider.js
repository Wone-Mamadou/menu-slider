
var slideIndex = 0
var slides = document.querySelectorAll('.slide');

var hideSlide = () =>{
    displayDot(slides)
    for (let index = 1; index < slides.length; index++) {
        const slide = slides[index]; /**pour recuperer les slides */
        slide.style.display ="none"
        
    }
}

var  initSlider = () =>{
    hideSlide()
}

var displayDot = (sliders) =>{
    for (let index = 0; index < sliders.length; index++) {
        const slide= sliders[index];
        var span = document.createElement("span")
        span.onclick = ()=> showSlide(index)
        // span.className = "dot"
        span.setAttribute('class', 'dot')
        document.getElementById('dots').appendChild(span)
    }
}

var showSlide = (index) =>{
    // if(index < 0){
    //     index = -1*index /** ce qui est à coté donne le mémm resultat la fonction Math.abs(index) */
    // }
    let lastSlideIndex = slideIndex
    slideIndex = Math.abs(index) % slides.length
    
    // cacher l'ancien slide
    slides[lastSlideIndex].style.display = "none"
    
    // Affichage du slide  correspondant à l'indice recu en paramétre
    slides[slideIndex].style.display = "block"
}