function carregar(){ 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minu = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minu} minutos`
    if(hora >= 0 && hora <= 12) {
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#ffdf52'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML +=' BOA TARDE!'
        img.src = 'fototarde.png'
        document.body.style.background = '#ec6d02'
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#7b67a4'
    }

}
