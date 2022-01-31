
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
   var hora = data.getHours()


    msg.innerHTML= `Agora são ${hora}Horas `
    if (hora >= 0 && hora < 12){
        //bom dia 
        imagem.src = "imagem/amanhcerredondo.png"
        document.body.style.background = '#fe9c04'
        
    }else if (hora >= 12 && hora <=18){
        //boa tarde
        imagem.src = 'imagem/tarde250.webp'
        document.body.style.background = '#827e7b'
    }else{
        //boa noite
        imagem.src = 'imagem/noite250.webp'
        document.body.style.background = '#37181e'

        
    }
    
}  






