document.addEventListener('DOMContentLoaded', () => {
    // variables
    const header = document.querySelector('header')
    const nav = document.querySelector('nav')
    const section = document.querySelector('section')
    const article = document.querySelector('article')
    const aside = document.querySelector('aside')
    const footer = document.querySelector('footer')
    let lista = ''
    const logo = document.querySelector('.logo')
    const NameOrg = document.querySelector('.NameOrg')
    const imagenPrincipal = document.querySelector('.imagenPrincipal')



    //header
    logo.src=`${bdDatos.logo}`
    NameOrg.innerHTML=bdDatos.name

    //nav
    //imagenPrincipal.src=`${bdDatos.imagen}`

    // Footer
    lista = ''
    bdDatos.contacto.forEach(e => {
        if(e[0]==0){return}
        lista += `<li><i class="${e[3]}"></i> ${e[2]}</li>`
    })

    footer.innerHTML += `
    <div class="footitem1">
        <h2>Contactenos</h2>
        <ul>${lista}</ul>
        <a class="facebook" target="_blank" rel="noopener noreferrer" href="${bdDatos.facebook[0]}">
            <img class="ico" src="${bdDatos.facebook[1]}" alt="facebook">
        </a>
        <a class="whatsapp" target="_blank" rel="noopener noreferrer" href="https://wa.me/${bdDatos.whatsapp[0]}">
            <img class="ico" src="${bdDatos.whatsapp[1]}" alt="facebook">
        </a>
    </div>

    <div class='footitem2 ubicacion'>
        <iframe class="mapa"
            src="${bdDatos.ubicacion}"
            width="100%"
            height="200"
            style="border:0;"
            loading="lazy">
        </iframe>
        <div>@Copyright by  ${bdDatos.copyright}</div>
    </div>

    <div class="footitem3">
        <span>Escribenos por WhatsApp</span>
        <p>${bdDatos.msjContacto}</p>

        <a class="btnWhat" href="https://wa.me/${bdDatos.whatsapp[0]}" target="_blank" rel="noopener noreferrer">Escribir por whatsapp</a>
    </div>
    `

})