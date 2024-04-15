
function handleKindChange() {
    const selectElement = document.getElementById('kind1');
    const selectedKind = selectElement.value;
    if (selectedKind == 'Аннуитетный платеж') {
        document.getElementById("form-for-ann").style.display = "block";

          
        } else {
            document.getElementById("form-for-ann").style.display = "none";
        }
     
    } 

const inputs = document.querySelectorAll('input[type=number]');
Array.from(inputs).forEach(input => {
    const min = +input.min;
    const max = +input.max;

    input.addEventListener('input', (e) => {
        const value = +input.value;
        if (value > 99) { input.value = 99 }
        else if (value < 0) { input.value = 1 }
    })
})

function mainFunction_for_ann(){
    
    document.getElementById('block-of-calculator2').style.display = 'none';
    document.getElementById('table1').style.display="block";

    let Summ = parseFloat(document.getElementById('Sum-of-credit1').value);
    let years = parseInt(document.getElementById('years1').value);
    let percents = parseFloat(document.getElementById('percents1').value)
    let payment = parseFloat(document.getElementById('payment1').value)
    let overpayment = parseFloat(document.getElementById('overpayment1').value)
    let choice = document.getElementById('kind2').value

    if (choice == "Сумма кредита"){
        // Проверка на наличие величины суммы
        if(isNaN(Summ) == false){
            document.getElementById('result1').innerHTML = Summ;
        } else{
            let result = payment*(100/(percents))*(1-(100/(100+percents))**(years));
            console.log('You choosed summ of credit');
            document.getElementById('result1').innerHTML = result.toFixed(6);
        }
    }

    if (choice == "Ежегодная выплата по кредиту"){
        if (isNaN(payment) == false){
            document.getElementById('result1').innerHTML = payment;
        } else{
            let result = ((Summ*percents)/100)*(((100+percents)/100)**years)/(((100+percents)/100)**years-1)
            document.getElementById('result1').innerHTML = result.toFixed(6); 
        }
        
    }

    if (choice == "Переплата по кредиту"){
        if(isNaN(payment)){
            payment = ((Summ*percents)/100)*(((100+percents)/100)**years)/(((100+percents)/100)**years-1)
        }
        // payment = ((Summ*percents)/100)*(1/(1-(100/(100+percents))**years));
        
        let result = years*payment-Summ
        document.getElementById('result1').innerHTML = result.toFixed(6);
    }

    if (choice == "Сумма выплат по кредиту"){
        if(isNaN(overpayment) == true){
            let payment = ((Summ*percents)/100)*(((100+percents)/100)**years)/(((100+percents)/100)**years-1)
            let overpayment = years*payment-Summ;
            let result = (years*overpayment)/(years-(100/(percents))*(1-(100/(100+percents))**(years)));
            document.getElementById('result1').innerHTML = result.toFixed(6);
        }
        let result = (years*overpayment)/(years-(100/(percents))*(1-(100/(100+percents))**(years)));
        document.getElementById('result1').innerHTML = result.toFixed(6);

    }


    
    console.log("You touched the button!")
    
    // для таблички что то такое:
    // for(let i = 0; i < years; i++){
            //innerHTML и т.д.
        
    // }



    
        
}




   