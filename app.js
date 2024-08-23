// ==================== VARIABLES ====================
let existen_consonantes = false;
let son_minusculas = false;

// ==================== FUNCIONES ====================

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
    }
    return texto_encriptado;
}

//funcion para boton encriptar
function btn_encriptar(){
    let texto_inicial_encriptar = document.getElementById('textoUsuario').value;

    if(valida_texto(texto_inicial_encriptar)){
        texto_procesado(encripta_texto(texto_inicial_encriptar));
        document.querySelector('#btn_copiar').removeAttribute('disabled');
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
        document.querySelector('#btn_copiar').removeAttribute('disabled');
    } else {
        texto_procesado("El texto ingresado no contiene elementos para poderlo desencriptar");
    }
}

//funcion para copiar usando la API de clipboard
const btn_copiar = async () => {
    let texto_para_copiar = document.querySelector('#texto_procesado').innerHTML;
    try {
        await navigator.clipboard.writeText(texto_para_copiar);
        console.log('Contenido copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}

//funcion que pasa el texto a minusculas
function btn_minusculas(){
    let texto_para_transformar = document.querySelector('#textoUsuario').value.toLowerCase();
    texto_procesado(texto_para_transformar);
}

//funcion que limpia campo de texto inicial
function limpiarInput() {
    document.querySelector('#textoUsuario').value = '';
    return;
}

//funcion que establece condiciones iniciales
function condicionesIniciales() {
    limpiarInput();
    texto_procesado("Ningún mensaje fue encontrado");
    document.querySelector('#btn_copiar').setAttribute('disabled', 'true');
}

condicionesIniciales();