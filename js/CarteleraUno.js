import { base_data }from"./data.js"


function muestra_cartelera1(){

    let cartelera = document.querySelector(".caja1");
    cartelera.innerHTML = (
        base_data[0].Titulo+ 
        "<br" + "<br>"+ 
        base_data[0].Descripcion


        );

        
        
}

export{muestra_cartelera1};

