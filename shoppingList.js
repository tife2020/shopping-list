function clickBtnToAddListFunction() {
    itemToAdd = input.value;
    if (itemToAdd.length > 0) {
        var li = document.createElement('li')
        // li.innerText = itemToAdd
        li.appendChild(document.createTextNode(itemToAdd))
        li.className = "sList"
        var btn = document.createElement('button')
        btn.innerText = 'delete'
        btn.className = 'delBtn'
        li.appendChild(btn)
        list.appendChild(li)
        return input.value = ''
    }
}

function clickEnterToAddListFunction(event) {
    itemToAdd = input.value;
    if (itemToAdd.length !== 0 && event.keyCode === 13) {
        console.log(itemToAdd);
        var li = document.createElement('li')
        li.innerText = itemToAdd
        li.className = "sList"
        var btn = document.createElement('button')
        btn.innerText = 'delete'
        btn.className = 'delBtn'
        li.appendChild(btn)
        // li.appendChild(document.createTextNode(itemToAdd))
        console.log(li)
        list.appendChild(li)
        return input.value = ''
    }
}

function doneWithTask(event) {
    if (event.target.classList.contains('sList')) {
        event.target.classList.toggle('done')
    }
}

function deleteTask(event) {
    if (event.target.classList.contains('delBtn')) {
        event.target.parentElement.remove()
    }
}

var input = document.querySelector('input');
var addBtn = document.querySelector('button');
var list = document.querySelector('ul');
var itemToAdd;

// adds text to list when btn is clicked
addBtn.addEventListener('click', clickBtnToAddListFunction)
// adds text to list when enter buttom is press
input.addEventListener('keypress', clickEnterToAddListFunction)
// strikes through the Task when an item is clicked
list.addEventListener('click', doneWithTask)
// deletes the corresponding item when delete is clicked
list.addEventListener('click', deleteTask)


