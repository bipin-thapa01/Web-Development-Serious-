for (let i = 0; i < localStorage.length + 1; i++) {
    let task = JSON.parse(localStorage.getItem(`task${i + 1}`));
    if (task.complete_status === 'no') {
        let add_location = document.querySelector('.tasks');
        let li = document.createElement('li');
        li.classList.add(`number${i+1}`);
        let div = document.createElement('div');
        div.innerText = task.task;
        li.appendChild(div);
        {
            let div = document.createElement('div');
            let needed_time = task.time_of_addition;
            div.classList.add('time');
            div.innerText = needed_time;
            li.appendChild(div);
        }
        {
            let div = document.createElement('div');
            let done_button = document.createElement('button');
            done_button.classList.add('done');
            {
                let i = document.createElement('i');
                i.classList.add('fa-solid', 'fa-check');
                done_button.appendChild(i);
            }
            done_button.onclick = function() {
                done(`task${i+1}`);
            };
            div.appendChild(done_button);
            let del_button = document.createElement('button');
            del_button.classList.add('delete-item');
            {
                let i = document.createElement('i');
                i.classList.add('fa-solid', 'fa-trash');
                del_button.appendChild(i);
            }
            del_button.onclick = function() {
                del(`task${i+1}`);
            };
            div.appendChild(del_button);
            div.classList.add('item-option');
            li.appendChild(div);
        }
        add_location.appendChild(li);
    }
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
    const task = document.querySelector('#task').value;
    const add_location = document.querySelector('.tasks')
    if (task === '') {
        alert("You must write something to add it as task!");
    }
    else {
        const time = new Date();
        let tasks = {
            task: task,
            time_of_addition: time.toDateString(),
            complete_status: 'no',
        };
        localStorage.setItem(`task${localStorage.length + 1}`, JSON.stringify(tasks));
        let li = document.createElement('li');
        li.classList.add(`number${localStorage.length}`);
        let div = document.createElement('div');
        div.innerText = task;
        li.appendChild(div);
        {
            let string_time = time.toDateString();
            let div = document.createElement('div');
            let needed_time = string_time;
            div.classList.add('time');
            div.innerText = needed_time;
            li.appendChild(div);
        }
        {
            let div = document.createElement('div');
            let done_button = document.createElement('button');
            done_button.classList.add('done');
            {
                let i = document.createElement('i');
                i.classList.add('fa-solid', 'fa-check');
                done_button.appendChild(i);
            }
            done_button.classList.add(`task${localStorage.length}`);
            done_button.onclick = function() {
                done(`task${localStorage.length}`);
            };
            div.appendChild(done_button);
            let del_button = document.createElement('button');
            del_button.classList.add('delete-item');
            {
                let i = document.createElement('i');
                i.classList.add('fa-solid', 'fa-trash');
                del_button.appendChild(i);
            }
            del_button.onclick = function() {
                del(`task${this.localStorage.length}`);
            };
            div.appendChild(del_button);
            div.classList.add('item-option');
            li.appendChild(div);
        }
        add_location.appendChild(li);
    }
}

function done(item) {
    console.log(`I have done the task: ${item}`);
    let task = JSON.parse(localStorage.getItem(item));
    task.complete_status = 'yes';
    document.querySelector(`.number${item.slice(-1)}`).remove();
    localStorage.removeItem(item);
    localStorage.setItem(item,JSON.stringify(task));
}

function del(item) {
    console.log(`I have deleted the task: ${item}`);
}