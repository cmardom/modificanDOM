/**
 * Ejercicio 1
 * Partiendo del archivo HTML adjunto en carpeta comprimida “actividad3-1”, mover el
 * primer DIV.COL que está dentro de DIV#lista, al final del mismo DIV#lista, añadiéndole la clase
 * “bg-primary”.
 */

window.addEventListener('load', mover_al_ultimo);

function mover_al_ultimo(){
    let lista = document.getElementById('lista');
    const firstChild = lista.firstChild;
    lista.removeChild(firstChild);
    lista.appendChild(firstChild);

}

/**
 * Ejercicio 2
 * Partiendo del archivo HTML adjunto en carpeta comprimida “actividad3-2”, copiar los
 * DIV.COL dentro del DIV#original, al DIV#copia.
 */

// function copiar(){
//     const divOrigen = document.getElementById('original');
//     const divDestino = document.getElementById('copia');
//
//     divOrigen.querySelectorAll('div').forEach(function (sourceChild){
//         const clone = sourceChild.cloneNode(true);
//
//         divDestino.appendChild(clone);
//     }
// }

