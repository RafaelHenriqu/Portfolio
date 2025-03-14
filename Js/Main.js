const Elements = document.querySelectorAll(".hidden")
const Observer = new IntersectionObserver((Entity)=>{
    
    Entity.forEach((element)=>{
        if (element.isIntersecting){
 
            element.target.classList.remove("hidden")
        }else{
            element.target.classList.add("hidden")
        }
    }) 
})
Elements.forEach((Elements)=>{
 
    Observer.observe(Elements)
})


document.getElementById("Photo").addEventListener('dblclick', (e)=>{
    document.querySelector("audio").play()
    document.querySelector("audio").volume = 0.05
    document.getElementById("Snow_hidden").id = "Snow"
})



function Verify_button(Type){
    if (Type == "GitHub"){
        window.location.href = "https://github.com/RafaelHenriqu"
    }
    if (Type == "Entrar_em_contato"){
        window.location.href = "mailto:noahcodeoficial@gmail.com?subject=Desenvolvimento+Back+End"
    }

    if (Type == "Download_CV"){
        window.location.href = "../CV.pdf"
    }
    

}