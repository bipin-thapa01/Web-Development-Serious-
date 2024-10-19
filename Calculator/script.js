let displayContent = '';
let calcStatus = 'off';

if(calcStatus === 'off')
{
    document.querySelector('.note').innerText = `Note: The Calculator is ${calcStatus}`;
}

function power(a)
{
    if(a === 'on')
    {
        calcStatus = a;
        document.querySelector('.note').innerText = `Note: The Calculator is ${calcStatus}`;
    }
    if(a === 'off')
    {
        calcStatus = a;
        document.querySelector('.note').innerText = `Note: The Calculator is ${calcStatus}`;
        document.querySelector('.display').innerText = '';
    }
}

function button(a)
{
    
    if(calcStatus === 'on')
    {
        if(a === '=')
        {
            document.querySelector('.display').innerText = eval(displayContent);
            return;
        }
        if(a === 'del')
        {
            displayContent = displayContent.slice(0,-1);
            document.querySelector('.display').innerText = displayContent;
            return;
        }
        if(a === 'ac')
        {
            displayContent = '';
            document.querySelector('.display').innerText = displayContent;
            return;
        }
        displayContent += a;
        document.querySelector('.display').innerText = displayContent;
    }
    
}