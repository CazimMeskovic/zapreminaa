function inflationCalculator() {

    let stopa = document.querySelector('#inflationRate').value;
    let novac = document.querySelector('#money').value;
    let godine = document.querySelector('#years').value;
stopa = parseFloat(stopa);
novac = parseFloat(novac);
godine = parseFloat(godine);

let formula = novac + (novac *(stopa/100));
for (let i = 1; i < godine; i++) {
    formula += formula * (stopa / 100);  
}

//console.log(formula);
 let noviE = document.createElement('p');
 noviE.createClassName = 'new-value';
 noviE.innerText = `Danasnjih ${novac} marke ce za ${godine} godine vrijediti ${formula} maraka`

 document.querySelector('.container').appendChild(noviE);


}

