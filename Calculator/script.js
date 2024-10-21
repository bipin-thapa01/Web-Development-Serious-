let displayContent = '';
let calculate = '';
let calcStatus = 'off';

if(calcStatus === 'off')
{
    document.querySelector('.top4').innerText = `The Calculator is ${calcStatus}`;
}

function power(a)
{
    if(a === 'on')
    {
        calcStatus = a;
        document.querySelector('.top4').innerText = `The Calculator is ${calcStatus}`;
        document.querySelector('.top4').style.color = 'green';
    }
    if(a === 'off')
    {
        calcStatus = a;
        document.querySelector('.top4').innerText = `The Calculator is ${calcStatus}`;
        document.querySelector('.top4').style.color = 'red';
        document.querySelector('.display1').innerText = '';
        document.querySelector('.display2').innerText = '';
        displayContent = '';
        calculate = '';
    }
}

function button(a)
{
    
    if(calcStatus === 'on')
    {
        if(a === '=')
        {
            let ans = eval(calculate);
            document.querySelector('.display2').innerText = ans;
            console.log(ans);
            localStorage.setItem('answer',ans.toString());
            return;
        }
        if(a === 'del')
        {
            displayContent = displayContent.slice(0,-1);
            calculate = calculate.slice(0,-1);
            document.querySelector('.display1').innerText = displayContent;
            return;
        }
        if(a === 'ac')
        {
            displayContent = '';
            calculate = '';
            document.querySelector('.display1').innerText = displayContent;
            document.querySelector('.display2').innerText = calculate;
            return;
        }
        if(a === '*10')
        {
            displayContent += '*10^';
            calculate += '*10**';
            document.querySelector('.display1').innerText = displayContent;
            return;
        }
        if(a === '^')
        {
            displayContent += a;
            calculate += '**';
            document.querySelector('.display1').innerText = displayContent;
            return;
        }
        if(a === 'ans')
        {
            let ans = localStorage.getItem('answer');
            displayContent += 'ANS';
            calculate += ans;
            document.querySelector('.display1').innerText += 'ANS';
            return;
        }
        displayContent += a;
        calculate += a;
        document.querySelector('.display1').innerText = displayContent;
    }
    
}