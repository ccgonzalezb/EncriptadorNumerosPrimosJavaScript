const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".btn-copiar");

const listAbecedario =["Ĉ","\"","#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S",
"T","U","V","W","X","Y","Z","[","\\","]","^","_","´","a","b","c","d","e","f","©","h","i","j","k","l","m",
"n","ñ","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"," ","¢","£","¤","¥","á","é","í",
"ó","ú","Á","É","Í","Ó","Ú","¦","§","¨","g","ª","«","¬","­¡","¯","°","±","²","³","µ","¶","¹","º","»","¼",
"½","¾","¿","À","Â","Ã","Ä","Å","!","Ç","È","Ê","Ë","Ì","Î","Ï","Ð","Ò","Ô","Õ","Ö","×","Ø","Ù","Û","Ü",
"Ý","Þ","ß","à","â","ä","å","æ","ç","è","ê","ë","ì","î","ï","Ą","ą","ð","ò","ô","õ","ö","÷","ø","ù","û",
"ü","ý","þ","ÿ","ă","@"];

const p = 11n;
const q = 17n;
const m = (p*q);

//funcion salto de linea
function saltoLinea(){
    const salto = "<br><br><br>"
    document.write(salto);
}

//imprimir
function imprimir(frase){
    document.write(frase);
    saltoLinea();
}

// funcion que convierte los textos en numeros y los lleva a una lista 
function conFraseNumero(frase){
    let lista = [];
    for(let i = 0; i < frase.length; i++){
        lista.push(frase[i]); 
    }
    for(let j = 0; j <listAbecedario.length; j++ ){
        for(let k = 0; k < frase.length; k++){
            if(lista[k] == listAbecedario[j]){
                lista[k] = j;
            }
        }   
    }
    return lista;
}

//funcion que hace una permutación de numeros en una lista ordenada
function codiFrases(lista){
    const k = 23n;
    listCod = [];
    for(let i =0;i < lista.length; i++){
        listCod.push((BigInt(lista[i])**k)%m);
    }      
    return listCod;    

}

//funcion que convierte una lista de numeros en un String(frase) 
function conNumeroFrase(lista){ 
    for(let i =0;i <lista.length;i++){
        for(let j =0;j <listAbecedario.length;j++){
            if (lista[i] == j){
                (lista[i] = listAbecedario[j]);
            }
        }
    }
    let texto = lista.join('');
    return texto;
}
// funcion que revierte la permutación de numeros de la funcion codiFrases
function deCodiFrases(lista){
    const h = 7n;
    listCod = [];
    for(let i =0;i <lista.length;i++){
        listCod.push((BigInt(lista[i])**h)%m);
    }      
    return listCod;
}

function btnEncriptar(){
    const textoEncriptado = (conNumeroFrase(codiFrases(conFraseNumero(textArea.value))));
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textoEncriptado = (conNumeroFrase(deCodiFrases(conFraseNumero(textArea.value))));
    mensaje.value = textoEncriptado;
    textArea.value = "";
}
function btnCopiarTexto(){
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
