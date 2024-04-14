document.querySelector("#boton1").addEventListener('click', () => {

    let lista1 = document.querySelectorAll("#a2020 td")
    for (let celda of lista1)
        celda.style.backgroundColor = '#FF3361'
    let lista2 = document.querySelectorAll("#a2021 td")

    for (let celda of lista2)
        celda.style.backgroundColor = '#3380FF'
})