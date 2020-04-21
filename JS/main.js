

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open('https://www.linkedin.com/in/aline-evelyn/');
    //window.location.href = "https://www.linkedin.com/in/aline-evelyn/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/
/*
var validar;
function validaIdade(idade){
    validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade");
validaIdade(idade)
console.log(validaIdade(idade));
*/
//alert(soma(5,10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));


/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/


/*
var count;
for (count=0; count <=5; count++){
    alert(count);
};
*/


/*
var count = 0;
while (count < 5){
    console.log(count);
    count = count + 1;
};
*/


//var idade = prompt("Qual a sua idade");
//if(idade >= 18){
    //alert("maior de idade");
//}else{
    //alert("menor de idade");
//};


//var frutas = [{nome:'maça', cor: "vermelha"}];
//console.log(frutas);
//alert(frutas[1].cor);

//var fruta = {nome:'maça', cor: "vermelha"};
//console.log(fruta.nome);
//alert(fruta.cor);


//var lista = ['maçã', 'pera', 'laranja'];
//lista.push('uva');
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "Aline Silva";
//var idade = 36;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos");
//alert(idade+idade2)
//console.log(nome);
//console.log(idade);
//console.log(frase.replace("Japão", "Brasil"))