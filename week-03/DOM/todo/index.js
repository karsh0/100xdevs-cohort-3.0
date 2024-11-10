const addBtn = document.getElementById('add-btn')
const deleteAllBtn = document.getElementById('delete-all-btn')
const deleteBtn = document.getElementById('delete-btn')
const inputEl = document.querySelector('input');

let todos = [];

addBtn.onclick = () =>inputEl.value == ''? alert('Enter valid characters'):addTodo();
deleteAllBtn.onclick = () =>todos.length == 0? alert('Add tasks'): deleteAllTodo();

function addTodo(){
    todos.push({
        title: inputEl.value,
    })
    render();
}

function deleteTodo(index){
    todos.splice(index,1);
    render();
}

function deleteAllTodo(){
    todos.splice(0,todos.length);
    render();
}

function render(){
    inputEl.value = '';
    document.querySelector('.data').innerHTML = '';
    todos.forEach((todo,index)=>{
        document.querySelector('.data').innerHTML +=  `<div class="flex justify-between items-center mt-1 mb-1"><span class="w-full text-md">${todo.title}</span>
            <button id="delete-btn" onclick="deleteTodo(${index})" class="w-[120px] p-2 bg-red-500 rounded-lg text-white font-bold hover:bg-red-600 transition">Delete</button></div>`
    })
}