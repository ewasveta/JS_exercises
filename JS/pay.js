
const h = document.querySelector('input');   
let res = h.value;
document.addEventListener('click', e => 
{  
    let element = e.target;
    if (element.tagName == 'BUTTON')
    { 
        if(element.innerText == 'sum')
        {  
            res = parseFloat(h.value); 
            if( isNaN(res))
            { 
                h.placeholder = "Enter sum";
                return;
            }
            h.value = "";
            h.placeholder = "Enter tip";
            console.log(`res = ${res}`);
        }        
        if(element.innerText == 'tip')
        {
            if(isNaN(parseFloat(h.value)))
            {    
                h.placeholder = "Enter tip:";
                return;
            }
            res *= (100 + parseFloat(h.value))/100;
            h.value = "";
            h.placeholder = "Press pay:";
            console.log(`res = ${res}`);
        }
        if(element.innerText == 'pay')
        {
            h.value =  Math.round(res); //res.toPrecision(2);
        }
        if(element.innerText == 'del')
        {
            h.value = "";
            h.placeholder="Enter sum:";
        }
    }
})


