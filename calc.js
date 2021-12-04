var tamanho=0;
function print(click){
    if(tamanho<13){
        document.getElementById('p').innerHTML+=click.replace("*","×").replace("/","÷");
        tamanho++;
    }
}
function limpar(){
    document.getElementById('p').innerHTML="";
    tamanho=0;
}
function apaga(){
    var remove=document.getElementById('p').innerHTML.slice(0, -1);
    document.getElementById('p').innerHTML=remove;
    if(tamanho!=0){
        tamanho--;
    }
}
function contrario(){
    var contrario=document.getElementById('p').innerHTML;
    document.getElementById('p').innerHTML=contrario*-1;
}
function calcular(){
    tamanho=document.getElementById('p').innerHTML.length;
    var resultado=document.getElementById('p').innerHTML.replace("×","*").replace("÷","/");
        document.getElementById('p').innerHTML = parseFloat(eval(resultado).toFixed(2));
}
