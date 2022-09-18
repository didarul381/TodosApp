


const getItem =(id)=>{
const element=document.getElementById(id);
return element;

}
const handleClick =()=>{
     const todos=  JSON.parse(localStorage.getItem("Todos"));
    const inputText=getItem('todo-text').value;
    getItem('todo-text').value='';
    console.log(inputText);

       if(!todos){
        const todoList=[
            
            {
                title:inputText,
                complete:false,
            },
        ];
        localStorage.setItem("Todos",  JSON.stringify(todoList));
       }else{
    const todoList=[
        ...todos,
        {
            title:inputText,
            complete:false,
        },
    ];

    localStorage.setItem("Todos",  JSON.stringify(todoList));
}
rander();
}

const rander=()=>{
   
    const todos=  JSON.stringifyr(localStorage.getItem("Todos"));
    const todoList=getItem('todo-list');
    todoList.innerHTML='';
    let c=0
    todos.forEach(item=>{
  const li=document.createElement('li');
    c++;
  li.innerHTML=` <span  >${c}.</span> ${item.title} <button  
  onClick="handleClickd()">Removes</button>`;
  todoList.appendChild(li);
  

    })

}
rander();

const handleRemove=()=>{

    localStorage.removeItem("Todos")
    rander();

}