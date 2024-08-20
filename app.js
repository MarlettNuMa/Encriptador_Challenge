// ==================== VARIABLES ====================

let texto_encriptado;
let existen_consonantes = false;
let son_minusculas = false;

// ==================== FUNCIONES ====================

//funcion para boton encriptar
let texto_inicial_encriptar = document.getElementById('textoUsuario').value;

//funcion para boton desencriptar
let texto_inicial_desencriptar = document.getElementById('textoUsuario').value;

//funcion flecha que pasa el texto a minusculas
let texto_a_minusculas = (texto_inicial) => texto_inicial.toLowerCase();

//funcion que valida que el texto se pueda encriptar
function valida_texto(texto_inicial){
    let letra;

    for(let index = 0; index < texto_inicial.length; index++){
        letra = texto_inicial[index];

        if (letra === a || letra === e || letra === i || letra === o || letra === u)
            return existen_consonantes = true;
    }

    return existen_consonantes;
}

//funcion que encripta
function encripta_texto(texto_inicial){
    let letra;

    for(let index = 0; index < texto_inicial.length; index++){
        letra = texto_inicial[index];

        if(letra === a || letra === e || letra === i || letra === o || letra === u){

            switch (letra) {
                case a:
                    texto_encriptado = texto_encriptado + "ai";
                    break;
                case e:
                    texto_encriptado = texto_encriptado + "enter" ;
                    break;
                case i:
                    texto_encriptado = texto_encriptado + "imes";
                    break;
                case o:
                    texto_encriptado = texto_encriptado + "ober";
                    break;
                case u:
                    texto_encriptado = texto_encriptado + "ufat";            
                default:
                    break;
            }
        } else texto_encriptado = texto_encriptado + letra;
    }
}

//funcion que muestra el texto procesado
let texto_procesado = (texto_encriptado) => document.getElementById('texto_procesado').innerHTML = texto_encriptado;