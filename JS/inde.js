
const h = document.querySelector('input');   
let res = h.value;
document.addEventListener('click', e => 
{  
    let element = e.target;
    if (element.tagName == 'BUTTON')
    { 
        if(element.innerText == 'increment')
        {  
            res = parseInt(h.value);
            res++;
            h.value = res;
        }        
        if(element.innerText == 'decrement')
        {
            res = parseInt(h.value);
            res--;
            h.value = res;
        }
        if(element.innerText == 'reset')
        {
            h.value = "1";
        }
    }
})


