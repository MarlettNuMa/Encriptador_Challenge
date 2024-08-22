// ==================== VARIABLES ====================
let existen_consonantes = false;
let son_minusculas = false;

// ==================== FUNCIONES ====================

//funcion para boton desencriptar
//let texto_inicial_desencriptar = document.getElementById('textoUsuario').value;

//funcion flecha que pasa el texto a minusculas
let texto_a_minusculas = (texto_inicial_encriptar) => texto_inicial_encriptar.toLowerCase();

//funcion que muestra el texto procesado
let texto_procesado = (texto_encriptado) => document.getElementById('texto_procesado').innerHTML = texto_encriptado;

//funcion que valida que el texto se pueda encriptar
function valida_texto(texto_inicial_encriptar){
    let letra;

    for(let index = 0; index < texto_inicial_encriptar.length; index++){
        letra = texto_inicial_encriptar[index];

        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u")
            return existen_consonantes = true;
    }

    return existen_consonantes;
}


//funcion que encripta
function encripta_texto(texto_inicial_encriptar){
    let letra;
    let texto_encriptado = "";

    for(let index = 0; index < texto_inicial_encriptar.length; index++){
        letra = texto_inicial_encriptar[index];

        if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){

            switch (letra) {
                case "a":
                    texto_encriptado = texto_encriptado + "ai";
                    break;
                case "e":
                    texto_encriptado = texto_encriptado + "enter" ;
                    break;
                case "i":
                    texto_encriptado = texto_encriptado + "imes";
                    break;
                case "o":
                    texto_encriptado = texto_encriptado + "ober";
                    break;
                case "u":
                    texto_encriptado = texto_encriptado + "ufat";
                    break;            
            }
        } else texto_encriptado = texto_encriptado + letra;

        console.log(texto_encriptado);
    }
    console.log(texto_encriptado);
    return texto_encriptado;
}

//funcion para boton encriptar
function btn_encriptar(){
    let texto_inicial_encriptar = document.getElementById('textoUsuario').value;

    if(valida_texto(texto_inicial_encriptar)){
        texto_procesado(encripta_texto(texto_inicial_encriptar));
        console.log(encripta_texto);
    } else {
        texto_procesado("El texto ingresado no contiene elementos para poderlo encriptar");
    }
}

//funcion que guarda texto para comparar secuencia encriptada
function guarda_secuencia(longitud_secuencia, index, texto){
    let texto_temporal = "";
    let limite = index + longitud_secuencia;

    for(let i = index; i < limite; i++){
        texto_temporal = texto_temporal + texto[i];
    }

    return texto_temporal;
}

//funcion que desencripta
function desencripta_texto(texto_inicial_desencriptar){
    let letra;
    let texto_desencriptado = "";
    let index = 0;
    let longitud_de_secuencia;

    while (index < texto_inicial_desencriptar.length){
        letra = texto_inicial_desencriptar[index];

        if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){

            switch (letra) {
                case "a":
                    longitud_de_secuencia = 2;
                    if(guarda_secuencia(longitud_de_secuencia, index, texto_inicial_desencriptar) === "ai"){
                        texto_desencriptado = texto_desencriptado + "a";
                        index += longitud_de_secuencia;
                    } else break;
                    break;
                case "e":
                    longitud_de_secuencia = 5;
                    if(guarda_secuencia(longitud_de_secuencia, index, texto_inicial_desencriptar) === "enter"){
                        texto_desencriptado = texto_desencriptado + "e";
                        index += longitud_de_secuencia;
                    } else break;
                    break;
                case "i":
                    longitud_de_secuencia = 4;
                    if(guarda_secuencia(longitud_de_secuencia, index, texto_inicial_desencriptar) === "imes"){
                        texto_desencriptado = texto_desencriptado + "i";
                        index += longitud_de_secuencia;
                    } else break;
                    break;
                case "o":
                    longitud_de_secuencia = 4;
                    if(guarda_secuencia(longitud_de_secuencia, index, texto_inicial_desencriptar) === "ober"){
                        texto_desencriptado = texto_desencriptado + "o";
                        index += longitud_de_secuencia;
                    } else break;
                    break;
                case "u":
                    longitud_de_secuencia = 4;
                    if(guarda_secuencia(longitud_de_secuencia, index, texto_inicial_desencriptar) === "ufat"){
                        texto_desencriptado = texto_desencriptado + "u";
                        index += longitud_de_secuencia;
                    } else break;
                    break;
            }
        } else {
            texto_desencriptado = texto_desencriptado + letra;
            index ++;
        }

    }
    return texto_desencriptado;
}

//funcion para btn desencriptar
function btn_desencriptar(){
    let texto_inicial_desencriptar = document.getElementById('textoUsuario').value;

    if(valida_texto(texto_inicial_desencriptar)){
        texto_procesado(desencripta_texto(texto_inicial_desencriptar));
        console.log(desencripta_texto);
    } else {
        texto_procesado("El texto ingresado no contiene elementos para poderlo desencriptar");
    }
}