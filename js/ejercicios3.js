mover_al_ultimo();
copiar();
ordenar();
duplicar_y_ordenar();

/**
 * Ejercicio 1
 * Partiendo del archivo HTML adjunto en carpeta comprimida “actividad3-1”, mover el
 * primer DIV.COL que está dentro de DIV#lista, al final del mismo DIV#lista, añadiéndole la clase
 * “bg-primary”.
 */

function mover_al_ultimo(){
    let lista = document.getElementById('lista');
    const firstChild = lista.firstElementChild;
    firstChild.classList.add('bg-primary');
    lista.removeChild(firstChild);
    lista.appendChild(firstChild);
}

/**
 * Ejercicio 2
 * Partiendo del archivo HTML adjunto en carpeta comprimida “actividad3-2”, copiar los
 * DIV.COL dentro del DIV#original, al DIV#copia.
 */


function copiar(){
    const divOrigen = document.getElementById('original');
    const divDestino = document.getElementById('copia');

    divOrigen.querySelectorAll('div').forEach(function (sourceChild){
        const clone = sourceChild.cloneNode(true);
        divDestino.appendChild(clone);
    })
}

/**
 * Ejercicio 3
 * Partiendo del archivo HTML adjunto en carpeta comprimida “actividad3-3”, ordenar los
 * DIV.COL dentro del propio DIV#ordenar, según el texto que tiene cada DIV.COL.
 */

function ordenar(){
    const divOrdenar = document.getElementById('ordenar');
    let divs = Array.from(divOrdenar.getElementsByClassName("col"));
    divs.sort(function (a,b){
        return a.innerText.localeCompare(b.textContent);
    });

    divOrdenar.innerHTML = "";
    divs.forEach(function (div){
        divOrdenar.appendChild(div)
    });
}

/**
 * Ejercicio 4
 * Partiendo del archivo HTML adjunto en carpeta comprimida “actividad3-4”, leer/copiar los
 * DIV.COL dentro del DIV#desordenado, ordenarlos según el texto que tiene cada DIV.COL, y
 * ponerlos ordenados en el DIV#ordenado.
 */

function duplicar_y_ordenar() {
    const desordenado = document.getElementById('desordenado');
    const clonado = desordenado.cloneNode(true);
    const ordenado = document.getElementById('ordenado');
    let divs = Array.from(clonado.getElementsByClassName("col"));
    divs.sort(function (a,b){
        return a.innerText.localeCompare(b.textContent);
    });

    for (let i = 0; i < divs.length; i++) {
        ordenado.appendChild(divs[i]);
    }

}