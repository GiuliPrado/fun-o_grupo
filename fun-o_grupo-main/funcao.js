function LeiaSeuNome(autor){
if (autor == "Giuliana"){ 
    leia("Viva a vida como se nao houvesse amanha")
}
}  

function LeiaSeuNome(autor){
if(autor == "Eduarda"){
     leia("Mande embora o que nao te faz bem")
}
}

function LeiaSeuNome(autor){
if (autor == "Samuel"){
    leia("Chega de ficar de nhenhenhem")
}
}

function LeiaSeuNome(autor){
if (autor == "Eduardo"){
    leia("Vou viver a vida e nunca mais me estressar")
}
}

const autor["Giuliana", "Eduarda", "Samuel", "Eduardo"];
let contador = 0;
while(contador < autor.length){
    leiaSeuNome(autor[contador]);
    contador = contador + 1;
}