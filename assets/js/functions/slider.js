
var slideIndex = 0
var slides = document.querySelectorAll('.slide');

var hideSlide = () =>{
    displayDot()
    for (let index = 1; index < slides.length; index++) {
        const slide = slides[index]; /**pour recuperer les slides */
        slide.style.display ="none"
        
    }
}

var  initSlider = () =>{
    hideSlide()
}

var displayDot = () =>{
    for (let index = 0; index < slides.length; index++) {
        const slide= slides[index];
        var span = document.createElement("span")
        span.onclick = ()=> showSlide(index) // pour le défilement du span
        // span.className = "dot"
        span.setAttribute('class', 'dot')
        if (index === 0) {
            span.classList.add("active")
        }    
        document.getElementById('dots').appendChild(span)
    
    }
}

var showSlide = (index) =>{
    // if(index < 0){
    //     index = -1*index /** ce qui est à coté donne le mémm resultat la fonction Math.abs(index) */
    // }
    if(typeof(index) !== "number"){
        return
    }

    let lastSlideIndex = slideIndex

    index %= slides.length

    index < 0 ? index += 3 : null // Opération ternaire

    slideIndex = index
    
    // cacher l'ancien slide
    slides[lastSlideIndex].style.display = "none"
    
    // Affichage du slide  correspondant à l'indice recu en paramétre
    slides[slideIndex].style.display = "block"
    
    setActiveSlide(lastSlideIndex, slideIndex)
    
}

var changeSlide = () =>{
    index = slideIndex + 1
    showSlide(index)
}

var setActiveSlide = (lastIndex, currentIndex)=>{
        var spans = document.querySelectorAll(".dots span")
        spans[lastIndex] ? spans[lastIndex].classList.remove("active") : null
        spans[currentIndex] ? spans[currentIndex].classList.add("active") : null
}

var slideAuto = setInterval(changeSlide, 5000)