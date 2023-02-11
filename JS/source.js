//Ex. 1
function equal()
{
    const nums = prompt("Give me 2 numbers separated by comma ,").split(",");
    let res = nums[0] == nums[1] ? "BOOM" : "TRY AGAIN";
    document.getElementById("txt7").value = res;
    //Ex. 2
    console.log("Ex.2: ", 
        nums[0] +"+"+ nums[1] +"="+ (Number(nums[0])+Number(nums[1])));
    //Ex. 3
    console.log("Ex.3: ", nums[0] +"*"+ nums[1] +"="+ nums[0]*nums[1]); 
    //Ex. 7
    let rec = nums[0] == nums[1] ? "SQUARE s=" : "rectangle s=";
    console.log("Ex.7: ", rec + nums[0]*nums[1]);                        
}
//Ex. 4
function maxNum()
{
    const n = prompt("Give me some numbers separated by comma ,").split(",");
    if(n.length >= 2)
    {
        let max = Number(n[0])>Number(n[1]) ? Number(n[0]) : Number(n[1]);
        for (let i=2; i<n.length; i++) 
        { 
            max = Number(n[i])>Number(max) ? Number(n[i]) : Number(max);
        }
        document.getElementById("txt8").value = max;
    }
    else
    {
        document.getElementById("txt8").value = "Give me more then 1 number"
    }
}
//Ex. 5
function congrat()
{
    let txt = 0;
    let wd = prompt("What is the week day ?")
    if(wd == 1)
    {
        txt = "have good week";
    }
    else if(wd>1 && wd<5)
    {
        txt = "have good day";
    }
    else if(wd>=5 && wd<=7)
    {
        txt = "happy weekend";
    }
    else
    {
        txt = "wrong week day";
    }
    document.getElementById("txt9").value = txt;
}
//Ex. 6
function credentials()
{
    let cr = prompt("Enter your user and password, separated by comma").split(",");
    let user = cr[0];
    let pwd  = cr[1];
    if(pwd.length < 6 )
    {
        document.getElementById("txt10").value =
            "6 letter minimum for password";
        return;
    }
    if(user == "admin" && pwd == 123456)
    {
        document.getElementById("txt10").value =
            "you are connected successfully";               
    }
    else
    {
        if(pwd == 123456)
        {
            document.getElementById("txt10").value = "wrong user";
        }
        else if(user =="admin")
        {
            document.getElementById("txt10").value = "wrong password";
        }
        else
        {
            document.getElementById("txt10").value = "wrong user and password";
        }
    }
}
//Ex. 8
function age()
{
    y = prompt("What is your year of birth?")
    document.getElementById("txt11").value ="Your age is: " + (2023-y);
}
//Ex. 9
function chempion()
{
    let p1 = prompt("Enter first player name and him score").split(",");
    let p2 = prompt("Enter second player name and him score").split(",");
    let txt = "Standoff !";
    if(p1[1] > p2[1])
    {
        txt = "Chempion: " + p1[0] + " " + p1[1];
    }
    else if(p1[1] < p2[1])
    {
        txt = "Chempion: " + p2[0] + " " + p2[1];
    }
    else ;
    document.getElementById("txt12").value = txt;
}
//Ex.10        
function average()
{
    let sum = 0;
    const inputs = prompt("Enter some numbers separated by comma ,").split(",");
    for(let i = 0; i < inputs.length; i++)
    {
        sum += Number(inputs[i]);
    }
    let avr = sum/inputs.length;
    document.getElementById("txt1").value = avr;
    //Ex.12
    console.log("Ex.12: average of " + inputs.length + " numbers: " + avr);
}
//Ex.11 
function oddEven()
{
    let num = prompt("Give me a number:");
    let res = (Boolean(num%2) ? "odd" : "even");            
    document.getElementById("txt2").value = res;
}
//Ex.13
function learners()
{
    let num = prompt("Give me a scholar number:");
    const escort = [];

    let guard = Boolean(num%30) ? Math.ceil(num/30) :num/30 ;
    escort.push("guards = " + guard);

    let firstAidKit = Boolean(num%50) ? Math.ceil(num/50) : num/50 ;
    escort.push("firstAidKits = " + firstAidKit);

    let paramedic = Boolean(num%100) ? Math.ceil(num/100) : num/100 ;
    escort.push("paramedics = " + paramedic);

    document.getElementById("txt3").value = escort;
}
//Ex.14
function hours()
{
    let num = prompt("Give me your minutes number:"); 
    const hm = [];
    let h = Math.floor(num/60);
    hm.push("hours = " + h);
    let m = num%60;
    hm.push("minutes = " + m);
    document.getElementById("txt4").value = hm;
}
//Ex.15
function sale()
{
    const input = 
        prompt("Give me a price and your number of payments\n\
        (comma separated)")
        .split(",");
    const yourToyota = [];
    let price = Number(input[0]) * 95 / 100;
    yourToyota.push("price = " + price);
    yourToyota.push("pyment = " + (price/Number(input[1])));
    document.getElementById("txt5").value = yourToyota;
}
//Ex.16        
function tram()
{
    const input = prompt("Carriage num.:\nPeriod:\n Salary:").split(",");

    const periods = [1, 0.9, 0.7];
    const maxPass = 120;
    const passCost = 6.6;
    const factor = 0.83;     //17% tax  

    let profit = 
    (Number(input[0]) * maxPass * passCost * periods[Number(input[1])-1]
     - Number(input[2]))
     * factor;

     document.getElementById("txt6").value = profit;
}

let sgn = 1;
setInterval(makeSkew, 3000);
function makeSkew()
{            
    // console.log("sgn: ", sgn);
    document.getElementById("thDiv").style = 
    'transform: skewX('+sgn*50+'deg); transition: 2s ease;';
    sgn *= -1;
}        
