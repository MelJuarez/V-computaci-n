import { base_data } from "./data.js"; //Se importa base de datos


function muestra_cartelera3(){


    let cartelera = document.querySelector(".caja3"); //Se crea una variable y con la función document.querySelector se llama al div del html que se le insertará texto
    cartelera.innerHTML = ( //a la variable antes creada se le inserta texto con la funcion innerHTML
        base_data[2].Titulo+ //Inserta la variable Titulo, posición 0 de la base de datos
        "<br>"+"<br>"+ //Saltos de línea
        base_data[2].Descripcion //Inserta la variable Descripción, posción 0 de la base de dato


        );    




}


export{muestra_cartelera3}; //Se exporta la función