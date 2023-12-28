let todoList = [{
    item: "Study Js",
    dueDate:'26/12/2023',
},
    {
    item:"Study Java",
    dueDate:"27/10/2023",
}
];
displayItems();



function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item:todoItem,dueDate:todoDate});
    inputElement.value = '';
    dateElement.value = '';
    displayItems();


}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');
  
    let newHTML='';

     for(let i=0;i<todoList.length;++i){
        let {item,dueDate} = todoList[i];
        newHTML+=`
                <span>${item}</span>
                <span>${dueDate}</span>
                <button class="btn-delete" onclick="todoList.splice(${i},1);
                displayItems();">Delete</button>
       
        
        
        
        `;
    }
    containerElement.innerHTML=newHTML;
    
}