let nonCompleteTask = [];
let completedTask = [];

function mainFunction() {
    nonCompleteTask = JSON.parse(localStorage.getItem('nonComplete'));
    if (nonCompleteTask !== null) {
        nonCompleteTask.forEach(input => {
            addElement(input, 0);
        })
    }
}

function addElement(input, a) {
    const add_location = document.querySelector('.tasks');
    let li = document.createElement('li');
    li.classList.add(input.class);
    //main text append
    {
        let div = document.createElement('div');
        div.innerText = input.goal;
        li.appendChild(div);
    }
    //time append
    {
        let div = document.createElement('div');
        div.innerText = input.t;
        div.classList.add('time');
        li.appendChild(div);
    }
    //done and delete append
    {
        let div = document.createElement('div');
        div.classList.add('item-option');
        //done button
        if (a === 0) {
            let doneButton = document.createElement('button');
            doneButton.classList.add('fa-solid', 'fa-check', 'done');
            doneButton.addEventListener('click', event => {
                done(input);
            })
            div.append(doneButton);
        }
        //delete button
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('fa-solid', 'fa-trash', 'delete-item');
        deleteButton.addEventListener('click', event => {
            del(input, a);
        })
        div.append(deleteButton);
        li.appendChild(div);
    }
    add_location.appendChild(li);
}

function changeColor() {
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
    if (document.querySelector('.option1').innerText === 'Tasks') {
        alert('You cannot add task from history!');
        return;
    }
    const task = document.querySelector('#task').value;
    const add_location = document.querySelector('.tasks');
    if (task === '') {
        alert("You must write something to add it as task!");
    }
    else {
        let time = new Date();
        time = time.toDateString();
        let classValue = add_location.childElementCount;
        let input = {
            goal: task,
            t: time,
            class: `task${classValue + 1}`,
        };
        if (nonCompleteTask === null) {
            nonCompleteTask = [input];
        }
        else {
            nonCompleteTask.push(input);
        }

        localStorage.setItem('nonComplete', JSON.stringify(nonCompleteTask));
        addElement(input, 0);
        document.querySelector('#task').value = '';
    }
}

function done(item) {
    let input = JSON.parse(localStorage.getItem('nonComplete'));
    completedTask = JSON.parse(localStorage.getItem('Complete'));
    input.forEach(
        (i, index) => {
            if (i.class === item.class) {
                document.querySelector(`.${i.class}`).remove();
                if (completedTask === null) {
                    completedTask = [i];
                    console.log(completedTask);
                }
                else {
                    completedTask.push(i);
                }
                input.splice(index, 1);
                nonCompleteTask.splice(index, 1);
                localStorage.removeItem('nonComplete');
                localStorage.setItem('nonComplete', JSON.stringify(input));
                localStorage.setItem('Complete', JSON.stringify(completedTask));
            }
        }
    )
}

function del(item, a) {
    if (a === 0) {
        let input = JSON.parse(localStorage.getItem('nonComplete'));
        input.forEach(
            (i, index) => {
                if (i.class === item.class) {
                    document.querySelector(`.${i.class}`).remove();
                    input.splice(index, 1);
                    nonCompleteTask.splice(index, 1);
                    localStorage.removeItem('nonComplete');
                    localStorage.setItem('nonComplete', JSON.stringify(input));
                }
            }
        )
    }
    else {
        let input = JSON.parse(localStorage.getItem('Complete'));
        input.forEach(
            (i, index) => {
                if (i.class === item.class) {
                    document.querySelector(`.${i.class}`).remove();
                    input.splice(index, 1);
                    completedTask.splice(index, 1);
                    localStorage.removeItem('Complete');
                    localStorage.setItem('Complete', JSON.stringify(input));
                }
            }
        )
    }
}

function show_history() {
    if (document.querySelector('.option1').innerText === 'History') {
        document.querySelector('.option1').innerText = 'Tasks';
        let output = JSON.parse(localStorage.getItem('Complete'));
        if (output !== null) {
            document.querySelector('.tasks').innerHTML = '';
            output.forEach(
                (i, index) => {
                    addElement(i, 1);
                }
            )
        }
        else {
            alert('Non task completed to show in history!');
        }
    }
    else {
        document.querySelector('.option1').innerText = 'History';
        document.querySelector('.tasks').innerHTML = '';
        mainFunction();
    }
}

mainFunction();