for(let i=0;i<localStorage.length;i++)
{
    document.querySelector('.tasks').innerHTML += localStorage.getItem(`item${i+1}`);
}

function changeColor() {
    console.log("Hello");
    let check_color = document.getElementsByTagName("body")[0];
    let current_color = window.getComputedStyle(check_color).backgroundColor;
    if (current_color !== "rgb(39, 37, 37)") {
        check_color.style.backgroundColor = "#272525";
        const change1 = document.querySelector('.nav11');
        change1.style.color = "#ffffff";
        const change2 = document.querySelector('.nav12');
        change2.style.color = "#ffffff";
        const change3 = document.querySelector('.nav21 span a');
        change3.style.color = "#ffffff";
        const change4 = document.querySelector('.nav22 span a');
        change4.style.color = "#ffffff";
        const change5 = document.querySelector('.nav21');
        change5.style.color = "#ffffff";
        const change6 = document.querySelector('.nav22');
        change6.style.color = "#ffffff";
        const change7 = document.querySelector('nav');
        change7.style.backgroundColor = "#202020";
        change7.style.borderBottomColor = "#ffffff";
        const change8 = document.querySelector('.nav3');
        change8.style.backgroundColor = "#C1C1C1";
    }
    else {
        check_color.style.backgroundColor = "#ffffff";
        const change1 = document.querySelector('.nav11');
        change1.style.color = "#000000";
        const change2 = document.querySelector('.nav12');
        change2.style.color = "#000000";
        const change3 = document.querySelector('.nav21 span a');
        change3.style.color = "#000000";
        const change4 = document.querySelector('.nav22 span a');
        change4.style.color = "#000000";
        const change5 = document.querySelector('.nav21');
        change5.style.color = "#000000";
        const change6 = document.querySelector('.nav22');
        change6.style.color = "#000000";
        const change7 = document.querySelector('nav');
        change7.style.backgroundColor = "#ffffff";
        change7.style.borderBottomColor = "#000000";
        const change8 = document.querySelector('.nav3');
        change8.style.backgroundColor = "rgb(225, 225, 44)";
    }
}

function add() {
    const task = document.querySelector('#task').value;
    const add_location = document.querySelector('.tasks')
    if (task === '') {
        alert("You must write something to add it as task!");
    }
    else {
        const add_item = `<li class="item${localStorage.length+1}"><p>${task}</p>
        <div class='item-option'>
            <button class="done" onclick="done()"><i class="fa-solid fa-check"></i></button>
            <button class="delete-item" onclick="del(item${localStorage.length+1})"><i class="fa-solid fa-trash"></i></button>
        </div>
        </li>`;
        localStorage.setItem(`item${localStorage.length+1}`,add_item);
        add_location.innerHTML += add_item;
    }
}

function done()
{

}

function del(item)
{
    // console.log(item);
    // localStorage.removeItem(item);
    // document.querySelector(item).remove();
}