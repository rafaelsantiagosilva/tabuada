function calcular(){
    let numero = Number(document.getElementById('num').value);
    let tabuada = document.getElementById('tab');
    
    if(numero.length == 0){
        alert("ERRO - Por favor, insira um número!");
        tabuada.innerHTML = '';
    } else{
        let numTabuada = 0;
        while(numTabuada <= 10){
            let item = document.createElement('option');
            item.text = `${numero} X ${numTabuada} = ${numero*numTabuada}`;
            item.value = `tab${numTabuada}`;
            tabuada.appendChild(item);
            numTabuada++;
        }
    }
}